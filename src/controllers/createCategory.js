const { Categories } = require("../db");
// const { Op } = require("sequelize");

const createCategory = async (name) => {
  const newCategory = await Categories.create({ name });

  return newCategory;
};

module.exports = { createCategory };