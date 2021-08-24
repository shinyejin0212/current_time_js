// const timeContainer = document.querySelector(".time"),
//     nowHour = timeContainer.querySelector("#hour"),
//     nowMin = timeContainer.querySelector("#minutes"),
//     nowSec = timeContainer.querySelector("#seconds"),
//     nowAmpm = timeContainer.querySelector("#period");

// const dayContainer = document.querySelector(".date"),
//     nowDay = dayContainer.querySelector("#dayname"),
//     nowMonth = dayContainer.querySelector("#month"),
//     nowDate = dayContainer.querySelector("#daynum"),
//     nowYear = dayContainer.querySelector("#year");


function getTime() {
    const now = new Date();
    const minutes = now.getMinutes();
    let hours = now.getHours();
    const seconds = now.getSeconds();

    textunit=["hour","minutes","seconds","period"]

    if (hours >= 12) {
        document.getElementById(textunit[3]).firstChild.nodeValue= "PM"

    }
    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
    }

   
    nowunit=[hours,minutes,seconds]
    
    for(let z=0; z<nowunit.length; z++){
        document.getElementById(textunit[z]).firstChild.nodeValue= nowunit[z] < 10 ? `0${nowunit[z]}` : nowunit[z];
    }
    // document.getElementById(hour).nodeValue=values[i];
    // nowHour.innerText = hours < 10 ? `0${hours}` : hours;
    // nowMin.innerText = minutes < 10 ? `0${minutes}` : minutes;
    // nowSec.innerText = seconds < 10 ? `0${seconds}` : seconds;

}

function getCalender() {
    const now = new Date();
    const day = now.getDay(); // 요일
    let month = now.getMonth(); // 월
    let date = now.getDate(); // 일
    const year = now.getFullYear(); // 년

    // date=3;
    
    if (date<10) {
        date= '0'+date;
        // console.log(date);
    }
   

    let week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

    let month_e=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    // nowDay.innerText = week[day];
    // nowMonth.innerText = month+1;
    // nowDate.innerText = date;
    // nowYear.innerText = year;
    let ids = ["dayname","month","daynum","year"];
    let values = [week[day],month_e[month],date,year];
    
    for(let i=0;i<ids.length;i++){
        document.getElementById(ids[i]).firstChild.nodeValue=values[i];
    }
}

function init() {
    getTime();
    setInterval(getTime, 1000);
    getCalender();
}
init();