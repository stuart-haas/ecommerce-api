import { Router, Request, Response } from 'express';
import { Product } from 'app/models';
import IController from './IController';
class ProductController implements IController {
  path = 'products';

  findAll = (router: Router) => {
    router.get('/', async (req: Request, res: Response) => {
      const data = await Product.findAll();
      res.json(data);
    });
  };

  create = (router: Router) => {
    router.post('/', async (req: Request, res: Response) => {
      const data = await Product.create(req.body);
      res.json(data);
    });
  };

  deleteById = (router: Router) => {
    router.delete('/:id', async (req: Request, res: Response) => {
      const data = await Product.findByPk(req.params.id);
      await data.destroy();
      res.json(data);
    });
  };
}

export default ProductController;
