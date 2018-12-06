// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/12-6-18g4'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};