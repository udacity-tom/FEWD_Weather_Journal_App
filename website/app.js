// import config from './config.js';
// const { response } = require("express");
// const APIKEY = config.API_KEY;
// const API_KEY = `&appid=${config.API_KEY}`;


// Create a new date instance dynamically with JS


//Setup function to perform button tasks.
function buttonAction()  {
    /*TODO: 
    tasks to include
        +DONEmust collect user input
            +DONE(mostly)add date
        +DONEmust access weather API
            +DOINGcollect data, process it
        +must post data to server
            +server must 
            +add to projectData array
        +must list data in recent entries block (also must do this on loading page)

    */
    //collect user input
    const zipCode = document.getElementById('zip').value;
    const myInput = document.getElementById('feelings').value;
    const cityName = document.getElementById('city').value;
    const countryID = document.getElementById('country-select').value;
    // console.log("country select value",countryID)
    console.log("from button action Zip: ", zipCode, "feelings: ", myInput, "city:", cityName, "country:", countryID);
    
    //Checks that at least a zip code or a city name are entered
    if(!zipCode && !cityName){
        alert('You must enter a City or a Zip!');
    } else {
        getWeather(getURL(cityName, zipCode, countryID)).then(function(data) {
            const currentTemp = kelvToCentig(data.main.temp);
            console.log("temperature from API", currentTemp);
            }
        )};
    
    const date = getDate();
}

//gets weatherapi data for zipCode/cityname
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

//converts Kelvin temperature to Centegrade
function kelvToCentig(temperature){
    return temperature-274.15;
}

//creates URL in format required for API
function getURL(cityName, zipCode, countryID) {
    const API_KEY = '';
    const prefixURL = 'http://api.openweathermap.org/data/2.5/weather?';
    const suffixURL = '&appid=';
    let searchParams;
    if(cityName && zipCode || cityName)
        searchParams = "q="+cityName+","+countryID; //search on city name if zip and city are given or city only 
     else if(zipCode)
        searchParams = "zip="+zipCode+","+countryID;//search on zip code given only
    console.log("new baseUrl", prefixURL+searchParams+suffixURL+API_KEY);
    return prefixURL+searchParams+suffixURL+API_KEY;
    }

//gets date in European format
function getDate() {
    let d = new Date();
    console.log("date in UU format",d);
    let newDate = d.getDate()+'.'+ d.getMonth()+'.'+ d.getFullYear();
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