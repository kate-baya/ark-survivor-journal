const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/inventory', (req, res) => {
    db.getInventory()
    .then(inventory => {
        res.json(inventory)
    })
    .catch(err => {
        res.status(500).send(err.message)
    })
})

//add post route for adding inventory

module.exports = router