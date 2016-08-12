"use strict";
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-modal-select']);

app.controller('OrderStatusCtrl', function ($scope, $http, $ionicLoading) {

  //todo refactor
  //todo set api endpoints here
  // Encapsulated show and hide within scope methods to allow future modification
  $scope.show_loading_spinner = function () {
    $ionicLoading.show();
  };

  $scope.hide_loading_spinner = function () {
    $ionicLoading.hide();
  };

  function set_order_status_list(){
    var localstorage = window.localStorage;
    var order_status_list = localstorage.getItem('order_status_list');
    // Checking for null since localstorage explicitely returns null if key doesn't exist
    if(order_status_list == null)
    {
      $scope.show_loading_spinner();
      $http.get('http://localhost/prestashop/get_order_states.php').then(function (success){
        $scope.order_status_list = success.data;
        localstorage.setItem('order_status_list',JSON.stringify(success.data));
        $scope.hide_loading_spinner();
      }, function (error){
        //todo error handling here
      });
    }
    else{
      $scope.order_status_list = JSON.parse(order_status_list);
    }
  }
  set_order_status_list();

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

  function handle_getting_order_status_error(message) {
    message = message || '';
    $scope.hide_loading_spinner();
    $scope.is_get_order_status_loading = false;
    var error_message_string = "Failure in getting order status with message: " + message;
    //console.log(error_message_string);
    $scope.current_order_status = error_message_string;
    $scope.new_order = true;
  }

  function handle_update_order_status_error(message) {
    message = message || '';
    $scope.hide_loading_spinner();
    var error_message_string = "Failure in updating order status with message: " + message;
    $scope.order_update_status = error_message_string;
    $scope.order_update_ionic_color = 'item-assertive';
    $scope.reset_form();
  }

  $scope.get_order_status = function (order_id) {
    $scope.show_loading_spinner();
    var data = {
      order_id: order_id
    };
    $scope.is_get_order_status_loading = true;
    $http.post('http://localhost/prestashop/get_order_status.php',
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

  $scope.update_order = function (order) {
    //$scope.order_update_status = 'Loading';
    //$scope.order_update_ionic_color='item-energized';
    $scope.show_loading_spinner();
    var data = {
      order_id: order.order_id,
      order_status: order.order_status.status_id
    };
    //console.log(data);
    $http.post('http://localhost/prestashop/update_order.php',
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

