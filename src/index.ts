import dotenv from 'dotenv';
dotenv.config();
import { sync } from 'database';

import express from 'express';

const PORT = process.env.PORT;
const isDev = process.env.NODE_ENV === 'development';

if(isDev) {
  sync();
}

const application: express.Application = express();

application.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}`);
});
