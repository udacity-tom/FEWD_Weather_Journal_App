//function to perform tasks on button click.
function buttonAction()  {
    //collect user input
    const zipCode = document.getElementById('zip').value;
    const myInput = document.getElementById('feelings').value;
    const cityName = document.getElementById('city').value;
    const countryID = document.getElementById('country-select').value;
    //Checks that at least a zip code or a city name are entered
    if(!zipCode && !cityName){
        alert('You must enter a City or a Zip!');
    } else {
        getWeather(getURL(cityName, zipCode, countryID))
            .then(function(data) {
                addToProjectData(getDate(), kelvToCentig(data.main.temp), myInput)})
                .then(function(){
                const serverData = dataFromServer();
                return serverData;
            }).then(function(serverData){
                updateDOM(serverData)
            });
        };
}

//gets weatherapi data for zipCode/cityname
const getWeather = async (URL) => {
        const res = await fetch(URL)
        try {
            const data = await res.json();
            return data;
        } catch(error) {
            console.log("error",error);
        }
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
    return prefixURL+searchParams+suffixURL+API_KEY;
}

//gets current journal entry from server
const dataFromServer = async () => {
    const res = await fetch('/data');
    try {
        const data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);
    }
    return dataFromServer;
}

//Updates DOM with the serverData values
function updateDOM(serverData) {
    document.getElementById('date').innerHTML = serverData.date;
    document.getElementById('temp').innerHTML = serverData.temperature+" degrees Centigrade";
    document.getElementById('content').innerHTML = serverData.content;
}

//sub-function to submit data to server endpoint
function addToProjectData(date, temperature, content) {
    postData('/addData', {date, temperature, content});
}

//Sets up button with click event listener
const button = document.getElementById('generate');
button.addEventListener('click',buttonAction);

//gets date in European format
function getDate() {
    let d = new Date();
    let newDate = d.getDate()+'.'+ d.getMonth()+'.'+ d.getFullYear();
    return newDate;
}

//converts Kelvin temperature to Centegrade
function kelvToCentig(temperature){
    return Math.round(temperature-274.15);
}

//function to POST data to server app
const postData = async (url = '', data = {}) =>{
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),
        });
        try {
            const newData = await response.json();
            return newData;
        } catch(error) {
            console.log("error", error);
        }
}
