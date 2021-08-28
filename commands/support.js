const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "support",
    description: "Gives you the link of Support server of Bot",
		usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {

    let invite = new MessageEmbed()
    .setTitle(`Join in the Support Server!`)
    .setDescription(`[Click Here](https://discord.gg/Mbf9BaUHyJ) to join in my support server!`)
    .setColor("RANDOM")
		.setFooter(client.user.username)
    return message.channel.send(invite);
  },
};
