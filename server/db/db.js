const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getInventory () {
    return db('inventory').select()
}

function getDinos () {
    return db('dinos').select()
}

// function getRecipes() {
//     return db('recipes')
//         .select(//stuff)
//         .join??
// }

// function getCrafting() {
//     return db('crafting')
//         .select(//stuff)
//         .join??
// }

module.exports= {
    getInventory,
    getDinos
}