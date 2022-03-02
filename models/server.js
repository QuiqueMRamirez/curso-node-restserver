const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usuariosPath = '/api/usuarios';
    //middlewares
    this.middlewares();
    //rutas de mi app
    this.routes();
  }

  middlewares() {
    //directorio publico
    this.app.use(express.static("public"));
    //cors
    this.app.use(cors());

    //parseo y lectura del body
    this.app.use( express.json());
  }

  routes() {
    this.app.use(this.usuariosPath,require('../routes/user'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("App escuchando en el puerto", this.port);
    });
  }
}

module.exports = Server;
