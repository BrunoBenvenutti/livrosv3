const express = require('express')
const consign = require('consign')
const body = require('body-parser')
const cors = require('cors')

server = express()
server.use(body.json())
server.use(cors())

server.set('porta', 3010)
server.set('url', 'http://localhost:')

consign({ cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server;


