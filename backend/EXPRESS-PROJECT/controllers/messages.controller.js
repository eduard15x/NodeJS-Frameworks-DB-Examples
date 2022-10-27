function getMessages(req, res) {
    res.send('<ul><li>Say hello again from this list to my friend!</li></ul>');
}

function postMessage(req, res) {
    console.log('Updated messages...');
}

module.exports = {
    getMessages,
    postMessage
}
