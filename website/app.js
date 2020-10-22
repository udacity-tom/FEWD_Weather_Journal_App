// import config from './config.js';
// const { response } = require("express");
// const APIKEY = config.API_KEY;
// const API_KEY = `&appid=${config.API_KEY}`;

const API_KEY = '';
/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=';
console.log("baseUrl", baseURL+API_KEY);
let URL = baseURL+API_KEY;
// Create a new date instance dynamically with JS


//Setup function to perform button tasks.
function buttonAction()  {
    /*TODO: 
    tasks to include
        +must collect user input
            +add date
        +must access weather API
            +collect data, process it
        +must post data to server
            +server must 
            +add to projectData array
        +must list data in recent entries block (also must do this on loading page)

    */
    //collect user input
    const zipCode = document.getElementById('zip').value;
    const myInput = document.getElementById('feelings').value;
    const cityName = document.getElementById('city').value;
    console.log("from button action Zip: ", zipCode, "feelings: ", myInput, "city:", cityName);

    //this will be postdata currently using /testData in development before setting up API call
    //sendToServer (zipCode, myInput, cityName);
    getWeather(URL).then(function(data) {
        const currentTemp = kelvToCentig(data.main.temp);
        console.log("temperature from API", currentTemp);
        }
    );
    // weatherData.then(console.log("WeatherDate", weatherData));
    // const weatherData = getWeath();
    // setTimeout(1000);
    // weatherData.then( () => console.log("WeatherData",weatherData));
    // Promise.resolve(weatherData).then(console.log("WeatherData",weatherData));
    
    // weatherData.then( () => {
    //     const currentTemp = kelvToCentig(weatherData.main.temp);
    // })
    
    
    
    // let currentTemp;
    // currentTemp.then( () => currentTemp =kelvToCentig(weatherData.main.temp));
    // console.log("temperature from API", currentTemp);
    // console.log("weatherdata", weatherData);
    // const {temperature} = weatherData;
    const date = getDate();
    // addToProjectData(date, temperature, content);
}

    
//get weatherapi data for zipCode/cityname
const getWeather = async (URL) => {
        console.log("URL from getWeather", URL);
        const res = await fetch(URL)
        try {
            const data = await res.json();
            console.log(data);
            return data;

        } catch(error) {
            console.log("error",error);
        }
    }


// function getWeath() {
//     const weatherdata =  async(URL) => {
//         console.log("URL from getWeather", URL);
//         const res = await fetch(URL);
//         console.log(res);
//     }
// }

// async function getWeath() {
//     let res =  fetch(URL)
//         .then(res => res.json())
//         // .then(res => weatherData = res)
//         .then(res => console.log(res))
//         .catch( err => console.log("NOOOOO, error!"));
//         return res;
//         // console.log("WeatherData",weatherData);
//         // const temperature = kelvToCentig(weatherData.main.temp);
//         // console.log("temperature from API",temperature);
// }

function kelvToCentig(temperature){
    return temperature-274.15;
}


function getDate() {
    let d = new Date();
    console.log("date in UU format",d);
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
    console.log("currentdate",newDate);
    return newDate
}



function getFromServer() {
    //gets current journal entry from server
    
}

function addToProjectData (date, temperature, content) {
    console.log("from button action date: ", zipCode, "feelings: ", myInput, "city:", cityName);
    postData('/data', {date, temperature, content})
}


function sendToServer (zipCode, myInput, cityName) {
    console.log("Form details webside", zipCode, cityName, myInput);
    postData('/newData', {zipCode, cityName, myInput});
    
}

//get form details

// console.log("Form details", zip, city, feelings);

const button = document.getElementById('generate');
button.addEventListener('click',buttonAction);

// const button = document.getElementById('generate');
// button.addEventListener('click', () => {
//     console.log("Form details", zipCode, cityName, myInput);
//     postData('/testData', {zipCode, cityName, myInput});
// })



/*
API Call
http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}
*/
// const fetchWeather = () {
// }


// console.log("App.js");
//function to POST data
const postData = async (url = '', data = {}) =>{
    console.log("From client app.js, postData async:", data);
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),
        });
        console.log(JSON.stringify(data));
        console.log(data);
        try {
            const newData = await response.json();
            console.log("client app.js/POST", newData);
            return newData;
        }catch(error) {
            console.log("error", error);
        }
}
// GETs data from server
// const getData = async (url = ''. data = {}) => {
//     console.log("From get data function app.js, url", url);
//     const response = await fetch(url, {
//         method: 'GET',
//         mode: 'cors',
//         credentials: 'same-origin',
//         header: {
//             'Content-Type': 'application/json',
//         },
//         body:

//     })
// }

// postData('/addData', {temperature: 42, date: "today", userRes:"My Response"}); //insert data collected from form