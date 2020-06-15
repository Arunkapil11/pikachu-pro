
const { RichEmbed} = require("discord.js");
const {writeFile} = require("fs");


exports.run = (client, message, args) => {
  let bet = args[0];
  if(!client.points.has(`${message.author.id}`)) {
message.channel.send("Please use `!register` command first");}
  //return message.reply("Command not completed yet for database updates.");
  const key = message.author.id;
  //if (!args[0]) return message.reply("Specify amount that you want to bet.");
  if (isNaN(args[0])) return message.reply("Specify numbers only.");
  if (args[0] > client.points.getProp(key, "points"))
return message.reply("You don't have that much money.");
  const br = Math.floor(Math.random() * 100);
  let result = -1;
  if (br > 50) result = 2;
  if (br > 66) result = 3;
  if (br > 90) result = 3;
  if (br == 100) result = 5;
  let wonAmount = args[0] * result;
  let displayAmount = wonAmount;
  if (displayAmount < 0) displayAmount = 0;
message.channel.send({embed: { color: 3447003, description: `You rolled ${br}.\nYou won ${displayAmount} <a:Pikacoin:428018290997329930>` }});
  var userPoints = client.points.getProp(key, "points"); userPoints += displayAmount-bet; 
 client.points.setProp(key, "points", userPoints)
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['br'],
  permLevel: 0
}

exports.help = {
  name: 'betroll', 
  description: 'Bet money on roll.', 
  usage: 'betroll <amount>', 
  module: 'Gambling', 
  permit: ' ', 
  alias: ' '
}
