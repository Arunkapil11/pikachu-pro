

exports.run = (client, message, args) => {
  if(!client.points.has(`${message.author.id}`)) {
message.channel.send("Please use `!register` command first");}
let key = message.author.id;
  if(!client.points.has(key)) { 
return message.channel.send("you are not registerd yet register now by using `!register`");}

else {message.channel.send(`You currently have  ${client.points.getProp(key, "points")} <a:Pikacoin:428018290997329930> ,  ${client.shiny.getProp(key, "points")}Shiny and  ${client.shiny.getProp(key, "balls")}balls`);

}
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['currency', '$', 'money','shinys'],
  permLevel: 0
}

exports.help = {
  name: 'cash', 
  description: 'Check how much cash a person have.', 
  usage: 'cash or cash <mention>', 
  module: 'Gambling', 
  permit: ' ', 
  alias: ' '
}