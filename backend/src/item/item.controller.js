const { isObjectIdValid } = require("../db/database.helper");

const findAll = (req, res) => {
    const itens = [];
    res.send(itens);
};

const findById = (req, res) => {
    const id = req.params.id;
    
    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "Id inválido!" });
    }

    const item = {};

    if (!item) {
        return res.status(404).send({ message: "Item não encontrado." });
    }

    res.send(item);
};

const create = (req, res) => {
    const item = req.body;

    if (!item || !item.name || !item.imageUrl || !item.category) {
        return res.status(400).send({ message: "Dados inválidos." });
    }

    const newItem = {};

    res.status(201).send(newItem);
};

const update = (req, res) => {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "Id inválido" });
    }

    const item = req.body;

    if (!item || !item.name || !item.imageUrl || !item.category) {
        return res.status(400).send({ message: "Dados inválidos." });
    }

    const updateItem = {};

    if (!updateItem) {
        return res.send(404).send({ message: "Item não encontrado!" });
    }

    res.send({ message: "item atualizado com sucesso!" });
};

const deleteById = (req, res) => {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "Id inválido" });
    }

    const deletedItem = {};

    if (!deletedItem) {
        return res.status(404).send({ message: "Item não encontrado" });
    }

    res.send({  message: "Item excluido com sucesso!" });
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
};