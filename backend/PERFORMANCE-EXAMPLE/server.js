const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        //event loop is blocked...
    }
}

//2 routes
app.get('/', (req, res) => {
    res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    //delay the response
    delay(4000);
    res.send(`Ding Ding Ding! ${process.pid}`)
})

console.log('Running server.js...')
console.log('Worker process started');
app.listen(3000);

