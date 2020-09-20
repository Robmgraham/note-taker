const express = require("express");
const fs = require("fs");
const path = require("path");


// Sets up the Express App
var PORT = 8080;
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



const scriptPath = __dirname;
const filePath = path.join(scriptPath, "db", "db.json");

function readFromDB() {
    fs.readFile(
        filePath, { encoding: 'utf8' },
        function(error, fileContent) {
            console.log(error);
            console.log(fileContent);
        }
    );
}
readFromDB();

function postFromDB() {
    fs.writeFile(
        filePath, { encoding: "utf8" },
        function(error, fileContent) {
            console.log(fileContent);
        }
    );
}
postFromDB();

// Assign unique id when note is saved
var notes = i[{


}];


//In order to delete a not, first read all notes, then remove the note with id then rewrite
function deleteFromDB() {
    fs.delete(
        filepath, note
    )
}



// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});