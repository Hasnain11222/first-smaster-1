// function print (){

//     document.getElementById("heading").innerHTML= "Hasnain"

//     document.getElementsByClassName("b1").style.color = "white" 
//     document.getElementsByClassName("b2").style.color = "pink" 
//     document.getElementsByClassName("b3").style.color = "red" 
//     document.getElementsByClassName("b4").style.color = "yellow" 
//     document.getElementsByClassName("b5").style.color = "black" 
// }



function print(){
var name = document.getElementById("name").value;

document.getElementById("heading").innerHTML= name

document.getElementById("heading").style.color = "orange" 

}


function dark(){
    document.getElementById("background").style.backgroundColor = "black"
}

function light(){
    document.getElementById("background").style.backgroundColor = "yellow"
}



function pink(){
    document.getElementById("background").style.backgroundColor ="pink"
}


    function blue(){
        document.getElementById("background").style.backgroundColor = "blue"
    }



    function red(){
        document.getElementById("background").style.backgroundColor = "red"
    }