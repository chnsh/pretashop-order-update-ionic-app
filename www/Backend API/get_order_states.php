<?php
/**
 * Created by PhpStorm.
 * User: chintanshah
 * Date: 12/08/16
 * Time: 1:11 PM
 */
require_once( 'PSWebServiceLibrary.php' );

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}


define('DEBUG', false);
define('PS_SHOP_PATH', 'http://localhost/prestashop');
define('PS_WS_AUTH_KEY', 'SF5Z6JTD6PZSNNRI8FEXQTHWKGCBC2DZ');

try
{
    $webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY, DEBUG);
    $opt = array('resource' => 'order_states');
    $xml = $webService->get($opt);

    // Here we get the elements from children of customer markup which is children of prestashop root markup
    $resources = $xml->children()->children();
    $idList = array();
    // Getting order state ids
    foreach ($resources as $values){
        array_push($idList,(string)$values['id']);
    }
    $idToOrderStatusMapping = array();
    // Getting order state text for each order state id
    foreach ($idList as $value){
        $opt['id'] = $value;
        $xml = $webService ->get($opt);
        array_push($idToOrderStatusMapping,array("status_id"=>$value,"order_status_text" =>(string)$xml->order_state->name->language));
    }
    echo json_encode($idToOrderStatusMapping);
}
catch (PrestaShopWebserviceException $e)
{
    // Here we are dealing with errors
    $trace = $e->getTrace();
    if ($trace[0]['args'][0] == 404) echo 'Bad ID';
    else if ($trace[0]['args'][0] == 401) echo 'Bad auth key';
    else echo 'Other error<br />'.$e->getMessage();
}