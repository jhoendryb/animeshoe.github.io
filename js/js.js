$(document).ready(function(){
   
    /*---------------------Primer anime-------------------------*/
    $("#primero").click(function(){
  		$("#P2 a").animate({paddingLeft:"90px", paddingRight:"10px"});
        $("#P3 a").animate({paddingLeft:"0px", paddingRight:"0px"});
        $("#P4 a").animate({paddingLeft:"0px", paddingRight:"0px"});
        $("#P5 a").animate({paddingLeft:"0px", paddingRight:"0px"});
    });
    $('#primero').click(function(){
        $("#cuerpecito").load('Bungou.html section.conten');
    });
    
    /*---------------------Segundo anime-------------------------*/
    $("#segundo").click(function(){
        $("#P2 a").animate({paddingLeft:"0px", paddingRight:"0px"});
  		$("#P3 a").animate({paddingLeft:"90px", paddingRight:"10px"});
        $("#P4 a").animate({paddingLeft:"0px", paddingRight:"0px"});
        $("#P5 a").animate({paddingLeft:"0px", paddingRight:"0px"});
    });
    $('#segundo').click(function(){
        $("#cuerpecito").load('toloveru.html section.conten1');
    });
    
    /*---------------------Tercer anime-------------------------*/
    $("#tercero").click(function(){
        $("#P4 a").animate({paddingLeft:"90px", paddingRight:"10px"});
        $("#P2 a").animate({paddingLeft:"0px", paddingRight:"0px"});
  		$("#P3 a").animate({paddingLeft:"0px", paddingRight:"0px"});
        $("#P5 a").animate({paddingLeft:"0px", paddingRight:"0px"});
    });
    $('#tercero').click(function(){
        $("#cuerpecito").load('hajimete.html section.conten2');
    });
    
    
    /*---------------------Cuarto anime-------------------------*/
    $("#cuarto").click(function(){
  		$("#P5 a").animate({paddingLeft:"90px", paddingRight:"10px"});
        $("#P4 a").animate({paddingLeft:"0px", paddingRight:"0px"});
  		$("#P3 a").animate({paddingLeft:"0px", paddingRight:"0px"});
        $("#P2 a").animate({paddingLeft:"0px", paddingRight:"0px"});
    });
    $('#cuarto').click(function(){
        $("#cuerpecito").load('eldlive.html section.conten3');
    });
    
    /*---------------------Quinto anime-------------------------*/
    $("#quinto").click(function(){
  		$("#P6 a").animate({paddingLeft:"90px", paddingRight:"10px"});
        $("#P5 a").animate({paddingLeft:"0px", paddingRight:"0px"});
        $("#P4 a").animate({paddingLeft:"0px", paddingRight:"0px"});
  		$("#P3 a").animate({paddingLeft:"0px", paddingRight:"0px"});
        $("#P2 a").animate({paddingLeft:"0px", paddingRight:"0px"});
    });
    $('#quinto').click(function(){
        $("#cuerpecito").load('hitorijime.html section.conten4');
    });
    
    /*---------------------Sexto anime-------------------------*/
    $("#segundo").click(function(){
  		$("#P3 a").animate({paddingLeft:"90px", paddingRight:"10px"});
        $("#P2 a").animate({paddingLeft:"0px", paddingRight:"0px"});
    });
    $('#segundo').click(function(){
        $("#cuerpecito").load('onepice.html section.conten1');
    });
    
    /*---------------------Septimo anime-------------------------*/
    $("#segundo").click(function(){
  		$("#P3 a").animate({paddingLeft:"90px", paddingRight:"10px"});
        $("#P2 a").animate({paddingLeft:"0px", paddingRight:"0px"});
    });
    $('#segundo').click(function(){
        $("#cuerpecito").load('onepice.html section.conten1');
    });
    
    /*---------------------Optavo anime-------------------------*/
    $("#segundo").click(function(){
  		$("#P3 a").animate({paddingLeft:"90px", paddingRight:"10px"});
        $("#P2 a").animate({paddingLeft:"0px", paddingRight:"0px"});
    });
    $('#segundo').click(function(){
        $("#cuerpecito").load('onepice.html section.conten1');
    });
    
    /*---------------------Noveno anime-------------------------*/
    $("#segundo").click(function(){
  		$("#P3 a").animate({paddingLeft:"90px", paddingRight:"10px"});
        $("#P2 a").animate({paddingLeft:"0px", paddingRight:"0px"});
    });
    $('#segundo').click(function(){
        $("#cuerpecito").load('onepice.html section.conten1');
    });
    
  
    
     
    
});