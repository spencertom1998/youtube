//const express = require("express");
//const app = express();
//const port = process.env.PORT||3000;
//
//
//
//app.use(function(req, res, next) {
//    res.header('Access-Control-Allow-Origin', "*");
//    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
//    res.header('Access-Control-Allow-Headers', 'Content-Type');
//    next();
//});
//
//
//
//app.listen(port, function(err){
//    if(err){
//        console.log("Error: "+err);
//        return false;
//    }
//    
//    console.log("Port "+port+" is running")
//    
//});
//
//
//
//
//app.get("/", function (req, res) {
    
    // Helper function to display JavaScript value on HTML page.
    function showResponse(response) {
        var responseString = JSON.stringify(response, '', 2);
        responseString.json(results);
        response.json(results);
//        document.getElementById('response').innerHTML += responseString;
    }
    
    // Called automatically when JavaScript client library is loaded.
    function onClientLoad() {
        gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    }
    
    // Called automatically when YouTube API interface is loaded
    //AIzaSyAPwUFX-pAe3HpHbiH_qXjC7BEiFbigNHE
    function onYouTubeApiLoad() {
        gapi.client.setApiKey('AIzaSyAPwUFX-pAe3HpHbiH_qXjC7BEiFbigNHE');
        
        search();
    }
    
    function search() {
        // Use the JavaScript client library to create a search.list() API call.
        var request = gapi.client.youtube.search.list({
            part: 'snippet',
//            q: localStorage.getItem("youtubesearch")
            q: "tide"
        });
        
        // Send the request to the API server,
        // and invoke onSearchRepsonse() with the response.
        request.execute(onSearchResponse);
    }
    
    // Called automatically with the response of the YouTube API request.
    function onSearchResponse(response) {
        showResponse(response);
    }
    
    
//    res.json(response);
//    
//    
//});