import { Telegraf } from "telegraf";
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const web_link = 'https://telegram-food-bot.vercel.app/';


const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => {
  ctx.reply('Welcome to the food bot!', {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
      resize_keyboard: true,
      one_time_keyboard: true
    }
  });
});

// bot.start((ctx) => ctx.reply('Welcome', {
//   reply_markup: {keyboard: [[{text: "web app", web_app: {url: web_link}}]]},
// }));

// bot.catch((err, ctx) => {
//     console.error('Bot error:', err);
//   });
  
  
bot.launch();


bot.command('order', async (ctx) => {
  const orderData = {
    userId: ctx.from.id,
    items: [/* from user's session */],
    total: 25.50
  };

  await fetch('http://localhost:5000/api/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
    headers: { 'Content-Type': 'application/json' }
  });

  ctx.reply('🛒 Order placed successfully!');
});

