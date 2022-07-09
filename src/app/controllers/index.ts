import { Application, Router } from 'express';
import ProductController from './ProductController';

const register = (controllers) => (application: Application) => {
  controllers.forEach((controller) => {
    const router = Router();
    const instance = new controller();
    const actions = Object.keys(instance);
    actions.forEach((action) => {
      if(typeof instance[action] === 'function') {
        instance[action](router);
      }
    });
    application.use(`/api/${instance.path}`, router);
  });
};

const registerContollers = register([ ProductController ]);

export { registerContollers };