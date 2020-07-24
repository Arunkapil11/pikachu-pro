const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    

    var subreddits = [
     'aww'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            
             
               const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()//;
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
  name: 'aww',
  description: 'Sends some high quality aww pics :3',
  usage: 'aww',
  module: 'fun',
  permit: ' ',
  alias: ' '
}; 
