import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductInterface>,
  ) {}

  async create(product: ProductInterface): Promise<ProductInterface> {
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async findAll(): Promise<ProductInterface[]> {
    return this.productModel.find().exec();
  }

  async findOne(code: string): Promise<ProductInterface> {
    return this.productModel.findOne({ productId: code }).exec();
  }

  async update(product: ProductInterface): Promise<void> {
    await this.productModel.updateOne(
      { productId: product.productId },
      { $set: { price: product.price } },
    );
  }

  async delete(productId: string) {
    return this.productModel.deleteOne({ productId: productId });
  }
}
