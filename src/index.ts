import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import * as config from 'config/app';
import { registerModels } from 'app/models';
import { registerContollers } from 'app/controllers';
import { sync } from 'database';

const application: express.Application = express();

application.use(express.json());

registerModels();
registerContollers(application);

sync();

application.listen(config.port, () => {
  console.log(`Application listening on port ${config.port}`);
});
