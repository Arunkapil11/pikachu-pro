exports.run = async (client, message, args) => {
  if (message.member.hasPermission("MANAGE_ROLES")) {
    let rMember = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    ); //Gets the user
    if (!rMember) return message.reply("That user does not exist.");
    let gRole = message.guild.roles.find("name", "grounded");

    rMember.roles
      .remove(rMember.roles)
      .then(console.log)
      .catch(console.error); //Removes all roles

    message.channel.send("User roles was removed");
    //
    //rMember.roles.add(gRole.id); //Adds suspended Role

    message.channel.send("user was grounded."); //Messages the channel that the user was suspended

    try {
      await rMember.send("You have been grounded."); //Tries to DM User
    } catch (e) {
      message.channel.send(
        "We tried to DM the user to let them know, but their DM's are locked."
      ); //Announces that their DMs are locked
    }
  } else {
    message.channel.send("You do not have permission to use this command.");
  }
};

exports.conf = {
  enabled: true,

  guildOnly: true,

  aliases: ["removeroles"],

  permLevel: 0
};

exports.help = {
  name: "ground",

  description: "Give role to mentioned user.",

  usage: "giverole [mention] [name]",

  module: "admin",

  permit: " ",

  alias: ""
};
