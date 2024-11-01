'use strict';
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Mauro Felipe',
        email: 'mauroseed@example.com',
        password_hash: await bcrypt.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Harvey Specter',
        email: 'harveyseed@example.com',
        password_hash: await bcrypt.hash('87654321', 8), 
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Mike Ross',
        email: 'mikeseed@example.com',
        password_hash: await bcrypt.hash('24689751', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
  ],{});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
