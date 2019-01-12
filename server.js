const http =  require('http');
const app = require('./app')

const port = process.env.PORT || 3000;

const server = http.createServer(app);


function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./render-page/index.html', null, function(error, data){
        if (error){
            response.writeHead(404);
            response.write('File not found');
        }else{
            response.write(data);
        }
        response.end();
    });
}







server.listen(port);