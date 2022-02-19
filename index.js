require("dotenv").config(); //initialize dotenv
const Discord = require("discord.js"); //import discord.js
const { fork } = require("child_process");

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.content.includes("!code ```") && !msg.author.bot) {
    try {
      const result = fork("child.js");
      setTimeout(() => {
        if (!result.killed) msg.reply("Error Timeout");
        result.kill();
      }, 5000);
      result.send(msg);
      result.on("message", (res) => {
        result.kill();
        msg.reply(JSON.stringify(res));
      });
    } catch (error) {
      msg.reply(error.toString());
    }
  }
});

client.login(process.env.CLIENT_TOKEN); //login bot using token
