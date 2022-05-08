module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Ya welcome"); // Main view
  });
};
