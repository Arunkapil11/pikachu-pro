



const randomPuppy = require('random-puppy');
const request = require('snekfetch');
exports.run = (client, message, args) => {
   var subreddits = [
        
        
     'PUBGmobile'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

 const { memeAsync } = require('memejs');

memeAsync('GetMotivated') // Use meme('subredditname') to filter subreddits
.then(m => {
  const Discord = require("discord.js");
  
const embed = new Discord.MessageEmbed()
.setImage(m.url)
.setTitle(m.title)

message.channel.send({embed})

  
})
.catch(e => {
  // Handle the error
  console.log(e);
})
  
 
   
}
      
               
  
            

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'motivate',
  description: 'Sends a motivational message.',
  usage: 'motivate',
  module: 'Other',
  permit: ' ',
  alias: ' '
};
