// ==== MINEFLAYER BOT SETUP ====
const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
  host: 'aternos.org',              // your server host
  port: 25565,                      // your server port
  username: 'BotUsernameHere',      // your bot’s Minecraft username
  auth: 'microsoft'                 // or 'mojang'
});

bot.on('spawn', () => {
  console.log('Bot has spawned and is online!');
});
bot.on('error', err => console.log('Error:', err));
bot.on('end', () => console.log('Bot has disconnected.'));

// ==== EXPRESS KEEP-ALIVE SERVER ====
const express = require('express'); // only declare express once
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('AFK Bot is running!'));
app.listen(PORT, () => console.log(`Web server running on port ${PORT}`));
