

exports.run = (client, message, args) => {
  
  const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")


    
    //if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.\n Make sure that the channel name isn't `NSFW`")

    var subreddits = [
        'bakchodi'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
           /* request.get(url).then(r => {
            
               let file =(r.body)

               
 message.channel.send({files:[file]});
            })*/
      
               const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()//;
.setImage(url)
message.channel.send({files:[url]});
        })
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bakchodi',
  description: 'RAndom bakchodi',
  usage: 'bakchodi',
  module: 'Fun',
  permit: ' ',
  alias: ' '
}; 
