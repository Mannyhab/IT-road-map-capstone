
exports.up = function(knex) {
    return knex.schema.createTable('sub_branches', function(table) {
        table.integer('id').primary();
        table.integer('branch_id').references('branches.id');
        table.string('title').notNullable();
        table.string('desc').notNullable();
      
        table.text('detail_desc').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('sub_branches');
};
