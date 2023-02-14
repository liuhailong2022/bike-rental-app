const { Pool } = require('pg');

const pool = new Pool({
    user: 'bike',
    host: '192.168.2.14',
    database: 'bike-rental',
    password: 'password',
    port: 5432
});

module.exports = pool;