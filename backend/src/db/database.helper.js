const mongoose = require("mongoose");

const databaseUrl = "mongodb://127.0.0.1:27017/jornada-fullstack-avancado";
//const databaseUrl = "mongodb+srv://admin:YzOCE9cR7TOWpyCV@cluster0.nxhs41w.mongodb.net/";

const connectToDatabase = () => {
    return mongoose
        .connect(databaseUrl)
        .then(() => console.log("Banco de dados conectado com sucesso!"))
        .catch((error) => console.log("Erro na conexão com o banco.\n", error));
};

const isObjectIdValid = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

module.exports = {
    isObjectIdValid,
    connectToDatabase,
};