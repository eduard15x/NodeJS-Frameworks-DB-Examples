// const http = require('https');
const { get} = require('https');

get('https://www.google.com', (res) => {
//and now the way we got data from respone=res
//chunk = piece of data, not all response
    res.on('data', (chunk) => {
        console.log(`Data: ${chunk}`)
    });
//the 'end' event is sent when there is no more data to show/send
    res.on('end', ()=> {
        console.log('No more data, request completed')
    });
});

//'end' function will cause the request to be sent


//the function bellow will be same with the one above
//******************************************************* */


// const http = require('http');

// const request = http.request('http://www.google.com', (response) => {
//     response.on('data', (chunk) => {
//         console.log(`Data chunk: ${chunk}`);
//     });

//     response.on('end', () => {
//         console.log('No more data example 2')
//     })
// })

// request.end(); 
