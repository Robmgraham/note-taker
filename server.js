const express = require("express");
const fs = require("fs");
const path = require("path");


// Sets up the Express App
var PORT = 8080;
var server = http.createServer(handleRequest);
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// * GET `/notes` - Should return the `notes.html` file.
// * GET `*` - Should return the `index.html` file
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// * The application should have a `db.json` file on the backend that will be used 
// to store and retrieve notes using the `fs` module.
app.get("/ ")


const scriptPath = __dirname;
console.log(scriptPath);

function readFromDB() {
    const filePath = path.join(scriptPath, "/api/notes", "db.json");
    console.log(filePath);
    fs.readFile(
        filePath, { encoding: 'utf8' },
        function(error, fileContent) {
            console.log(fileContent);
        }
    );
}
readFromDB();

function postFromDB() {
    const postPath = path.join(scriptPath, "/api/notes", "db.json");
    fs.writeFile(
        postPath, { encoding: "utf8" },
        function(error, fileContent) {
            console.log(fileContent);
        }
    );
}
postFromDB();