const { Poll, Connection, Query } = require('pg');
require('dotenv').config();

const poll = new Poll({
    ConnectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    query: (text, params) => poll.query(text, params),
};