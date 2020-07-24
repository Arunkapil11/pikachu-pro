exports.run = (client, message, args) => {

let guild = message.guild;
const params = message.content.split(" ").slice(1);

if (guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
{
    if(guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    {
       const user = message.mentions.users.first();
// Parse Amount
const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
if (!amount) return message.reply('Must specify an amount to delete!');
if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
// Fetch 100 messages (will be filtered and lowered up to max amount requested)
message.channel.messages.fetch({
 limit: amount+1,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
    }else{
        message.channel.send("I dont have the permission to delete messages.").then(m => m.delete(7000));
    }
}else{
    message.author.send("You dont have the permission to delete messages.").then(m => m.delete(7000));
}
return;
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clr', 'prune', 'purge'],
  permLevel: 0
};

exports.help = {
  name: 'clear',
  description: 'Clears X number of messages.',
  usage: 'clear [@user] [number]',
  module: 'Admin',
  permit: 'Requires Manage Messages Server Permission',
  alias: '/ clr / prune / purge'
};
