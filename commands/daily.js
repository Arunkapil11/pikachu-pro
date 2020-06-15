

exports.run = (client, message, args) => {
  const key = message.author.id;
  if(!client.points.has(`${message.author.id}`)) {
message.channel.send("Please use `!register` command first");}
  if(!client.bump1.has(message.author.id)) {client.bump1.set(message.author.id, { bump:0})}
  const guild = message.guild;
   let moment = require('moment');
const snekfetch = require("snekfetch");
let dbt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODcyNjIyNDg3NjI3MzcyNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg3ODc0ODg3fQ.FKV9FpXIoBEl7BZMeNEIwmPxbOeWw-swlA9oGPRKdmY";
snekfetch.get("https://discordbots.org/api/bots/698726224876273724/check?userId="+message.author.id).set("Authorization",dbt).then(({ body }) => {
    let bot = body.voted;

if(bot === 1){
if(Date.now()>client.bump1.getProp(message.author.id,"bump"))
{   
  client.bump1.set(message.author.id, { bump:  60*60*12*1000+Date.now()}); 
  const daily = Math.floor(Math.random() * 100);
 const br = Math.floor(Math.random() * 10);
  if(br === 10){
    var userPoints = client.points.getProp(key, "points"); 
    userPoints += daily;
    message.channel.send({embed: { color: 3447003, description: `You got daily ${daily} `+"<a:Pikacoin:428018290997329930>" }});
    client.points.setProp(key, "points", userPoints)
  }
   else if(br < 10){
    var userPoints = client.points.getProp(key, "points"); 
    userPoints += 10 ;
    message.channel.send({embed: { color: 3447003, description: `You got daily 10 <a:Pikacoin:428018290997329930>` }});
     client.points.setProp(key, "points", userPoints)
  }
}
                                                                                                                                   
else{
 
var fromNow = moment(client.bump1.getProp(message.author.id,"bump")).fromNow(true);

 message.channel.send("Wait for "+fromNow+" Before using command again");
}
 
}if(bot === 0){message.channel.send("**You must upvote this bot to unlock this command **! \nUpvote Here: https://discordbots.org/bot/698726224876273724/vote\n then use this command again")}})

     
  
}
               
                                                                                                                                    
            


  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'daily',
  description: 'Get daily pikacoins!!',
  usage: 'daily',
  module: 'Gambling',
  permit: ' ',
  alias: ' '
}; 