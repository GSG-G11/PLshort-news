const { join } = require('path');
const { writeFileSync } = require('fs');

const data = require('./dataOfTest.json');
const { hashPassword } = require('../controllers/handleHash');

module.exports = {
  rebuild: async () => {
    const user = {
      id: 1,
      email: 'Admin_123@admin.com',
      password: await hashPassword('Admin_123@admin.com'),
    };

    data.users = [];
    data.users.push(user);
    try {
      writeFileSync(
        join(__dirname, '..', 'models', 'dataOfTest.json'),
        `${JSON.stringify(data, null, 2)}\n`,
      );
    } catch (err) {
      console.log(err);
    }
  },
};
