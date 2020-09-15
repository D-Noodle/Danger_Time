/* eslint-disable prefer-destructuring */
const path = require('path');
const fs = require('fs');
const maincontroller = {};
const db = require('../db/databaseIndex.js');

/* Need to import node library if we want to use fetch in the backend */
const fetch = require('node-fetch');

/* REQUEST/RESPONSE MIDDLEWARE */


maincontroller.saveUrl = (req, res, next) => {
  const urlBody = req.body;
  const urlArray = Object.keys(urlBody);
  const url = urlArray[0];
  res.locals.url = url;

  const userId = 42; /* ITERATION OPTION: this should pull from state that's updated from DB */
  
  const updateUrlTable = 'INSERT INTO url (user_id, url) VALUES ($1, $2) RETURNING url_id';
  db.query(updateUrlTable, [userId, `${url}`])
    .then((saved) => {
      res.locals.db_url_id = saved.rows[0].url_id;
      return next();
    })// MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
    .catch((error) => next({
      log:
          'Express error handler caught error in maincontroller.saveURL',
      status: 400,
      message: { err: error },
    }));
};

/*Checks to see the status code of the URL we added depending on the response we get back */
maincontroller.pingUrl = (req, res, next) => {
  let check;
  if (!res.locals.url) check = req.body.url;
  else check = res.locals.url;
  fetch(check)// recieved from state
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
      if (typeof response === 'object') { 
        res.locals.url_id = req.body.url_id;
        res.locals.status = '200'; //We assumed that it is status 200 if we receive an object, this could be more specific 
        return next();
      }
      res.locals.status = '400';
      return next();
    })
    .catch((error) => next({
      log:
      'Express error handler caught error in maincontroller.pingUrl',
      status: 400,
      message: { err: error },
    }));
};

/* Adds URL attributes to Postgres, but also sends back status to the client so that we can keep track in state */
maincontroller.addStatus = (req, res, next) => {
  // console.log('JOOOOOON')
  if (res.locals.db_url_id) res.locals.url_id = res.locals.db_url_id;
  const time = Date.now();
  const urlId = res.locals.url_id;
  const status = res.locals.status;
  const updateStatusTable = 'INSERT INTO status (url_id,status,time) VALUES ($1, $2, $3)';

  db.query(updateStatusTable, [urlId, status, time])
    .then(() => next())// MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
    .catch((error) => next({
      log:
        'Express error handler caught error in maincontroller.addStatus',
      status: 400,
      message: { err: error },
    }));
};

/* ITERATION OPTION: TASK SCHEDULER MIDDLEWARE */

maincontroller.startTasks = () => {
  return maincontroller.pingAll('test');
  const allUrls = 'SELECT url_id,url FROM url';

  db.query(allUrls)
    .then((urlCollection) => {
      this.pingAll(urlCollection.rows);
    })// MAKE SURE url IS LOWERCASE ON FRONTEND REQUEST OBJECT
    .catch((error) => console.log('Error in Task Schduler query: ', error));
};

maincontroller.pingAll = (urlArr) => {
  return maincontroller.saveStatus(urlArr);
  for (let i = 0; i < UrlArr.length; i++) {
    fetch(urlArr[i.url])
      .then((data) => data.json())
      .then((response) => {
        urlArr[i.status] = response.status;
        this.saveStatus(urlArr);
      })
      .catch((error) => console.log('Error in Task Schduler query: ', error));
  }
};

maincontroller.saveStatus = (updatedUrlArr) => {
  return console.log(updatedUrlArr);
  for (let i = 0; i < updatedUrlArr.length; i++) {
    const time = Date.now();
    const urlId = updatedUrlArr[i.url_id];
    const status = updatedUrlArr[i.status];
    const updateStatusTable = 'INSERT INTO status (url_id,status,time) VALUES ($1, $2, $3) RETURNING';
    db.query(updateStatusTable, [urlId, status, time])
      .then(() => {
        console.log('Ping task completed: ', time);
      })
      .catch((error) => console.log('Error in Task Schduler query: ', error));
  }
};

/*Readme/Resources */

/* Timestamp for psql
https://www.sqlservertutorial.net/sql-server-date-functions/sql-server-current_time-function/
*/

/* getstatus - to be used inside middleware and node-cron
input is URL or array of URLs to ping
pings URL, saves to database
output is received status code
saveToDb - include our query to save to database, parameter will be status returned from api ping
https://www.restapitutorial.com/httpstatuscodes.html
*/

/* 3) user adds in URL that they want to track
api= /addURL
req.body = will hold URL
res.status of 200 or error
default interval every hour
backend timer: [https://nodejs.org/en/docs/guides/timers-in-node/](https://nodejs.org/en/docs/guides/timers-in-node/)
twillio API for text messages */

// Login
// cam hello -> 7yxf, bcrypt adds salt register
// updateInterval - update interval in database
maincontroller.updateInterval = (req, res, next) => {
  next();
};

/* 6) - data pull[https://mdbootstrap.com/docs/react/advanced/charts/](https://mdbootstrap.com/docs/react/advanced/charts/)
get historical data from database , will be default time (we will test to determine later)
api = /historicaldata
req.body = will hold URL
res.locals = will send back 2 arrays
A)all the times URL was pinged
B)all the status codes */
// getData 5 -query the database for times and status code for url given in req.body, then save to res.locals and send back a res contiaing res.locals
maincontroller.getData = (req, res, next) => {
  next();
};

module.exports = maincontroller;
