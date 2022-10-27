function decrypt(data) {
    return 'decrypted data';
}

function read() {
    return decrypt('data')
}

//CommonJS export
module.exports = {
    read: read,
}
