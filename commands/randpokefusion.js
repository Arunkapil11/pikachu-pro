
const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    
    var subreddits = [
        'PokemonFusion',
        'PokemonFusions'
       
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
             const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()
.setDescription(`[Click here](`+url+`) if no image.`)//;
.setImage(url)
message.channel.send({embed});
        })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['randpokemonfusion','randpokefusion','randompokefusion'],
  permLevel: 0
};

exports.help = {
  name: 'randompokemonfusion',
  description: 'Sends some pokemon images',
  usage: 'randompokemonfusion',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
}; 
