module.exports = async member => {
 let db = require('quick.db');
if(db.get(member.guild.id)=== 0) return;
  else
  var nummsg = Math.floor((Math.random() * 22) + 1);
  let guild = member.guild;
  let client = member.client;
  const Discord = require("discord.js");
  const channel = member.guild.channels.find(ch => ch.name.includes('welcome'));
	if (!channel) return;
const Canvas = require('canvas');
	
	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('https://i.insider.com/5bea0bf8e4218a4bf60c64f1?width=600&format=jpeg&auto=webp');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#fff400';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	//channel.send(`Welcome to the server, ${member}!`, attachment);
  var msg
  if (nummsg == 1)
  {
  msg =`\nPlease welcome **${member.user.username}** to **${guild.name}** \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 2)
  {
  msg=`\n**${member.user.username}** Is coming with a :knife: ... RUN !!! \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 3)
  {
  msg=`\nWhy to fear when **${member.user.username}** is here. :smiley:  \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 4)
  {
  msg=`\n**${member.user.username}** survived the terrorist attack ... **${member.user.username}** will be safe here ... \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 5)
  {
  msg=`\n**${member.user.username}** is the latest discovery around **${guild.name}**. \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 6)
{
msg=`\n${member.user.tag}, forget the **DOGS** Beware of **KIDS**😜\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 7)
{
msg=`\n${member.user.tag}, SIT LONG, TALK MUCH, LAUGH OFTEN\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 8)
{
msg=`\nSee ${member.user.tag}, have joined the party.\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 9)
{
msg=`\nYou are looking great👌 ${member.user.tag}. \n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 10)
{
msg=`\n${member.user.tag} DOORBELL BROKEN! Yell **"DING DONG"** loudly :smiley:\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 11)
{
msg=`\nYay, you made it ${member.user.tag}. Now the party can start :smiley:\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 12)
{
msg=`\nWelcome ${member.user.tag}, now time to rock!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 13)
{
msg=`\nWelcome, ${member.user.tag}, be WISE, don't break rules :slight_smile: \n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 14)
{
msg=`\nHey, ${member.user.tag} is now with us. Cheers!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 15)
{
msg=`\nAwesome, ${member.user.tag} finally arrived :smiley:\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 16)
{
msg=`\nWelcome ${member.user.tag}, hope you will enjoy your stay.\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 17)
{
msg=`\nCome in ${member.user.tag}, we are *Awesome!!!*\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 18)
{
msg=`\n${member.user.tag} wants to be the __very best__!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 19)
{
msg=`\nEveryone, meet my dearest friend, ${member.user.tag}!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 20)
{
msg=`\nWow, ${member.user.tag} is now with us!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
else if (nummsg == 21)
{
msg=`\nMeet ${member.user.tag}, the luckiest person ever!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
}
  else 
  {
  msg=`\nPlease welcome **${member.user.username}** to **${guild.name}** \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username,client.user.avatarURL({ format: "png", size: 1024 }))
  .setColor(0x66CC00)
  .setDescription(msg)
  
  .setThumbnail(member.user.displayAvatarURL({ format: "png", size: 1024 }))
  .setFooter(`User Join`)
  .setTimestamp()
  let ch = guild.channels.filter(c=>c.name.includes("welcome")).first();
 
  if(!ch) return;
 
  ch.send({embed});
  ch.send(attachment)
}
