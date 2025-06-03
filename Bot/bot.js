import { Telegraf } from "telegraf";
import dotenv from 'dotenv';
dotenv.config();


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome'));

bot.catch((err, ctx) => {
    console.error('Bot error:', err);
  });
  
bot.launch();
