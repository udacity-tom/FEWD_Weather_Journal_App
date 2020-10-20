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
app.get('/data', (req, res) => {
    res.send(projectData);
    console.log('Project Data was sent', projectData);
})

//Add POST route to accept projectData
app.post('/addData', addData);
app.post('/testData', testData);

function addData(req, res) {
    const newData = {date, temperature, content } = req.body;

    projectData = Object.assign(newData);
    console.log("newData recieved on Server from Client", newData);
    console.log("Data added to Endpoint", projectData);
    
}

function testData(req, res) {

    const newData = {zipCode, cityName, myInput} = req.body;
    projectData = Object.assign(newData);
    console.log('New data recieved on Sever from client',  {zipCode, cityName, myInput});
    console.log('project data has current value ', projectData);
}




    // let newData = {
    //     temperature: req.body.temperature,
    //     date: req.body.date,
    //     content: req.body.userRes
    // }
    // projectData.push(newData);  


    // let newData = {
    //     zipCode: req.body.zipCode, 
    //     cityName: req.body.cityName, 
    //     myInput: req.body.myInput
    // }

   // projectData.push({newData});
    // {projectData...} = newData;
    // console.log("projectData is", )
    // projectData = {...projectData, newData};
    // projectData = Object.assign(projectData, {zipCode, cityName, myInput});
    // projectData = Object.assign({zipCode, cityName, myInput});