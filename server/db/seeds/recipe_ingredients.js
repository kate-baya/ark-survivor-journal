
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipeIngredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {recipe_id: 0, ingredient_id: 1, amount: 20},
        {recipe_id: 0, ingredient_id: 2, amount: 2},
        {recipe_id: 0, ingredient_id: 3, amount: 1},
        {recipe_id: 1, ingredient_id: 4, amount: 20},
        {recipe_id: 1, ingredient_id: 5, amount: 2},
        {recipe_id: 1, ingredient_id: 3, amount: 1},
      ]);
    });
};
