const express = require('express');
const app = express();
const mysql = require('mysql');
const routes = require('./routes')


const PORT = 3001;

const db = mysql.createConnection({
  host: "localhost",
  user:'root',
  password: 'r!cardo17',
  database: "bookend",
});

app.get('/login', (req, res) => {
  db.query("INSERT INTO Users (email, password) VALUES ('jenny', 'hello');",
  (err, results) => {
    console.log(err);
    res.send(results)
  }
  )
})

app.listen(PORT, (req, res) => {
  console.log(`Now listening on PORT ${PORT}...`);
});