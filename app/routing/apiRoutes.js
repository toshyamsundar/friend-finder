let friends = require("../data/friends");
let path = require("path");

module.exports = app => {
  app.get("/api/friends", (request, response) => {
    response.json(friends);
  });

  app.post("/api/friends", (request, response) => {
    let friendToCheck = {
      name: request.body.name,
      photo: request.body.photo,
      scores: request.body.scores.map(Number)
    };

    totalOfScoreDifferences = [];
    friends.forEach(friend => {
      totalOfScoreDifferences.push(
        friend.scores
          .map((score, i) => score - friendToCheck.scores[i])
          .map(score => Math.abs(score))
          .reduce((a, b) => a + b, 0)
      );
    });
    let friendToReturn = friends[totalOfScoreDifferences.indexOf(Math.min(...totalOfScoreDifferences))];
    response.status(200).json(friendToReturn);
  });
};
