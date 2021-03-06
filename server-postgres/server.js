const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoute = require('./routes/routes');
server.use('/posts', postRoute);

const port = process.env.PORT || 3000;

server.get('/', (req, res) => res.send('Hi!'))
server.listen(port, () => console.log(`App listening on http:localhost:${port}`))