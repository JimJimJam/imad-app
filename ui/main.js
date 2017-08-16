console.log('Loaded!');
var element = document.getElementById('here');

element.innerHTML = "<h3>Replaced Original data</h3>";

var img = document.getElementById('image');
var margin =0;

 function moveRight() {
    margin = margin + 10;
    img.marginLeft = margin+"px";
    
}
img.onclick = function(){
   var interval = setInterval(moveRight(),100); 
} 