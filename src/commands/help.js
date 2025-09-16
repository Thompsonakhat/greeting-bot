export default function helpCommand(bot) {
  bot.command('help', (ctx) => {
    ctx.reply('Available commands: /start - Show welcome message, /help - Show help');
  });
}