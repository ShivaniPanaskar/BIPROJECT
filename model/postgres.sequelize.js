const dbConfig = require("../config/postgres.config.js")
const Sequelize = require("sequelize")
const sequelizeConfig = new Sequelize(
    dbConfig.DB,
    dbConfig.USERNAME,
    dbConfig.PASSWORD,
    {

        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            accquire: dbConfig.pool.accquire,
            idle: dbConfig.pool.idle

        }

    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelizeConfig = sequelizeConfig
db.user = require("./user.js")(sequelizeConfig, Sequelize)
module.exports = db    //connection of db