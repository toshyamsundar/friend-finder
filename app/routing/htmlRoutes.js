let path = require("path");

module.exports = app => {
  app.get("/survey", (request, response) => {
    let responseHTMLFile = path.join(__dirname, "/../public/", "survey.html");
    response.sendFile(responseHTMLFile);
  });

  app.get("*", (request, response) => {
    let responseHTMLFile = path.join(__dirname, "/../public/", "home.html");
    response.sendFile(responseHTMLFile);
  });
};
