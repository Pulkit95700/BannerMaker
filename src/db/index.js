import db from "../models/index.js";

const connectDB = async () => {
  await db.sequelize.sync();
};

export { connectDB };
