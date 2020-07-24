const randomPuppy = require("random-puppy");
const request = require("snekfetch");
const fs = require("fs");

exports.run = (client, message, args) => {
  var subreddits = ["marvelmemes"];
  var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

  randomPuppy(sub).then(url => {
    /*request.get(url).then(r => {
               
               let pussy =(r.body)
                
 message.channel.send({files:[pussy]});
             
            })*/

    const Discord = require("discord.js");
    const embed = new Discord.MessageEmbed() //;
      .setImage(url);
    message.channel.send({ embed });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["marvelmeme"],
  permLevel: 0
};

exports.help = {
  name: "marvelmemes",
  description: "Sends Random marvel memes",
  usage: "marvelmemes",
  module: "Fun",
  permit: " ",
  alias: " "
};
