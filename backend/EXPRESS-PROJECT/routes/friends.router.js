const express = require('express');

const friendsController = require('../controllers/friends.controller');

//define our router
const friendsRouter = express.Router();
//call our Router for all get and post
friendsRouter.use((req, res, next) => {
    console.log('ip address:', req.ip);
    next();
});
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);


module.exports = friendsRouter;
