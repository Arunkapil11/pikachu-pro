
exports.run = (client, message, args) => { const Discord = require('discord.js');
const { RichEmbed} = require("discord.js");
const {writeFile} = require("fs");
/*const filtered = /*async *///!/async () => //{
// try {*/
   const filtered =  client.points.filterArray( p => p.points > 0 ); 
                                           const sorted =  filtered.sort(
                  //console
(a, b) => b.points-a. points) // console. log(a))//a.points<b.points);//.((a) console.log(b) *//a. < b.); 
                                          //console.log(sorted);
const top10 =  sorted.splice(0, 10); 
const embed = new Discord.MessageEmbed() .setTitle("Leaderboard") .setAuthor(client.user.username) .setDescription("**Top 10**") .setColor(0x00AE86); for(let i=0; i<top10.length; i++) { embed.addField("#"+`${i+1} \n ${client.users.get(top10[i].user).tag}`, `${top10[i].points} <a:Pikacoin:428018290997329930>`); }   message.channel.send({embed});
    /* }
  catch (err) {
    console.log(err)}
}*/}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lb'],
  permLevel: 0
}

exports.help = {
  name: 'leaderboard', 
  description: 'see TOP 10 hall of fame of Pokecoins  .',
  usage: 'lb <>', 
  module: 'Gambling', 
  permit: ' ', 
  alias: ' '
}
/*for (var i = num - 1; i < num * 10; i++) {
    a++;*/