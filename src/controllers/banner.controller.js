import db from "../models/index.js";

const Banner = db.banners;
const Op = db.Sequelize.Op;

export const createBanner = async (req, res) => {
  if (req.body.title == "") {
    res.status(400).send({
      message: "Title can not be empty!",
    });
    return;
  }

  const banner = {
    title: req.body.title,
    description: req.body.description,
    linkTitle: req.body.linkTitle,
    link: req.body.link,
    expirationTime: req.body.expirationTime,
    color: req.body.color,
    showBanner: req.body.showBanner == "true" ? req.body.showBanner : false,
  };

  try {
    const data = await Banner.create(banner);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Banner.",
    });
  }
};

export const getBanners = async (req, res) => {
    try {
        const data = await Banner.findAll();
        res.send(data);
    } catch (err) {
        res.status(500).send({
        message: err.message || "Some error occurred while retrieving banners.",
        });
    }
}

export const getBannerById = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Banner.findByPk(id);
        res.send(data);
    } catch (err) {
        res.status(500).send({
        message: "Error retrieving Banner with id=" + id,
        });
    }
}

export const updateBanner = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Banner.update(req.body, {
            where: { id: id },
        });
        if (data == 1) {
            res.send({
                message: "Banner was updated successfully.",
            });
        } else {
            res.send({
                message: `Cannot update Banner with id=${id}. Maybe Banner was not found or req.body is empty!`,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error updating Banner with id=" + id,
        });
    }
}

export const deleteBanner = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await Banner.destroy({
            where: { id: id },
        });
        if (data == 1) {
            res.send({
                message: "Banner was deleted successfully!",
            });
        } else {
            res.send({
                message: `Cannot delete Banner with id=${id}. Maybe Banner was not found!`,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Could not delete Banner with id=" + id,
        });
    }
}