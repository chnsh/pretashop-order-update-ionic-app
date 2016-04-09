/**
 * Created by chintanshah on 09/04/16.
 */

/*
DO NOT INCLUDE THIS FILE
 */
/*
This code was used to extract order id and status from url http://www.lazywyre.com/admin123/index.php?controller=AdminStatuses&token=36569757bacd08ac93f0725ee632522c
 */
 var obj_list= [];
 obj = {};
 $(".order_state").find("td").each(function(i,e){

 	if( i==1 || (i-1)%9 == 0){
 		// console.log(i,$(e).text().trim());
 		obj['order_id'] = $(e).text().trim();
 	}
 	if( i==2 || (i-2)%9 == 0){
 		obj['order_status_text'] = $(e).text().trim();
 		// console.log(i,$(e).text().trim());
 		obj_list.push(obj);
 		obj = {};
 	}

 });
 JSON.stringify(obj_list);
