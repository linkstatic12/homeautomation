$(function() {

var light1=true;
var light2=true;
var light3=true;
var fan=true;



  var calculate = function(data)
   {console.log(data);}
   $("#light1").click(function(e){
         e.preventDefault();
         light1=!light1;
         if(light1)
         {

         	  $.ajax({type:"GET",url: "http://192.168.0.106/5",dataType: 'jsonp',jsonpCallback:'calculate'});
       
         }
     else
     {

     	  $.ajax({type:"GET",url: "http://192.168.0.106/6",dataType: 'jsonp',jsonpCallback:'calculate'});
       
     }
  });
   $("#light2").click(function(e){
         e.preventDefault();
         light2=!light2;
         if(light2)
         {

         	  $.ajax({type:"GET",url: "http://192.168.0.106/1",dataType: 'jsonp',jsonpCallback:'calculate'});
       
         }
     else
     {

     	  $.ajax({type:"GET",url: "http://192.168.0.106/2",dataType: 'jsonp',jsonpCallback:'calculate'});
       
     }
  });
   $("#light3").click(function(e){
         e.preventDefault();
         light3=!light3;
         if(light3)
         {

         	  $.ajax({type:"GET",url: "http://192.168.0.106/7",dataType: 'jsonp',jsonpCallback:'calculate'});
       
         }
     else
     {

     	  $.ajax({type:"GET",url: "http://192.168.0.106/8",dataType: 'jsonp',jsonpCallback:'calculate'});
       
     }
  });
      $("#fan").click(function(e){
         e.preventDefault();
         fan=!fan;
         if(fan)
         {

         	  $.ajax({type:"GET",url: "http://192.168.0.106/3",dataType: 'jsonp',jsonpCallback:'calculate'});
       
         }
     else
     {

     	  $.ajax({type:"GET",url: "http://192.168.0.106/4",dataType: 'jsonp',jsonpCallback:'calculate'});
       
     }
  });


      $("#groundfloor").click(function(e){

        e.preventDefault();
    window.location="success.html";
      });
});