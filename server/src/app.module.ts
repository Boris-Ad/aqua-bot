import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { OrdersModule } from './orders/orders.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    AdminModule,
    ProductsModule,
    DatabaseModule,
    UserModule,
    OrdersModule,
    TelegramModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
