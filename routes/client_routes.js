const ClientController = require("../controller/client_controller");

const parser = require("body-parser");
const jsonParser = parser.json();
// const urlEncodedParser = parser.urlencoded({ extended: false });

module.exports = (app) => {
  app.get("/api/clients", ClientController.all); // Fetch all client data from database
  app.post("/api/clients/create", jsonParser, ClientController.create_client); // Create client document
  app.put("/api/clients/:id", ClientController.edit); // Patch client document
  app.delete("/api/clients/:id", ClientController.delete); // Delete client document
  app.get("/api/clients/:id", ClientController.details); // Fetch only client document by his/her id
};
