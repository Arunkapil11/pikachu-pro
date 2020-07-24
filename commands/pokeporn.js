const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.\n Make sure that the channel name isn't `NSFW`")
    var subreddits = [
        
        'PokePorn'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
          /* ,. request.get(url).then(r => {
                
                let pussy =(r.body)
 message.channel.send({files:[pussy]});
            })*/
      
               const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()//;
.setImage(url)
message.channel.send({embed});
        })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pokeporn',
  description: 'Sends some pokemon hentai images',
  usage: 'pokeporn',
  module: 'Nsfw',
  permit: ' ',
  alias: ' '
}; 
 