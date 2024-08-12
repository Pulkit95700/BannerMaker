const Banner = (sequelize, Sequelize) => {
  const Banner = sequelize.define("banner", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    linkTitle: {
      type: Sequelize.STRING,
    },
    link: {
      type: Sequelize.STRING,
    },
    expirationTime: {
      type: Sequelize.DATE,
    },
    color: {
      type: Sequelize.STRING,
    },
    showBanner: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Banner;
};

export default Banner;
