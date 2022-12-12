const { isObjectIdValid } = require("../db/database.helper");
const service = require("./category.service")

const findAll = async (req, res) => {
    const Category = await service.findAll();
    res.send(Category);
};

module.exports = {
    findAll,
};