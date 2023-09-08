import { Body, Controller, Post, Req } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { Request } from 'express';

@Controller('telegram')
export class TelegramController {
  constructor(private telegramService: TelegramService) {}

  @Post()
  async sendMessage(@Body() data: { address: string }, @Req() req: Request) {
    const telegId = parseInt(req.headers.authorization);
    return this.telegramService.sendMessage(data.address,telegId);
  }
}
