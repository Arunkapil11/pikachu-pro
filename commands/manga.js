exports.run = async (client, message, args, Discord, randomC) => {
  const fetch = require("node-fetch"),
    moment = require("moment"),
    momentduration = require("moment-duration-format"), // eslint-disable-line no-unused-vars
    { MessageEmbed } = require("discord.js");
  let manga = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (!manga) return message.reply("Please, supply a manga name");
  // try {

  const mangaList = await fetch(
      `https://${process.env.kitsuid}-dsn.algolia.net/1/indexes/production_media/query`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Algolia-Application-Id": process.env.kitsuid,
          "X-Algolia-API-Key": process.env.kitsukey
        },
        body: JSON.stringify({
          params: `query=${manga}&facetFilters=[\"kind:manga\"]`
        })
      }
    ),
    mangas = await mangaList.json(),
    hit = mangas.hits[0],
    embed = new MessageEmbed();

  embed
    .setColor(message.guild ? message.guild.me.displayHexColor : "#7CFC00")
    .setTitle(hit.titles.en ? hit.titles.en : hit.canonicalTitle)
    .setURL(`https://kitsu.io/anime/${hit.id}`)
    .setDescription(
      hit.synopsis.replace(/(.+)(?:\r|\n|\t)(.+)/gim, "$1 $2").split("\r\n")[0]
    )
    .setImage(hit.posterImage.original)
    .setThumbnail("https://favna.xyz/images/ribbonhost/kitsulogo.png")
    .addField("Canonical Title", hit.canonicalTitle, true)
    .addField("Score", `${hit.averageRating}%`, true)
    .addField("Age Rating", hit.ageRating, true)
    .addField(
      "First Publish Date",
      moment.unix(hit.startDate).format("MMMM Do YYYY"),
      true
    );
  // .addField('Genres', hit.categories.slice(0, 5).join(', '), false);

  return message.channel.send({ embed });
  /* } catch (err) {
      

      return message.reply(`no manga found for \`${manga}\` `);
    }*/
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "manga",
  usage: "manga [name]",
  description: "Get manga info",
  module: "Fun",
  permit: " ",
  alias: " "
};
