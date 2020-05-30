import { getRepository } from 'typeorm';
import Product from '../models/Product';

interface Request {
  img: string;

  name: string;

  price: number;

  desc: string;
}

class CreateProductService {
  public async execute({ img, name, price, desc }: Request): Promise<Product> {
    const productRepository = getRepository(Product);
    const product = productRepository.create({
      img,
      name,
      price,
      desc,
    });
    await productRepository.save(product);
    return product;
  }
}

export default CreateProductService;
