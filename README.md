# telebot-rpi
Telegram bots controlling raspberry pis 

## Some things we want to be able to do

1. Setup a Telegram Bot by searching for [@BotFather](https://telegram.me/BotFather) on Telegram and following the instructions
2. Form into groups: Earth, Wind and Fire groups.
3. SSH into your pi using raspberry as the password:
  * `ssh pi@earthpi.local`
  * `ssh pi@windpi.local`
  * `ssh pi@firepi.local`
4. Fork and clone the Telebot-rpi repository https://github.com/FarmRadioHangar/telebot-rpi
5. Run `npm install` to install the dependencies
6. Follow the instructions relevant to your group in skeleton.js for the assignment
Create some cool routines on our rpi that will be executed via your bot command using these keywords:
  * __photo__: Take a photo from a webcam.
  * __display__: Flash some text on our [display-o-tron hat](https://github.com/jorisvervuurt/JVSDisplayOTron).
  * __say__: Synthesize some text2speech into an audio file and play it on a speaker.
  * __led__: Turn some LED colors on or off
  * Play an incoming telegram voice message or audio file on a speaker.

## Libraries we will be using:

### For controlling Telegram bot API
* https://github.com/yagop/node-telegram-bot-api

### For GPIO and LED manipulation
* https://github.com/JamesBarwell/rpi-gpio.js
* For GPIO pin reference use: https://pinout.xyz/

### For the Displayotron HAT
* https://github.com/jorisvervuurt/JVSDisplayOTron

### For text to speech
* https://github.com/zlargon/google-tts

### For Webcam capture
* https://www.npmjs.com/package/node-webcam

### For Playing audio on the Pi
* https://github.com/Ap0c/node-omxplayer
