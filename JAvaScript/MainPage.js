var scale = document.getElementById("content").style.scale
var width = document.getElementById("content").style.width
var height = document.getElementById("content").style.height

function EscalaResponsiva(){

    if(width && height < 10){
      scale = 0.4;
    }

}