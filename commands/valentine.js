exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  if (!args[0]) return message.reply("mention someone to use this command.");
  const mention = `<@${message.mentions.users.first().id}>`;
  const author = `<@${message.author.id}>`;

  var nummsg = Math.floor(Math.random() * 12 + 1);
  var msg;

  if (nummsg == 1) {
    msg = `https://img0.etsystatic.com/154/0/13924892/il_340x270.1115835066_97lt.jpg`;
  } else if (nummsg == 2) {
    msg = `https://pre00.deviantart.net/66b9/th/pre/f/2012/044/6/d/terrible_pokemon_valentines_by_shattered_earth-d4plpne.jpg`;
  } else if (nummsg == 3) {
    msg = `http://i0.kym-cdn.com/photos/images/facebook/000/750/726/28c.jpg`;
  } else if (nummsg == 4) {
    msg = `https://s-media-cache-ak0.pinimg.com/736x/df/3d/c5/df3dc50436876b455b656858c2175421.jpg`;
  } else if (nummsg == 5) {
    msg = `https://i.pinimg.com/736x/24/19/ea/2419ea23910696e0085cd7f104ca240d--valentine-puns-valentines-day.jpg`;
  } else if (nummsg == 6) {
    msg = `https://i.pinimg.com/236x/a2/4c/87/a24c878f40a6e7e22b269dde450266ca--pikachu-valentine-day-cards.jpg`;
  } else if (nummsg == 7) {
    msg = `https://i.pinimg.com/736x/c3/a7/d6/c3a7d60354935ce29330287a5ec96ca2--love-poems-valentine-day-cards.jpg`;
  } else if (nummsg == 8) {
    msg = `https://imgs.tuts.dragoart.com/how-to-draw-valentine-pikachu_1_000000019257_5.png`;
  } else if (nummsg == 9) {
    msg = `https://pm1.narvii.com/6377/0e334eb9a910b29be62ad8ef2b183cd1810fd68c_hq.jpg`;
  } else if (nummsg == 10) {
    msg = `https://sixprizes.com/wp-content/uploads/Valentine-Pikachu.jpg`;
  } else if (nummsg == 11) {
    msg = `http://www.mypokecard.com/my/galery/JVBYxt4sbrjx.jpg`;
  } else if (nummsg == 12) {
    msg = `http://www.mypokecard.com/my/galery/MmBPZjEmC6Ye.jpg`;
  }
  message.channel.send(`${mention} `, { files: [msg] });
};

exports.conf = {
  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0
};

exports.help = {
  name: "valentine",

  description: "valentine someone 💑",

  usage: "valentine [mention]",

  module: "waifu",

  permit: " ",

  alias: " "
};
