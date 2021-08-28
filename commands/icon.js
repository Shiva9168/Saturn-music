const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "icon",
    description: "shows the icon of the server",
    usage: "",
    aliases: ["ic", "servericon"],
  },

  run: async function (client, message, args) {
    
    let embed = new MessageEmbed()
    
      embed.setAuthor(`${message.guild.name}`)
      embed.setImage(message.guild.iconURL({ dynamic: true, size: 1024 }))
      embed.setColor("RANDOM")
			embed.setFooter(
          `Requested By: ${message.author.tag}`,

          message.author.avatarURL({ dynamic: true }))
    
      message.channel.send(embed)
    
  }

};
