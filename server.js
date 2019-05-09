let express = require("express");
let path = require("path");

let PORT = process.env.PORT || 3000;

let app = express();

// app.use(express.static(__dirname + "/app/public"));
app.use("/css", express.static(__dirname + "/app/public/css"));
app.use("/js", express.static(__dirname + "/app/public/js"));
app.use("/images", express.static(__dirname + "/app/public/images"));

app.get("/", (request, response) => {
  let responseHTMLFile = path.join(__dirname, "/app/public/", "home.html");
  response.sendFile(responseHTMLFile);
});

require("./app/routing/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`Express server listening on PORT ${PORT}`);
});
