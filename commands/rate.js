const {RichEmbed} = require("discord.js");

exports.run = (client, message,Discord, args) => {
  
  const user = message.content.split(" ").slice(1).join(" ");
  if(!user) return message.reply("Please, add a name after command");
  const num = Math.floor((Math.random() * 100) + 1); 
  
  	let result;
  	if (num>40) result = `Not good 👎`;
  	if (num>30) result = `Awful 😒`;
  	if (num>20) result = `Ugly waifu 😶`;
  	if (num<50) result = `Bad waifu 😝`;
  	if (num<10) result = `Not even a waifu 😐`;
  	if (num>50) result = `Nice waifu 👍`;
  	if (num>70) result = `Good waifu 👌`;
  	if (num>90) result = `Perfect 😘`;
  	if (num>95) result =  `**Super 💋Awesome 👰 Waifu 👸**`;
  	
// do some checks to see if num is over a certain value to give that comment at the end 
  const color = [0xF44336, 0xE91E63, 0x9C27B0, 0x673AB7, 0x3F51B5, 0x2196F3, 0x03A9F4, 0x00BCD4, 0x009688, 0x4CAF50, 0x8BC34A, 0xCDDC39, 0xFFEB3B, 0xFFC107, 0xFF9800, 0xFF5722, 0x795548, 0x9E9E9E, 0x607D8B, 0x000000, 0xFFFFFF]
    const numc = Math.floor(Math.random()*color.length);
  const bot = client.user;
  const embed = new client.embed.MessageEmbed()
  
  .setTitle(`💗WAIFU RATING💗`)
  
    .setColor(color[numc])
  
  .setTimestamp()
  .setDescription(`*The rating of `+user+` as a waifu:* 👰\n${num}% ${"█".repeat(Math.floor(num/10))}\n${result}`);
  message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ratewaifu'],
  permLevel: 0
};

exports.help = {
  name: 'rate',
  description: 'Rate a waifu.',
  usage: 'rate [mention]',
  module: 'Waifu',
  permit: ' ',
  alias: ' '
};
