import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { OrdersService } from '../orders.service';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrderControl implements PipeTransform {
  constructor(private ordersService: OrdersService) {}

  async transform(value: CreateOrderDto) {
    const orders = await this.ordersService.getUserCurrentOrders(value.userTelegId);
    const today = new Date().getDate();
    const todayOrders = orders.filter((order) => new Date(order.createdAt).getDate() === today);

    const todayDelivery = todayOrders.filter((order) => !order.daily && !order.completed);
    const dailyDelivery = orders.filter((order) => order.daily);

    const message =
      value.categoryName === 'cleared'
        ? 'Заказ воды Очистка премиум на этот адрес уже есть, отмените предыдущий'
        : 'Заказ воды Родниковая на этот адрес уже есть, отмените предыдущий';

    if (!value.daily) {
      const allTodayDeliveryByAddress = todayDelivery.filter((order) => order.address === value.address);
      const checkDoubleCategoryByToday = allTodayDeliveryByAddress.findIndex((item) => item.categoryName === value.categoryName);
      if (checkDoubleCategoryByToday >= 0) {
        throw new BadRequestException({ error: 'order', message });
      }
    } else {
      const allDailyDeliveryByAddress = dailyDelivery.filter((order) => order.address === value.address);
      const checkDoubleCategoryByDaily = allDailyDeliveryByAddress.findIndex((item) => item.categoryName === value.categoryName);
      if (checkDoubleCategoryByDaily >= 0) {
        throw new BadRequestException({ error: 'order', message });
      }
    }

    return value;
  }
}
