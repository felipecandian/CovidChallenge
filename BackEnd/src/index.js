import express from 'express';

import './database';
import path from 'path';

import 'dotenv/config';
import routes from './routes';

class App {
   constructor() {
      this.server = express();
      this.middlewares();
      this.routes();
   }

   middlewares() {
      this.server.use(express.json());
      this.server.use(
         '/files',
         express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
      );
   }

   routes() {
      this.server.use(routes);
   }
}

export default new App().server;
