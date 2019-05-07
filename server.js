let express = require("express");

let PORT = process.env.PORT || 3000;

let app = express();

app.listen(PORT, () => {
  console.log(`Express server listening on PORT ${PORT}`);
});
