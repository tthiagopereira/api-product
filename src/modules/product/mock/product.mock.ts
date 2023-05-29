import { ProductInterface } from '../interfaces/product.interface';

export class ProductModelMock {
  constructor(private data: ProductInterface) {}

  save = jest.fn().mockResolvedValue(this.data);
  findOne = jest.fn().mockResolvedValue(this.data);
  updateOne = jest.fn().mockResolvedValue({ nModified: 1 });
  deleteOne = jest.fn().mockResolvedValue({ nRemoved: 1 });
}
