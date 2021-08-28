const {MessageEmbed} = require('discord.js')

module.exports = {
  info: {
    name: "bug report",
    description: "submit a bug",
		usage: "<BUG>",
    aliases: ["bug", "br"],
  },
    run: async function (client, message, args) {

        const fbChannel = "846300397902626836";

        const fb = args.join(" ");
        if(!fb){
            return message.channel.send("Please enter a bug!");
        }

        const embed = new MessageEmbed()
            .setTitle("Saturn Music Bug Report <a:yes:846301785399754753>")
            .addField(`Author`, `\`${message.author.tag}\``)
            .addField(`Feedback`, "\`"+fb+"\`")
            .addField(`Member Id`, `\`${message.author.id}\``)
            .addField(`On the Server`, `\`${message.guild.name}\``)
            .addField("Server ID:", `\`${message.guild.id}\``)
            .setColor("RED")
            .setTimestamp()
                    
        message.client.channels.cache.get(fbChannel).send(embed).then((msg) =>{
        }).catch((err)=>{
            throw err;
        });


        const successembed = new MessageEmbed()
        .addField("Join Our Support Server", `[Click Here](https://discord.gg/Mbf9BaUHyJ) To Join Our Support Server`)
        .setTitle("Success!")
        .setColor("RED")
        .setDescription(`Your **BUGREPORT** is submitted successfully!`)
				.setTimestamp()

        message.author.send(successembed)
    }

};
