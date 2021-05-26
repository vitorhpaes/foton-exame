const express = require('express');
const knex = require('../database');

let bookTyped = require('../models/book');

const router = express.Router();

router.get('/', async (req, res) => {

    try {

        const {
            filter,
        } = req.query;

        const getBooks = knex('book').select('*');

        getBooks.leftJoin({
            author: 'book_author'
        }, 'author.bookId', 'book.id').select('author.*');

        if (filter) {
            getBooks.where(function () {
                this.where('book.name', 'like', `%${filter}%`)
                    .orWhere('author.name', 'like', `%${filter}%`);
            });
        }

        getBooks.orderBy('book.name');

        const result = await bookTyped.withQuery(getBooks);

        if (!result) return res.json({
            error: "Error querying data"
        });

        const resultJSON = {
            books: result,
            length: result.length
        }

        res.json(resultJSON);

    } catch (e) {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
        return res.json({
            error: "Error querying data"
        });
    }

})

router.post('/', async (req, res) => {

    try {

        const {
            name,
            authors,
            description
        } = req.body;

        const book = {
            name,
            description
        };

        if (!book.name) return res.json({
            error: "Missing field name"
        });

        const insert = await knex('book').insert(book);
        const newBookId = insert[0];

        const bookReturning = {
            id: newBookId,
            ...book
        }

        if (!authors) {
            return res.json({
                book: bookReturning
            });
        }

        const authorsArray = authors.split(',');

        try {
            const authorsInserted = await Promise.all(authorsArray.map(author => {

                const authorObject = {
                    name: author.trim(),
                    bookId: newBookId
                };
                const authorInsert = knex('book_author').insert(authorObject);
                const newAuthorId = authorInsert[0];

                return {
                    id: newAuthorId,
                    ...authorObject
                }

            }));

            const bookWithAuthors = {
                ...book,
                authors: authorsInserted
            };

            return res.json({
                book: bookWithAuthors
            })
            
        } catch (e) {
            console.log('====================================');
            console.log(e);
            console.log('====================================');
            return res.json({
                error: 'Error inserting authors'
            });
        }


    } catch (err) {
        console.log(err)
        return res.status(200).json({
            error: err,
        })
    }

})

module.exports = router