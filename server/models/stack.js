const knex = require('knex')(require('../knexfile').development);

const getStacks = async () => {
  return await knex('stacks').select('*');
};

const getStacksBySubBranchId = async (subBranchId) => {
  return await knex('stacks').where('subbranch_id', subBranchId).select('*');
};

module.exports = {
  getStacks,
  getStacksBySubBranchId
};
