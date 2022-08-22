function getresult(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    
    val1 = parseInt(val1);
    val2 = parseInt(val2);

    var val3 = val1 + val2;

    document.getElementById("result").innerHTML = val3;

}

function getresultmul(){
    var val4 = document.getElementById("val4").value;
    var val5 = document.getElementById("val5").value;
    
    val4 = parseInt(val4);
    val5 = parseInt(val5);

    var val6 = val4 * val5;

    document.getElementById("resulta").innerHTML = val6;

}

function getresultdiv(){
    var val7 = document.getElementById("val7").value;
    var val8 = document.getElementById("val8").value;
    
    val7 = parseInt(val7);
    val8 = parseInt(val8);

    var val9 = val7 / val8;

    document.getElementById("resultb").innerHTML = val9;

}

function getresultsub(){
    var val10 = document.getElementById("val10").value;
    var val11 = document.getElementById("val11").value;
    
    val10 = parseInt(val10);
    val11 = parseInt(val11);

    var val12 = val10 - val11;

    document.getElementById("resultc").innerHTML = val12;

}