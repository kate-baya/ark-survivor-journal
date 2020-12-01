
exports.up = function(knex) {
  return knex.schema.createTable('dinos', table => {
      table.increments('id').primary()
      table.string('type')
      table.string('name')
      table.integer('level')
      table.string('sex')
      table.integer('health')
      table.integer('stamina')
      table.integer('food')
      table.integer('weight')
      table.integer('melee_damage')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('dinos')
};
