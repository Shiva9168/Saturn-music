const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "botinfo",
    description: "Shows the information of bot",
		usage: "",
    aliases: ["bi"],
  },

  run: async function (client, message, args) {
        let embed = new MessageEmbed()
            .setAuthor(
                client.user.username,
                client.user.displayAvatarURL({ dynamic: true })
            )
            .setColor('RANDOM')
            .addField(
                ':file_folder: General',
                `
  \`1.\` **Developer** : <@799586054595411988> \`${process.env.Dev}\`
  \`2.\` **Server's** : ** __${client.guilds.cache.size.toLocaleString()}__ **
  \`3.\` **User's** : ** __${client.guilds.cache.map(c => c.memberCount).reduce((a, b) => a + b).toLocaleString()}__ **
  `
            )
            .addField(
                ':file_cabinet: System',
                `
  \`1.\` **Node.js** : **__v12.0.0__**
  \`2.\` **Discord.js** : **__12.5.1__**
  \`3.\` **OS** : **__${process.platform}__**
  `
            )
            .addField(
                ':link: Invite Me',
                `
  [Invite Link](https://discord.com/oauth2/authorize?client_id=860428971892015145&permissions=305450048&scope=bot%20applications.commands)
  `
            )
	    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setTimestamp();
        message.channel.send(embed);

    }

};
