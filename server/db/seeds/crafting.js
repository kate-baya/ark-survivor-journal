
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('crafting').del()
    .then(function () {
      // Inserts seed entries
      return knex('crafting').insert([
        {id: 0, name: 'metal spike wall'},
        {id: 1, name: 'metal pillar'},
      ]);
    });
};
