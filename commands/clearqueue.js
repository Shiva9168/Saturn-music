const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "clearqueue",
    description: "clear the queue of the server",
		usage: "",
    aliases: ["cq"],
  },

  run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel to play music!", message.channel);

        const serverQueue = message.client.queue.get(message.guild.id);
        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return sendError("I cannot connect to your voice channel, make sure I have the proper permissions!", message.channel);
        if (!permissions.has("SPEAK")) return sendError("I cannot speak in this voice channel, make sure I have the proper permissions!", message.channel);


        if (!serverQueue)return sendError("There is nothing playing that I could stop for you.", message.channel);

        if (message.client.queue.get(message.guild.id).songs.length <= 1) return message.channel.send(`There is only one song in the queue.`);

        let serverQueues = message.client.queue.get(message.guild.id);
        serverQueues.songs = serverQueues.songs.slice(0, 1);

	let embed = new MessageEmbed()
        .setColor("RED")
        .setDescription('The server queue has been Cleared !')
       message.channel.send(embed)
    }
};
