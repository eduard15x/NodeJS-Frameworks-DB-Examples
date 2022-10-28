const { dirname } = require('path');
const path = require('path'); //        FOR LINUX/MAC  /folder/files.jpg             For WINDOWS:  \folder\files.jpg

function getMessages(req, res) {
    //__dirname = variable in the node global buildin to get into current folder
    res.render('messages', {
        title: 'Messages to my Friends',
        friend: 'Elon Musk'
    })
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
}

function postMessage(req, res) {
    console.log('Updated messages...');
}

module.exports = {
    getMessages,
    postMessage
}
