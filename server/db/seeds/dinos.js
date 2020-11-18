
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dinos').del()
    .then(function () {
      // Inserts seed entries
      return knex('dinos').insert([
        {id: 1, type: 'Rex', name: 'Mr. T', level: 150, sex: 'male', stat_id: 1},
        {id: 2, type: 'Rex', name: 'Miss Weach', level: 155, sex: 'female', stat_id: 2},
        {id: 3, type: 'Otter', name: 'Dog', level: 50, sex: 'male', stat_id: 3},
      ]);
    });
};
