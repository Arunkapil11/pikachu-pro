exports.run = (client, message, args) => {
let reason = args[0];
let color = args[1];
  if(!reason)
         return message.channel.send(`**Please give a role name**`)
 if(!color || !color.startsWith("#") || !color.length>6)
         return message.channel.send(`**Please ADD a color hex code starting with #**`)
     if(!message.member.hasPermission('MANAGE_ROLES'))
         return message.channel.send(`**Access Denied! :x:\nMissing the Permissions \`\manage roles\`\**`);
     
   message.guild.roles.create({name:`${reason}`, color:color,}).catch(error => console.log(error));
   message.channel.send(`Created a role named ${reason} ✅ `);
}
exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ['crole'],

  permLevel: 4

};


exports.help = {

  name: 'createrole',

  description: 'Give role to mentioned user.',

  usage: 'createrole [name]',

  module: 'admin',

  permit: ' ',

  alias: ''

};


