// These are our required libraries to make the server work.

import express from "express";
import fetch from "node-fetch";

//Import necessary functions for server-side version of SQL-lite.

import sqlite3 from "sqlite3";
import { open } from "sqlite";
import {writeUser, editUser} from "./libraries/writeuser";

const dbSettings = {
  filename: "./tmp/database.db",
  driver: sqlite3.Database,
};

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("/public"));
app.use(express.static(__dirname + '/public/css'));

app.get('/', function (req, res) {
  res.sendFile('public/index.html', { root: '.' })
});
app.get('/index.html', function (req, res) {
  res.sendFile('public/index.html', { root: '.' })
});
app.get('/about.html', function (req, res) {
  res.sendFile('public/about.html', { root: '.' })
});
app.get('/contact.html', function (req, res) {
  res.sendFile('public/contact.html', { root: '.' })
});


async function processDataForFrontEnd(req, res) {
  const baseURL = "https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json"; // Enter the URL for the data you would like to retrieve here

  // Your Fetch API call starts here
  const response = await fetch(baseURL);
  const data = await response.json();
  return data;
}


// Syntax change - we don't want to repeat ourselves,
// or we'll end up with spelling errors in our endpoints.
//
app
  .route("/api")
.get((req, res) => {
  (async () => {
    const result = await processDataForFrontEnd(req, res);
    console.log("Expected result", result);
    res.send(result);
  })()
})
.post((req, res) => {
  console.log("/api post request", req.body);
  if (!req.body.name) {
    console.log(req.body);
    res.status("418").send("something went wrong, additionally i am a teapot");
  } else {
    writeUser(req.body.name, dbSettings)
    .then((result) => {
      console.log(result);
      res.send("Data sucessfully retrieved"); 
    })
    .catch((err) => {
      console.log(err);
    })
  }
})
.put((req, res) => {
    console.log("/api put request", req.body);
    editUser(req.body.name, dbSettings);
    res.send('Form saved');
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});