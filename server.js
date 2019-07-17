const express = require('express');
const knex = require('knex');
const db = knex(require('./knexfile').development);

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);



module.exports = server;