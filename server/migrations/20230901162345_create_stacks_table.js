exports.up = function(knex) {
    return knex.schema.createTable('stacks', function(table) {
      table.integer('stack_id').notNullable().unique();
      table.string('name').notNullable();
      table.integer('sub_branch_id').references('sub_branches.id'); // Foreign key reference to sub_branches table
      table.string('usage_percentage').notNullable();
      table.string('short_description').notNullable();
      table.string('long_description').notNullable();
      table.string('color');
      table.string('technologies').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('stacks');
  };
  
