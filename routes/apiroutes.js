const router = require("express").Router();
const { json } = require("express");
const fs = require("fs");
const { join } = require("path");
const { route } = require("./htmlroutes");

router.get("/api/notes", (req, res) =>{
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

router.post("/api/notes", (req, res) =>{
    console.log("this is the post route", req.body);
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        console.log("this is data before", data);
        var jsonData = JSON.parse(data);
        console.log("This is data after", jsonData);
        req.body.id = jsonData.length;
        jsonData.push(req.body);
        console.log("This is after push", jsonData);
        fs.writeFile("./db/db.json", JSON.stringify(jsonData), (err) => {
            if (err) throw err;
            res.send(req.body);
            
        })
    });
});

module.exports = router;