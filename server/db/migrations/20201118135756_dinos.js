
exports.up = function(knex) {
  return knex.schema.createTable('dinos', table => {
      table.increments('id').primary()
      table.string('type')
      table.string('name')
      table.integer('level')
      table.string('sex')
      table.integer('stat_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('dinos')
};
