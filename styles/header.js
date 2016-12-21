
document.getElementsByClassName("fa-facebook").parentElement.style.position = 'fixed';
document.getElementsByClassName("fa-facebook").parentElement.style.top = '30%';
document.getElementsByClassName("fa-facebook").parentElement.style.right = '-3px';
document.getElementsByClassName("fa-facebook").parentElement.style.color = '#FFF';
document.getElementsByClassName("fa-facebook").parentElement.style.background = '#3b5998';
document.getElementsByClassName("fa-facebook").parentElement.style.width = '45px';
document.getElementsByClassName("fa-facebook").parentElement.style.height = '45px';
document.getElementsByClassName("fa-facebook").parentElement.style.textAlign = 'center';
document.getElementsByClassName("fa-facebook").parentElement.style.padding = '0px';
document.getElementsByClassName("fa-facebook").parentElement.style.fontSize = '23px';
document.getElementsByClassName("fa-facebook").parentElement.style.borderRadius = '5px 0px 0px 5px';

window.onload = function(){
 $( "body" ).prepend('<div id="header" class="header absolute"><div class="wrap"><div class="clearfix" style="width:100%;"><div id="logo"><a href="https://rubyfu.net/"><img src="http://rubyfu.net/content/images/other/logo.png" class="logo_rubyfu"></a></div></div></div></div>');

  
   $(".fa-twitter").parent().css({ "position": "fixed",
                                  "top": "45%",
                                  "right":"-3px",
                                  "color":"#FFF",
                                  "background":"#1da1f2",
                                  "width":"45px",
                                  "height":"45px",
                                  "text-align":"center",
                                  "padding":"0px",
                                  "font-size":"23px",
                                  "border-radius":"5px 0px 0px 5px"
                                });
  
 


    $(".book-body .body-inner").niceScroll({cursorcolor:"#b21818"});
    $(".book-summary").niceScroll({cursorcolor:"#b21818"});
  
$('.fa-spin').nextAll().remove()
};

