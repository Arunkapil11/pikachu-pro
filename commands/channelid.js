const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  const channel = message.channel;
  const embed = new Discord.MessageEmbed()
    .setColor(0x00FF00)
    .setDescription(`:id: of this channel is \`${channel.id}\``)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cid'],
  permLevel: 0
};

exports.help = {
  name: 'channelid',
  description: 'Shows the current channel\' id.',
  usage: 'channelid',
  module: 'Other',
  permit: ' ',
  alias: '/ cid'
}; 

