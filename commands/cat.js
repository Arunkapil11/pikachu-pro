const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require("discord.js");
exports.run = async(client, message, args,randomColor) => {
    

    var subreddits = [
     'cat'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length-1))];

  await  randomPuppy(sub)
        .then(url => {
           /* request.get(url).then(r => {
               
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
  aliases: ['cats'],
  permLevel: 0
}

exports.help = {
  name: "cat",
  description: "Sends a random cat.",
  usage: "cat",
  module: "Fun",
  permit: ' '
}