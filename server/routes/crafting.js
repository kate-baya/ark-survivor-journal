const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/crafting', (req, res) => {
    db.getCrafting()
    .then(items => {
        res.json(items)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

module.exports = router