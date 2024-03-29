const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "avatar",
    description: "shows the avatar of the user",
    usage: "[mention]",
    aliases: ["av"],
  },

  run: async function (client, message, args) {
    if (args[0] && args[0].toLowerCase() === "server") {
      let g1g = message.guild.iconURL({
        dynamic: true,

        size: 2048,

        format: "png"
      });

      if (g1g === null) g1g = "https://cdn.discordapp.com/embed/avatars/1.png";

      let embed = new MessageEmbed()

        .setColor("#00FF6C")

        .setAuthor(`${message.guild.name}`, g1g)

        .setTitle(`Avatar Link`)

        .setURL(g1g)

        .setImage(g1g)

        .setFooter(
          `Requested By: ${message.author.tag}`,

          message.author.avatarURL({ dynamic: true })
        );

      message.channel.send(embed);
    } else {
    let hh = message.content

      .split(" ")

      .slice(1)

      .join(" ");
    let user;

    if (!args[0]) user = message.author;

    if (!user) user = message.mentions.users.first();

    if (!user && /^\d{17,19}$/.test(args[0]))
      user =  message.client.users.cache.get(args[0]) ||        (await message.client.users.fetch(args[0]).catch(() => null));
    if (!user)
      return sendError('Missing argument, the "user" argument is required.', message.channel);
    let gg = user.displayAvatarURL({
      dynamic: true,

      size: 2048,

      format: "png"
    });

    if (gg === null) gg = "https://cdn.discordapp.com/embed/avatars/1.png";

    let g1g = user.displayAvatarURL({
      dynamic: true,

      size: 2048,

      format: "png"
    });

    if (g1g === null) g1g = "https://cdn.discordapp.com/embed/avatars/1.png";

    let embed = new MessageEmbed()

      .setColor("#00FF6C")

      .setAuthor(`${user.tag}`, gg)

      .setImage(gg)

      .setFooter(
        `Requested By: ${message.author.tag}`,

        message.author.avatarURL({ dynamic: true })
      );

    message.channel.send(embed);}
	}
};
