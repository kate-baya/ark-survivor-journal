
exports.up = function(knex) {
  return knex.schema.createTable('inventory', (table) => {
      table.increments('id').primary()
      table.string('item')
      table.integer('amount')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('inventory')
};
