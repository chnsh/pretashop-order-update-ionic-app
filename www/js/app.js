"use strict";

//todo refactor
var app = angular.module('starter', ['ionic', 'ionic-modal-select']);

app.controller('OrderStatusCtrl', function ($scope, $http, $ionicPopup, $ionicLoading) {

  $scope.store_name = '';
  //set api endpoints here
  var GET_ORDER_STATES_URL = '';
  var GET_ORDER_STATUS_URL = '';
  var UPDATE_ORDER_STATUS_URL = '';
  // Encapsulated show and hide within scope methods to allow future modification
  $scope.show_loading_spinner = function () {
    $ionicLoading.show();
  };

  $scope.hide_loading_spinner = function () {
    $ionicLoading.hide();
  };

  /*
  This function get a list of states an order can lie in.
  For example, Pending or Shipped and sets
  After retrieving the state list, the function sets it in a variable
   */
  function set_order_states_list() {
    var localstorage = window.localStorage;
    var order_status_list = localstorage.getItem('order_status_list');
    // Checking for null since localstorage explicitly returns null if key doesn't exist
    if (order_status_list == null) {
      $scope.show_loading_spinner();
      $http.get(GET_ORDER_STATES_URL).then(function (success){
        $scope.order_status_list = success.data;
        localstorage.setItem('order_status_list', JSON.stringify(success.data));
        $scope.hide_loading_spinner();
      }, function (error) {
        //todo improve error handling!
        $scope.hide_loading_spinner();
        var alertPopup = $ionicPopup.alert({
          title: 'Error in getting order states!',
          template: 'There was an error in retrieving order states for the prestashop setup. The application won\'t work.'
        });

        alertPopup.then(function (res) {
          ionic.Platform.exitApp();
        });
      });
    }
    else {
      $scope.order_status_list = JSON.parse(order_status_list);
    }
  }

  set_order_states_list();

  $scope.reset_modal_select = function (order) {
    order.order_status = null;
    $scope.order_update_status = null;
    $scope.current_order_status = null;
    $scope.new_order = null;
    $scope.old_order_status = null;
  };

  $scope.update_new_order = function () {
    $scope.new_order = null;
    $scope.current_order_status = null;
    $scope.order_update_status = null;
    $scope.old_order_status = null;
  };

  /*
  This function is a wrapper for functionality needed to be performed on occurrence of an error
  in the process of getting the status of an order given its id.
   */
  function handle_getting_order_status_error(message) {
    message = message || '';
    $scope.hide_loading_spinner();
    $scope.is_get_order_status_loading = false;
    var error_message_string = "Failure in getting order status with message: " + message;
    //console.log(error_message_string);
    $scope.current_order_status = error_message_string;
    $scope.new_order = true;
  }

  /*
  This function is a wrapper for functionality needed to be performed on occurrence of an error
  in the process of updating the status of an order given its id.
   */
  function handle_update_order_status_error(message) {
    message = message || '';
    $scope.hide_loading_spinner();
    var error_message_string = "Failure in updating order status with message: " + message;
    $scope.order_update_status = error_message_string;
    $scope.order_update_ionic_color = 'item-assertive';
    $scope.reset_form();
  }

  /*
  This function retrieves the status of an order given its id and sets the order status text
   */
  $scope.get_order_status = function (order_id) {
    $scope.show_loading_spinner();
    var data = {
      order_id: order_id
    };
    $scope.is_get_order_status_loading = true;
    $http.post(GET_ORDER_STATUS_URL,
      data
    ).then(function (success) {
      $scope.hide_loading_spinner();
      $scope.is_get_order_status_loading = false;
      if (success.data.hasOwnProperty('current_state')) {
        var order_status = success.data.current_state;
        $scope.order_status_list.forEach(function (element, index, array) {
          if (element.status_id == order_status) {
            $scope.current_order_status = element.order_status_text;
          }
        });
      }
      else {
        handle_getting_order_status_error(success.data);
      }
      //console.log(order_status);
    }, function (error) {
      handle_getting_order_status_error(error);
    });

  };

  $scope.reset_form = function () {
    $scope.new_order = true;
    $scope.old_order_status = $scope.current_order_status;
    $scope.current_order_status = null;
  };

  /*
  This function takes an order id and the new status of the id and updates it on the server
   */
  $scope.update_order = function (order) {
    //$scope.order_update_status = 'Loading';
    //$scope.order_update_ionic_color='item-energized';
    $scope.show_loading_spinner();
    var data = {
      order_id: order.order_id,
      order_status: order.order_status.status_id
    };
    //console.log(data);
    $http.post(UPDATE_ORDER_STATUS_URL,
      data
    ).then(function (success) {
      $scope.hide_loading_spinner();
      console.log(success.data);
      if (success.data == order.order_status.status_id) {
        $scope.order_update_status = order.order_status.order_status_text;
        $scope.order_update_ionic_color = 'item-balanced';
      }
      else {
        handle_update_order_status_error(success.data);
      }
      $scope.reset_form();
    }, function (error) {
      handle_update_order_status_error();
    });
  };

});

