var size = 60;
document.getElementById("b").style.backgroundColor = "black";
function big(){
    var x = document.getElementById("h");
    size +=10;
    x.style.fontSize = size + "px";
}
function small(){
    var x = document.getElementById("h");
    size -=10;
    x.style.fontSize = size + "px";
}
function death(){
    var x = document.getElementById("1");
    x.outerHTML = "";
    var y = document.getElementById("2");
    y.outerHTML = "";
    var z = document.getElementById("3");
    z.outerHTML = "";
    var alpha = document.getElementById("h");
    alpha.outerHTML = "";
    var b = document.getElementById("b");
    b.innerHTML = '<h1 id = "AOA"> LIES </h1>';
    setInterval(function() {
        b.style.backgroundColor = "rbg(" + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ")"
    }, 10)
}