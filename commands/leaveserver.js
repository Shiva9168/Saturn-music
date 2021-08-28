const { MessageEmbed } = require("discord.js");
const rgx = /^(?:<@!?)?(\d+)>?$/;

module.exports = {
  info: {
    name: "leaveserver",
    description: "",
		usage: "",
    aliases: ["leaveguild", "ls"],
  },

  run: async function (client, message, args) {
		if(message.author.id !== "799586054595411988") return message.channel.send("<a:b_no:836851679252316162> Only My Developer Can Use This Command!");

		    const guildId = args[0] || message.guild;
    if (!rgx.test(guildId))
    return;

    const guild = message.client.guilds.cache.get(guildId);

    if (!guild) return;
    await guild.leave();

    await message.channel.send(`Successfully Left the guild **\`${guild.name}\`** with **\`${guild.memberCount}\`** Users👋`);

  }
};
