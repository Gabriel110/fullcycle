const path = require("path")

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'postgres_api',
      database: 'user',
      user:     'postgres',
      password: 'postgres'
    },

    migrations:{
      directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    seeds:{
      directory: path.resolve(__dirname, "src", "database", "seeds")
    },
    useNullAsDefault: true
  }
};
