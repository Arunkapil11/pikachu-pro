exports.run = (client, message, args) => {
  let reason = args[1];
  let user = message.mentions.members.first();
  if (!reason) return message.channel.send(`**Please give a role name**`);
  if (!user) return message.channel.send(`**Please specify a User!**`);
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      `**Access Denied! :x:\nMissing the Permissions \`\manage roles\`\**`
    );

  let role = message.guild.roles.find("name", `${reason}`);
  if (!role)
    return message.channel.send(`Can't FIND that role , Case sensitive`);
  user.roles.add(role);
  message.reply("Succesively Added " + user + " to " + reason + " ✅ ");
};
exports.conf = {
  enabled: true,

  guildOnly: true,

  aliases: ["gr", "addrole"],

  permLevel: 0
};

exports.help = {
  name: "giverole",

  description: "Give role to mentioned user.",

  usage: "giverole [mention] [name]",

  module: "admin",

  permit: " ",

  alias: ""
};
