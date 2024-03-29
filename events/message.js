module.exports = async (client, message) => {
  if (message.author.bot) return;

  const prefixMention = new RegExp(`^<@!?${client.user.id}>`);
  const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : client.config.prefix;

  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  //Making the command lowerCase because our file name will be in lowerCase
  const command = args.shift().toLowerCase();

  //Searching a command
  const cmd = client.commands.get(command) || client.commands.find(x => x && x.info && x.info.aliases && x.info.aliases.includes(command));

if(message.channel.type === "dm")return console.log(`${message.author.tag} Used Commands in DM`) || message.channel.send('None of the commands work in DMs. So please use commands in server!');
  process.on("unhandledRejection", (reason, promise) => {
      try {
          console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
      } catch {
          console.error(reason);
      } 
  });
  require('events').EventEmitter.defaultMaxListeners = 0


  //Executing the codes when we get the command or aliases
  if(cmd && cmd.run){
    cmd.run(client, message, args);
  }else return
};
