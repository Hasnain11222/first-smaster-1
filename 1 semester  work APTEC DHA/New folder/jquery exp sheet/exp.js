$("document").ready(function(){
  $("#price").keyup(function(){

    var prod = $("#product").val();
    var quan = $("#quantity").val();
    var price = $("#price").val();


quan = parseInt(quan)

price = parseInt(price)


var  multiply = quan*price;

var total = multiply

$("#result").text(total)

})
})