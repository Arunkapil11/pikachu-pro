exports.run = (client, message, args) => {
const config = require('../config.json');
  const Discord = require (`discord.js`);
//if(message.author.id === config.botOwner){
  if(client.patrons.includes(message.author.id)){
     if(!message.content.includes("|")) return message.channel.send("Please use this format ```title| description| link| image```")
    let rest_of_the_string = message.content.slice('p-embed'.length); //removes the first part
    let array_of_arguments = rest_of_the_string.split('|'); //[title, description, link, image]

    let embed = new Discord.MessageEmbed()
      .setTitle(array_of_arguments[0])
      .setDescription(array_of_arguments[1])
      .setImage(array_of_arguments[3])
      .setURL(array_of_arguments[2])
      .setColor("RANDOM")
      .setFooter("Pubg Mobile",array_of_arguments[3])
      .setTimestamp();

    message.channel.send({ embed });

}else{
  message.channel.send("You're not a patron!");
  }
  
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'embed',
  description: 'make bot embed message',
  usage: 'embed',
  module: 'BOTAdmin',
  permit: 'Bot Owner Only',
  alias: ' '
};
