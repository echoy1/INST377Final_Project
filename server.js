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


async function processDataForFrontEnd(req, res) {
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
.get((req, res) => {
  (async () => {
    const result = await processDataForFrontEnd(req, res)
    res.send(result)
  })()
}
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});