// These are our required libraries to make the server work.

import express from "express";
import fetch from "node-fetch";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("/public"));
app.use(express.static(__dirname + '/public/css'));

app.get('/', function (req, res) {
  res.sendFile('public/search.html', { root: '.' })
});
app.get('/search.html', function (req, res) {
  res.sendFile('public/search.html', { root: '.' })
});
app.get('/about.html', function (req, res) {
  res.sendFile('public/about.html', { root: '.' })
});
app.get('/contact.html', function (req, res) {
  res.sendFile('public/contact.html', { root: '.' })
});

<<<<<<< HEAD
function processDataForFrontEnd(req, res) {
=======

async function processDataForFrontEnd(req, res) {
>>>>>>> master
  const baseURL = "https://data.princegeorgescountymd.gov/resource/7k64-tdwr.json"; // Enter the URL for the data you would like to retrieve here

  // Your Fetch API call starts here
  // Note that at no point do you "return" anything from this function -
  // it instead handles returning data to your front end at line 34.
  const response = await fetch(baseURL);
  const data = await response.json();
  return data
}

// Syntax change - we don't want to repeat ourselves,
// or we'll end up with spelling errors in our endpoints.
//
app
  .route("/api")
<<<<<<< HEAD
  .get((req, res) => {
    // processDataForFrontEnd(req, res)
    (async () => {
      const db = await open(dbSettings);
      const result = await db.all("SELECT * FROM user");
      console.log("Expected result", result);
      res.json(result);
    })();
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
        res.send("your request was successful"); // simple mode
      })
      .catch((err) => {
        console.log(err);
      });
    }
  });
=======
.get((req, res) => {
  (async () => {
    const result = await processDataForFrontEnd(req, res)
    res.send(result)
  })()
}
)
>>>>>>> master

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});