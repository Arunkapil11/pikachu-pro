exports.run = (client, message, args) => {

var dice = Math.floor(Math.random() * 6);
message.channel.send({files: [
                      client.getImage("dice/"+dice +".jpg")]/*`*/}).then(m=>m.react('🎲'));
  console.log(dice)
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dice',
  description: 'Rolls a dice.',
  usage: 'dice',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};