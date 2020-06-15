exports.run = (client, message, args, randomC) => {
  
  // functions
  const string = (guild) => `ID: ${guild.id}\nMembers: ${guild.memberCount}\nOwner: ${guild.owner.id} - ${guild.owner.user.tag}`;
  function getDesc(n) {
    return string(client.guilds.map(g=>g)[n]);
  }
  const getTitle = (n) => client.guilds.map(g=>g)[n].name;
  
  // defines
  let tempStr = args[0];
  if (!args[0]) tempStr = "1";
  
  var num = parseInt(args[0]);
  if (!num) num = 1;
  
  // code
  const embed = new client.embed.MessageEmbed();
  var a = num;
  
  for (var i = num - 1; i < num * 10; i++) {
    a++;
    console.log ("Arun Kapil counting " + a);
   if (client.guilds.map (g=>g)[a]) embed.addField(getTitle(a), getDesc(a))
  }

  embed.setTitle("List Of Servers")
  .setColor(randomC)
  message.channel.send({embed});
  console.log (embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
}

exports.help = {
  name: 'servers',
  description: 'Sends a list of servers the bot is in.',
  usage: 'servers or servers <page#>',
  module: 'Owner',
  permit: 'Bot Owner Only'
}