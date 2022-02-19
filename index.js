require("dotenv").config(); //initialize dotenv
const Discord = require("discord.js"); //import discord.js

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.content.includes("!code ```") && !msg.author.bot) {
    try {
      const codeLine = 'var process = {}; var global = {}; ' + msg.content.match(/!code[\n ]+`{3}(.*)`{3}/is)[1];
      let result = Function(codeLine)();
      msg.reply(result.toString());
    } catch (error) {
      msg.reply(error.toString());
    }
  }
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token
