const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const { MessageEmbed, Client, Collection } = Discord;
const client = new Discord.Client({ disableEveryone: true }); //();
const Set = new Collection();

const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment");
console.log(process.memoryUsage);
const config = require("/app/config.json");

const Idiot = require("idiotic-api");
client.API = new Idiot.Client("hm7XEqDPbYkLVArcjg7D", { dev: true });

const Enmap = require("enmap");
const EnmapMongo = require("enmap-mongo");
client.prefix = new Enmap({
  provider: new EnmapMongo({
    name: "prefix",

    dbName: "prefix",
    url: "mongodb://pr1:prefix123@ds253889.mlab.com:53889/prefix"
  })
});
client.bump1 = new Enmap({
  provider: new EnmapMongo({
    name: "bump",

    dbName: "bump",

    url: "mongodb://bump:bump420@ds145800.mlab.com:45800/bump"
  })
});
client.shiny = new Enmap({
  provider: new EnmapMongo({
    name: "dialga",

    dbName: "dialga",

    url: "mongodb://shiny:shiny123@ds121674.mlab.com:21674/dialga"
  })
});
client.points = new Enmap({
  provider: new EnmapMongo({
    name: "pikachu",

    dbName: "pikachu",

    url: "mongodb://pikachuxd:Arkpikachu420@ds131826.mlab.com:31826/pikachu"
  })
});
client.r = new Enmap({
  provider: new EnmapMongo({
    name: "random",

    dbName: "random",

    url: "mongodb://Random:Random321@ds111559.mlab.com:11559/random"
  })
});

client.on("ready", async () => {
  /*let array = client.guilds.filter(g =>  g.memberCount - g.members.filter(m=>m.user.bot).size < g.members.filter(m=>m.user.bot).size)
array.map((guild) => guild.leave());*/
 client.patrons = client.guilds.get("278135637293531136").roles.get("438532043060805662").members.map(m=> m.user.id);
    console.log(client.patrons)
  await client.user.setActivity(
    `Follow me on twitch | ${config.prefix}help | ${client.guilds.size} Servers | ${client.users.size} users`,
    { url: "https://www.twitch.tv/pikacord", type: "STREAMING" }
  );

  console.log("ReaDY");
});

client.on("guildMemberRemove", member => {
  if (
    member.guild.id === "278135637293531136" &&
    client.points.has(member.id)
  ) {
    client.points.delete(member.id);
  }
});
//client.on('debug',console.log);



const settings = require("./config.json");

client.emotes = require("./util/emojis.json");
client.animate = (id, name) => `<a:${name}:${id}>`;

client.getImage = img =>
  `https://raw.githubusercontent.com/ArunKapil01/Pikachuimages/master/images/${img}`;

client.danceEmote = client.animate(client.emotes.pika_dance, "pika_dance");
client.dance = m => m.react(client.emojis.get(client.emotes.pika_dance));

client.capFL = string => string.charAt(0).toUpperCase() + string.slice(1);

if (process.version.slice(1).split(".")[0] < 8)
  throw new Error(
    "Node 8.0.0 or higher is required. Update Node on your system."
  );

require("./util/eventLoader.js")(client);

client.login(process.env.TOKEN);

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.modules = new Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    // log(`Loading Command: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

fs.readdir("./modules/", (err, modules) => {
  if (err) console.error(err);
  log(`Loading a total of ${modules.length} modules.`);
  modules.forEach(m => {
    let loadData = require(`./modules/${m}`);
    // log(`Loading Module: ${loadData.moduledata.name}`);
    client.modules.set(loadData.moduledata.name, loadData);
  });
});

fs.readdir("./events/", (err, events) => {
  if (err) console.error(err);
  log(`Loading a total of ${events.length} events.`);
  events.forEach(e => {
    let loadData = require(`./events/${e}`);
    // log(`Loading Event: ${e}`);
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  let permlvl = 0;
  if (message.author.id === config.botOwner) permlvl = 4;
  return permlvl;
}; /*
process.on("unhandledRejection", err => {
console.log(err.stack);

});/**/

/**/ process.on("unhandledRejection", function(reason, p) {
  console.log(
    "Possibly Unhandled Rejection at: Promise ",
    p,
    " reason: ",
    reason
  );
  //
  //
  //process.exit();
  // application specific logging here
});
