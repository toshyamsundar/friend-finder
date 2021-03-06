let express = require("express");
let path = require("path");

let PORT = process.env.PORT || 3000;

let app = express();

app.use("/css", express.static(__dirname + "/app/public/css"));
app.use("/js", express.static(__dirname + "/app/public/js"));
app.use("/images", express.static(__dirname + "/app/public/images"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  let responseHTMLFile = path.join(__dirname, "/app/public/", "home.html");
  response.sendFile(responseHTMLFile);
});

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log(`Express server listening on PORT ${PORT}`);
});
