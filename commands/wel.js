exports.run = (client, message, args) => {
  const db = require('quick.db');
  if (!message.member.hasPermission("ADMINSTRATOR")) return message.reply("You don't have the permission to use this command! \n\n `Permission required: `Admin`")
  else 
    if(args[0]=="enable")
    {
      
      
      db.set(message.guild.id,1)
      
        message.reply("Enabled welcome messages!")
      
      
      }
  else if(args[0]=="disable")
  {
    db.set(message.guild.id,0)
   message.reply("Disabled welcome messages!")
 }
    
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "welcome",
  description: "Enable or disable welcome message.",
  usage: "welcome enable or disable",
  module: "admin",
  permit: " ",
  alias: " "
};