import { Body, Controller, Post } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private telegramService: TelegramService) {}

  @Post()
  async sendMessage(@Body() data:{address:string}) {
   return this.telegramService.sendMessage(data.address);
  }
}
