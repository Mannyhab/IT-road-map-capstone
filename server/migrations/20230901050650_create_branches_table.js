exports.up = function(knex) {
    return knex.schema.createTable('branches', table => {
        table.increments('id').primary();
        table.integer('section_id').unsigned().notNullable().references('id').inTable('sections');
        table.string('title').notNullable();
        table.string('desc').notNullable();
        table.string('color').notNullable();
        table.string('detailedDesc', 1000).notNullable(); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('branches');
};
