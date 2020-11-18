const path = require('path')

const cors = require('cors')
const express = require('express')

const inventory = require('./routes/inventory')
const dinos = require('./routes/dinos')

const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, './public')))


server.use('/api/v1', inventory)
server.use('/api/v1', dinos)

module.exports = server
