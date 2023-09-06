const knex = require('knex')(require('../knexfile').development);
const tableName = 'technologies';

exports.getAllTechnologies = async (req, res) => {
    try {
        const technologies = await knex.select('*').from(tableName);
        res.status(200).json({
            status: 'success',
            data: technologies
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};
exports.getTechnologiesByStackId = async (req, res) => {
    const stackId = req.params.stackId;
  
    const technologies = await knex.select('*').from('technologies').where('stack_id', stackId);
  
    res.status(200).json({
      status: 'success',
      data: technologies
    });
  };