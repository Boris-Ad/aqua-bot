import { ConfigService } from '@nestjs/config';
import { TelegrafModuleOptions } from 'nestjs-telegraf';

export const telegramConfig = async (configService: ConfigService): Promise<TelegrafModuleOptions> => ({
  token: configService.get('TOKEN'),
});