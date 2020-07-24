exports.run = (client, message, args, randomColor) => {
   var jokes = require('/app/data/jokes.json');

  var r = Math.floor(Math.random() * jokes.jokes.length);
var joke =  jokes.jokes[r];
message.channel.send({embed: {
description: joke.text,
color: randomColor,
title: "Random Joke"
}
})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jokes'],
  permLevel: 0
}

exports.help = {
  name: "joke",
  description: "Sends a random joke.",
  usage: "joke",
  module: "Fun",
  permit: ' '
}