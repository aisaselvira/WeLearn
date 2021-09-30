function updateTime(){
    var dateInfo = new Date();

var hr,
_min =(dateInfo.getMinutes() <10) ? "0" + dateInfo.getMinutes():dateInfo.getMinutes(),
sec=(dateInfo.getSeconds() <10) ? "0" + dateInfo.getSeconds():dateInfo.getSeconds(),
ampm=(dateInfo.getHours() >=12) ? "PM" : "AM" ;

if(dateInfo.getHours() == 0 ){
    hr=12;
}else if (dateInfo.getHours()>12){
    hr=dateInfo.getHours() -12;
}else{
    hr=dateInfo.getHours();
}

var currentTime = hr + ":" + _min + ":" + sec;

document.getElementsByClassName("hms")[0].innerHTML=currentTime;
document.getElementsByClassName("ampm")[0].innerHTML=ampm;

var dow = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],
month=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
day = dateInfo.getDate();

var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()]+ " " +day;
document.getElementsByClassName("date")[0].innerHTML=currentDate;
};


updateTime();
setInterval(function(){
    updateTime()
},1000);