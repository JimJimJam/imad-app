console.log('Loaded!');
var element = document.getElementById('here');

element.innerHTML = "<h3>Replaced Original data</h3>";

var counter = 0;

var img = document.getElementById('image');

var but = document.getElementById("button");

var clickdisplay = document.getElementById("times");

var margin =0;

 function moveRight() {
    margin = margin + 10;
    img.style.marginLeft = margin + "px";
    
}
img.onclick = function(){
   var interval = setInterval(moveRight,50); 
} ;

but.onclick = function changeClickDisplay(){
  counter++;
  clickdisplay.innerHTML(counter);
}