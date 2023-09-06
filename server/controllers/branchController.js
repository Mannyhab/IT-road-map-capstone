const knex = require('knex')(require('../knexfile').development);
const tableName = 'branches';

exports.getAllBranches = async (req, res) => {
    try {
        const branches = await knex.select('*').from(tableName);
        res.status(200).json({
            status: 'success',
            data: branches
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

exports.getBranchesBySectionId = async (req, res) => {
    const sectionId = req.params.sectionId;
  
    const branches = await knex.select('*').from('branches').where('section_id', sectionId);
  
    res.status(200).json({
      status: 'success',
      data: branches
    });
  };