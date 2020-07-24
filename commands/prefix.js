/*const servers = require("../util/servers.json");*/
const { writeFile } = require("fs");
const config = require("../config.json");

exports.run = (client, message, args) => {
  
   if (message.member.hasPermission("ADMINISTRATOR")||message. author.id==="261792945483546625"){
    
  const Discord = require ('discord.js');
  let key = message.guild.id;
  let prefix = message.content.toLowerCase().split(" ").slice(1).join(" ");
    if(!prefix || prefix.length > 4) return message.reply(`Current prefix is `+ "``"+client.prefix.getProp(key,"prefix")+"``");
   if(!client.prefix.has(key)) {  
     client.prefix.set(key, {prefix: prefix })
   message.channel.send(`New prefix is ${prefix}`);} 
    else if(client.prefix.has(key)) { 
       
      client.prefix.set(key, {prefix: prefix })
    message.channel.send(`New prefix is ${prefix}`);}

  }
  else if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission.");
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['setprefix'],
  permLevel: 0
}

exports.help = {
  name: 'prefix', 
  description: 'Show or change custom prefix.', 
  usage: 'setprefix or setprefix <new prefix>', 
  module: 'Admin', 
  permit: 'Requires Admin permission', 
  alias: ' '
}