const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args, randomC) => {
  var mention;
  if (message.mentions.users.first() !== undefined) {
    mention = message.mentions.users.first();
  }else {
    mention = message.author;
  };
  const embed = new Discord.MessageEmbed()
    .setColor(randomC)
    .addField("Username", mention.tag)
    .setImage(mention.avatarURL({ format: "png", size: 1024 }))
    .setThumbnail(mention.avatarURL({ format: "png", size: 1024}));
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Shows your someone\' avatar url.',
  usage: 'avatar [user]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
}; 

