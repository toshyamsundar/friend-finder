let friends = require("../data/friends");
let path = require("path");

module.exports = app => {
  app.get("/api/friends", (request, response) => {
    response.json(friends);
  });

  app.post("/api/friends", (request, response) => {
    console.log("Inside Post");
    friends.push(request.body);
    response.status(200).json(friends);
  });
};
