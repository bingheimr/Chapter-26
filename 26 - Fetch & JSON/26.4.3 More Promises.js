/*Above, we showed a promise representing the outcome of an HTTP request, 
however, promises can represent the outcome of any asynchronous event. 

For example, the response object has a json() function that will return the JSON data in the response. 
The json() function returns a promise that represents the future result of turning the response data into JSON.

//The example below shows how promises are used to represent two different types of asynchronous events and the outcomes.*/

const fetchPromise = fetch("https://handlers.education.launchcode.org/static/weather.json");
fetchPromise.then( function(response) {
   const jsonPromise = response.json();
   jsonPromise.then( function(json) {
      console.log("temp", json.temp);
   });
} );

/*This example involves two promises. 

On line 1, fetchPromise is a promise that represents the fetch request. 
On line 3, jsonPromise is a promise that represents the response data being turned into JSON.
Finally on line 5, the JSON data can be logged.*/

/* Promises can be a hard concept to understand. Focus on the examples and the theory will make sense in time.*/


