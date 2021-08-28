const { MessageEmbed } = require('discord.js')
const emoji = require('../util/emojis.json')


module.exports = {
    info: {
        name: "help",
        description: "To show all commands",
				usage: "",
        aliases: ["commands"]
    },

    run: async function(client, message, args){

        let embed = new MessageEmbed()
        .setAuthor("Commands of "+client.user.username, "https://tinyurl.com/saturnlogo")
        .setColor("RANDOM")
                .setDescription(`My Prefix For **${message.guild.name}** Is \`${process.env.PREFIX}\` `)
                .addField(`${emoji.Music1} __**Music Commands**__`, "```play, skip, join, leave, volume, queue, np, stop, loop, pause, resume, lyrics, playlist, shuffle, skipto, search, clearqueue```", false)
                .addField(`${emoji.Tools1} __**Utility Commands**__`, "```ping, invite, uptime, serverinfo, stats, botinfo, avatar, icon, support, vote, feedback, bugreport```", false)
								.addField(`${emoji.Dev} __**Developer Commands**__`, "```eval, serverlist```", false)
								.addField(`<:Link:861548098790883328> **Links**`, "[Invite](https://discord.com/oauth2/authorize?client_id=860428971892015145&permissions=305450048&scope=bot%20applications.commands) | [Support](https://discord.gg/Mbf9BaUHyJ) | [Vote](https://top.gg/bot/860428971892015145/vote) | [Donate](https://patreon.com/saturn_music) | [Docs](https://docs.saturn-music.cf) | [Website](https://saturn-music.cf)")
        .setFooter(`To get info of each command you can do ${client.config.prefix}help [command] `)

        if(!args[0])return message.channel.send(embed)
        else {
            let cmd = args[0]
            let command = client.commands.get(cmd)
            if(!command)command = client.commands.find(x => x.info.aliases.includes(cmd))
            if(!command)return message.channel.send("Unknown Command")
            let commandinfo = new MessageEmbed()
            .setTitle("Command: "+command.info.name+" info")
            .setColor("YELLOW")
            .setDescription(`
Name: ${command.info.name}
Description: ${command.info.description}
Usage: \`\`${client.config.prefix}${command.info.name} ${command.info.usage}\`\`
Aliases: ${command.info.aliases.join(", ")}
`)
            message.channel.send(commandinfo)
        }
    }
}
