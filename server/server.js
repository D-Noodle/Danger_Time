const express = require("express");
const cors = require("cors");
const cron = require('node-cron')
const app = express();
const PORT = 3333;
const path = require("path");

const db = require('./db/databaseIndex.js');
const fetch = require('node-fetch')


/*required routers*/
const authrouter = require("./router/authrouter");
const mainrouter = require("./router/mainrouter");
// const datarouter = require("./router/datarouter");
const datacontroller = require("./controller/datacontroller");
const maincontroller = require("./controller/maincontroller");

/* CORS middleware to prevent CORS policy during POST */
app.use(cors({
  origin: [
    'http://localhost:8080',
    'http://localhost:3000',
    'http://localhost:3333',
  ],
}));

/**
 * Automatically parse urlencoded body content from incoming requests and place it
 * in req.body
 * https://www.npmjs.com/package/body-parser
 */
app.use(express.urlencoded({ extended: true }));
// use express.json instead of bodyparser (bodyparser is deprecated)
app.use(express.json());

app.use(express.static(path.resolve(__dirname, './../client')));


cron.schedule('10 * * * * *', () => {

  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json())
    .then((result) => {      
      let status;
      if (typeof result === 'object') status = '200';
      else status = '400';

      const addStatus = 'INSERT INTO status (url_id,status,time) VALUES ($1, $2, $3)';
      const params = [96, status, Date.now()];

      db.query(addStatus, params)
      .then(() => console.log('inside cron query'))
      .catch(error => {console.log(error)})
      })
    .catch(error => {console.log(error)})

})


// request to '/', redirect to /authrouter (same as request to /register)
app.use("/", authrouter);

// handle authentication requests
// server recieves request to /auth/login or /auth/register, then direct to /authrouter
app.use("/auth", authrouter);

// handle all other requests
// receive requests for /data for status data from database
app.use("/main/data", datacontroller.getData, (req, res) => {
  res.status(200).json(res.locals.data);
});
// receive request for /main/historicaldata, /main/addURL, /main/interval, /main/checknow, then direct to /mainrouter
app.use("/main", mainrouter);


// handle unknown path
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown error",
    status: 400,
    message: { err: "an error occured" },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log("error", errorObj.log);
  res.status(errorObj.status || 500).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
