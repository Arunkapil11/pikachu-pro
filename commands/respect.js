
exports.run = async(client, message,Discord, args) => {
var user;
  if (message.mentions.users.first() !== undefined) {
    user = message.mentions.users.first();
  }else {
    user = message.author;
  };

const { MessageAttachment } = require("discord.js");



await message.channel.send(new MessageAttachment(await client.API.respect(user.avatarURL({ format:"png", size:128 })), "respect.png"));
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'respect',
  description: 'respect',
  usage: 'respect [mention]',
  module: 'Canvas',
  permit: ' ',
  alias: ' '
};
