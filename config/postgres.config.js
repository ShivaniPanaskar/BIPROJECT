module.exports = {
    HOST: "localhost",
    PORT: "5432",
    USERNAME: "postgres",
    PASSWORD: "root",
    DB: "tutorial",
    dialect: "postgres",
    pool: {
        idle: 2000,
        accquire: 10000,
        max: 10,
        min: 0
    }

}