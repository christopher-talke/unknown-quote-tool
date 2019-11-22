exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'ctalke',
          firstName: 'Christopher',
          lastName: 'Talke',
          email: 'christopher@talke.dev',
          password: 'password',
          title: 'Customer Service',
          phoneNumber: '1300 600 800',
          mobileNumber: '0405 511 352',
          accessLevel: 'GLOBAL',
          isActive: true
        },
        {
          username: 'stalke',
          firstName: 'Sarah',
          lastName: 'Talke',
          email: 'sarah@talke.dev',
          password: 'password',
          title: 'Customer Service',
          phoneNumber: '1300 600 800',
          mobileNumber: '0406 558 674',
          accessLevel: 'ADMIN',
          isActive: true
        }
      ]);
    });
};
