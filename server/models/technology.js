const knex = require('knex')(require('../knexfile').development);

const getTechnologies = async () => {
  return await knex('technologies').select('*');
};

const getTechnologiesByStackId = async (stackId) => {
  return await knex('technologies').where('stack_id', stackId).select('*');
};

module.exports = {
  getTechnologies,
  getTechnologiesByStackId
};
