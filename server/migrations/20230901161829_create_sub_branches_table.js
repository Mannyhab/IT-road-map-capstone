exports.up = function(knex) {
    return knex.schema.createTable('sub_branches', function(table) {
        table.increments('id').primary();
        table.integer('branch_id').unsigned().references('branches.id');
        table.string('title').notNullable();
        table.string('desc').notNullable();
        table.string('color'); // Optional
        table.text('detailedDesc').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('sub_branches');
};
