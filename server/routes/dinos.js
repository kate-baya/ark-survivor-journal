const express = require('express')
const router = express.Router()

const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/db')

router.get('/dinos', getTokenDecoder(), async (req, res) => {
    try {
        console.log(req.user)
    const dinos = await db.getDinos()
    res.json( dinos )
    } catch(err) {
        res.status(500).send(err.message)
    }
})

module.exports = router