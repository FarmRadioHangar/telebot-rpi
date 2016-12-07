# telebot-rpi
Telegram bots controlling raspberry pis 

## Some things we want to be able to do

1. Setup a Telegram Bot by searching for @BotFather on Telegram and following the instructions
2. Form into groups: Earth, Wind and Fire groups.
3. SSH into your pi using raspberry as the password:
  * pi@earthpi.local
  * pi@windpi.local
  * pi@firepi.local
4. Fork the Telebot-rpi reponsitory https://github.com/FarmRadioHangar/telebot-rpi
5. Follow the instructions in skeleton.js for the assignment
Create some cool routines on our rpi that will be executed with command keywords:
  * __photo__: Take a photo from a webcam.
  * __display__: Flash some text on our [display-o-tron hat](https://github.com/jorisvervuurt/JVSDisplayOTron).
  * __say__: Synthesize some text2speech into an audio file and play it on a speaker.
  * __led__: Turn some LED colors on or off
  * Play an incoming telegram voice message or audio file on a speaker (may not require a keywork/command).

## Libraries we will use:

### For controlling Telegram bot API
* https://github.com/yagop/node-telegram-bot-api

### For GPIO and LED manipulation
* https://github.com/JamesBarwell/rpi-gpio.js

### For the Displayotron HAT
* https://github.com/jorisvervuurt/JVSDisplayOTron

### For text to speech
* https://github.com/zlargon/google-tts

### For Webcam capture
* https://www.npmjs.com/package/node-webcam

### For Playing audio on the Pi
* https://github.com/Ap0c/node-omxplayer





## Node installations

Taken from [Beginners guide to installing nodejs on rpi](http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/)
```
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt install nodejs
node -v
```

Update the npm default directories [taken from here] (https://docs.npmjs.com/getting-started/fixing-npm-permissions#option-2-change-npms-default-directory-to-another-directory)

* Make a directory for global installations:
```
mkdir ~/.npm-global
```
* Configure npm to use the new directory path:
```
npm config set prefix '~/.npm-global'
```
* Append to your ~/.profile file and update your system variables:
```
echo 'export PATH=~/.npm-global/bin:$PATH' >>~/.profile
echo 'export NODE_PATH=~/.npm-global/lib/node_modules' >>~/.profile | source ~/.profile
```
* Test: Download a package globally without using sudo.
```
npm install -g jshint
```
### Install the telegram-bot-api
```
npm install -g telegram-bot-api
```

##  Python installations

```
sudo apt-get install python-pip
sudo pip install telepot
```


## setting up some things for the rPi

### The usb webcam
```
sudo apt-get install fswebcam
```

# A few ideas for bonus:
* Create a branch for each group in the repository 
* Each team pulls their respective repository 
* Once it is working on the master
* accept pull requests and merge?
* Then each group can test on their own pis the functions the others have created.

## Turn webcam into gifcam instead!
* https://hackaday.io/project/16358-pix-e-gif-camera

## Make the bot run in inline mode!
