// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

let port = 3000; //setting default port number
    //Adding command line arguments for port determination
if(typeof process.argv[2] != 'undefined'){
    port = process.argv[2];
}

const server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};


//Add GET route to return projectData
//Currently logs to server and sends back to app
//used for setting up server<->client interaction
app.get('/world', (req, res) => {
    res.send('hello World');
    console.log('hello world was sent')
})

//Add POST route to accept projectData
app.post('/addData', addData);
app.post('/testData', testData);

function addData(req, res) {
    let newData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userRes: req.body.userRes
    }
    // projectData.push(newData);
    projectData = Object.assign(newData);
    console.log("newData", newData);
    console.log("Data added", projectData);
    
}

function testData(req, res) {
    let newData = {
        zipCode: req.body.zipCode, 
        cityName: req.body.cityName, 
        myInput: req.body.myInput
    }
    projectData.push(newData);
    // projectData.push(req.body);
    console.log('New data', newData);
    console.log('project data is: ', projectData);
}