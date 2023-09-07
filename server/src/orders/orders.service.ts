import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async getOrders(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }

  async createOrder(data: CreateOrderDto): Promise<Order> {
    return this.prisma.order.create({ data });
  }

  async getUserCurrentOrders(telegId: number): Promise<Order[]> {
    return this.prisma.order.findMany({ where: { userTelegId: telegId, deleted: false } });
  }

  async setDeletedOrder(id: number): Promise<Order> {
    return this.prisma.order.update({ where: { id }, data: { deleted: true } });
  }

  async setCompleteOrder(id: number): Promise<Order> {
    return this.prisma.order.update({ where: { id }, data: { completed: true } });
  }
}
