const model = require('../models/friends.model');

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: 'Missing friend name'
        });
    }
    const newFriend = {
    //this model = friends array what was exported from the models folder
        id: model.length,
        name: req.body.name
    };
    //this model = friends array what was exported from the models folder
    model.push(newFriend);

    res.json(newFriend);
}

function getFriends(req, res) {
    // res.send(friends);
    //this function is to be more clear we sending json object
    res.json(model)
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
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
}



module.exports = {
    postFriend,
    getFriends,
    getFriend
}
