$(document).ready(function() {
    $("#dis").keyup(function() {


        var product = $("#pro").val();
        var quantity =  parseInt($("#qun").val());
        var amount = parseInt($("#amo").val());
       var discount = parseInt($("#dis").val());
        var sum  = quantity + amount;
        var total = (discount / 100) * sum;


        $("#PRODUCT").html(product);
        $("#QUNTITY").html(quantity);
        $("#AMOUNT").html(amount);
        $("#SUM").html(sum);
        $("#DISCOUNT").html(discount);
        $("#TOTAL").html(total);
    })
})