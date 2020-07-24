const config = require("../config.json");
const { RichEmbed } = require("discord.js");

exports.run = (client, message, args) => {
  if (!client.points.has(`${message.author.id}`)) {
    return;
    message.channel.send("Please use `!register` command first");
  }
  let key = message.author.id;

  let bet = args[0];

  if (!args[1]) return message.reply("Pick heads or tails after amount.");
  if (isNaN(args[0])) return message.reply("Specify numbers only.");
  let choice = args[1].toLowerCase();
  if (args[0] > client.points.getProp(key, "points"))
    /* */ return /**/ message.reply("You don't have that much money.");
  const choices = ["Heads", "Tails"];
  var randomInt = Math.floor(Math.random() * choices.length);
  let botChoice = choices[randomInt];
  let userChoice = "";
  if (choice.startsWith("t")) userChoice = "Tails";
  if (choice.startsWith("h")) userChoice = "Heads";
  if (userChoice === "") return message.reply("Invalid Choice!");
  let result = 2;
  let stringResult = "Won";
  if (botChoice !== userChoice) {
    stringResult = "Lost";
    result = -1;
  }
  let wonAmount = args[0] * result;
  let displayAmount = wonAmount;
  if (displayAmount < 0) displayAmount = 0;
  message.channel.send(
    `You got ${botChoice}.\nYou won ${displayAmount}<a:Pikacoin:428018290997329930>!`,
    { files: [client.getImage("coins/" + botChoice.toLowerCase() + ".png")] }
  );

  var userPoints = /**/ client.points.getProp(key, "points");
  /**/ userPoints += displayAmount - bet;
  client.points.setProp(key, "points", userPoints);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bf"],
  permLevel: 0
};

exports.help = {
  name: "betflip",
  description: "Bet money on coin flip.",
  usage: "betflip <amount> <h or t>",
  module: "Gambling",
  permit: " ",
  alias: " "
};
