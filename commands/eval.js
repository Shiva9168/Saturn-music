const { MessageEmbed } = require("discord.js");
const beautify = require("beautify");

module.exports = {
  info: {
    name: "eval",
    description: "Developer Command",
		usage: "",
    aliases: ["ev", "evaluate"],
  },

  run: async function (client, message, args) {
    if(message.author.id !== "799586054595411988") return message.channel.send("<a:no:846325683638370324> Only My Developer Can Use This Command!");
   if(!args[0]) return message.channel.send("<a:no:846325683638370324> Args invalid!");
   if(args.join(" ").toLowerCase().includes("token")) return;
   const toEval = args.join(" ");
  const evaluated = eval(toEval); 
  let embed = new MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setFooter(client.user.username)
  .setTitle("Eval")
  .addField("To Evaluate", `\`\`\`js\n${beautify(args.join(" "), { format: "js"})}\n\`\`\``)
  .addField("Evaluated:", evaluated)
  .addField("Type of:", typeof(evaluated));
   message.channel.send(embed);
  },
};
