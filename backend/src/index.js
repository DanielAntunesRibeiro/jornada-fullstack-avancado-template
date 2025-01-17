// Imports
const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db/database.helper");

//Import dos Routers
const itemRouter = require("./item/item.router");
const categoryRouter = require("./category/category.router");

// Porta do servidor
const port = process.env.PORT || 3000;

async function main() {
  //conecta com o banco
  await connectToDatabase();
  // Cria o servidor `express`
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Rota principal
  app.get("/", (req, res) => {
    res.send("Olá, mundo!");
  });

  // Inicialização dos `Routers`
  app.use("/item", itemRouter);
  app.use("/category", categoryRouter);

  // Inicia o servidor
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port} para cancelar: ctrl+c`);
  });
}

main().catch((err) => console.error("Um erro inesperado ocorreu.\n", err));
