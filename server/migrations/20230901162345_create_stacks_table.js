exports.up = function(knex) {
    return knex.schema.createTable('stacks', function(table) {
        table.increments('id').primary();
        table.integer('sub_branch_id').unsigned().references('sub_branches.id');
        table.string('name').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('stacks');
};
