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

router.post('/dinos', getTokenDecoder(), async (req, res) => {
    try {
        const tame = req.body
        db.addTame(tame)
        .then(tame => {
            res.status(201).json(tame)
        })
    } catch(err) {
        res.status(500).send(err.message)
    }
})

router.delete(`/dinos/:id`, getTokenDecoder(), async (req, res) => {
    try {
        const id = req.params.id
        db.deleteTame(id)
        .then(res.status(200))
    } catch(err) {
        res.status(500).send(err.message)
    }
})

module.exports = router