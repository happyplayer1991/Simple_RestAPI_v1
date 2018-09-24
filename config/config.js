module.exports = {
    host: '127.0.0.1',
    host_db: 'localhost',
    port: 5000,
    dialect: 'postgres',
    database: 'test',
    username: 'postgres',
    password: 'coolcoder01',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};