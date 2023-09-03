exports.up = function(knex) {
    return knex.schema.createTable('technologies', function(table) {
        table.integer('id').primary(); 
        table.string('name').notNullable();
        table.integer('stacks_id').references('stacks.stack_id'); 
        table.text('description').notNullable(); 
        table.string('usage_percentage').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('technologies');
};
