const {MessageEmbed} = require('discord.js')
const emoji = require('../util/emojis.json')


module.exports = {
  info: {
    name: "feedback",
    description: "submit a feedback",
		usage: "<Feedback>",
    aliases: ["fb"],
  },
    run: async function (client, message, args) {

        const fb = args.join(" ");
        if(!fb){
            return message.channel.send("Please enter a feedback!");
        }
                    
        client.channels.cache.get("842730008778768414").send(new MessageEmbed()
            .setTitle(`Saturn Music Feedback ${emoji.Approved}`)
            .addField(`Author`, `\`${message.author.tag}\``)
            .addField(`Feedback`, "\`"+fb+"\`")
            .addField(`Member Id`, `\`${message.author.id}\``)
            .addField(`On the Server`, `\`${message.guild.name}\``)
            .addField("Server ID:", `\`${message.guild.id}\``)
            .setColor("YELLOW")
            .setTimestamp())


        const successembed = new MessageEmbed()
        .addField("Join Our Support Server", `[Click Here](https://discord.gg/Mbf9BaUHyJ) To Join Our Support Server`)
        .setTitle("Success!")
        .setColor("RANDOM")
        .setDescription(` Your **Feedback** is submitted successfully!`)
        .setTimestamp();

    client.users.cache.get(message.author.id).send(successembed)
    }

};
