import http from 'node:http';

const users = [];

const server = http.createServer((req, res) => {
  const { method, url} = req;

  if (method == 'GET' && url == '/users') {
    return res
    .setHeader('conttext-type', 'application/json')
    .end(JSON.stringify(users));
  }
  if (method == 'POST' && url == '/users') {
    users.push({
      id: 1,
      name: 'Paulo Andreola',
      email: 'pauloandreola@gmail.com',
    });
    return res.end('User Create')
  }

  return res.end('Hello World');
});

server.listen(3333);