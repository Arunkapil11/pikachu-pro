

const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    

    var subreddits = [
        'wallpapers',
        'ultrahdwallpapers',
      'Verticalwallpapers'
      
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
               const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()//;
.setImage(url)
message.channel.send({embed});
        })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['wallpapers'],
  permLevel: 0
};

exports.help = {
  name: 'wallpaper',
  description: 'Sends Random Wallpapers',
  usage: 'wallpaper',
  module: 'Fun',
  permit: ' ',
  alias: ' '
}; 
