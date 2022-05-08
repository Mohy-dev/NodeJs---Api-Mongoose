const mongoose = require("mongoose"); // Import mongoose module
const Schema = mongoose.Schema; // Instantiation a schema

const clientSchema = new Schema({
  email: {
    type: String, // `email` string type
    unique: true, // `email` must be unique
    require: true, // `email` is a must to fill
  },
  username: {
    type: String,
    unique: true,
    require: true,
  },
  firstname: { type: String },
  lastname: { type: String },
  phonenumber: {
    type: Number,
    default: "00000",
  },
});

const Client = mongoose.model("Client", clientSchema); // Creating client model

module.exports = Client;
