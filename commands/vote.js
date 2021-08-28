const { MessageEmbed } = require("discord.js");
const emoji = require('../util/emojis.json')

module.exports = {
  info: {
    name: "vote",
    description: "Give you voting link of the bot.",
		usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
  
    
    let vote = new MessageEmbed()
		.setDescription(`[Click here](https://top.gg/bot/860428971892015145/vote) To vote for the bot.`)
    .setColor("RANDOM")
    return message.channel.send(vote);
  },
};
