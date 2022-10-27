function encrypt(data) {
    return 'encrypted data';
}

function send(url, data) {
    const encryptedData = encrypt(data);
    console.log(`Sending ${encryptedData} to ${url}`)
}


console.log(module)

module.exports = {
    //sending the function send()
    send: send,
}

console.log('Hello from ./request.js')
