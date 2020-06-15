

exports.run = (client, message, args) => {
  
  const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")


    //if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

    var subreddits = [
        
        'comics'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            /*request.get(url).then(r => {
              
               let file =(r.body)

               

 message.channel.send({files:[file]});
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
  aliases: ['comics'],
  permLevel: 0
};

exports.help = {
  name: 'comic',
  description: 'Random comics',
  usage: 'comic',
  module: 'Fun',
  permit: ' ',
  alias: ' '
}; 
