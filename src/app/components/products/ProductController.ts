import { Request, Response } from 'express';
import { injectable } from 'tsyringe';
import Product from 'app/models/Product';
import { Controller, Delete, Get, Post } from 'app/decorators/http';

@injectable()
@Controller('/products')
class ProductController {

  @Get()
  async findAll (req: Request, res: Response) {
    const data = await Product.findAll();
    res.json(data);
  }

  @Post()
  async create(req: Request, res: Response) {
    const product = new Product(req.body);
    const data = await product.save();
    res.json(data);
  }

  @Delete(':id')
  async deleteById(req: Request, res: Response) {
    const data = await Product.findByPk(req.params.id);
    await data.destroy();
    res.json(data);
  }
}

export default ProductController;
