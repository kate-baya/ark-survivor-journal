const express = require('express')
const router = express.Router()

const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/db')

router.get('/inventory', getTokenDecoder(), async (req, res) => {
    try {
      const inventory = await db.getInventory()
      res.json(inventory)
    } catch(err) {
        res.status(500).send(err.message)
    }
})

router.post('/inventory', getTokenDecoder(), async (req, res) => {
    try {
        const newInv = req.body
        db.addInventory(newInv)
        .then(newInv => {
            res.status(201).json(newInv)
        })
    } catch(err) {
        res.status(500).send(err.message)
    }
})

module.exports = router