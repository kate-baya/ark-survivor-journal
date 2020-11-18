
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').del()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {id: 1, item: 'water', amount: 5},
        {id: 2, item: 'tintoberry', amount: 10},
        {id: 3, item: 'narcotic', amount: 2},
      ]);
    });
};
