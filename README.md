# telebot-rpi
Telegram bots controlling raspberry pis 

## Some things we want to be able to do

1. Setup a Telegram Bot
2. Setup  [telegram-bot-cli](https://www.npmjs.com/package/telegram-bot-api) on our raspberry pi
3. Create some cool routines on our rpi that will be executed with a keyword:
  * __photo__: Take a photo from a webcam.
  * __display__: Flash some text on our [display-o-tron hat](https://github.com/jorisvervuurt/JVSDisplayOTron).
  * __say__: Synthesize some text2speech into an audio file and play it on a speaker.
  * __play__: Play an incoming telegram voice message or audio file on a speaker (may not require a keywork/command).
4. Link the above routines to a node server running with a restful API

## Node installations

`curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -`

##  Python installations

`sudo apt-get install python-pip`
`sudo pip install telepot`

