var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

function randomizeColor(){
  var elements = document.querySelectorAll("a");
  for (var i = 0; i < elements.length; i++) { 
    elements[i].style.color = hue;
  }
}

$( document ).ready(function() {

  randomizeColor();
 
});

