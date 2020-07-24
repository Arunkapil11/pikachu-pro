exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  const snekfetch = require("snekfetch");
  let key = message.author.id;
  let dbt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ODcyNjIyNDg3NjI3MzcyNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg3ODc0ODg3fQ.FKV9FpXIoBEl7BZMeNEIwmPxbOeWw-swlA9oGPRKdmY";
  snekfetch
    .get(
      "https://discordbots.org/api/bots/698726224876273724/check?userId=" +
        message.author.id
    )
    .set("Authorization", dbt)
    .then(({ body }) => {
      let bot = body.voted;

      if (
        client.patrons.includes(message.author.id) &&
        !client.points.has(key) &&
        !client.shiny.has(key)
      ) {
        client.points.set(key, { user: message.author.id, points: 10 });
        client.shiny.set(key, { user: message.author.id, points: 0, balls: 1 });
        message.channel.send("done!");
      } else if (bot === 1 && !client.patrons.includes(message.author.id)) {
        if (!client.points.has(key)) {
          client.points.set(key, { user: message.author.id, points: 1 });
          client.shiny.set(key, {
            user: message.author.id,
            points: 0,
            balls: 0
          });
          message.channel.send(
            "Welcome to pikacord world here you can see many awesome things like shinyhunting (https://donatebot.io/checkout/278135637293531136?buyer=" +
              message.author.id
          ) +
            "So what are you waiting for use `p-help` command to know more about all the commands this bot offer to you!";
        }
      } else if (bot === 0 && !client.patrons.includes(message.author.id)) {
        message.channel.send(
          "** You must upvote this bot to unlock this command **! \nUpvote Here: https://discordbots.org/bot/698726224876273724/vote\n then use this command again"
        );
      }
    });
  if (client.points.has(key) && client.shiny.has(key))
    return message.reply("Use `!help` command to see a list of all commands");
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["start"],
  permLevel: 0
};

exports.help = {
  name: "register",
  description: "register",
  usage: "register ",
  module: "Gambling",
  permit: " ",
  alias: " "
};
