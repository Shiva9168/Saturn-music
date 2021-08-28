const { version } = require("discord.js")
const { MessageEmbed } = require("discord.js")

module.exports = {
    info: {
        name: "stats",
        description: "Check the stats of the bot",
				usage: "",
				aliases: [],
    },

    run: async function (client, message, args) {

        let servers_count = message.client.guilds.cache.size;
        var myarray = [];
        message.client.guilds.cache.keyArray().forEach(async function(item, index) {
            
        let guildMember = message.client.guilds.cache.get(item).memberCount;
        myarray.push(guildMember)
        })
        let sum = myarray.reduce(function (a, b) {
        return a + b
        });

        let days = Math.floor(client.uptime / 86400000 );
        let hours = Math.floor(client.uptime / 3600000 ) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;
        const uptime = `\`\`\`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds\`\`\``;
        const servers = client.guilds.cache.size
        const ram = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)


            const embed = new MessageEmbed()

            .setTitle(`${client.user.username}`)
            .setURL(`https://dsc.gg/saturnmusic`)
            .setColor("#fe0000")
            .setDescription(`Hey My Name is **${client.user.username}** and My Prefix is \`s,\` `)
            .setAuthor(`${client.user.username}`, `${client.user.avatarURL()}`)
            .addField("Servers:", `\`\`\`${servers}\`\`\``, true)
            .addField("Users:", `\`\`\`${sum}\`\`\``, true)
            .addField("Uptime:", `${uptime}`)
            .addField("Ram:", `\`\`\`${ram}MB\`\`\``)
            .addField("Bot Developer:", `<@!799586054595411988> \`${process.env.Dev}\` `)
						.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({dynamic: true}))
            .setTimestamp();

            message.channel.send(embed)
        }
}
