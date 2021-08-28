const { MessageEmbed } = require('discord.js')


module.exports = {
  info: {
    name: "ping",
    description: "Shows  Latency and API of bot",
		usage: "",
    aliases: [" "],
  },

    run: async function (client, message, args) {
			const m = await message.channel.send("Hold on .....")
  
  const embed = new MessageEmbed()
  .setTitle("🏓 Pong!")
  .setColor('RANDOM')
  .setTimestamp()
  .addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`, false)
  .addField("API Latency", `${Math.round(client.ws.ping)}ms`, false)

  m.edit(embed)

	
    }
}