const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messagesController = require('./controllers/messages.controller');

const app = express();

const PORT = 3000;

//this is the middleware function 
app.use((req, res, next) => {
    const start = Date.now();
    next();
    //actions go here...
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} and took ${delta}ms`);
});
//this is the middleware function 
//run url in POSTMAN and see in console the results... time might be different because POSTMAN log the time between http req beeing sent and res gettin back, when in our code
//the time meassure how long does node need to get results

app.use(express.json())

app.post('/friends', friendsController.postFriend);

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messagesController.getMessages);

app.post('/messages', messagesController.postMessage);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
