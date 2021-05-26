exports.up = knex => knex.schema.createTable('book_author', table => {
  table.increments();
  table.string('name');
  table.integer('bookId', 10).unsigned();
  table.foreign('bookId').references('book.id');
})

exports.down = knex => knex.schema.dropTable('book_author');