let color = [
    "green",
    "purple",
    "cyan",
    "yellow",
    "orange",
    "purple",
    "grey",
    "pink"
]

let index = 0;
let isTriangle = false;

let col = document.getElementById("btn-1");
let col2 = document.getElementById("btn-2");

col.addEventListener("click", colorChange);

col2.addEventListener("click", shapeChange);

function colorChange(){
    if(index === color.length){
        index = 0;
    }

    document.getElementsByClassName("circle")[0].style.backgroundColor = color[index];
    index++;
}

function shapeChange(){
    if(!isTriangle){
        var i= document.getElementsByClassName("inner")[0];
        i.className  = "triangle-bottom-left";
        isTriangle = true;
    }else{
        var i = document.getElementsByClassName("triangle-bottom-left")[0];
        i.className = "inner";
        isTriangle = false;
    }
}