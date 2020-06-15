exports.run = (client, message, args) => {
  if (!args[0]) return message.reply("mention someone to use this command.");
  const bot = `<@${client.user.id}>`;
  const mention = message.content.split(" ").slice(1).join(" ");
  const author = `<@${message.author.id}>`;
  if (author === mention) return message.reply("You can't eat yourself.");
  if (mention === bot) return message.reply("You can't eat me :stuck_out_tongue_winking_eye:");
  return message.channel.send(`_${author} ate ${mention}!_`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eat',
  description: 'Eats someone or something for fun.',
  usage: 'eat [something]',
  module: 'Fun',
  permit: ' ',
  alias: ' '
};
