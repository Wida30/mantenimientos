const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");

const maintenancesRoute = require('./src/api/routes/maintenance.routes');
const storesRoute = require('./src/api/routes/store.routes');


const { connect } = require("./src/utils/database");
dotenv.config(); // 2 configuramos el dotenv

const server = express(); // 1 despues de traer express y dotend y Creo mi servidor express

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

connect()




server.use(logger("dev"))



// 5 CONFIGURAMOS LOS HEADERS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// 6 CONFIGURAMOS LAS CORS (Aquí definimos quien puede hacer peticiones a mi servidor)
server.use(cors({
    origin: "*",
    credentials: true
}))



server.use("/maintenances", maintenancesRoute)
server.use("/stores", storesRoute);


const PORT = process.env.PORT || 8000; //  3 definimos puero

server.listen (PORT, () => {
    console.log(`Server run in http://localhost:${PORT}`);
}); // 4 escuchamos puerto