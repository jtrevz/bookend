const express = require('express');
const app = express();
const session = require('express-session')

const sequelize = require('./config/connection.js')
const routes = require('./routes')


const PORT = process.env.PORT || 3001;



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