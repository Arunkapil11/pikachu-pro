 

exports.run = async(client, message, args,Discord,randomC) => {
 const fetch = require('node-fetch'),
  moment = require('moment'),
  momentduration = require('moment-duration-format'), // eslint-disable-line no-unused-vars
  {MessageEmbed} = require('discord.js')
 let anime = message.content.split(" ").slice(1).join(" ");
  if(!anime) message.reply("Please add anime name after the command");
  try {
 const animeList = await fetch(`https://${process.env.kitsuid}-dsn.algolia.net/1/indexes/production_media/query`, {
   
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Algolia-Application-Id': process.env.kitsuid,
            'X-Algolia-API-Key': process.env.kitsukey

          },
          body: JSON.stringify({params: `query=${anime}&facetFilters=[\"kind:anime\"]`})
        }),
        animes = await animeList.json(),
        hit = animes.hits[0],
        embed = new MessageEmbed();

      embed
        .setColor(message.guild ? message.guild.me.displayHexColor : '#7CFC00')
        .setTitle(hit.titles.en ? hit.titles.en : hit.canonicalTitle)
        .setURL(`https://kitsu.io/anime/${hit.id}`)
        .setDescription(hit.synopsis.replace(/(.+)(?:\r|\n|\t)(.+)/gim, '$1 $2').split('\r\n')[0])
        .setImage(hit.posterImage.original)
        .setThumbnail('https://favna.xyz/images/ribbonhost/kitsulogo.png')
        .addField('Canonical Title', hit.canonicalTitle, true)
        .addField('Score', `${hit.averageRating}%`, true)
        .addField('Episode(s)', hit.episodeCount ? hit.episodeCount : 'Still airing', true)
        .addField('Episode Length', hit.episodeLength ? moment.duration(hit.episodeLength, 'minutes').format('h [hours] [and] m [minutes]') : 'unknown', true)
        .addField('Age Rating', hit.ageRating, true)
        .addField('First Air Date', moment.unix(hit.startDate).format('MMMM Do YYYY'), true)
        //.addField('Genres', hit.categories ? hit.categories.slice(0, 5).join(', ') : 'Why do you have to be such a unique bean', false);

      

      return message.channel.send({embed});
    } catch (err) {
     

      return message.reply(`no anime found for \`${anime}\` `);
}
  
}
        
          

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
name: 'anime',
    usage: 'anime [name]',
  description: 'Get anime info',
  module: 'Fun',
  permit: ' ',
  alias: ' '
}; 
