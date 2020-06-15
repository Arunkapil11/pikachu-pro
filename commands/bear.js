exports.run = (client, message, args) => {
  const randomPuppy = require("random-puppy");
  const request = require("snekfetch");
  const fs = require("fs");

  var subreddits = ["bears"];
  var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

  randomPuppy(sub).then(url => {
    //request.get(url).then(r => {

    // let file =(r.body)

    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed() //;
      .setImage(url);
    message.channel.send({embed });
  });
}; //)
//}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "bear",
  description: "random bear images",
  usage: "bear",
  module: "Fun",
  permit: " ",
  alias: " "
};
