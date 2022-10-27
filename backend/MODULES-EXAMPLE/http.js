//I will use 3 ways to import and acces other modules
//first way, preffer to use for future
const { send } = require('./request');
//second way, not bad but old
const response = require('./response');
//3rd way ES6 - you need to change extenion for the file in    .js -> .mjs, and also for this file http.mjs
// import { exampleES6 } from './example.mjs';

function makeRequest(url, data) {
    //first way to acces what you import
    send(url, data);
    //second way to acces what you import
    return response.read();
    //3rd way ES6 
    // exampleES6()
}


const responseData = makeRequest('https://www.google.com', 'hello');
console.log(responseData)
