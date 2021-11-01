//觀看預告片視窗
function myFunction1() {
    window.open("movie1.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300px,left=600px,width=720,height=450");
}
function myFunction2() {
    window.open("movie2.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300px,left=600px,width=720,height=450");
}
function myFunction3() {
    window.open("movie3.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300px,left=600px,width=720,height=450");
}

//票價總計
function getQty() {
    var sel1 = document.getElementById("sel1");
    var qty1 = sel1.value;
    var sel2 = document.getElementById("sel2");
    var qty2 = sel2.value;
    var sel3 = document.getElementById("sel3");
    var qty3 = sel3.value;
    var total = parseInt(qty1) * 270 + parseInt(qty2) * 300 + parseInt(qty3) * 580;
    document.getElementById('total').innerText = total + "元";
}

//觀看日期
var day1=new Date();
var strDate1=day1.getFullYear()+"年"+(day1.getMonth()+1)+"月"+day1.getDate()+"日";
document.getElementById('day1').innerText =strDate1;

var day2=new Date();
day2.setTime(day2.getTime()+24*60*60*1000);
var strDate2=day2.getFullYear()+"年"+(day2.getMonth()+1)+"月"+day2.getDate()+"日";
document.getElementById('day2').innerText =strDate2;

var day3=new Date();
day3.setTime(day3.getTime()+24*60*60*1000*2);
var strDate3=day3.getFullYear()+"年"+(day3.getMonth()+1)+"月"+day3.getDate()+"日";
document.getElementById('day3').innerText =strDate3;

var day4=new Date();
day4.setTime(day4.getTime()+24*60*60*1000*3);
var strDate4=day4.getFullYear()+"年"+(day4.getMonth()+1)+"月"+day4.getDate()+"日";
document.getElementById('day4').innerText =strDate4;

var day5=new Date();
day5.setTime(day5.getTime()+24*60*60*1000*4);
var strDate5=day5.getFullYear()+"年"+(day5.getMonth()+1)+"月"+day5.getDate()+"日";
document.getElementById('day5').innerText =strDate5;


// 選電影
function doProcess1(){
    // alert("Yes");
    document.getElementById('mvName1').style.borderColor = "red";
    document.getElementById('mvName1').style.borderWidth = "3px";
    document.getElementById('mvName2').style.borderColor = "#ddbd2d";
    document.getElementById('mvName3').style.borderColor = "#ddbd2d";

 }

 function doProcess2(){
    // alert("Yes");
    document.getElementById('mvName2').style.borderColor = "red";
    document.getElementById('mvName2').style.borderWidth = "3px";
    document.getElementById('mvName1').style.borderColor = "#ddbd2d";
    document.getElementById('mvName3').style.borderColor = "#ddbd2d";

 }
 function doProcess3(){
    // alert("Yes");
    document.getElementById('mvName3').style.borderColor = "red";
    document.getElementById('mvName3').style.borderWidth = "3px";
    document.getElementById('mvName1').style.borderColor = "#ddbd2d";
    document.getElementById('mvName2').style.borderColor = "#ddbd2d";

 }