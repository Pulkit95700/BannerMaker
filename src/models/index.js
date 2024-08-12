import config from "../db/dbConfig.js";
import Banner from "./banner.model.js";
import Sequelize from "sequelize";

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  banners: Banner(sequelize, Sequelize),
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.banners = Banner(sequelize, Sequelize);

export default db;
