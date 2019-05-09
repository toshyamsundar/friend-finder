let friends = require("../data/friends");
let path = require("path");

module.exports = app => {
  app.get("/api/friends", (request, response) => {
    response.json(friends);
  });

  //   app.post("/api/friends", (request, response) => {
  //     let responseHTMLFile = path.join(__dirname, "/../public/", "home.html");
  //     response.sendFile(responseHTMLFile);
  //   });
};
