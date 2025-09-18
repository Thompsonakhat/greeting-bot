import { Bot } from 'grammy';
import startCommand from './commands/start.js';
import helpCommand from './commands/help.js';

export function createBot(token) {
  const bot = new Bot(token);
  startCommand(bot);
  helpCommand(bot);
  return bot;
}
