const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vahg9030",
    database: "CRUDDataBase",
});


app.get("/", (req, res) =>{

    const sqlInsert = "INSERT INTO `movie_reviews` (`movieName`, `movieReview`) VALUES ('inception', 'good movie');"  
    db.query(sqlInsert, (err, result) =>{
        res.send("Hello Marlene from Malmö")
    })
});

app.listen(3001, () =>{
    console.log("running on port 3001")
})