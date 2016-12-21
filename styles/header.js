$(document).ready(
  
   
 $(".fa-facebook").parent().css({ "position": "fixed",
                                  "top": "30%",
                                  "right":"0",
                                  "color":"#FFF",
                                  "background":"#3b5998",
                                  "width":"45px",
                                  "height":"45px",
                                  "text-align":"center",
                                  "padding":"0px",
                                  "font-size":"23px",
                                  "border-radius":"5px 0px 0px 5px"
                                });

  function() { 
    $(".book-body .body-inner").niceScroll({cursorcolor:"#b21818"});
    $(".book-summary").niceScroll({cursorcolor:"#b21818"});
  }
  
 

);

window.onload = function(){
 $( "body" ).prepend('<div id="header" class="header absolute"><div class="wrap"><div class="clearfix" style="width:100%;"><div id="logo"><a href="https://rubyfu.net/"><img src="http://rubyfu.net/content/images/other/logo.png" class="logo_rubyfu"></a></div></div></div></div>');

$('.fa-spin').nextAll().remove()
};

