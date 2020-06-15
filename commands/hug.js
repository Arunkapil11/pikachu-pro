exports.run = (client, message, args) => {
const Discord = require("discord.js");
if (!args[0]) return message.reply("mention someone to use this command.");
const mention = `<@${message.mentions.users.first().id}>`;
const author = `<@${message.author.id}>`;
var hug = ["https://media.giphy.com/media/mwPFQgr7vrwDm/giphy.gif","https://m.popkey.co/fe4b34/A6Y1m.gif","https://media.tenor.com/images/630763778dde12ea9fe4a03f1e9a325d/tenor.gif","https://media.tenor.com/images/f8d7f88c57e7111614002aafd22f3976/tenor.gif","https://media.tenor.com/images/65a94929912b4c5ab8143595631b6e8e/tenor.gif","https://68.media.tumblr.com/e790af0168cd80394b7d792dde07407b/tumblr_o76qfcMiFn1sk1rjvo1_400.gif","https://68.media.tumblr.com/a9a8189543ae717cf91982cc59ce7180/tumblr_oo66uowE8K1sori6yo1_250.gif","https://media2.giphy.com/media/vDdPekIaWDzKE/giphy_s.gif","https://media.tenor.com/images/cb5e6e46932ee62b697557ddad51693d/tenor.gif","https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif"]
 var result = Math.floor(Math.random()*hug.length);
 var msg = (`${hug[result]}`);
  message.channel.send( `_${author} hugged ${mention}!_` , {files: [msg]});

}




exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};


exports.help = {

  name: 'hug',

  description: 'Hug someone 💑',

  usage: 'hug [mention]',

  module: 'Fun',

  permit: ' ',

  alias: ' '

};
