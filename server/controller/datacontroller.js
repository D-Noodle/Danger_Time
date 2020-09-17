const path = require("path");
const db = require("../db/databaseIndex.js");
const datacontroller = {};

//psql cheat sheet https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546

/* 6) - data pull[https://mdbootstrap.com/docs/react/advanced/charts/](https://mdbootstrap.com/docs/react/advanced/charts/)
get historical data from database , will be default time (we will test to determine later)
api = /historicaldata
req.body = will hold URL
res.locals = will send back 2 arrays
A)all the times URL was pinged
B)all the status codes */
// getData 5 -query the database for times and status code for url given in req.body, then save to res.locals and send back a res contiaing res.locals
//return an array objects with the status, time

datacontroller.getData = (req, res, next) => {
  const { rows } = req.body;
  res.locals.rows = rows;
  next();

};
