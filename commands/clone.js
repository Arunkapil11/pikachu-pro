const Discord = require("discord.js");

exports.run = (client, message, args) => {

if (message.content.includes("<") && message.content.includes(":") && message.content.includes(">") && !message.content.includes("<a")) 
  {
    
   let emoji = message.content.split("<").slice(1).join(" ").split(":").slice(2).join(" ").split(">").slice(0).join(" ").replace(/ /g, "");
    var res = message.content.split("<:").slice(1).join("").split(":").slice(-3).join("").split(">").slice(0).join("").replace(/\d+|^\s+|\s+$/g,'');
    message.guild.emojis.create("https://cdn.discordapp.com/emojis/" + emoji + ".png", res)
      message.channel.send("Sucessfully added new emoji with name "+ res)
 
  }
  else if (message.content.includes("<a")&& message.content.includes(":") && message.content.includes(">")) {
   let emoji = message.content.split("<a").slice(1).join(" ").split(":").slice(2).join(" ").split(">").slice(0).join(" ").replace(/ /g, "");
   var res = message.content.split("<a:").slice(1).join("")
  
 .split(":").slice(-3).join("")
  .split(">").slice(0).join("")
  .replace(/\d+|^\s+|\s+$/g,'');
    message.guild.emojis.create("https://cdn.discordapp.com/emojis/" + emoji + ".gif", res)
      message.channel.send("Sucessfully added new emoji with name "+res)
     console.log("https://cdn.discordapp.com/emojis/" + emoji + ".gif")
  
    
  }
  else return message.channel.send("Cam't clone that emote!")
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['cloneemoji'],
  permLevel: 0
}

exports.help = {
  name: 'clone', 
  description: 'Clone any emotes from other guilds.', 
  usage: 'clone', 
  module: 'Other', 
  permit: ' ', 
  alias: ''
}
