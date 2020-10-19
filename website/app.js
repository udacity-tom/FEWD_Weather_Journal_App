// const { response } = require("express");

/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();




//get form details
const zipCode = document.getElementById('zip').value;
const myInput = document.getElementById('feelings').value;
const cityName = document.getElementById('city').value;

// console.log("Form details", zip, city, feelings);


/*
API Call
http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}


*/

// const fetchWeather = () {

// }



// console.log("App.js");

const postData = async (url = '', data = {}) =>{
    console.log("From client app.js:", data);
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

const button = document.getElementById('generate');
button.addEventListener('click', () => {
    console.log("Form details", zipCode, cityName, myInput);
    postData('/testData', {zipCode, cityName, myInput});
})

// postData('/addData', {temperature: 42, date: "today", userRes:"My Response"}); //insert data collected from form