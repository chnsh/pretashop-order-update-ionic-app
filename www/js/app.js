"use strict";
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','ionic-modal-select']);

app.controller('OrderStatusCtrl', function ($scope) {

  $scope.update_order = function(o_id,o_status){
    $scope.order_status_success = o_id +',' + o_status.order_id;
  };

  $scope.order_status_list = [{
    "order_id": "1",
    "order_status_text": "Awaiting check payment",
    "background-color": "#4169E1",
    "color": "white"
  }, {
    "order_id": "2",
    "order_status_text": "Payment recieved",
    "background-color": "#32CD32",
    "color": "#383838"
  }, {
    "order_id": "3",
    "order_status_text": "Processing in progress",
    "background-color": "#FF8C00",
    "color": "#383838"
  }, {
    "order_id": "4",
    "order_status_text": "Shipped from MOTHERHUB_MUM",
    "background-color": "#8A2BE2",
    "color": "white"
  }, {
    "order_id": "5",
    "order_status_text": "Delivered",
    "background-color": "#108510",
    "color": "white"
  }, {
    "order_id": "6",
    "order_status_text": "Canceled",
    "background-color": "#DC143C",
    "color": "white"
  }, {
    "order_id": "7",
    "order_status_text": "Refunded",
    "background-color": "#ec2e15",
    "color": "white"
  }, {
    "order_id": "8",
    "order_status_text": "Payment error",
    "background-color": "#8f0621",
    "color": "white"
  }, {
    "order_id": "9",
    "order_status_text": "On backorder (paid)",
    "background-color": "#FF69B4",
    "color": "#383838"
  }, {
    "order_id": "10",
    "order_status_text": "Awaiting bank wire payment",
    "background-color": "#4169E1",
    "color": "white"
  }, {
    "order_id": "11",
    "order_status_text": "Awaiting PayPal payment",
    "background-color": "#4169E1",
    "color": "white"
  }, {
    "order_id": "12",
    "order_status_text": "Remote payment accepted",
    "background-color": "#32CD32",
    "color": "#383838"
  }, {
    "order_id": "13",
    "order_status_text": "On backorder (not paid)",
    "background-color": "#FF69B4",
    "color": "#383838"
  }, {
    "order_id": "14",
    "order_status_text": "Awaiting Cash On Delivery validation",
    "background-color": "#4169E1",
    "color": "white"
  }, {
    "order_id": "15",
    "order_status_text": "Completed",
    "background-color": "#00ffce",
    "color": "#383838"
  }, {
    "order_id": "16",
    "order_status_text": "Packed (Awaiting Shipment)",
    "background-color": "#1cff4c",
    "color": "#383838"
  }, {
    "order_id": "17",
    "order_status_text": "Reached VASHI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "18",
    "order_status_text": "Reached ANDHERI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "19",
    "order_status_text": "Reached MAHAKALI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "20",
    "order_status_text": "Reached DADAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "21",
    "order_status_text": "Reached MULUND_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "22",
    "order_status_text": "Reached KANDIVALI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "23",
    "order_status_text": "Reached WALKESHWAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "24",
    "order_status_text": "Reached MALAD_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "25",
    "order_status_text": "Reached NERUL_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "26",
    "order_status_text": "Reached KHAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "27",
    "order_status_text": "Reached DAHISAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "28",
    "order_status_text": "Reached GHATKOPAR_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "29",
    "order_status_text": "Reached MAZGAON_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "30",
    "order_status_text": "Reached AIROLI_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "31",
    "order_status_text": "Reached FORT_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "32",
    "order_status_text": "Reached THANE_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "33",
    "order_status_text": "Reached POKHRAN_HUB",
    "background-color": "#0f3900",
    "color": "white"
  }, {
    "order_id": "34",
    "order_status_text": "Out for Delivery",
    "background-color": "#ff3eef",
    "color": "#383838"
  }, {
    "order_id": "35",
    "order_status_text": "Shipping blocked (Shopgate)",
    "background-color": "lightblue",
    "color": "white"
  },
    {
      "order_id": "36",
      "order_status_text": "Cancellation Requested",
      "background-color": "#cd0008",
      "color": "white"
    }];
});

