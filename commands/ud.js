

exports.run = (client, message, args) => {
  const ud = require('urban-dictionary');
 // if(!message.channel.nsfw) message.channel.send("This is a nsfw command please switch to a nsfw channel");
  let reason = message.content.split(" ").slice(1).join(" ");
     if (!reason) return message.channel.send(`**Send something that you want to find**`)
var definition = `${reason}`
 
ud.term(definition, function (error, entries, tags, sounds) {
  if (error) {
    message.channel.send(`i can't find that in dictionary`)
  } else {
    const Discord = require("discord.js");
    let word = (entries[0].word)
    let def = (entries[0].definition)
    let example = (entries[0].example)
     const embed = new Discord.MessageEmbed()
     .setTitle(word)
     .addField('❯❯ Defination',def)
     .addField('❯❯ Example',example)
    .setThumbnail("https://media.discordapp.net/attachments/358963245383417867/437394074576748545/download.jpg")
  .setColor('RANDOM')
  message.channel.send({embed});
    

  }
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ud',
  description: 'Search on urban dictionary.',
  usage: 'ud [your word]',
  module: 'utility',
  permit: ' ',
  alias: ' '
}; 