import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Ctx, Start, Update, InjectBot, On } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Injectable()
@Update()
export class TelegramService {
  constructor(@InjectBot() private bot: Telegraf<Context>, private configService: ConfigService) {}

  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.replyWithPhoto(
      'https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808?h=270&quality=medium&resize=1&w=480',
      {
        caption: 'Доставка воды',
        reply_markup: {
          inline_keyboard: [[{ text: 'Сделать заказ', web_app: { url: 'https://aqua-bot.tw1.ru' } }]],
        },
      },
    );
  }

  // @On('message')
  // async on(@Ctx() ctx: Context) {
  //   await ctx.reply('👍');
  // }

  async sendMessage(address: string, reply_id: number) {
    const chatId = this.configService.get('CHAT_ID');
    this.bot.telegram.sendMessage(
      761362383,
      'Заказ на доставку, адрес: ' + address,{reply_markup:{force_reply:true}}
    );
  }
}
