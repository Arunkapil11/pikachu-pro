

exports.run = (client, message, args) => {
 const Discord = require("discord.js");
const request = require('snekfetch');
const fs = require("fs")


    var max = 12449;
    var min = 10000;
    var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
    var MathLoL = Math.round(MathRan);
    if (!message.channel.nsfw) {
      
  message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.\n Make sure that the channel name isn't `NSFW`")

    } else {
        request.get("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg").then(r => {
           
           let pussy =(r.body)
 message.channel.send({files:[pussy]});
        })
    }
} 


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'boobs',
  description: 'Random boobs nude pics',
  usage: 'boobs',
  module: 'Nsfw',
  permit: ' ',
  alias: ' '
}; 
