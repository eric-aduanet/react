const express = require("express");
const { dbConnection } = require("./db/config");
require("dotenv").config();

// Escuchar peticiones
const app = express();

dbConnection();

// Directorio publico
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en puerto " + process.env.PORT);
});
