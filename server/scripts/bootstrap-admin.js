// Script to bootstrap the first admin user for ODK Central
// Usage: node server/scripts/bootstrap-admin.js

const { createUser, promoteUser } = require('../lib/task/account');

const email = process.env.BOOTSTRAP_ADMIN_EMAIL || 'administrator@email.com';
const password = process.env.BOOTSTRAP_ADMIN_PASSWORD || 'adminpassword';

createUser(email, password)
  .then(() => promoteUser(email))
  .then(() => {
    console.log(`Admin user ${email} created and promoted.`);
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error creating admin user:', err);
    process.exit(1);
  });
