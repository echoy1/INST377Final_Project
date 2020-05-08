// These are our required libraries to make the server work.

import express from "express";
import fetch from "node-fetch";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Loads files from public folder 
app.use(express.static("/public"));
app.use(express.static(__dirname + '/public/css'));

//Expose html
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

//Retreving data from Prince Georges Website asynchronously
async function processDataForFrontEnd(req, res) {
  const baseURL = "https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json"; 

  
  const response = await fetch(baseURL);
  const data = await response.json();
  return data
}

//Expose get request
app
  .route("/api")
.get((req, res) => {
  (async () => {
    const result = await processDataForFrontEnd(req, res)
    res.send(result)
  })()
})

.post((req, res) => {
  console.log("/api post request", req.body);
  if (!req.body.name) {
    console.log(req.body);
    res.status("418").send("something went wrong, additionally i am a teapot");
  } else {
    writeUser(req.body.name, processDataForFrontEnd(req, res))
    .then((result) => {
      console.log(result);
      res.send("Data sucessfully retrieved"); 
    })
    .catch((err) => {
      console.log(err);
    });
  }
});

//Ouputs which port we are running
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});