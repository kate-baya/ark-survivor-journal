
exports.up = function(knex) {
  return knex.schema.createTable('crafting', table => {
      table.increments('id').primary()
      table.string('name')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('crafting')
};

//ingredients table
  //id
  //name

//join table
//crafting_ingredients table
  //ingredient id
  //crafting id
  //amount

//crafting
  //id
  //name