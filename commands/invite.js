const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
		usage: "",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
		.setDescription(`<:Link:861548098790883328> [Invite Link (ADMIN)](https://discord.com/oauth2/authorize?client_id=860428971892015145&permissions=8&scope=bot%20applications.commands)\n <:Link:861548098790883328> [Invite Link (RECOMMENDED)](https://discord.com/oauth2/authorize?client_id=860428971892015145&permissions=305450048&scope=bot%20applications.commands)`)
    .setColor("RANDOM")
    return message.channel.send(invite);
  },
};
