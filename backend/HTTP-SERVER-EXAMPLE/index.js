const http = require('http');
//set a nr for PORT
const PORT = 3000;


const server = http.createServer();

const friends = [
    {
        id: 0,
        name: "Sir Isaac Newton"
    },
    {
        id: 1,
        name: "ALbert Einstein"
    },
    {
        id: 2,
        name: "Eduard Precup"
    }
]

server.on('request', (req, res) => {
    const items = req.url.split('/');
    //-> if /friends/2 => ['', 'friends', '2'] 

    //what can we do inside that 'req' listener? we can look into headers and data comes from client
    //what can we do inside that 'res' listener? we can look into headers and data comes sent
    if (req.method === 'POST' && items[1] === 'friends') {
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request:', friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    } else if (req.method === 'GET' && items[1] === 'friends') {
            //if u set value to text/plain it send data as a string
            //1.EXAMPLE
            // 'Content-Type': 'text/plain',
            //if u want to send a js object set value as a json -> application/json
            //2.EXAMPLE
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });

        //this above is equivalent with below
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');

        //this end() function need to be called for every request that come in from server even if is empty
        //1.EXAMPLE
        // res.end('Hello! Sir Isaac Newton is your friend');
        //2.EXAMPLE -> parse the object to a string with JSON.stringify
        // res.end(JSON.stringify({
        //     id: 1,
        //     name: "Sir Isaac Newton",
        // }))
        if (items.length === 3) {
            //we need to conver the items[2] to a number from string
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]))
        } else {
            res.end(JSON.stringify(friends))
        }
    } else if (req.method === 'GET' && items[1] === 'messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <body>
                <ul>
                    <li>ana</li>
                    <li>edi</li>
                    <li>dex</li>
                </ul>
            </body>
        </html>
        `)
        //after this tell the browser that the respone was written and nothing more need to do
        res.end();
    } else if ( items[1] === 'testByMe') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h1>Hello World! Test by Me (Eduard Precup)</h1>`)
        res.end();
    } else {
        res.statusCode = 404
        res.end();
    }
})

//our local server on local machine
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
}); // we also have an IP address for local machine e.g 127.0.0.1 => localhost
//we also need to set our PORTnumber  for our server that will be listened, because we can have 
//different application running on our local machine and the PORT nr is used to direct traffic to the
//right traffic


//-> after u run npm 'index.js' , go in browser and search for:     localhost:PORT(nr)
//localhost:3000


//if you want different response in the browser, manipulate the req parameter
