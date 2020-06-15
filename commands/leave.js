exports.run = (client, message, args) => {
const config = require('../config.json');
if(message.author.id !== config.botOwner) return message.reply('you are not my owner!!!'); 
let hyperbeam = message.content.split(" ").slice(1);
let servername = hyperbeam.join(" ");
if (!servername) return;
message.reply('I just left ' + servername);
client.guilds.find('name', servername).leave()
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'leaveserver',
  description: 'Leaves a joined server.',
  usage: 'leaveserver [servername]',
  module: 'BOTAdmin',
  permit: 'Bot Owner Only',
  alias: ' '
};
