const axios = require('axios')

axios.get('https://www.facebook.com')
    .then(function (response) {
        console.log(response)
    })
    //if both above fail we can catch bellow an error and it will show you in terminal where error comes from
    .catch((err) => {
        console.log(err)
    })
    .then(() => {
        console.log('All done!')
    })

    //run nodemon with: npm run dev
