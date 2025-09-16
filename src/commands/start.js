export default function startCommand(bot) {
  bot.command('start', (ctx) => {
    ctx.reply('Welcome to the Greeting Bot!');
  });
}