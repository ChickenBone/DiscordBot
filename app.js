if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");
const client = new Discord.Client();
client.config = require("./config.js");
require("./util/functions.js")(client);
client.commands = new Enmap();
client.aliases = new Enmap();
client.queue = new Enmap();
client.fight = new Enmap();
client.smite = new Enmap({provider: new EnmapLevel({name: "smite"})});
client.settings = new Enmap({provider: new EnmapLevel({name: "settings"})});
client.gpoints = new Enmap({provider: new EnmapLevel({name: "gpoints"})});
client.spoints = new Enmap({provider: new EnmapLevel({name: "spoints"})});
const init = async () => {
  const cmdFiles = await readdir("./commands/");
  client.log(`Loading a total of ${cmdFiles.length} commands`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });
  const evtFiles = await readdir("./events/");
  client.log(`Loading a total of ${evtFiles.length} events`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
}
client.on("message", message  => {
  user = message.member;
  if (user != null){
  user = message.member;
  user = user.toString();
  if (user.includes("!")) {
      user = user.split("!")[1].split(">")[0];
  } else {
      user = user.split("@")[1].split(">")[0];
  }
  var username = client.users.get(user).username
  var tag = message.member.user.tag
  var username = client.users.get(user)
  var channelID = message.channel.id
  var serverID = message.guild.id
    var fs = require('fs');
    var author = message.author;
    var date = new Date().toLocaleString("en-US", {timeZone: "America/Denver"});
    var channel =   message.guild.channels.get(`${channelID}`).toString();
    
    fs.appendFile(`serverlogs`, `\nServer: <${serverID}> `+` User ID & Name & Tag: ${username}`+`#`+`${tag} `+ ` Channel ID: ${channel} ` + ` Message: "${message}"` + ` <Date and Time> ` + `${date} MST` , function (err) {
      if (err) throw err;
      console.log(`Saved Log`);
    })
    console.log(`Server: <${serverID}> `+` User ID & Name & Tag: ${username}`+`#`+`${tag} `+ ` Channel ID: ${channel} ` + ` Message: ${message}` + ` <Date and Time> ` + `${date} MST`)
    

  }else{
    console.log(`Is Null`)
  }
})
  client.login(``);

 

init();