const n = require('nested-knex');

module.exports = n.array(n.type({
  id: n.number('book.id', {
    id: true
  }),
  name: n.string('book.name'),
  description: n.string('book.description'),
  authors: n.array(n.type({
    id: n.number('author.id', {
      id: true
    }),
    name: n.string('author.name')
  }))
}));