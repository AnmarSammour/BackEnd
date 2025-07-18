// Modules
const express = require('express');
const path = require('path');
const hbs = require('hbs');

// Internal imports
const router = require('./routes/index');

// Server class
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.setupMiddleware();
    this.setupViews();
  }

  setupMiddleware() {
    const publicDir = path.join(__dirname, '../public');
    this.app.use(express.static(publicDir));
    this.app.use(router);
  }

  setupViews() {
    const viewsPath = path.join(__dirname, '../views');

    this.app.set('view engine', 'hbs');
    this.app.set('views', viewsPath);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

// Bootstrapping server
const server = new Server();
server.start();

module.exports = Server;