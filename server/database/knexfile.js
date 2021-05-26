require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            database: 'foton-exame',
            user: 'root',
            password: '',
        },
        migrations: {
            directory: './migrations'
        },
        seeds: {
            directory: './seeds'
        }
    }
};