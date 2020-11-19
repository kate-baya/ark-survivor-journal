
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('craftingIngredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('craftingIngredients').insert([
        {crafting_id: 0, ingredient_id: 6, amount: 25},
        {crafting_id: 0, ingredient_id: 7, amount: 20},
        {crafting_id: 0, ingredient_id: 8, amount: 30},
        {crafting_id: 1, ingredient_id: 6, amount: 25},
        {crafting_id: 1, ingredient_id: 9, amount: 7},
      ]);
    });
};
