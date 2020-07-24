



exports.run = (client, message, args,randomColor) => {
  const Discord = require('discord.js');
  let bet = args[1];
  let arg = args[0];
  const key = message.author.id;
  const embed = new Discord.MessageEmbed()
    
   .setColor(randomColor)
  .setAuthor("List of items")
    .addField("Item id = 1",'1.Shinyball : 10')
  if(!bet) return message.reply("please enter ammount of items to buy! format ``p-buy 1 1``")
  else 
  if(!client.shiny.has(message.author.id)) {
message.channel.send("Please use `!register` command first");
  
  }
  else
    if(client.points.getProp(key, "points") < bet*10) return message.reply("You need more money to buy that many balls!")
  else
  if(client.points.getProp(key, "points") < 10) return message.reply("You need more money!")
  else
  
  if (isNaN(args[0])) return message.channel.send({embed});
  
 if(arg = 1 && bet > 0){
   
     let  balls = client.shiny.getProp(key, "balls"); balls += 1*bet;
 client.shiny.setProp(key, "balls", balls)
   let  bal = client.points.getProp(key, "points"); bal -= 10*bet;
 client.points.setProp(key, "points", bal)
  message.channel.send("Bought "+bet+ " shinyballs")
 }
  else return message.channel.send("Can't Find That item. Please add [item_ID] [ammount]")

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
 name: 'buy',
      description: 'Buy a item from the shop.',
      usage: 'buy 1 1',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
}; 
