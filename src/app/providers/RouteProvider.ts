import { Request, Response, NextFunction } from 'express';
import { IController, IMiddleware, IRoute, IRouteProvider } from 'app/interfaces';
import { autoInjectable, container, delay, inject, InjectionToken, singleton } from 'tsyringe';
import ProductController from 'app/components/products/ProductController';
import { Application } from 'start/Application';

@singleton()
@autoInjectable()
export class RouteProvider implements IRouteProvider {

  constructor(@inject(delay(() => Application)) protected application: Application) {}

  root = '/api';

  controllers: InjectionToken<IController>[] = [
    ProductController
  ];

  register() {
    this.controllers.forEach(controller => {
      const instance = container.resolve(controller);
      const prefix = Reflect.getMetadata('prefix', controller);
      const routes: Array<IRoute> = Reflect.getMetadata('routes', controller);
      const middleware: Array<IMiddleware> = Reflect.getMetadata('middleware', controller) || ((req: Request, res: Response, next: NextFunction) => next());
      routes.forEach(route => {
        this.application.server[route.requestMethod]('/api' + prefix + route.path, middleware, (req: Request, res: Response, next: NextFunction) => {
          instance[route.methodName](req, res, next);
        });
      });
    });
  }
}