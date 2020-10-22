//Setup function to perform button tasks.
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
                // const dataFromServer = getFromServer();
                const serverData = dataFromServer();
                console.log("In buttonAction ", serverData);
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
            console.log(data);
            return data;
        } catch(error) {
            console.log("error",error);
        }
    }

//converts Kelvin temperature to Centegrade
function kelvToCentig(temperature){
    return Math.round(temperature-274.15);
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

//gets date in European format
function getDate() {
    let d = new Date();
    let newDate = d.getDate()+'.'+ d.getMonth()+'.'+ d.getFullYear();
    return newDate
}

// function getFromServer() {
    //gets current journal entry from server
    const dataFromServer = async () => {
        const res = await fetch('/data');
        // console.log("getfromserver",res);
        try {
            const data = await res.json();
            console.log("data from server",data);
            return data;
        } catch(error) {
            console.log("error", error);
        }
        return dataFromServer;
    }

    // }
    
// }

function updateDOM(serverData) {
    console.log("Serverdata from updateDOM!!!", serverData);
}

function addToProjectData (date, temperature, content) {
    postData('/addData', {date, temperature, content});
    // respCode = postData('/addData', {date, temperature, content});
    // console.log("Response Code from addtoproject",respCode);
    // return respCode;
}

const button = document.getElementById('generate');
button.addEventListener('click',buttonAction);

//function to POST data
const postData = async (url = '', data = {}) =>{
    console.log("From client postdata function, postData async:", data);
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
        } catch(error) {
            console.log("error", error);
        }
}
