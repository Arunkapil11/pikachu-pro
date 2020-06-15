

const settings = require("./config.json"); 

const emoji = require("./util/emojis.json");

const {writeFile} = require("fs");
const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js");
const enmap = require('enmap');
const talkedRecently = new /*"enmap();//*/Discord.Collection();
const config = require("./config.json");

const client = new Discord.Client({disableEveryone : true});/**/
module.exports = message => {
  
    if(message.author.id==="373108072283111426") return;
  if(message.author.bot) return;
	if (message.channel.type === "dm") return;
  let client = message.client;
  let key = message.guild.id;
  if(key==="278135637293531136"){
    client.prefix1= ".";}
  else
   if(!client.prefix.has(key)){
client.prefix1 = "p-";
   }
  else
    if(client.prefix.has(key)){
     client.prefix1 = client.prefix.getProp(key, "prefix");
   }
if (message.content.replace(/ /g, "") === "<@" + client.user.id + ">")return message.reply(`This server prefix is `+ "```"+client.prefix1+"```");
  client.embed = Discord;
    
  const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF];

client.random = Math.floor(Math.random()*color.length);

let randomColor = color[client.random];
  
  if (message.channel.type === "dm" && settings.forwardBotDMsToOwner && !message.content.startsWith.toLowerCase(client.prefix1) && message.author.id !== settings.botOwner&& !message.author.bot) {
    const embed = new MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ format: "png", size: 1024 }))
      .setColor(3447003)
      .setTitle("DM from " + message.author.username)
      .setDescription(message.content)
      .setThumbnail(message.author.avatarURL({ format: "png", size: 1024 }))
      .setFooter(message.author.id, client.user.avatarURL({ format: "png", size: 1024 }));
    client.users.get(settings.botOwner).send({embed});
  }

 
  if (message.channel.type === "text") {

//  if (message.channel.id === "424610309970460673")message.react(client.emojis.get(client.emotes.Pika_Dance));
  

  if(message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(client.prefix1)) return;
  let command = message.content.toLowerCase().split(' ')[0].slice(client.prefix1.length);
  let args = message.content.split(' ').slice(1);
// 
    let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  else return;
  
  if (cmd && message.channel.type !== "text" && cmd.conf.guildOnly) return message.reply('This command is not avaliable in DMs. Please run this command in a server.');
  
    if(perms < cmd.conf.permLevel) return;

  
                           if(message.guild.id === "278135637293531136" && message.author.id != "258961364939309056" )  return message.reply("Buy Pikachu patron on https://donatebot.io/checkout/278135637293531136?buyer"+message.author.id+"");
    else
                
     cmd.run(client, message, args, randomColor);
                                                                                          
           

                                                                                              
     
  }

};
  



