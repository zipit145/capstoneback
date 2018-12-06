
exports.up = (knex, Promise) => {
    return knex.schema.createTable('data', (data) => {
        data.increments('id')
        data.string('name')
        data.string('previous_occupation')
        data.decimal('home_townlat',null)
        data.decimal('home_townlong',null)
        data.string('favorite_animal')
        data.string('superpower')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('data')
  };
