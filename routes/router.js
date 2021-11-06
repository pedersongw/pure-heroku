module.exports = (app) => {
  const App = require("../controllers/controller.js");

  app.get("/", App.message);
};
