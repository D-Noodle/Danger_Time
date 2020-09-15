const express = require('express');
<<<<<<< HEAD
const bodyparser = require('body-parser');
=======
>>>>>>> 2acc4eefd60849528f795b16252dc7895a1e2b11
const cors = require('cors');
const app = express();
const PORT = 3000;

/*required routers*/
const authrouter = require('./router/authrouter');
const mainrouter = require('./router/mainrouter');

/*CORS middleware to prevent CORS policy during POST*/
app.use(cors());

/**
 * Automatically parse urlencoded body content from incoming requests and place it
 * in req.body
 * https://www.npmjs.com/package/body-parser
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors({
  origin: [
    'http://localhost:8080',
    'http://localhost:3000',
  ]
}));

// handle authentication requests
// server recieves request to /auth/login or /auth/register, then direct to /authrouter
app.use('/auth', authrouter);

// handle all other requests
// receive request for /main/historicaldata, /main/addURL, /main/interval, /main/checknow, then direct to /mainrouter
app.use('/main', mainrouter);

// request to '/', redirect to /authrouter (same as request to /register)
app.use('/', authrouter);

// handle unknown path
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown error',
    status: 400,
    message: { err: 'an error occured' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log('error', errorObj.log);
  res.status(errorObj.status || 500).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
