import { Controller, Get, Param, Req } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product, Category, Bottle } from '@prisma/client';




@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  async getProducts(): Promise<Product[]> {
    return this.productsService.getProducts();
  }

  @Get('categories')
  async getProductCategories(): Promise<Category[]> {
    return this.productsService.getProductCategories();
  }

  @Get('bottles')
  async getProductBottles(): Promise<Bottle[]> {
    return this.productsService.getProductBottles();
  }

  @Get('filterByCategory/:category')
  async getProductByCategory(@Param('category') category: string): Promise<Product[]> {
    return this.productsService.getProductByCategory(category);
  }

}
