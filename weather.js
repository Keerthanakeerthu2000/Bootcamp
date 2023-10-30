// const apikey = "01b9cba487aca1a48fa8d7eeba319b39";
// const apikey="863242cfb2b1d357e6093d9a4df19a4b";
const apikey ="01b9cba487aca1a48fa8d7eeba319b39";

// const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
     var data = await response.json();

     console.log(data);




// if(response.status == 404){
//     document.querySelector(".error").style.display ="block";
//     document.querySelector(".weather").style.display ="none";
// }else{
// //     var data=await response.json();

//     document.querySelector(".city").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
//     document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
//     document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

//     if(data.weather[0].main == "clouds"){
//         weatherIcon.src = "images/clouds.png";
//     }
//     else if(data.weather[0].main == "clear"){
//         weatherIcon.src = "images/clear.png";
//     }
//     else if(data.weather[0].main == "Rain"){
//         weatherIcon.src = "images/rain.png";
//     }
//     else if(data.weather[0].main == "Drizzle"){
//         weatherIcon.src = "images/drizzle.png";
//     }
//     else if(data.weather[0].main == "Mist"){
//         weatherIcon.src = "images/mist.png";
//     }
//     document.querySelector(".weather").style.display ="block";

// }

    // var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main == "clouds"){
        weatherIcon.src = "https://mail.google.com/mail/u/0?ui=2&ik=0719c8006d&attid=0.2&permmsgid=msg-f:1780711213227931313&th=18b65b69f00176b1&view=att&disp=safe&realattid=f_lo5fgn141";
    }
    else if(data.weather[0].main == "clear"){
        weatherIcon.src = "https://mail.google.com/mail/u/0?ui=2&ik=0719c8006d&attid=0.5&permmsgid=msg-f:1780711213227931313&th=18b65b69f00176b1&view=att&disp=safe&realattid=f_lo5fgmzs0";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://mail.google.com/mail/u/0?ui=2&ik=0719c8006d&attid=0.6&permmsgid=msg-f:1780711213227931313&th=18b65b69f00176b1&view=att&disp=safe&realattid=f_lo5fgn1b5";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://mail.google.com/mail/u/0?ui=2&ik=0719c8006d&attid=0.4&permmsgid=msg-f:1780711213227931313&th=18b65b69f00176b1&view=att&disp=safe&realattid=f_lo5fgn162";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "https://mail.google.com/mail/u/0?ui=2&ik=0719c8006d&attid=0.3&permmsgid=msg-f:1780711213227931313&th=18b65b69f00176b1&view=att&disp=safe&realattid=f_lo5fgn1a4";
    }
    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display ="none";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


