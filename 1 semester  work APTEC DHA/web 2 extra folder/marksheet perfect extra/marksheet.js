function box(){
    document.getElementById("in").classList.add("hide")
    document.getElementById("in2").classList.remove("hide")
    document.getElementById("in2").classList.add("newshow")




    var name1 = document.getElementById("name").value
    var name2 = document.getElementById("name1").value
    var eng = document.getElementById("eng").value
    var math = document.getElementById("math").value
    var isl = document.getElementById("isl").value
    var bio = document.getElementById("bio").value
    var chem = document.getElementById("chem").value
    eng = parseInt(eng)
    math = parseInt(math)
    isl = parseInt(isl)
    bio = parseInt(bio)
    chem = parseInt(chem)
    var obt =eng + math + isl  + bio  + chem;
    var per = obt/500*100;
    var grade;
    
    if(per >=80){
grade = "A+"
    }

else if(per >= 70){
    grade = "A"
}


else if(per >= 60){
    grade = "B"
}


else if(per >= 50){
    grade = "C"
}


else if(per >= 40){
    grade = "FAIL"
}

document.getElementById("first").innerHTML = name1
document.getElementById("last").innerHTML = name2
document.getElementById("Eng").innerHTML = eng
document.getElementById("Math").innerHTML = math
document.getElementById("Isl").innerHTML = isl
document.getElementById("Bio").innerHTML = bio
document.getElementById("Chem").innerHTML = chem
document.getElementById("obt").innerHTML = obt
document.getElementById("per").innerHTML = per
document.getElementById("grade").innerHTML = grade
}








