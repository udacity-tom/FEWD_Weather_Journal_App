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
    //Adding command line arguments for port number determination
if(typeof process.argv[2] != 'undefined'){
    port = process.argv[2];
}

const server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};

//Adds GET route to return projectData
app.get('/data', (req, res) => {
    res.send(projectData);
    console.log('Project Data was sent to client', projectData);
})

//Add POST route to accept projectData
app.post('/addData', addData);

//Callback function for adding data to JS Object projectData
function addData(req, res) {
    const newData = {date, temperature, content } = req.body;
    Object.assign(projectData, newData);
    console.log(`New data recieved on Server Endpoint from Client on port ${port}`, newData);
}