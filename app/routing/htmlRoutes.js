//================ INSTRUCTIONS =====================

//Your htmlRoutes.js file should include two routes:
// 1 - A GET Route to /survey which should display the survey page.
// 2 - A default, catch-all route that leads to home.html which displays the home page.

// Routes
// =============================================================

const path = require("path");

module.exports = function(app) {
    
    app.get("/friends", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/home.html"));
    });

};

console.log("loaded!")