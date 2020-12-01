const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getInventory () {
    return db('inventory').select()
}

function getDinos () {
    return db('dinos').select()
}

function getRecipes() {
    return db('recipes').select()
}

function getCrafting() {
    return db('crafting').select()
}

function getCraftingIngredients() {
    return db('crafting')
    .join('craftingIngredients', 'ingredients', 'ingredients.id', 'crafting.id', 'craftingIngredients.crafting_id')
    .select('ingredients.name', 'craftingIngredients.amount', 'crafting.name')
    .where('crafting.id', id)
    .first()
}

module.exports= {
    getInventory,
    getDinos,
    getRecipes,
    getCrafting,
    getCraftingIngredients
}