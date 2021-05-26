exports.up = knex => knex.schema.createTable('book', table => {
  table.increments();
  table.string('name');
  table.string('description');
  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('books');
