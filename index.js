require("dotenv").config();
require('events').EventEmitter.defaultMaxListeners = 0;
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const express = require('express');
const app = express();
const InfinityBots = require("infinityapi.js")
const client = new Discord.Client()
client.commands = new Collection();
client.queue = new Map()
client.options.http.host = "https://discord.com/api"

//TOP WEBHOOKS
const Topgg = require("@top-gg/sdk")
const webhook = new Topgg.Webhook('14356');

app.post("/dblwebhook", webhook.listener(vote => {
  const channel = client.channels.cache.get("870539908194918411")
	client.users.fetch(vote.user).then(async user => {
  const votelog = new MessageEmbed()
      .setTitle('New Vote')
			.setColor("RANDOM")
			.setThumbnail(client.user.displayAvatarURL())
			.setDescription(`**${user.tag}** \`(${vote.user})\` Has Voted to Saturn Music.\n\nYou can vote on top.gg **[here](https:\/\/top.gg\/bot\/860428971892015145\/vote)** every 12 hours!`)
			.setFooter(`Thanks For Your Support`, client.user.displayAvatarURL())
     .setTimestamp();
		channel.send(votelog);
		})
}))

//Posting TOP Stats
const { AutoPoster } = require('topgg-autoposter')

const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg2MDQyODk3MTg5MjAxNTE0NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI3NjE1MzkxfQ.tGB18LZztT-Xvd-vZnN6Bb69jVgZi5EgmcQcl5xn3Xc', client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

app.get('/', (req, res) => {
    res.send('HELLO WORLD');
});

app.listen(3000, () => {
    console.log('PROJECT IS READY');
});


client.on("message", async (message) => {
  if (message.author.bot || message.channel.type === "dm") return;
	
    if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
            const HELLO_SERVER = new MessageEmbed()
            .setColor("RED")
            .setTitle(`About ${client.user.username}`)
            .setThumbnail(client.user.avatarURL())
            .setDescription(`My Prefix Here Is: \`${process.env.PREFIX}\` or \`@Saturn Music#9802
\`\nMy Devloper: **${process.env.Dev}** \n \n You can play music by joining a voice channel and typing \`${process.env.PREFIX}play\`. Type \`${process.env.PREFIX}help\` To Get All Commands Help Menu.\n \n [Invite](https://discord.com/oauth2/authorize?client_id=860428971892015145&permissions=305450048&scope=bot%20applications.commands) | [Support](https://discord.gg/Mbf9BaUHyJ) | [Vote](https://top.gg/bot/860428971892015145/vote) | [Donate](https://patreon.com/saturn_music) | [Docs](https://docs.saturn-music.cf) | [Website](https://saturn-music.cf)`)
            .setTimestamp();
            return message.channel.send(HELLO_SERVER);
        }
})


client.on('guildCreate', guild => {
  guild.members.fetch //guild.ownerID
  
  let embed = new MessageEmbed()
    .setTitle('**JOINED NEW SERVER**')
    .setColor("#3aff09")
    .setDescription("Hey, Developer look I've joined a new server!")
    .addField('**Server Name**', `${guild.name}`)
    .addField('**Server ID**', `${guild.id}`)
    .addField('**Member Count**', `${guild.memberCount}`)
    .addField('**Owner**', `<@${guild.ownerID}>`)
    .setThumbnail(guild.iconURL())
    .setFooter(`Now I'm in ${client.guilds.cache.size.toLocaleString()} servers`)
    .setTimestamp();
  client.channels.cache.get('842726824260796436').send(embed)
	  client.channels.cache.get("876860509683613756").setName(`Servers: ${client.guilds.cache.size}`)
	client.user.setActivity(`s,help | ${client.guilds.cache.size} Guilds`, { type: "LISTENING" })
});

client.on('guildDelete', guild => {
  guild.members.fetch //guild.ownerID
  
  let embed = new MessageEmbed()
    .setTitle('**LEFT A SERVER**')
    .setColor("#fe0000")
    .setDescription("Hey, Developer look I've been kicked from a server!")
    .addField('**Server Name**', `${guild.name}`)
    .addField('**Server ID**', `${guild.id}`)
    .addField('**Member Count**', `${guild.memberCount}`)
    .addField('**Owner**', `<@${guild.ownerID}>`)
    .setThumbnail(guild.iconURL())
    .setFooter(`Now I'm in ${client.guilds.cache.size.toLocaleString()} servers`)
    .setTimestamp();
  client.channels.cache.get('842726997753987083').send(embed)
	  client.channels.cache.get("876860509683613756").setName(`Servers: ${client.guilds.cache.size}`)
	client.user.setActivity(`s,help | ${client.guilds.cache.size} Guilds`, { type: "LISTENING" })
});


client.config = {
prefix: process.env.prefix,
  SOUNDCLOUD: process.env.SOUNDCLOUD_CLIENT_ID
}


fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});


client.login(process.env.TOKEN)
