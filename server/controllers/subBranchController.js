const knex = require('knex')(require('../knexfile').development);
const tableName = 'sub_branches';

exports.getAllSubBranches = async (req, res) => {
    try {
        const subBranches = await knex.select('*').from(tableName);
        res.status(200).json({
            status: 'success',
            data: subBranches
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

exports.getSubBranchesByBranchId = async (req, res) => {
    const branchId = req.params.branchId;
  
    const subBranches = await knex.select('*').from('sub_branches').where('branch_id', branchId);
  
    res.status(200).json({
      status: 'success',
      data: subBranches
    });
  };