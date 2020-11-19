const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/recipes', (req, res) => {
    db.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
})

module.exports = router