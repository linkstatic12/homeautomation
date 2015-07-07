$(function() {
	var hubpressed=true;
	var frontdoor=true;
	var porchlight=true;
	var alllights=true;
	var garagedoor=true;
	var outdoor=true;
    $("#hub").click(function(e) {
	e.preventDefault();
	if(hubpressed)
		 {$("#hub").find("img")[0].src="img/hubpressed.png";
$.ajax({
				type:"GET",
  				url: "http://192.168.0.106/1",
  				dataType: 'jsonp',
				jsonpCallback:'calculate',

			  success:function(data)
				{
					console.log("success");
					console.log(data);
				},
				
  				complete: function(data)
				{console.log(data);}
						});


	}
	//
		else
			{$("#hub").find("img")[0].src="img/hub.png";
		$.ajax({
				type:"GET",
  				url: "http://192.168.0.106/2",
  				dataType: 'jsonp',
				jsonpCallback:'calculate',

			  success:function(data)
				{
					console.log("success");
					console.log(data);
				},
				
  				complete: function(data)
				{console.log(data);}
						});
	


	}
	hubpressed=!hubpressed;
   
});
    $("#alllights").click(function(e){
e.preventDefault();
if(alllights)
{
	 $.ajax({type:"GET",url: "http://192.168.0.106/off",dataType: 'jsonp',jsonpCallback:'calculate'});
	delay($.ajax({type:"GET",url: "http://192.168.0.107/off",dataType: 'jsonp',jsonpCallback:'calculate'}),250);
 	delay($.ajax({type:"GET",url: "http://192.168.0.108/off",dataType: 'jsonp',jsonpCallback:'calculate'}),250);
	delay($.ajax({type:"GET",url: "http://192.168.0.109/off",dataType: 'jsonp',jsonpCallback:'calculate'}),250);
	delay($.ajax({type:"GET",url: "http://192.168.0.110/off",dataType: 'jsonp',jsonpCallback:'calculate'}),250);
}



    });
    $("#groundfloor").click(function(e){
e.preventDefault();
window.location="success.html";
    	
    });
    $("#bedroom").click(function(e){
    	
e.preventDefault();
window.location="bedroom.html";



    });
    $("#drawingroom").click(function(e){e.preventDefault();
window.location="drawingroom.html";});
        $("#lounge").click(function(e){
    	
e.preventDefault();
window.location="livingroom.html";



    });
    
      $("#porchlight").click(function(e) {
	e.preventDefault();
	if(porchlight)
	{$("#porchlight").find("img")[0].src="img/porchlightpressed.png";
      $.ajax({
				type:"GET",
  				url: "http://192.168.0.106/all",
  				dataType: 'jsonp',
				jsonpCallback:'calculate',

			  success:function(data)
				{
					console.log("success");
					console.log(data);
				},
				
  				complete: function(data)
				{console.log(data);}
						});
}
		else
		{$("#porchlight").find("img")[0].src="img/porchlight.png";
	
	$.ajax({
				type:"GET",
  				url: "http://192.168.0.106/off",
  				dataType: 'jsonp',
				jsonpCallback:'calculate',

			  success:function(data)
				{
					console.log("success");
					console.log(data);
				},
				
  				complete: function(data)
				{console.log(data);}
						});
	
	}
	porchlight=!porchlight;
   
});
      $("#outdoor").click(function(e){
  
e.preventDefault();
if(outdoor)
{
outdoor=!outdoor;
$.ajax({type:"GET",url: "http://192.168.0.110/3",dataType: 'jsonp',jsonpCallback:'calculate'});
delay($.ajax({type:"GET",url: "http://192.168.0.110/5",dataType: 'jsonp',jsonpCallback:'calculate'}),250);

 		    

}
else
{
outdoor=!outdoor;
$.ajax({type:"GET",url: "http://192.168.0.110/4",dataType: 'jsonp',jsonpCallback:'calculate'});
delay($.ajax({type:"GET",url: "http://192.168.0.110/6",dataType: 'jsonp',jsonpCallback:'calculate'}),250);
}

      });
      $("#garagedoor").click(function(e){
        e.preventDefault();
        if(garagedoor)
        {garagedoor=!garagedoor;
        	$.ajax({type:"GET",url: "http://192.168.0.110/1",dataType: 'jsonp',jsonpCallback:'calculate'});
 		     $.ajax({type:"GET",url: "http://192.168.0.110/7",dataType: 'jsonp',jsonpCallback:'calculate'});
        }
        else
        {garagedoor!=garagedoor;
	$.ajax({type:"GET",url: "http://192.168.0.110/2",dataType: 'jsonp',jsonpCallback:'calculate'});
 		     $.ajax({type:"GET",url: "http://192.168.0.110/8",dataType: 'jsonp',jsonpCallback:'calculate'});
       

        }



      });
    $("#frontdoor").click(function(e){
         e.preventDefault();
         if(frontdoor)
         {  $("#frontdoor").find("img")[0].src="img/frontdoorpressed.png";frontdoor=!frontdoor;


 			$.ajax({
				type:"GET",
  				url: "http://192.168.0.106/7",
  				dataType: 'jsonp',
				jsonpCallback:'calculate',

			  success:function(data)
				{
					console.log("success");
					console.log(data);
				},
				
  				complete: function(data)
				{console.log(data);}
						});

 }
     else
     	{$("#frontdoor").find("img")[0].src="img/frontdoor.png"; frontdoor=!frontdoor;
$.ajax({
				type:"GET",
  				url: "http://192.168.0.106/8",
  				dataType: 'jsonp',
				jsonpCallback:'calculate',

			  success:function(data)
				{
					console.log("success");
					console.log(data);
				},
				
  				complete: function(data)
				{console.log(data);}
						});


   
	
	}

	});
   var calculate = function(data)
   {console.log(data);}
   
    var delay = function (fs,ms)
 {   setTimeout(function(){
  fs
},ms);
} 
}); 