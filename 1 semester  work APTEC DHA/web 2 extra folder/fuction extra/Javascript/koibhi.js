var eng = parseInt(prompt("Enter English Marks"));
var Bio = parseInt(prompt("Enter Biology Marks"));
var Mat = parseInt(prompt("Enter Maths Marks"));
var Isl = parseInt(prompt("Enter Islamiyat Marks"));
var NMT = parseInt(prompt("Enter NMT Marks"));
var obt = eng + Bio + Mat + Isl + NMT;
var per = obt/500;
var grade;

    if(per >= 80){
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
    else if(per <= 49){
        grade = "FAIL"
    }

document.getElementById("eng").innerHTML = eng
document.getElementById("Bio").innerHTML = Bio
document.getElementById("Mat").innerHTML = Mat
document.getElementById("Isl").innerHTML = Isl
document.getElementById("NMT").innerHTML = NMT
document.getElementById("obt").innerHTML = obt
document.getElementById("per").innerHTML = per
document.getElementById("grade").innerHTML = grade

// var day = parseInt(prompt());
//     switch(day){
//         case 1:
//         document.write("Monday");
//         break;
//         case 2:
//         document.write("Tueday");
//         break;
//         case 3:
//         document.write("Wednesday");
//         break;
//         case 4:
//         document.write("Thursday");
//         break;
//         case 5:
//         document.write("Friday");
//         break;
//         case 6:
//         document.write("Saturday");
//         break;
//         case 7:
//         document.write("Sunday");
//         break;
//         default:
//         document.write("Undefined");
//     }

// var Month = parseInt(prompt("Enter Birth Month(numeric)"));
//     switch(Month){
//         case 1:
//         document.write("January");
//         break;
//         case 2:
//         document.write("February");
//         break;
//         case 3:
//         document.write("March");
//         break;
//         case 4:
//         document.write("April");
//         break;
//         case 5:
//         document.write("May");
//         break;
//         case 6:
//         document.write("June");
//         break;
//         case 7:
//         document.write("July");
//         break;
//         case 8:
//         document.write("August");
//         break;
//         case 9:
//         document.write("September");
//         break;
//         case 10:
//         document.write("October");
//         break;
//         case 11:
//         document.write("November");
//         break;
//         case 12:
//         document.write("December");
//         break;
//         default:
//         document.write("Undefined");
//     }