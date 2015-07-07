$(function() {

var light1=true;
var exhaust=true;
var cookingrange=true;
var fan=true;
var promixitiy=true;



  var calculate = function(data)
   {console.log(data);}
   $("#light1").click(function(e){
         e.preventDefault();
         light1=!light1;
         if(light1)
         {

         	  $.ajax({type:"GET",url: "http://192.168.0.107/3",dataType: 'jsonp',jsonpCallback:'calculate'});
       
         }
     else
     {

     	  $.ajax({type:"GET",url: "http://192.168.0.107/4",dataType: 'jsonp',jsonpCallback:'calculate'});
       
     }
  });
   $("#fan").click(function(e){
         e.preventDefault();
         fan=!fan;
         if(fan)
         {

         	  $.ajax({type:"GET",url: "http://192.168.0.107/7",dataType: 'jsonp',jsonpCallback:'calculate'});
       
         }
     else
     {

     	  $.ajax({type:"GET",url: "http://192.168.0.107/8",dataType: 'jsonp',jsonpCallback:'calculate'});
       
     }
  });
   $("#exhaust").click(function(e){
         e.preventDefault();
         exhaust=!exhaust;
         if(exhaust)
         {

         	  $.ajax({type:"GET",url: "http://192.168.0.107/1",dataType: 'jsonp',jsonpCallback:'calculate'});
       
         }
     else
     {

     	  $.ajax({type:"GET",url: "http://192.168.0.107/2",dataType: 'jsonp',jsonpCallback:'calculate'});
       
     }
  });
    $("#proximity").click(function(e){
         e.preventDefault();
         proximity=!proximity;
         if(proximity)
         {

              $.ajax({type:"GET",url: "http://192.168.0.107/1",dataType: 'jsonp',jsonpCallback:'calculate'});
       
         }
     else
     {

          $.ajax({type:"GET",url: "http://192.168.0.107/2",dataType: 'jsonp',jsonpCallback:'calculate'});
       
     }
  });
      $("#cookingrange").click(function(e){
         e.preventDefault();
         cookingrange=!facookingrangen;
         if(cookingrange)
         {

         	  $.ajax({type:"GET",url: "http://192.168.0.107/5",dataType: 'jsonp',jsonpCallback:'calculate'});
       
         }
     else
     {

     	  $.ajax({type:"GET",url: "http://192.168.0.107/6",dataType: 'jsonp',jsonpCallback:'calculate'});
       
     }
  });
});