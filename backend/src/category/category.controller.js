const { isObjectIdValid } = require("../db/database.helper");

const findAll = (req, res) => {
    const category = [];
    res.send(category);
};

const findById = (req, res) => {
    const id = req.params.id;
    
    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "Id inválido!" });
    }

    const category = {};

    if (!category) {
        return res.status(404).send({ message: "Id não encontrado." });
    }

    res.send(category);
};

const create = (req, res) => {
    const category = req.body;

    if (!category || !category.name) {
        return res.status(400).send({ message: "Dados inválidos." });
    }

    const newCategory = {};

    res.status(201).send(newCategory);
};

const update = (req, res) => {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "Id inválido" });
    }

    const category = req.body;

    if (!category || !category.name) {
        return res.status(400).send({ message: "Dados inválidos." });
    }

    const updateCategory = {};

    if (!updateCategory) {
        return res.send(404).send({ message: "Categoria não encontrada!" });
    }

    res.send({ message: "Categoria atualizada com sucesso!" });
};

const deleteById = (req, res) => {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "Id inválido" });
    }

    const deletedCategory = {};

    if (!deletedCategory) {
        return res.status(404).send({ message: "Categoria não encontrada" });
    }

    res.send({  message: "Categoria excluida com sucesso!" });
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
};