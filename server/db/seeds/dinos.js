
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dinos').del()
    .then(function () {
      // Inserts seed entries
      return knex('dinos').insert([
        {id: 0, type: 'Rex', name: 'Mr. T', level: 150, sex: 'male', health: 6820, stamina: 1638, food: 465, weight: 9300, melee_damage: 245},
        {id: 1, type: 'Rex', name: 'uwu', level: 155, sex: 'female', health: 7920, stamina: 1554, food: 465, weight: 9300, melee_damage: 255},
        {id: 2, type: 'Otter', name: 'Dog', level: 50, sex: 'male', health: 112, stamina: 360, food: 1020, weight: 640, melee_damage: 145},
      ]);
    });
};
