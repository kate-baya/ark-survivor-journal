
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
      table.increments('id').primary()
      table.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes')
};
