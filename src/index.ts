import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import * as config from 'config/app';
import { registerModels } from 'app/models';
import { sync } from 'database';
import { create } from 'app/controllers/ProductController';

registerModels();
sync();

const application: express.Application = express();

application.use(express.json());

application.post('/', create);

application.listen(config.port, () => {
  console.log(`Application listening on port ${config.port}`);
});
