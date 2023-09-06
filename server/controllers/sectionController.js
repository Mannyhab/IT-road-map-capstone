const knex = require('knex')(require('../knexfile').development);
const tableName = 'sections';

exports.getAllSections = async (req, res) => {
    try {
        const sections = await knex.select('*').from(tableName);
        res.status(200).json({
            status: 'success',
            data: sections
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

