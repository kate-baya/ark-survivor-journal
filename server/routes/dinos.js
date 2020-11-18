const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/dinos', (req, res) => {
    db.getDinos()
    .then(dinos => {
        res.json(dinos)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

module.exports = router