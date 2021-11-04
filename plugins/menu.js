const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.linkpicture.com/q/New-Project-95-8ED993F.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `━━◥꧁ད ᴍᴜʜᴀᴍᴍᴇᴅ ཌ꧂◤━━


ʜᴇʟʟᴏ ɪ'ᴍ ᴍᴜʜᴀᴍᴍᴇᴅ's ʙᴏᴛ ғᴏʀ sᴜᴘᴘᴏʀᴛ ᴜ
            *ᴛᴀᴜʀᴜs ʙᴏᴛ*


*ᴍᴇᴅɪᴀ ᴄᴏᴍᴍᴀɴᴅs*
___________________

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-song <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Downloads song for you.
➪ .song  baby love

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-video <yt link>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Downloads video from YouTube link.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎ -insta <link>
☃︎ *[ᴜsᴇ]* ☞︎︎︎   Downloads content from instagram.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎ -yt<text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎   Gives you YT links.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎ -show <show name>
☃︎ *[ᴜsᴇ]* ☞︎︎︎   Get info related to tv series and shows.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-gif 
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Converts video to gif.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-tomp3 
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Converts video into audio.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-say <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Converts text into voice.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-img <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ It sends image from google.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-trt <language code>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Translate the text you tag.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-wiki <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ It sends Wikipedia result.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-lyric <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Finds the lyrics of the song.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-covid <country code>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Send the covid stats of your country.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-weather <city>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Tells you about the weather of your place.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-removebg 
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Removes the background of tge image.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-ocr
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Finds the text written on the image.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-wallpaper
☃︎ *[ᴜsᴇ]* ☞︎︎︎ It sends you random wallpaper.

◥꧁ད ᴛᴀᴜʀᴜʂ ʙᴏᴛ ཌ꧂◤

*ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs*
_________________

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-joke 
☃︎ *[ᴜsᴇ]* ☞︎︎︎ It sends a random joke.
 
⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-meme <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Cations the image into a meme.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-quote 
☃︎ *[ᴜsᴇ]* ☞︎︎︎ It sends a random quote.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-ss <website link>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ It sends the screenshot of the website.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-changesay <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Converts text into changesay meme image.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-trumpsay
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Convert text into Trump's tweet.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-compliment 
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Gives you a compliment.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎ -bitly <link>
☃︎ *[ᴜsᴇ]* ☞︎︎︎   Shorten your link.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎ -dict 
☃︎ *[ᴜsᴇ]* ☞︎︎︎   Dictionary [-dict en;anime]

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎ -zodiac <leo> 
☃︎ *[ᴜsᴇ]* ☞︎︎︎   Tells you about your horoscope.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎ -qr <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎   Converts text into qr code.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎ -movie 
☃︎ *[ᴜsᴇ]* ☞︎︎︎  Gives you info about movie.
➪ movie master

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎ -anime <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎  Gives you info about anime.
➪ anime taurus

◥꧁ད ᴛᴀᴜʀᴜʂ ʙᴏᴛ ཌ꧂◤

*sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs*
_____________________

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-sticker 
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Converts img/gif into a sticker.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-photo 
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Converts sticker into image.

⌨︎ *[ᴄᴏᴍᴍᴀɴᴅ]* ☞︎︎︎-attp <text>
☃︎ *[ᴜsᴇ]* ☞︎︎︎ Converts text into glowing sticker.
➪ ex  attp taurus



◥꧁ད ᴛᴀᴜʀᴜʂ ʙᴏᴛ ཌ꧂◤

ᴍᴀᴅᴇ ʙʏ ᴍᴜʜᴀᴍᴍᴇᴅ

`}) 

}));
