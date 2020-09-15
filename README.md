# Scratch-Project

google.account for Elephant SQL (OAth with google account)
username: pinkfairyarmadillo38 
password: codesmithLA
birthday: Jan. 1, 2000

node-cron : to schedule tasks

https://www.npmjs.com/package/node-cron

https://www.digitalocean.com/community/tutorials/nodejs-cron-jobs-by-examples

https://scotch.io/tutorials/nodejs-cron-jobs-by-examples

<br>
1. Login form and signup form notes. (partially done, stretch)
will pull username and password from input box.

url= /auth/login, info will come in req.body.

response is 200 status with and userId (primary key from database) /error status .

200= go to dashboard/front page.

userID will go into state.

error status= direct back to sign up page.

 when user logs in, pull array of URLlinks that match user id and only render those in outputbox container.
<br>
 2. Register (stretch)
 api= /auth/register, 

req.body = username, password, phoneNumber,

middleware will validate whether username or phone number is already taken,

store username, etc in database,

send to frontend- res.status 200 or error ,

frontend will direct to dashboard,
<br>
3. add URL with default interval.
BACKEND DONE

user adds in URL that they want to track.

api= /main/addURL.

req.body = will hold URL.

res.status of 200 or error , and .send"success", send in res.locals url_Id (URL primary key).

FRONTEND- wait for success message before populating URL into state and creating URL container.

Url- primary key will go into state, 

default interval every hour .

backend timer: [https://nodejs.org/en/docs/guides/timers-in-node/](https://nodejs.org/en/docs/guides/timers-in-node/)

twillio API for text messages.
<br>
4. STRETCH FEATURE-C - change interval time.

api= /main/interval.

time will be req.body.

(default time is set when URL is inputted).

use this timer: [https://nodejs.org/en/docs/guides/timers-in-node/](https://nodejs.org/en/docs/guides/timers-in-node/)

this will change #3.
<br>
5. check endpoint/API now.

BACKEND DONE-

based on user clicking on button in front end, will check current status code .

api= /main/checkNow - will be invoked on an interval or also based on a button click.

req.body = will hold the URL .

res.locals = will hold the "URL status".
<br>
6- STRETCH FEATURE- A -modal for historical data.
[https://mdbootstrap.com/docs/react/advanced/charts/](https://mdbootstrap.com/docs/react/advanced/charts/)

get historical data from database , will be default time (we will test to determine later).

api =/main /historicalData.

req.body = will hold URL.

res.locals = will send back 2 arrays, 

A)all the times URL was pinged.

B)all the status codes.