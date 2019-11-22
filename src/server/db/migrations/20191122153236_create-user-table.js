exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    table
      .string('username')
      .unique()
      .index();
    table.string('firstName');
    table.string('lastName');
    table
      .string('email')
      .unique()
      .index();
    table.string('password');
    table.string('title');
    table.string('phoneNumber');
    table.string('mobileNumber');
    table.enu('accessLevel', ['USER', 'ADMIN', 'GLOBAL']);
    table.boolean('isActive').defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
