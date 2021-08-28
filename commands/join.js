const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
    info: {
        name: "join",
        aliases: ["join", "connect"],
				usage: "",
        description: "join The Voice Channel!",
    },

    run: async function (client, message, args) {
        let channel = message.member.voice.channel;
        if (!channel) return sendError("I'm sorry but you need to be in a voice channel!", message.channel);

				const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return sendError("I cannot connect to your voice channel, make sure I have the proper permissions!", message.channel);
        if (!permissions.has("SPEAK")) return sendError("I cannot speak in this voice channel, make sure I have the proper permissions!", message.channel);

        try {
					message.member.voice.channel.join()
				} catch (error) {
					(message.guild.me.id);
            return sendError("Trying To join The Voice Channel...", message.channel);
        }

        const Embed = new MessageEmbed()
            .setAuthor("Join Voice Channel", "https://tinyurl.com/saturnlogo")
            .setColor("RANDOM")
            .setTitle("Success")
            .setDescription("🎶 Joined The Voice Channel.")
            .setTimestamp();

        return message.channel.send(Embed).catch(() => message.channel.send("🎶 Joined The Voice Channel :)"));
    },
};