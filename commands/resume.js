const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "resume",
    description: "To resume the paused music",
		usage: "",
    aliases: ["res"],
  },

  run: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
	if (serverQueue && !serverQueue.playing) {
		serverQueue.playing = true;
		serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("▶️ Music has been Resumed!")
       
   return message.channel.send(xd);
  }
},
};
