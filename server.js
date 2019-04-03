const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const entryDir = './build';
const middlewares = jsonServer.defaults({ static: entryDir });
const PORT = process.env.PORT || 5000;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);


server.get('/service-worker.js', (req, res) => {  
  res.sendFile(`${__dirname}/service-worker.js`);
});

server.use((req, res, next) => {
  if (req.method === 'GET' && !(/\/api/.test(req.url))) {
    res.sendFile(`${__dirname}/${entryDir}/index.html`);
  } else {
    next();
  }
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});


// Use default router
server.use('/api', router);
server.listen(PORT, () => {
  console.log(`JSON Server is running on: http://localhost:${PORT}`);
});
