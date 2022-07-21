import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import * as config from 'config/app';
import { sync } from 'database';
import { container, InjectionToken, singleton } from 'tsyringe';
import { IProvider } from 'app/interfaces';
import { RouteProvider } from 'app/providers';

@singleton()
export class Application {

  server: express.Application;

  providers: InjectionToken<IProvider>[] = [
    RouteProvider
  ];

  constructor() {
    this.server = express();
    this.server.use(express.json());
  }

  registerProviders() {
    this.providers.forEach(provider => {
      const instance = container.resolve(provider);
      instance.register();
    });
  }

  start() {
    sync();
    this.server.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  }
}