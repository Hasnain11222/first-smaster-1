// $("document").ready(function(){

//     $("#hide").click(function(){
//     $("img").fadeOut(5000);
// });

//     $("#show").click(function(){
//     $("img").fadeIn(5000);
//     })
// })

// $("document").ready(function(){
//     $("#sci").keyup(function(){

//         var name = $("#namee").val();
//         var eng = $("#eng").val();
//         var maths = $("#maths").val();
//         var sindhi = $("#sindhi").val();
//         var urdu = $("#urdu").val();
//         var sci = $("#sci").val();
        

//         eng = parseInt(eng);
//         maths = parseInt(maths);
//         sindhi = parseInt(sindhi);
//         urdu = parseInt(urdu);
//         sci = parseInt(sci);

//         var obt = eng+maths+sindhi+urdu+sci;
//         var per = obt/500*100;
//         var grade;

//         if(per >= 70){
//             grade = "A+"
//         }
//         else if(per >= 65){
//             grade = "B"
//         }
//         else if(per >= 50){
//             grade = "C"
//         }

//         $("#name").text(name)
//         $("#obt").text("Your Obtained Marks is " +obt);
//         $("#per").text("Your Percent is " +per + "%");
//         $("#grade").text("Your Grade is " +grade)
        

//     })
// })








     $("document").ready(function(){
     $("#price").keyup(function(){

        var prod = $("#product").val();
        var quan = $("#quantity").val();
        var price = $("#price").val();

        

        quan = parseInt(quan);
        price = parseInt(price);
       

        var add = quan+price
        var total = add

        $("#result").text(total)

})
})