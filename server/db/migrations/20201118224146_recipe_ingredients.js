
exports.up = function(knex) {
  return knex.schema.createTable('recipeIngredients', table => {
      table.integer('recipe_id')
      table.integer('ingredient_id')
      table.integer('amount')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('recipeIngredients')
};
