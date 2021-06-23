const express = require("express");
const bodyParser = require ('body-parser');
const cors = require('cors')
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vahg9003', 
    database: "CRUDDataBase",
});
db.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req,res) =>{
  const sqlSelect = 'SELECT * FROM CRUDDataBase.movie_reviews';
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  })
})

app.post('/api/insert', (req, res) => {

  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert = 'INSERT INTO CRUDDataBase.movie_reviews (movieName, movieReview) VALUES (?,?);'
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
  console.log(result);
  })
});

app.delete('/api/delete/:movieName', (req,res) =>{
  const name = req.params.movieName;
  const sqlDelete = 'DELETE FROM CRUDDataBase.movie_reviews WHERE id = ?';

  db.query(sqlDelete, name, (err, result) =>{
    if(err)  console.log(err);
  });
});

app.put('/api/update', (req,res) => {
  const id = req.body.id;
  const review = req.body.movieReview;
  const sqlUpdate =
  'UPDATE CRUDDataBase.movie_reviews SET movieReview =? WHERE id = ?';

  db.query(sqlUpdate, [review, id], (err, result) => {
    if(err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () =>{
    console.log("running on port 3001")
})