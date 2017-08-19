console.log('Loaded!');

var element = document.getElementById('here');

element.innerHTML = "<h3>Replaced Original data</h3>";

var bcounter = 0;

var img = document.getElementById('image');

var but = document.getElementById("button");

var clickdisplay = document.getElementById("times");

var margin =0;

//create  request object 

var request = new XMLHttpRequest();
     request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE)
       { //take some action
       }
            if(request.status === 200)
             {
                 var count = request.responseText;
                 var span = document.getElementById('The counter variable has the value:' + count);
             }
             
    
    };
    
 function moveRight() {
    margin = margin + 10;
    img.style.marginLeft = margin + "px";
    
}
img.onclick = function(){
   var interval = setInterval(moveRight,50); 
} ;

but.onclick = function(){
  bcounter = bcounter + 1;
  clickdisplay.innerHTML = "The button has been clicked" + " " + bcounter.toString() + " " + "times";
};

//invoke the request

request.open(GET,"http://lincet123.imad.hasura-app.io/counter",true);
request.send(null);