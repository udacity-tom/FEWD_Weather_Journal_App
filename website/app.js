// const { response } = require("express");




/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={YOUR API KEY}'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


//Setup function to perform button tasks.
function buttonAction ()  {
    /*tasks to include
        +must collect user input
            +add date
        +must access weather API
            +collect data, process it, add schnick-snacks?
        +must post data to server
            +server must 
            +add to projectData array
        +must list data in recent entries block (also must do this on loading page)

    */
    //collect user input
    const zipCode = document.getElementById('zip').value;
    const myInput = document.getElementById('feelings').value;
    const cityName = document.getElementById('city').value;
    console.log("Zip: ", zipCode, "feelings: ", myInput, "city:", cityName);

    //this will be postdata currently using /testData in development before setting up API call
    sendToServer (zipCode, myInput, cityName);

}

function sendToServer (zipCode, myInput, cityName) {
    console.log("Form details", zipCode, cityName, myInput);
    postData('/testData', {zipCode, cityName, myInput});
    
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



// postData('/addData', {temperature: 42, date: "today", userRes:"My Response"}); //insert data collected from form