import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductInterface } from './interfaces/product.interface';

@Controller('api/product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':productId')
  async findOne(@Param('productId') productId: string) {
    return this.productService.findOne(productId);
  }

  @Post()
  async create(@Body() createProductDto: ProductInterface) {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Patch()
  async update(@Body() updateProductDto: ProductInterface) {
    return this.productService.update(updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
