const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);
const data = [];

bot.start((ctx) => {
    ctx.reply('Welcome')
    data.push(ctx.message.chat)
    // bot.telegram.sendMessage('dahlin_sol', JSON.stringify(data))
    console.log(bot.context)
});

bot.help((ctx) => ctx.reply('Send me a sticker'));

bot.on('message', (ctx) => {
console.log(ctx.message)
})
bot.hears('hi', (ctx) => ctx.reply('Hey there'));








bot.launch();