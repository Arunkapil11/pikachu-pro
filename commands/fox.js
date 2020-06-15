const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    

    var subreddits = [
     'fox',
      'foxes'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            
             
               const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()//;
.setDescription(`[Click here](`+url+`) if no image.`)//;
.setImage(url)
message.channel.send({embed});
            })
       // })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fox',
  description: 'Sends some high quality fox pics:3',
  usage: 'fox',
  module: 'fun',
  permit: ' ',
  alias: ' '
}; 
