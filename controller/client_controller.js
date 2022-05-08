const Client = require("../model/client");

module.exports = {
  all(req, res, next) {
    const limit = parseInt(req.query.limit) || ""; // Query limit (.../api/clients?limit=(number))
    Client.find({})
      .limit(limit)
      .then((clients) => res.status(200).send(clients))
      .catch(next);
  },
  create_client(req, res, next) {
    const clientProps = req.body;
    console.log(req.body);
    Client.create(clientProps)
      .then((client) => res.status(201).send(client)) // Status code on creating successfully 201, and sending info back
      .catch(next); // Any errors be catch and handled with the err method
  },
  edit(req, res, next) {
    const clientId = req.params.id;
    const clientProps = req.body;
    Client.findByIdAndUpdate({ _id: clientId }, clientProps) // Find the client document by id and update it
      .then(() => Client.findById({ _id: clientId })) // Fetch only that document
      .then((client) => res.status(200).send(client)) // Ok code and show the document info
      .catch(next);
  },
  delete(req, res, next) {
    const clientId = req.params.id;
    Client.findByIdAndRemove({ _id: clientId }) // Find and delete the document by id
      .then(() => res.send("Client data is deleted successfully"))
      .catch(next);
  },
  details(req, res, next) {
    const clientId = req.params.id;
    Client.findById({ _id: clientId }) // Fetch the document by id
      .then((client) => res.status(200).send(client))
      .catch(next);
  },
};
