/*Let's look again at a simple fetch example. Notice on line 1 that then is called on the value returned from fetch.

fetch("https://handlers.education.launchcode.org/static/weather.json").then( function(response) {
    console.log(response);
 } );

 To make it clearer, let's capture the value returned by fetch in a variable named fetchPromise.*/

 const fetchPromise = fetch("https://handlers.education.launchcode.org/static/weather.json");
 fetchPromise.then( function(response) {
    console.log(response);
 } );


 /*fetch returns an instance of the Promise class. The Promise class represents a promise. 
 A promise is the eventual outcome of an asynchronous event. In the above example, fetchPromise 
 represents the eventual response from the HTTP request to https://handlers.education.launchcode.org/static/weather.json.

 A promise can be fulfilled or rejected. When a promise is fulfilled, data is passed to the response 
 handler function. The then method of Promise defines what will happen when the promise is fulfilled. 
 When a promise is rejected, the error reason is returned.

 The above example can be translated to these steps:
 1. Make an HTTP request to https://handlers.education.launchcode.org/static/weather.json

 2. When the response is received, THEN run the response handler function (passing in response data)

 3. In the response handler function, console log the response object*/
