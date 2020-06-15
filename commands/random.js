exports.run = (client, message, args) => {
  let key = message.author.id;
var shiny = Math.floor(Math.random() * 10);
  if(!client.shiny.has(`${message.author.id}`)) {
    
message.channel.send("Please register!");}
  else
  if(client.shiny.getProp(key, "balls") === 0 )return message.channel.send("Please buy shinyball from shop first!");
  
 
   
  
  else
if(shiny == 4) {
 shinyzer='sunmoon_shiny'
 msg='Wow, you are lucky, you caught a Shiny Pokemon.'
let  userPoints = client.shiny.getProp(key, "points"); userPoints += 1;
 client.shiny.setProp(key, "points", userPoints)
   let  balls = client.shiny.getProp(key, "balls"); balls -= 1;
 client.shiny.setProp(key, "balls", balls)
  }
  else if(shiny == 1){
    shinyzer='sunmoon_shiny'
    msg= 'Uh,oh Shiny Pokemon fled away'
    
  }
else if(shiny == 6){
    shinyzer='sunmoon_shiny'
    msg= 'You throw the ball. But, Pokemon breaked the ball and fled away!'
    let  balls = client.shiny.getProp(key, "balls"); balls -= 1;
 client.shiny.setProp(key, "balls", balls)
  }
else {
 shinyzer='sunmoon'
 msg ='Sorry not a shiny Pokemon.'
}
  
let party = Math.floor(Math.random() * 802+1);
  
  if(party<100){
    message.channel.send(msg, { files: [`https://pldh.net/media/pokemon/gen7/${shinyzer}/0${party}.png`] });
  }
  else if(party<10){
    message.channel.send(msg, { files: [`https://pldh.net/media/pokemon/gen7/${shinyzer}/00${party}.png`] });
  }
  else
message.channel.send(msg, { files: [`https://pldh.net/media/pokemon/gen7/${shinyzer}/${party}.png`] });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['shinyhunt','shinyhunter'],
  permLevel: 0
};

exports.help = {
  name: 'shinyhuntr',
  description: 'Shiny hunting.',
  usage: 'shinyhuntr',
  module: 'Pokemon',
  permit: ' ',
  alias: ' '
};



