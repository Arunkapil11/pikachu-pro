exports.run = (client, message, args,randomColor) => {
// /. if (![0]) 
  let m = message.mentions.users;
  
 if(!m.first()) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;
  var answer = ["https://media1.tenor.com/images/667d8a04d2390a8c6bf33caca9bfb9a6/tenor.gif",
                "https://cdn.discordapp.com/attachments/358963245383417867/429891995545108482/unnamed.gif",
										"https://media.discordapp.net/attachments/342334549646114817/374637434698334208/kanna_pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376660803710877696/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376660803710877696/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376660825039044609/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376660514157101056/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376664277764800512/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376664276045266944/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376664272723509248/pat.gif",
										"https://cdn.discordapp.com/attachments/306063087641821185/376664269489700864/pat.gif"]
 var result = Math.floor(Math.random()*answer.length);
 
  console.log(result)
  const Discord = require("discord.js")
 let author1 = message.author.tag;
 // let m = message.mentions.users;
 let user = m.first();
  let mention1 = user.tag;
  const embed = new Discord.MessageEmbed()
  .setImage(`${answer [result]}`)
  .setColor(randomColor);//;
   
// 
  //.setThumbnail(`${answer[result]}`);
  return  message.channel.send(`__**<a:Pat:429897850248364032>${author1}** *patted* **${mention1}<a:Pat:429897850248364032>**__`,
                               {embed}).then(m=>m.react("429897850248364032"));            
    
                         
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pat',
  description: 'Pat someone.',
  usage: 'pat [mention]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
 
