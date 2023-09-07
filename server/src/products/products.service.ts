import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Product, Category, Bottle } from '@prisma/client';


@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async getProductCategories(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async getProductBottles(): Promise<Bottle[]> {
    return this.prisma.bottle.findMany();
  }

  async getProductByCategory(category: string): Promise<Product[]> {
    return this.prisma.product.findMany({ where: { category: { name: category } } });
  }


}
