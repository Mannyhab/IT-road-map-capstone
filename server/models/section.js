const knex = require('knex')(require('../knexfile').development);

const getSections = async () => {
  return await knex('sections').select('*');
};

module.exports = {
  getSections
};
