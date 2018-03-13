// step 1:  create package JSON file:  in console type "npm init"

// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
// below line MUST be used if deploying to Heroku, the process.env.PORT is essential for Heroku to select an available port
// the right side of || is for our local
const PORT = process.env.PORT || 8080;

// taken from npm bodyParser code documentation
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, () => {
    console.log("App started on " + PORT);
});