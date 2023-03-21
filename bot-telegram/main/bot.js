const { Telegraf } = require('telegraf')

const bot = new Telegraf("5829919079:AAGqlkOlgAfpJD-Brm4nxqFSBmWD5k8s2xY")
bot.start((ctx) => {
    ctx.reply(`Siapa kamu kontol ?`);
    bot.hears('manusia', (ctx) => ctx.reply('manusia kontol'))
})

// bot.hears('Siapa Kamu Kontol ?', (ctx) => {
//     const fullName = ctx.from.first_name + " " + ctx.from.last_name;
//     ctx.reply(`Oalah si ${fullName}, kenapa lo ngechat ?`)
// })

// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()