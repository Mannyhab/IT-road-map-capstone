const knex = require('knex')(require('../knexfile').development);
const tableName = 'stacks';

exports.getAllStacks = async (req, res) => {
    try {
        const stacks = await knex.select('*').from(tableName);
        res.status(200).json({
            status: 'success',
            data: stacks
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

exports.getStacksBySubBranchId = async (req, res) => {
    const subBranchId = req.params.subBranchId;
  
    const stacks = await knex.select('*').from('stacks').where('sub_branch_id', subBranchId);
  
    res.status(200).json({
      status: 'success',
      data: stacks
    });
  };