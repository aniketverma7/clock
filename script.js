var hr=document.getElementById("hh");
var min=document.getElementById("mm");
var sec=document.getElementById("ss");
var pr=document.getElementById("period");

var weekDay=document.getElementById("wd");
var dt =document.getElementById("dt");
var month=document.getElementById("mn");
var year=document.getElementById("yr");

var wDays =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var mnths=["january","february","march","april","may","june","july","august","september","october","november","december"];


setInterval(clock);

function clock(){
    var date=new Date();
    hr.innerHTML=date.getHours();
    min.innerHTML=date.getMinutes();
    sec.innerHTML=date.getSeconds();
    if(hr.innerHTML>12){
        pr.innerHTML="Pm";
        hr.innerHTML=hr.innerHTML-12
    }
    else{
        pr.innerHTML="am";
    }

    if(sec.innerHTML<10){
        sec.innerHTML="0"+sec.innerHTML;
    }
    if(min.innerHTML<10){
        min.innerHTML="0"+min.innerHTML;
    }
    if(hr.innerHTML<10){
        hr.innerHTML="0"+hr.innerHTML;
    }

    dt.innerHTML=date.getDate();
    year.innerHTML=date.getFullYear();
    weekDay.innerHTML=wDays[date.getDay()]+", ";
    month.innerHTML=mnths[date.getMonth()];
}