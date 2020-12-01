
exports.up = function(knex) {
  return knex.schema.createTable('ingredients', table => {
      table.integer('id')
      table.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ingredients')
};
