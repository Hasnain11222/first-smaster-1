$("document").ready(function(){

    $("#loader").fadeOut();

},2000)


setInterval(function(){

    $("#img1").animate({"left" : "2px"})
    $("#img2").animate({"right" : "2px"})
    
},2000)

$("#txt").keyup(function(){
    
var table  = $("#txt").val();

table = parseInt(table);


for(var i = 1; i <= 10; i++){

var h1  = document.createElement("p");
h1.innerHTML = table + " X " + i + " = "+ table*i

document.getElementById("body").appendChild(h1);
}})