
exports.up = function(knex) {
  return knex.schema.createTable('craftingIngredients', table => {
    table.integer('crafting_id')  
    table.integer('ingredient_id')
    table.integer('amount')
  })
};

exports.down = function(knex) {
  return knex.schema.droptable('craftingIngredients')
};
