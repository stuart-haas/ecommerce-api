import { Product } from 'app/models';

export const sync = async () => Promise.all([
  await Product.sync({ force: true }),
]).catch((e) => console.log(e));
