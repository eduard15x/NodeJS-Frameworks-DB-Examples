const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router.js');
const messagesRouter = require('./routes/messages.router.js');

const app = express();

//adding 'hbs' template engime
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;

//this is the middleware function 
app.use((req, res, next) => {
    const start = Date.now();
    next();
    //actions go here...
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} and took ${delta}ms`);
});
//this is the middleware function 
//run url in POSTMAN and see in console the results... time might be different because POSTMAN log the time between http req beeing sent and res gettin back, when in our code
//the time meassure how long does node need to get results

//if we have a html page in public folder
app.use('/site', express.static(path.join(__dirname, 'public')));

app.use(express.json());

//start working for our router
//this '/friends' is used only if is the same path for all routes, get and post

app.get('/', (req, res) => {
    res.render('index', {
        title: "My friends are VERY Clever",
        caption: "France has nice mountains",
        body: ''
    })
})

app.use('/friends', friendsRouter);
//This down was used before using a router
// app.post('/friends', friendsController.postFriend);
// app.get('/friends', friendsController.getFriends);
// app.get('/friends/:friendId', friendsController.getFriend);

// app.get('/messages', messagesController.getMessages);
// app.post('/messages', messagesController.postMessage);
app.use('/messages', messagesRouter);



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
