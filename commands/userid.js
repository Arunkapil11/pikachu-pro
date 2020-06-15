const Discord = require("discord.js");
const config = require("../config.json");

exports.run = (client, message, args) => {
  if (message.mentions.users.first() !== undefined) {
    const mention = message.mentions.users.first();
    const embed = new client.embed.MessageEmbed()
      .setColor(0x00ff00)
      .setDescription(
        `:id: of ${message.guild.members.get(mention.id).user.tag} is \`${
          mention.id
        }\``
      );
    message.channel.send({ embed });
  } else {
    const mention = message.author;

    const embed = new Discord.MessageEmbed()
      .setColor(0x00ff00)
      .setDescription(`:id: of ${message.author.tag} is \`${mention.id}\``);
    message.channel.send({ embed });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["uid"],
  permLevel: 0
};

exports.help = {
  name: "userid",
  description: "Shows user id of someone.",
  usage: "userid [user]",
  module: "Other",
  permit: " ",
  alias: "/ uid"
};
