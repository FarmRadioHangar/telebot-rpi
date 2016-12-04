# telebot-rpi
Telegram bots controlling raspberry pis 

## Some things we want to be able to do

1. Setup a Telegram Bot
2. Setup  [telegram-bot-cli](https://www.npmjs.com/package/telegram-bot-api) on our raspberry pi
3. Create some cool routines on our rpi that will be executed with a keyword:
..* "photo" Take a photo from a webcam
..* "display" Flash some text on our [display-o-tron hat](https://github.com/jorisvervuurt/JVSDisplayOTron)
..* "say" Synthesize some text2speech into an audio file and play it on a speaker
..* "play" Play an incoming telegram voice message or audio file on a speaker (may not require a keywork/command)
4. Make it all run through a restful API
