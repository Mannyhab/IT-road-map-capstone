exports.up = function(knex) {
    return knex.schema.createTable('technologies', function(table) {
        table.increments('id').primary();
        table.integer('stack_id').unsigned().references('stacks.id');
        table.string('name').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('technologies');
};
