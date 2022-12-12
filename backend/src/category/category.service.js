const Category = require("./category.model");
const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
    return Category.find()
};

module.exports = {
    findAll,
};