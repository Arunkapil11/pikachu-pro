

exports.run = (client, message, args,randomColor) => {
  const Discord = require('discord.js');
  
  const embed = new Discord.MessageEmbed()
    
   .setColor(randomColor)
  .setAuthor(`List of items. Use p-buy to buy items`)
    .addField("Item id = 1",'1.Shinyball : 10')
 
 message.channel.send({embed});
  
 
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
name: 'shop',
    usage: 'shop',
  description: 'List of items',
   module: 'Pokemon',
  permit: ' ',
  alias: ' '
}; 
