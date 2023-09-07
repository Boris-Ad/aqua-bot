import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  UnauthorizedException,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
import { Order } from '@prisma/client';
import { Request } from 'express';
import { OrderControl } from './pipes/order-control.pipe';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  async getOrders(): Promise<Order[]> {
    return this.ordersService.getOrders();
  }

  @UsePipes(OrderControl)
  @Post('create')
  @HttpCode(210)
  async createOrder(@Body() order: CreateOrderDto): Promise<Order> {
   return this.ordersService.createOrder(order);
  }

  @Get('current')
  async getUserCurrentOrders(@Req() req: Request): Promise<Order[]> {
    const telegId = parseInt(req.headers.authorization);
    if (!telegId) throw new UnauthorizedException('Не получилось авторизоваться с telegram');
    return this.ordersService.getUserCurrentOrders(telegId);
  }

  @Get('current-for-admin/:id')
  async getUserCurrentOrdersForAdmin(@Param('id') id: string): Promise<Order[]> {
    const telegId = parseInt(id);
    return this.ordersService.getUserCurrentOrders(telegId);
  }

  @Put('delete/:id')
  async setDeletedOrder(@Param('id') id: string): Promise<Order> {
    return this.ordersService.setDeletedOrder(Number(id));
  }

  @Put('complete/:id')
  async setCompleteOrder(@Param('id') id: string): Promise<Order> {
    return this.ordersService.setCompleteOrder(Number(id));
  }
}
