
/*days*/
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const m = new Date();
let month = months[m.getMonth()];
let dayInMonth = m.getDate()

const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];

let day;
let nextDay;
let nextNextDay;

day =daysInWeek[m.getDay()];
nextDay=daysInWeek[m.getDay()+1];
nextNextDay=daysInWeek[m.getDay()+2];

let theDay1;
let theDay2;
let theDay3;

theDay1=`<div class=" out-div"><div class="text-white-50 d-flex justify-content-between"><span>${day}</span><span class="">${dayInMonth}${month}</span></div></div>`
theDay2=`<div class=" center-div"><div class="text-white-50  text-center">${nextDay}</div></div>`
theDay3=`<div class="  out-div"><div class="text-white-50  text-center">${nextNextDay}</div></div>`

    document.getElementById("day1").innerHTML=theDay1;
    document.getElementById("day2").innerHTML=theDay2;
    document.getElementById("day3").innerHTML=theDay3;


/*weather*/
let searchBox=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");



async function checkWeather(city){
    const response=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ba50a24d6aa64f81be4194628231802&q=${city}%7D&days=3`)
    let data =await response.json();
  
   
    document.querySelector(".nameCity").innerHTML=data.location.name;
    document.querySelector(".temp").innerHTML= Math.round(data.location.lon)+"°c";
    document.querySelector(".temp").innerHTML= Math.round(data.current.temp_c)+"°c";
    document.querySelector(".cloud").innerHTML= data.current.condition.text;
    document.querySelector("#icons-weather").src="https:"+ data.forecast.forecastday[0].day.condition.icon;
    
    /*next day */
    document.querySelector(".nextDayMax").innerHTML= Math.round(data.forecast.forecastday[1].day.maxtemp_c)+"°c";
    document.querySelector(".nextDayMin").innerHTML= Math.round(data.forecast.forecastday[1].day.mintemp_c)+"°c";
    document.querySelector(".cloud1").innerHTML= data.forecast.forecastday[1].day.condition.text;
    document.querySelector("#icon-small").src="https:"+data.forecast.forecastday[1].day.condition.icon;

    /*next next day */
    document.querySelector(".nexNexttDayMax").innerHTML=  Math.round(data.forecast.forecastday[2].day.maxtemp_c)+"°c";
    document.querySelector(".nextNextDayMin").innerHTML=  Math.round(data.forecast.forecastday[2].day.mintemp_c)+"°c";
    document.querySelector(".cloud2").innerHTML= data.forecast.forecastday[2].day.condition.text;
    document.querySelector("#icon-small-2").src="https:"+data.forecast.forecastday[2].day.condition.icon;

}


searchBtn.addEventListener("click",()=>{checkWeather(searchBox.value);})
  

function defaultScreen(){
    checkWeather("cairo");
}


