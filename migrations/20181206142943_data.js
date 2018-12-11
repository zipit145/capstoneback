
exports.up = (knex, Promise) => {
    return knex.schema.createTable('data', (data) => {
        data.increments('id')
        data.string('title')
        data.string('director')
        data.decimal('year',null)
        data.decimal('rating',null)
        data.string('poster_url')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('data')
  };
