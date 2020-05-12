# LocalLibraries
### Purpose of this Project
The goal of this project is create a viable search application that will allow residents of Prince George's County find libraries near them. We hope this application will encourage and faciliate higher attendance at Prince Geroge's County local libraries. 

[Link to where our application is currently hosted on Heroku](https://inst377-morning-11.herokuapp.com/)


### Target Browsers
* Google Chrome
* Mozilla Firefox
* Ideal iOS: 12.4 or later
* Ideal Andriod: 7.0 or later


[Link to User Manual](./docs/user.md)

[Link to Developer Manual](#developer-manual)

<p>&nbsp;</p>
<p>&nbsp;</p>

----

<p>&nbsp;</p>
<p>&nbsp;</p>

<a name="developer-manual"></a>
# Developer Manual

* How to install your application and all dependencies

## Dependencies:
### Bulma
CSS framework built with Sass and based on Flexbox that helps styling the website easier.

#### Through ZIP file:
 1. Go to [bulma.io](https://bulma.io/) and download the bulma files. 
 2. Move and unzip the files to your project folders.

#### Through terminal:
 1. Change to your project directory.
 2. Type in: 
 ```
 npm install bulma
 ```

### All other dependencies
General instructions that should install all the necessary dependencies needed to run application. 

#### Through terminal: 
 1. Navigate to your project directory. 
 2. Type in: 
 ```
 npm install
 ```

## Run the application
### Through terminal: 
 1. Install all necessary dependencies to run application locally
 2. Navigate to project directory. 
 3. Type in: 
 ```
 npm start
 ```


## API for Server Application

The server containts three endpoints.

 * A GET endpoint that retrieves the data from Prince George's County JSON dataset and sends it to the frontend as as text.
 * A POST endpoint that adds libraries to the local database (currently set up and maintained with SQLite) based on body text entered as a request. 
 * A PUT endpoint that edits library entries in the local database based on what is entered from the request. 

 ## Known Bugs

* Page must be refreshed in order to clear the map and any search entries previously entered


## Future development 

For future development, consider fleshing out the Contact page and archiving submissions to either a local database or online database. Other thoughts to consider would be creating an email address for the website specifically and linking that to the Contact submissions page so that any and all submissions get sent to the website email. 

