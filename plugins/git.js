const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://images.wallpapersden.com/image/download/pokemon-detective-pikachu-4k_a2lrZmWUmZqaraWkpJRsZ2WtbGdl.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*TAURUS BOT BY MUHAMMED*


*Creator number : wa.me/919961050829?text=Hi%20muhammed%20*



*Bot setting video soon on : https://youtube.com/channel/UCeYZqtAtdYq8VwSIkW34JMA .*



*Githublink (Setup)  :    https://github.com/muhammed-usrbot/taurus_bot .*


*Audio commads :   https://github.com/muhammed-usrbot/taurus_bot/tree/master/uploads .*


*Sticker commads : https://github.com/muhammed-usrbot/taurus_bot/tree/master/sticker .*


*For More Updates Subscribe The Channel ☝*

© MUHAMMED 
`}) 

}));
