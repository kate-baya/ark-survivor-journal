const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getInventory (db = connection) {
    return db('inventory').select()
}

function getDinos (db = connection) {
    return db('dinos').select()
}
function findDino (id, db = connection) {
    return db('dinos')
    .where('id', id)
    .select()
    .first()
}

function addTame (tame, db = connection) {
    return db('dinos')
    .insert(tame)
    .then(id => {
        return findDino(id[0], db)
    })
}

function getRecipes(db = connection) {
    return db('recipes').select()
}

function getCrafting(db = connection) {
    return db('crafting').select()
}

function getCraftingIngredients(db = connection) {
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
    getCraftingIngredients, 
    addTame
}