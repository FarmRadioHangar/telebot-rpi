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

## Libraries we will use:

* https://www.npmjs.com/package/rpi-gpio


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
