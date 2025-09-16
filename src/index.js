import 'dotenv/config';
import { createBot } from './bot.js';

const botToken = process.env.BOT_TOKEN;
if (!botToken) {
  throw new Error('BOT_TOKEN is not defined in .env');
}

const bot = createBot(botToken);
bot.start();
