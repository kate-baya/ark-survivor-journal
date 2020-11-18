
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
      table.increments('id').primary()
      table.string('name')
      //now I have an array of objects
  })
};

exports.down = function(knex) {
  
};
