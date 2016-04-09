"use strict";
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.controller('OrderStatusCtrl', function ($scope) {
  $scope.order_status_list = [
    {"order_id": "1", "order_status_text": "Awaiting check payment"}, {
      "order_id": "2",
      "order_status_text": "Payment recieved"
    }, {"order_id": "3", "order_status_text": "Processing in progress"}, {
      "order_id": "4",
      "order_status_text": "Shipped from MOTHERHUB_MUM"
    }, {"order_id": "5", "order_status_text": "Delivered"}, {
      "order_id": "6",
      "order_status_text": "Canceled"
    }, {"order_id": "7", "order_status_text": "Refunded"}, {
      "order_id": "8",
      "order_status_text": "Payment error"
    }, {"order_id": "9", "order_status_text": "On backorder (paid)"}, {
      "order_id": "10",
      "order_status_text": "Awaiting bank wire payment"
    }, {"order_id": "11", "order_status_text": "Awaiting PayPal payment"}, {
      "order_id": "12",
      "order_status_text": "Remote payment accepted"
    }, {"order_id": "13", "order_status_text": "On backorder (not paid)"}, {
      "order_id": "14",
      "order_status_text": "Awaiting Cash On Delivery validation"
    }, {"order_id": "15", "order_status_text": "Completed"}, {
      "order_id": "16",
      "order_status_text": "Packed (Awaiting Shipment)"
    }, {"order_id": "17", "order_status_text": "Reached VASHI_HUB"}, {
      "order_id": "18",
      "order_status_text": "Reached ANDHERI_HUB"
    }, {"order_id": "19", "order_status_text": "Reached MAHAKALI_HUB"}, {
      "order_id": "20",
      "order_status_text": "Reached DADAR_HUB"
    }, {"order_id": "21", "order_status_text": "Reached MULUND_HUB"}, {
      "order_id": "22",
      "order_status_text": "Reached KANDIVALI_HUB"
    }, {"order_id": "23", "order_status_text": "Reached WALKESHWAR_HUB"}, {
      "order_id": "24",
      "order_status_text": "Reached MALAD_HUB"
    }, {"order_id": "25", "order_status_text": "Reached NERUL_HUB"}, {
      "order_id": "26",
      "order_status_text": "Reached KHAR_HUB"
    }, {"order_id": "27", "order_status_text": "Reached DAHISAR_HUB"}, {
      "order_id": "28",
      "order_status_text": "Reached GHATKOPAR_HUB"
    }, {"order_id": "29", "order_status_text": "Reached MAZGAON_HUB"}, {
      "order_id": "30",
      "order_status_text": "Reached AIROLI_HUB"
    }, {"order_id": "31", "order_status_text": "Reached FORT_HUB"}, {
      "order_id": "32",
      "order_status_text": "Reached THANE_HUB"
    }, {"order_id": "33", "order_status_text": "Reached POKHRAN_HUB"}, {
      "order_id": "34",
      "order_status_text": "Out for Delivery"
    }, {"order_id": "35", "order_status_text": "Shipping blocked (Shopgate)"}, {
      "order_id": "36",
      "order_status_text": "Cancellation Requested"
    }];
});

