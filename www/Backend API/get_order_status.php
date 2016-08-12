<?php
require_once( 'PSWebServiceLibrary.php' );

if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
 
 	// Handling CORS issues
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
 
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
 
        exit(0);
    }

define('DEBUG', false);
define('PS_SHOP_PATH', 'http://www.lazywyre.com/');
define('PS_WS_AUTH_KEY', 'F41EF44PVP8JB7YNUYWM7LVI3MNWRZV3');


$postdata = file_get_contents("php://input");
if (isset($postdata)) {
    $request = json_decode($postdata);
    $order_id = $request->order_id;
}


if (isset($order_id)){
        try
        {
                $webService = new PrestaShopWebservice(PS_SHOP_PATH, PS_WS_AUTH_KEY, DEBUG);
                $opt = array('resource' => 'orders','id'=>$order_id);
                $xml = $webService->get($opt);

                // Here we get the elements from children of customer markup which is children of prestashop root markup
                $resources = $xml->children()->children();

                $current_state =(int)$resources->current_state;
                echo json_encode(array('current_state' => $current_state, 'order_id' => $order_id ));
                
        }
        catch (PrestaShopWebserviceException $e)
        {
                // Here we are dealing with errors
                $trace = $e->getTrace();
                if ($trace[0]['args'][0] == 404) echo 'Bad ID';
                else if ($trace[0]['args'][0] == 401) echo 'Bad auth key';
                else echo 'Other error<br />'.$e->getMessage();
        }
}
else{
        echo "No params received";
}










