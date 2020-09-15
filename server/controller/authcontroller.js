const path = require("path");
const fs = require("fs");
const db = require("../db/databaseIndex.js");


const authcontroller = {};


//middleware 
// verify if user exists with the db.query to check in Postgres 
//0=  go to dashboard/ front page
authcontroller.verify = (req, res, next) => {
  res.locals.username = req.body.username;
  res.locals.password = req.body.password;

  //save query to a const= verifyUser , which is set to 'SELECT username FROM users where username = $1
  //create values vartiable which contains an array with ${username} as the first param
  const queryUser = 'SELECT username, user_id FROM users WHERE username = $1';
  const values = [res.locals.username];
  //call query on db passing

  db.query(queryUser, values)
    .then((verified) => {
      if (verified.rows.length === 0) {
        res.locals.exists = false;
        return next();
      }
      res.locals.user_id = verified.rows.users_id;
      return next();
    })
  //then if verify.rows.length === 0 , that means user doesn't exist 
  // res.locals.exist = false
  // !== 0 then the user exist 
  // call middleware that checks passswords 
  //return next 
}

 


authcontroller.checkPw = (req, res, next) => {
  if (!res.locals.exists) return next();
  let passedInName = res.locals.username; //passed in
  let passedInPass = res.locals.password; //passed in

  const queryUser = 'SELECT * FROM users WHERE username = 1$ AND password = $2';

  db.query(queryUser, [passedInName, passedInPass])
    .then((verified) => {
      if (verified.rows.length === 0) {
        res.locals.exists = false;
        return next();
      }
      return next();
    })
    .catch((error) =>
      next({
        log:
          "Express error handler caught error in maincontroller.storeUrl in db query selectUrlQuery",
        status: 400,
        message: { err: error },
      })
    )
};

authcontroller.saveUser = (req, res, next) => {
  if (res.locals.exist) return next();

  let username = req.body.username;
  let password = req.body.password;
  let phoneNumber = req.body.phoneNumber;

  const saveQuery = 'INSERT INTO users (username, password, phone_number) VALUES ($1, $2, $3)'

  db.query(saveQuery, [username, password, phoneNumber])
    .then((saved) => {
      if (saved) return next()
    })
    .catch((error) =>
      next({
        log:
          "Express error handler caught error in maincontroller.storeUrl in db query selectUrlQuery",
        status: 400,
        message: { err: error },
      })
    )
};
module.exports = authcontroller;