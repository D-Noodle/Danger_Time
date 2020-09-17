const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

/*required routers*/
const authrouter = require("./router/authrouter");
const mainrouter = require("./router/mainrouter");
// const datarouter = require("./router/datarouter");
const datacontroller = require("./controller/datacontroller");

/*CORS middleware to prevent CORS policy during POST*/
app.use(
  cors({
    origin: ["http://localhost:8080", "http://localhost:3000"],
  })
);

/**
 * Automatically parse urlencoded body content from incoming requests and place it
 * in req.body
 * https://www.npmjs.com/package/body-parser
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handle authentication requests
// server recieves request to /auth/login or /auth/register, then direct to /authrouter
app.use("/auth", authrouter);

// handle all other requests
// receive requests for /data for status data from database
app.use("/main/data", datacontroller.getData, (req, res) => {
  res.status(200).send("hello");
});
// receive request for /main/historicaldata, /main/addURL, /main/interval, /main/checknow, then direct to /mainrouter
app.use("/main", mainrouter);

// request to '/', redirect to /authrouter (same as request to /register)
app.use("/", authrouter);

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
