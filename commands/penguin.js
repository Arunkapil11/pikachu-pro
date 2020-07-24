const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js");
exports.run = (client, message, args,randomColor) => {
    

    var subreddits = [
     'penguin'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
           /* request.get(url).then(r => {
               
               let pussy =(r.body)
                

message.channel.send({files:[pussy]});
        })*/
      
               const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()//;
.setDescription(`[Click here](`+url+`) if no image.`)//;
.setImage(url)
message.channel.send({embed});
        })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['penguins'],
  permLevel: 0
}

exports.help = {
  name: "penguin",
  description: "Sends a random penguin.",
  usage: "penguin",
  module: "Fun",
  permit: ' '
}