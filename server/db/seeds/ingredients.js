
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'tintoberry'},
        {id: 2, name: 'narcotic'},
        {id: 3, name: 'water'},
        {id: 4, name: 'azulberry'},
        {id: 5, name: 'stimulant'},
        {id: 6, name: 'metal ingot'},
        {id: 7, name: 'hide'},
        {id: 8, name: 'fiber'},
        {id: 9, name: 'cementing paste'}
      ]);
    });
};
