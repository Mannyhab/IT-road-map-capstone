const knex = require('knex')(require('../knexfile').development);

const getBranches = async () => {
  return await knex('branches').select('*');
};

const getBranchesBySectionId = async (sectionId) => {
  return await knex('branches').where('section_id', sectionId).select('*');
};

module.exports = {
  getBranches,
  getBranchesBySectionId
};
