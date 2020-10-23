# FEWD_Weather_Journal_App

Front End Web Developer Nanodegree Weather Journal App Project

## Introduction/Usage 

This project requried the creation of an asynchronus web app that uses the [OpenWeather](https://openweathermap.org/) API for collecting weather data and then dynamically updating the UI of a weather journal.


At the UI the user can type in a ZIP code (postcodes) or a city name, or both and click on the 'Generate' button.
The URL for the API is dynamically created and the current weather data is collected from the API using `fetch`.

The data is then stored on an endpoint running on a Node local server. An additional `fetch` command retrieves the data from the server endpoing and then dynamically updates the DOM with the information.

Although simplistic in operation, the various API and server calls have to be coded appropriately to prevent the code from breaking as a consequence of timing calls to various external systems.

## Installation, Environment Setup & What's Installed
Unpack the necessary files. Setup the environment. 

Install node
`npm install node`

Add some dependencies: 

`npm install cors`

`npm install body-parser`

Various files are installed along with a basic website for the UI. 

## External Library
The country-region-selector by https://github.com/country-regions/country-region-selector
allows simple integration, future region extensibility, simple, a clean user interface.
The MIT licence terms are included in the library directory.


## Getting the server running
To get the server on node running with the default port number, at the command line type:

`node server.js`

The server will respond with a console.log of : 
```
server running
running on localhost: 3000
```
Where the default port '3000' has been used.

To change the default port, simply add the port number after the command: 
`node server.js 5000`

On the client side accessing (in a local dev environment)

`localhost:5000`

opens the UI and allows the user to input city names or Zip codes 


## Technologies Used
- Javascript (async, fetch, wait, etc)
- Node (For server and client)
- HTML/CSS (For UI)



## About Udacity's Front End Developer Nanodegree

The goal of the Front End Web Developer Nanodegree program is to equip learners with the unique skills they need to build and develop a variety of websites and applications. Graduates of this Nanodegree program will be able to construct responsive websites using CSS, Flexbox and CSS Grid, develop interactive websites and UI (User Interface) applications using JavaScript and HTML, and connect a web application to backend server data using JavaScript. Students will also build competency automating application build and deployment using Webpack and improving offline performance of websites using Service Worker. [Udacity Front End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)