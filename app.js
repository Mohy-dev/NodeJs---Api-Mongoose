const express = require("express"); // Import express module
const mongo = require("mongoose"); // Import mongoose module
const app = express(); // Instantiation an object
// var bodyParser = require("body-parser");
// app.use(express.json()); // Parsing the json body

const jsonParser = express.json();
app.use(jsonParser);  

console.log(jsonParser);
const indexRoute = require("./routes/index_routes");
const clientRoute = require("./routes/client_routes");

mongo.connect("mongodb://localhost/client", {
  // Deprecation Warnings suppressor
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

indexRoute(app); // Response route
clientRoute(app); // Api routes
console.log("Listening");
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message }); // Generic middleware to any error response messages
});

module.exports = app; // Exporting the app module
