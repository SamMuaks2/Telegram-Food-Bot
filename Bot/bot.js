import { Telegraf } from "telegraf";
import dotenv from 'dotenv';
dotenv.config();

const web_link = 'https://telegram-food-bot.vercel.app/';


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome', {
  reply_markup: {keyboard: [[{text: "web app", web_app: web_link}]]},
}));

bot.catch((err, ctx) => {
    console.error('Bot error:', err);
  });
  
bot.launch();
