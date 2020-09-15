const express = require('express');
const authcontroller = require('../controller/authcontroller');
const router = express.Router();

/* Iteration Option: We have not touched this, only laid the framework for authentication. */

/*1) will pull username and password from input box
url= /login, info will come in req.body
response is 200 status/error status
error status= direct back to sign up page*/

router.post('/login', authcontroller.verify, authcontroller.checkPw, (req, res) => {
  //if (!res.locals.exists)
  res.send(res.locals.url_id)//save in state
  res.redirect('https://localhost:8080/auth/register')

})

/*2) api= /register,
req.body = username, password, phoneNumber
middleware will validate whether username or phone number is already taken
//middleware
//encrypt middleware
  // create to save to database
//next
// route to dashboard
store username, etc in database
send to frontend- res.status 200 or error*/
// authcontroller.encrypt,
router.post('/register',
  authcontroller.verify,
  authcontroller.saveUser,
  (req, res) => {
    if (res.locals.exists) res.send('username taken');
  })



module.exports = router;

