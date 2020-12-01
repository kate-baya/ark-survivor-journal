const path = require('path')

const cors = require('cors')
const express = require('express')

const inventory = require('./routes/inventory')
const dinos = require('./routes/dinos')
const recipes = require('./routes/recipes')
const crafting = require('./routes/crafting')
const auth = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:8080'}))
server.use(express.static(path.join(__dirname, './public')))


server.use('/api/v1', inventory)
server.use('/api/v1', dinos)
server.use('/api/v1', recipes)
server.use('/api/v1', crafting)
server.use('/', auth)

module.exports = server
