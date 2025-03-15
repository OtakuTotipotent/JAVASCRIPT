import http from 'http';
import filesystem from 'fs';

const hostname = 'localhost';
const port = 3000;

let text = filesystem.readFileSync('readme.text', 'utf-8');

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(
        `<!DOCTYPE html>
        <html>
        <head>
        <title>Node JS</title>
        </head>
        <body style="background-color: #333; color: wheat;">
            <h3>
            ${text}
            </h3>
        </body>
        </html>
        `
    );
});

server.listen(port, hostname, () => {
    console.log(`Server activated at port ${port} by name: ${hostname} with address : http://${hostname}:${port}/`);
});