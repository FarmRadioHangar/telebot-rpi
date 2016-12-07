/*
 * ============================================================================
 *
 *                 -  A  R  U  S  H  A      C  O  D  E  R  S  -
 *             ___  ___   _______  ___  _______  _____  __   ___  ____
 *            / _ \/ _ | / __/ _ \/ _ )/ __/ _ \/ _ \ \/ /  / _ \/  _/
 *           / , _/ __ |_\ \/ ___/ _  / _// , _/ , _/\  /  / ___// /
 *          /_/|_/_/ |_/___/_/  /____/___/_/|_/_/|_| /_/  /_/  /___/
 *        ____________   ____________  ___   __  ___   ___  ____  ______
 *       /_  __/ __/ /  / __/ ___/ _ \/ _ | /  |/  /  / _ )/ __ \/_  __/
 *        / / / _// /__/ _// (_ / , _/ __ |/ /|_/ /  / _  / /_/ / / /
 *       /_/ /___/____/___/\___/_/|_/_/ |_/_/  /_/  /____/\____/ /_/
 *
 *              H  A  C  K  I  N  G    C  H  A  L  L  E  N  G  E
 *
 * ============================================================================
 */
var TelegramBot     = require('node-telegram-bot-api');
var JVSDisplayOTron = require('jvsdisplayotron');
var gpio            = require('rpi-gpio');
var Omx             = require('node-omxplayer');
var googleTTS       = require('google-tts-api');
var NodeWebcam      = require('node-webcam');

/* Insert the Telegram token you received from @BotFather here */
var token = '293313214:AAFwlEruamuMSRpDs7R40FQ4SaOphlhJh_0';

/* Instantiate the bot */
var bot = new TelegramBot(token, { polling: true });

// ============================================================================
// GROUP 1: EARTH
// ============================================================================

/*
 * Display some text on the Display-O-Tron hat (not the dot3k).
 *
 * For code examples, see: 
 * https://github.com/jorisvervuurt/JVSDisplayOTron/tree/master/examples/dothat
 *
 * The command syntax on Telegram is as follows:
 *
 *   /display <color> <text-to-display>
 *
 * where color should be one of red, green, blue, or rainbow.
 *
 */
bot.onText(/\/display\s(red|green|blue|rainbow|yellow)\s(.+)/, function(message, match) {

  var dothat = new JVSDisplayOTron.DOTHAT();

  // Set the display contrast to a better-readable value.
  dothat.lcd.setContrast(45);


  // Set all backlight LEDs to a hue value of 0.5.
  dothat.backlight.setToHue(0.6);

  var chatId = message.chat.id;

  var color = match[1];
  var text  = match[2];    // The text to display

  console.log(color)
  console.log(text);

  switch (color) {

    case 'red':
      dothat.backlight.setToRGB(255, 0, 0);
      break;

    case 'blue':
      dothat.backlight.setToRGB(0, 0, 255);
      break;

    case 'green':
      dothat.backlight.setToRGB(0, 255, 0);
      break;

    case 'yellow':
      dothat.backlight.setToRGB(255, 255, 0);
      break;
    
    default:
      dothat.backlight.setToRGB(255, 255, 255);
      break;
      
  }

  dothat.lcd.write(text);

  // Insert your implementation here using the JVSDisplayOTron library.

});

// ============================================================================
// GROUP 2: WIND
// ============================================================================

/*
 * Send the Pi some text to read out loud using the text-to-speech synthesizer.
 *
 * The command syntax on Telegram is as follows:
 *
 *   /say <text-to-read-out>
 *
 */
bot.onText(/\/say\s(.+)/, function(message, match) {

  var chatId = message.chat.id;

  var string = match[1];         // The text to be read out

  // Insert your implementation here using the Google TTS and Omx libraries.

});

/*
 * Send the Pi a Telegram voice message to be played out loud over the speaker.
 *
 * You invoke this command by sending a Telegram voice message to the bot.
 *
 */
bot.on('voice', function(message) {

  var chatId = message.chat.id;

  // Insert your implementation here using the Omx library.

  // To play the audio clip, you first need to download the file using the
  // following API call: https://github.com/yagop/node-telegram-bot-api#TelegramBot+downloadFile

  // Hint: console.log the message to get details of the object

});

// ============================================================================
// GROUP 3: FIRE
// ============================================================================

/*
 * Turn on and off LEDs of different colors on the rPi.
 *
 * The command syntax on Telegram is as follows:
 *
 *   /led <red|green|yellow> <on|off>
 *
 */
bot.onText(/\/led\s(red|green|yellow)\s(on|off)/, function(message, match) {

  var chatId = message.chat.id;

  var color  = match[1]; 
  var state  = match[2];   // 'on' or 'off'

  // Insert your implementation here using the gpio library.

});

/*
 * Take a photo with the webcam.
 *
 * The command syntax on Telegram is as follows:
 *
 *   /photo <filename> 
 *
 */
bot.onText(/\/photo\s(.+)/, function(message, match) {

  var chatId = message.chat.id;

  var name = match[1];           // The filename without file extension

  // Insert your implementation here using the NodeWebcam library.

});

// ============================================================================
// EVERYONE (OPTIONAL)
// ============================================================================

/*
 * Bonus assignment
 *
 * Go crazy and create your own bot service, e.g., /weather to get the 
 * weather conditions in a city or location.
 *
 */
bot.onText(/\/your_command (.+)/, function(message, match) {

  var chatId = message.chat.id;

  // Insert your implementation here.

});
