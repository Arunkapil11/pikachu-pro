exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  var WikiFakt = require('wikifakt');
 WikiFakt.getRandomFact().then(function(fact) {
   
  message.channel.send({embed: {
    color: 0xFFFF00,
    title: "RANDOM wiki facts",
    description:fact}});
     });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'facts',
  description: 'get some random wikifacts',
  usage: 'facts',
  module: 'utility',
  permit: ' ',
  alias: ' '
}; 