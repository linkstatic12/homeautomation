$(function() {
	var hubpressed=true;
	var frontdoor=true;
    $("#hub").click(function(e) {
	e.preventDefault();
	if(hubpressed)
		 $("#hub").find("img")[0].src="img/hubpressed.png";
		else
			$("#hub").find("img")[0].src="img/hub.png";
	hubpressed=!hubpressed;
   
});
    $("#frontdoor").click(function(e){
         e.preventDefault();
         if(frontdoor)
         {  $("#frontdoor").find("img")[0].src="img/frontdoorpressed.png";

 			$.ajax({
  				url: "127.0.0.1:3000",
  				dataType: 'jsonp',
  					beforeSend: function( xhr ) {
  					 xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
 						 }
						})
  						.done(function( data ) {
   					
    					  console.log( "Sample of data:");
    					
  						});

 }
     else
     	{$("#frontdoor").find("img")[0].src="img/frontdoor.png"; }
frontdoor=!frontdoor;

    });
   
    var myFunction = function ()
    {console.log("FUNCTION");}
    
}); 