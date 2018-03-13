// to do with tutor:  match logic

//================= INSTRUCTIONS =====================

// Your apiRoutes.js file should contain two routes:
// 1 -  A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// 2- A POST routes /api/friends. This will be used to handle incoming survey results. 
//  This route will also be used to handle the compatibility logic.
//      You should save your application's data inside of app/data/friends.js as an array of objects. 
//      Each of these objects should roughly follow the format below.



  //============

var friendData = require("../data/friends.js");
var totalDiff = 0;

module.exports = function(app) {

    // Basic route to /api/friends page.
    app.get("/api/friends", function(request, response) {
        response.json(friendData);
    });


    app.post("/api/friends", function(request, response) {

        var userInputScore = 51; 
        var userInput = request.body.score;
        var bestMatch = "";
       // console.log(request.body.score);

        

        // insert logic for calculations here, before the response.send
        // friendData is already an array 
        // for loop to compare answers to each question in the request.body, compare to responses in friendData
        // may need to use a nested for loop:  1 - to loop through each friend; 2 - loop through each answer 
        // compare each friend answer to the user's answer to calculate the difference, then add the total difference
        // select the friend with the lowest total difference
        // send the selected friend back in the response.send

        // ****to send friend data to friends.js file, add to the array by using friendData.push

        // for loop to compare answers to each question in th request.body and compare to respone in friendData
//console.log(friendData);
        for(var i = 0; i < friendData.length; i++){
            var totalDiff = 0;
              
           // console.log(friendData[i].name);
            for(var k=0; k< userInput.length; k++){
            
            totalDiff += Math.abs(parseInt(friendData[i].scores[k]) - parseInt(userInput[k]));
               
       //     console.log(userInputScore);
            }

            if (totalDiff < userInputScore){
                userInputScore = totalDiff;
                bestMatch = friendData[i];
                console.log("Your best Match is " + friendData[i].name)};
            }
            response.json(friendData[i]);
        }
    )}