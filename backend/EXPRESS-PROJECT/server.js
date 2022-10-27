const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Eduard 1999"
    },
    {
        id: 1,
        name: "Tudor 2007"
    }
]
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

app.post('/friends', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }


    const newFriend = {
        id: friends.length,
        name: req.body.name
    };
    friends.push(newFriend);

    res.json(newFriend);
})


app.get('/friends', (req, res) => {
    // res.send(friends);
    //this function is to be more clear we sending json object
    res.json(friends)
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if ( friend ) {
        // res.json(friend);
        //or
        res.status(200).json(friend)
    } else {
        // res.sendStatus(404);
        //or
        res.status(404).json({
            error: "Friend doesn't exist"
        })
    }
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Say hello again from this list to my friend!</li></ul>');
});

app.post('/messages', (req, res) => {
    console.log('Updated messages...')
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
