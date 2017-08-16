console.log('Loaded!');
var element = document.getElementById('here');

element.innerHTML = "<h3>Replaced Original data</h3>";

var img = document.getElementById('image');

img.onclick = function() {
    img.style.marginLeft = '100px';
    
};