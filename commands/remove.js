exports.run = (client, message, args) => {
let reason = args[1];
    let user = message.mentions.members.first();
  if(!reason)
        return message.channel.send(`**Please give a role name**`);
   if(!user)
            return message.channel.send(`**Please specify a User!**`);
    if(!message.member.hasPermission('MANAGE_ROLES'))
        return message.channel.send(`**Access Denied! :x:\nMissing the Permissions \`\manage roles\`\**`);
       
    
          let role = message.guild.roles.find("name", `${reason}`);
  if(!role) return message.channel.send(`Can't FIND that role , Case sensitive`);
user.roles.remove(role)
  message.reply("Succesively Removed "+user+" to "+ reason+" ✅ "); 
}
exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['rr','removerole'],

  permLevel: 0

};


exports.help = {

  name: 'takerole',

  description: 'Take role to mentioned user.',

  usage: 'takerole [mention] [name]',

  module: 'admin',

  permit: ' ',

  alias: ''

};

