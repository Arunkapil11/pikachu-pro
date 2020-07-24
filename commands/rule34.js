const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.\n Make sure that the channel name isn't `NSFW`")
    var subreddits = [
        //'HENTAI_GIF',
        //'hentai_irl',
        'rule34'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
              
                let pussy =(r.body)
 message.channel.send({files:[pussy]});
            })
        })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rule34',
  description: 'Sends some random rule 34 images',
  usage: 'rule34',
  module: 'Nsfw',
  permit: ' ',
  alias: ' '
}; 
