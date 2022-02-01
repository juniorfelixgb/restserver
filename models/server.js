const express = require("express"),
      cors = require('cors');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 8080;
    this.usersPath = '/api/users';
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user.routes'));
  }

  listen() {
    this.app.listen(this.PORT, () => console.log(`Trabajando en el puerto: ${this.PORT}`));
  }
}

module.exports = Server;
