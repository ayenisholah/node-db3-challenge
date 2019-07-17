const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes').where({ id: Number(id) });
}

 