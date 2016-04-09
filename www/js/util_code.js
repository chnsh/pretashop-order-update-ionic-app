/**
 * Created by chintanshah on 09/04/16.
 */

/*
DO NOT INCLUDE THIS FILE
 */
/*
This code was used to extract order id and status from url http://www.lazywyre.com/admin123/index.php?controller=AdminStatuses&token=36569757bacd08ac93f0725ee632522c
 */
// var obj_list= [];
// obj = {};
// $(".order_state").find("td").each(function(i,e){

// 	if( i==1 || (i-1)%9 == 0){
// 		// console.log(i,$(e).text().trim());
// 		obj['order_id'] = $(e).text().trim();
// 	}
// 	if( i==2 || (i-2)%9 == 0){
// 		obj['order_status_text'] = $(e).text().trim();
// 		// console.log(i,$(e).text().trim());
// 		obj_list.push(obj);
// 		obj = {};
// 	}

// });
// JSON.stringify(obj_list);

// var obj_list= [];
// obj = {};
// var color_list = []
// $(".order_state").find("td").each(function(i,e){

// 	if( i==2 || (i-2)%9 == 0){
// 		color_list.push($(e).children().attr("style"));
// 	}

// });
// JSON.stringify(color_list);
// var obj_list = [];
// var color_string = ["background-color:#4169E1;color:white","background-color:#32CD32;color:#383838","background-color:#FF8C00;color:#383838","background-color:#8A2BE2;color:white","background-color:#108510;color:white","background-color:#DC143C;color:white","background-color:#ec2e15;color:white","background-color:#8f0621;color:white","background-color:#FF69B4;color:#383838","background-color:#4169E1;color:white","background-color:#4169E1;color:white","background-color:#32CD32;color:#383838","background-color:#FF69B4;color:#383838","background-color:#4169E1;color:white","background-color:#00ffce;color:#383838","background-color:#1cff4c;color:#383838","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#0f3900;color:white","background-color:#ff3eef;color:#383838","background-color:lightblue;color:white","background-color:#cd0008;color:white"];
// for (var c in color_string){
// 	color_str = color_string[c];
// 	props= color_str.split(";");
// 	var obj = {};
// 	for( var d in props ){
// 		individual_prop=props[d].split(":");
// 		obj[individual_prop[0]]=individual_prop[1];
// 	}
// 	obj_list.push(obj);
// }
// console.log(JSON.stringify(obj_list));

color_prop = [{"background-color":"#4169E1","color":"white"},{"background-color":"#32CD32","color":"#383838"},{"background-color":"#FF8C00","color":"#383838"},{"background-color":"#8A2BE2","color":"white"},{"background-color":"#108510","color":"white"},{"background-color":"#DC143C","color":"white"},{"background-color":"#ec2e15","color":"white"},{"background-color":"#8f0621","color":"white"},{"background-color":"#FF69B4","color":"#383838"},{"background-color":"#4169E1","color":"white"},{"background-color":"#4169E1","color":"white"},{"background-color":"#32CD32","color":"#383838"},{"background-color":"#FF69B4","color":"#383838"},{"background-color":"#4169E1","color":"white"},{"background-color":"#00ffce","color":"#383838"},{"background-color":"#1cff4c","color":"#383838"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#0f3900","color":"white"},{"background-color":"#ff3eef","color":"#383838"},{"background-color":"lightblue","color":"white"},{"background-color":"#cd0008","color":"white"}];
order_prop = [
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
new_obj_list = [];
for (var i in order_prop){
  new_obj_list.push($.extend({},order_prop[i],color_prop[i]));
}
JSON.stringify(new_obj_list);
