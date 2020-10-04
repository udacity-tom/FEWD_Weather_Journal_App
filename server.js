
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

const port = 3000;

const server = app.listen(port, listening);

function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
};


//Add GET route to return projectData
app.get('/world', (req, res) => {
    res.send('hello World');
    console.log('hello world was sent')
})

//Add POST route to accept projectData
app.post('/addData', addData);

function addData(req, res) {
    newData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userRes: req.body.userRes
    }
    projectData.push(newData);
    console.log(projectData);
    
}