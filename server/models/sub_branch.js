const knex = require('knex')(require('../knexfile').development);

const getSubBranches = async () => {
  return await knex('subbranches').select('*');
};

const getSubBranchesByBranchId = async (branchId) => {
  return await knex('subbranches').where('branch_id', branchId).select('*');
};

module.exports = {
  getSubBranches,
  getSubBranchesByBranchId
};
