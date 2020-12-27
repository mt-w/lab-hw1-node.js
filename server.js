const http = require('http')
const url = require('url');
const port = 8080

const requestHandler = (request, response) => {
    //  console.log('Accepted', request)
    console.log('Method: ' + request.method);

    if (request.method == 'GET') {
        //ввести в браузере  http://localhost:8080?year=2021
        let urlRequest = url.parse(request.url, true);
        if (urlRequest.query.year == 2020) {
            response.end('new year is soon...');
        } else {
            if (urlRequest.query.year == 2021) {
                response.end('Happy New Year!!!');
            } else {
                response.end('I think you are lost in time :(');
            }
        }
    } else {
        if (request.method == 'POST') {
            console.log('Request headers: ', request.headers);
            response.end(`Do you know ${
      request.headers.whatwillsavetheworld ? 
      ` that ${request.headers.whatwillsavetheworld} will save the world\n` :
      ` that you can write POST requests\n`∏
    }`);
        }
    }
}


const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})