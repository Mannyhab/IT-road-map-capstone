exports.up = function(knex) {
    return knex.schema.createTable('sections', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('desc').notNullable();
        table.string('color').notNullable();
        table.string('detailedDesc', 1000).notNullable(); // increased char limit
        table.integer('parentId').unsigned().references('id').inTable('sections').nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('sections');
};
