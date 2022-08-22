$("doument").ready(function(){
$("#phy").keyup(function(){
    var name = $("#name").val();
    var eng = $("#eng").val();
    var urdu = $("#urdu").val();
    var sci = $("#sci").val();
    var phy = $("#phy").val();


    
    eng = parseInt(eng);
    urdu = parseInt(urdu);
    sci = parseInt(sci);
    phy = parseInt(phy);
    


    var obt = eng + urdu + sci + phy;

    var per = obt/400*100;
var grade;

if(per>=80){
    grade = "A+"
}

else if(per>=60){
    grade = "B"
}


else if(per>=50){
    grade = "C"
}


else if(per>=40){
    grade = "FAIL"
}

    $("#name1").text(" name is "+ name);
    $("#obt").text("your obtain marks is " + obt);
    $("#per").text("your percentage is " + per +"%");
    $("#grade").text("your grade is " + grade)
})


})