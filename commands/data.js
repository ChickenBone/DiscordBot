var fs = require('fs');
module.exports.run = async (bot, message, args) => {
if(message.member.roles.find("name", "Data Admin")){
    
var user = message.mentions.members.first();
  var file_pathf = `data/${user}`;
  var file_pathg = file_pathf.replace(/</g,"");
  var file_path = file_pathg.replace(/>/g,"");
  fs.open(`${file_path}`, 'w', function (err, file) {
    if (err) throw err;
    console.log(`new user file made for user ${user}`);
  });
  fs.appendFile(`${file_path}`,"\n")
  var date = new Date().toLocaleString("en-US", {timeZone: "America/Denver"});
  var dataf = date+" MDT "+args+`\` log from \`${message.author}`
  var datafs = dataf.replace(/,/g," ");
  message.channel.send(`${user} Data Has been saved with this data \n ${datafs}`);
  fs.appendFile(`${file_path}`, datafs , function (err) {
  if (err) throw err;
  console.log(`Saved! ${user}`);
});
}else{
  message.channel.send(`${message.author} You do not have the required permissions to do this!`);
}}
exports.cmdConfig = {
  name: "data",
  aliases: ['d','data', 'ort'],
  description: "Manages GSC User Data",
  usage: "!data <user> <data>",
  type: "gsc"
};