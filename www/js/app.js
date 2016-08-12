"use strict";
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-modal-select']);

app.controller('OrderStatusCtrl', function ($scope, $http,$ionicLoading) {

  // Encapsulated show and hide within scope methods to allow future modification
  $scope.show_loading_spinner = function(){
    $ionicLoading.show();
  };

  $scope.hide_loading_spinner = function () {
    $ionicLoading.hide();
  };

  $scope.reset_modal_select = function (order) {
    order.order_status = null;
    $scope.order_update_status = null;
    $scope.current_order_status = null;
    $scope.new_order = null;
    $scope.old_order_status = null;
  };

  $scope.update_new_order = function(){
    $scope.new_order = null;
    $scope.current_order_status = null;
    $scope.order_update_status = null;
    $scope.old_order_status = null;
  };


  $scope.get_order_status = function(order_id){
    $scope.show_loading_spinner();
    var data ={
      order_id : order_id
    };
    $scope.is_get_order_status_loading = true;
    $http.post('http://lazywyre.com/get_order_status_app.php',
      data
    ).then(function (success) {
      $scope.hide_loading_spinner();
      $scope.is_get_order_status_loading = false;
      //console.log(success.data);
      var order_status = success.data.current_state;
      $scope.order_status_list.forEach(function(element,index,array){
        if (element.status_id == order_status){
          $scope.current_order_status = element.order_status_text;
        }
      });
      //console.log(order_status);
    }, function (error) {
      $scope.hide_loading_spinner();
      $scope.is_get_order_status_loading = false;
      console.log("Failure in getting order status");
      $scope.current_order_status = "Failure in getting order status";
      $scope.new_order = true;
    });

  };

  $scope.reset_form = function(){
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
    $http.post('http://lazywyre.com/update_order_app.php',
      data
     ).then(function (success) {
      $scope.hide_loading_spinner();
      if (success.data == order.order_status.status_id){
        $scope.order_update_status = order.order_status.order_status_text;
        $scope.order_update_ionic_color='item-balanced';
      }
      else{
        $scope.order_update_status = "Order might have been updated, please check again";
        $scope.order_update_ionic_color='item-dark';
      }
      $scope.reset_form();
    }, function (error) {
      $scope.hide_loading_spinner();
      $scope.order_update_status = "Failure";
      $scope.order_update_ionic_color='item-assertive';
      $scope.reset_form();
    });
  };

  $scope.order_status_list = [{
    "status_id": "1",
    "order_status_text": "Awaiting check payment",
    "background-color": "#4169E1",
    "color": "white"
  }, {
    "status_id": "2",
    "order_status_text": "Payment recieved",
    "background-color": "#32CD32",
    "color": "#383838"
  }, {
    "status_id": "3",
    "order_status_text": "Processing in progress",
    "background-color": "#FF8C00",
    "color": "#383838"
  }, {
    "status_id": "4",
    "order_status_text": "Shipped from MOTHERHUB_MUM",
    "background-color": "#8A2BE2",
    "color": "white"
  }, {
    "status_id": "5",
    "order_status_text": "Delivered",
    "background-color": "#108510",
    "color": "white"
  }, {
    "status_id": "6",
    "order_status_text": "Canceled",
    "background-color": "#DC143C",
    "color": "white"
  }, {
    "status_id": "7",
    "order_status_text": "Refunded",
    "background-color": "#ec2e15",
    "color": "white"
  }, {
    "status_id": "8",
    "order_status_text": "Payment error",
    "background-color": "#8f0621",
    "color": "white"
  }, {
    "status_id": "9",
    "order_status_text": "On backorder (paid)",
    "background-color": "#FF69B4",
    "color": "#383838"
  }, {
    "status_id": "10",
    "order_status_text": "Awaiting bank wire payment",
    "background-color": "#4169E1",
    "color": "white"
  }, {
    "status_id": "11",
    "order_status_text": "Awaiting PayPal payment",
    "background-color": "#4169E1",
    "color": "white"
  }, {
    "status_id": "12",
    "order_status_text": "Remote payment accepted",
    "background-color": "#32CD32",
    "color": "#383838"
  }, {
    "status_id": "13",
    "order_status_text": "On backorder (not paid)",
    "background-color": "#FF69B4",
    "color": "#383838"
  }, {
    "status_id": "14",
    "order_status_text": "Awaiting Cash On Delivery validation",
    "background-color": "#4169E1",
    "color": "white"
  }, {
    "status_id": "15",
    "order_status_text": "Completed",
    "background-color": "#00ffce",
    "color": "#383838"
  }, {
    "status_id": "16",
    "order_status_text": "Packed (Awaiting Shipment)",
    "background-color": "#1cff4c",
    "color": "#383838"
  }, {
    "status_id": "17",
    "order_status_text": "Reached VASHI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "18",
    "order_status_text": "Reached ANDHERI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "19",
    "order_status_text": "Reached MAHAKALI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "20",
    "order_status_text": "Reached DADAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "21",
    "order_status_text": "Reached MULUND_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "22",
    "order_status_text": "Reached KANDIVALI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "23",
    "order_status_text": "Reached WALKESHWAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "24",
    "order_status_text": "Reached MALAD_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "25",
    "order_status_text": "Reached NERUL_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "26",
    "order_status_text": "Reached KHAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "27",
    "order_status_text": "Reached DAHISAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "28",
    "order_status_text": "Reached GHATKOPAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "29",
    "order_status_text": "Reached MAZGAON_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "30",
    "order_status_text": "Reached AIROLI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "31",
    "order_status_text": "Reached FORT_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "32",
    "order_status_text": "Reached THANE_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "33",
    "order_status_text": "Reached POKHRAN_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "status_id": "34",
    "order_status_text": "Out for Delivery",
    "background-color": "#ff3eef",
    "color": "#383838"
  }, {
    "status_id": "35",
    "order_status_text": "Shipping blocked (Shopgate)",
    "background-color": "lightblue",
    "color": "white"
  },
    {
      "status_id": "36",
      "order_status_text": "Cancellation Requested",
      "background-color": "#cd0008",
      "color": "white"
    }];
});

