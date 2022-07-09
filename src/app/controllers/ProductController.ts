import { Request, Response } from 'express';
import { Product } from 'app/models';

export async function create(req: Request, res: Response) {
  const data = await Product.create(req.body);
  res.json(data);
}