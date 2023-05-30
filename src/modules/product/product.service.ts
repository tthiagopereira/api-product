import { Injectable } from '@nestjs/common';
import { ProductRepository } from './repository/product.repository';
import { ProductInterface } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(product: ProductInterface): Promise<void> {
    await this.productRepository.create(product);
  }

  async findAll(): Promise<ProductInterface[]> {
    return this.productRepository.findAll();
  }

  async findOne(code: string) {
    return this.productRepository.findOne(code);
  }

  async update(product: ProductInterface): Promise<ProductInterface> {
    await this.productRepository.update(product);
    return product;
  }
  async delete(productId: string) {
    await this.productRepository.delete(productId);
  }
}
