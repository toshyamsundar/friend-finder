let express = require("express");
let path = require("path");

let PORT = process.env.PORT || 3000;

let app = express();

app.get("/", (request, response) => {
  // let responseHTMLFile = path.join(__dirname);
  response.sendFile(__dirname);
});

app.listen(PORT, () => {
  console.log(`Express server listening on PORT ${PORT}`);
});
