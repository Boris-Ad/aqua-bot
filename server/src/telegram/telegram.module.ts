import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramService } from './telegram.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { telegramConfig } from './telegram.config';
import { TelegramController } from './telegram.controller';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: telegramConfig,
    }),
    
  ],
  providers: [TelegramService, ConfigService],
  controllers: [TelegramController],
})
export class TelegramModule {}
