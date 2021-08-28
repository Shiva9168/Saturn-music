const { MessageEmbed } = require("discord.js");
const ascii = require('ascii-table');

let Table = new ascii("ServerList");
Table.setHeading(" Guild Name ", " Guild ID ", " Member Count ");

module.exports = {
  info: {
    name: "servers",
    description: "",
		usage: "",
    aliases: [],
  },

  run: async function (client, message, args) {
		if(message.author.id !== "799586054595411988") return message.channel.send("<a:b_no:836851679252316162> Only My Developer Can Use This Command!");

      const servers = message.client.guilds.cache.array().map(guild => {
				   Table.addRow( guild.name, guild.id , ` ${guild.memberCount} Users `);
  });

      console.log(Table.toString());
			await message.channel.send('All the servers and details are been posted on my console log !!')
    }
};