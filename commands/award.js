exports.run = (client, message, args) => {

if(message.author.id !== "258961364939309056") return;
  //const key = `${message.author.id}`; 

  const user = message.mentions.users.first() || client.users.get(args[0]); 
  const key = `${user.id}`; 

if(!user) return message.reply("You must mention someone or give their ID!");
 const pointsToAdd = parseInt(args[1], 10); 
if(!pointsToAdd) return message.reply("You didn't tell me how many points to give...") 
 var userPoints = client.points.getProp(key, "points"); userPoints += pointsToAdd; 
 client.points.setProp(key, "points", userPoints)
 message.channel.send(`${user.tag} has received ${pointsToAdd} money and now stands at ${userPoints} money.`); 
}


exports.conf = {

  enabled: true,

  guildOnly: false,
  
  permLevel: 4,

  //botOwnerOnly: true,

  aliases: [],

  permits: []

}


exports.help = {

  name: 'award',
module:"BOTAdmin",
  description: "Award someone coins.",
//description
  extended: "Award yourself or someone else.",

  usage: 'award <amount> <mention> [reason]'

}

