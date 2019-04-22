if (process.version.slice(1).split(".")[0] < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");
setInterval(myMethod, 60000);
const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");
const client = new Discord.Client();
var http = require('http');
var guild = require("./guild.js");
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
client.login(``);
var now6 = new Date()
if(now6.getDay == 0 || now6.getDay == 6){

  client.on("message", message  => {
    var red = message.author
    if (red == '<@199741679865954304>'){
      message.channel.send(`<@199741679865954304> Said: ${message} (and hes gay)`)
        
    }
  })


  client.on("message", message  => {
    var red = message.author
    if (red == '<@185909273618939904>'){
      var channelID = message.channel.id
      if(channelID == '464645718963912715'){
      message.channel.send(`<@185909273618939904> Said: ${message} (and hes bald)`)
      }   
    }
  })  
}
  client.on('guildMemberAdd', member => {
    if (member.guild.id == '315714665927671808') {
      var role = member.guild.roles.find('name', 'IN-Processing');
    member.addRole(role)
    member.send("Welcome to the GSC recruitment process! \nYou have just started your journey to being in GSC! First things first welcome to our discord server. Currently, the only channel that you can view is the onboarding channel. This channel is there to provide you with assistance and a commander to communicate to while we overlook your application and prepare an orientation for you! If you have any questions feel free to communicate your questions in this channel and we will contact you in this channel for any notifications about orientation information or anything else GSC finds necessary for you to know at this time. \n \nThank You!\n𝓖𝓢𝓒 𝓑𝓸𝓽")
    client.channels.get(`464670094405009408`).send(`Welcome ${member} to the GSC family!`);
    }
      });
    
    

      client.on('guildMemberAdd', member => {
        if (member.guild.id == '446419048297922570') {
          var role = member.guild.roles.find('name', 'unverified');
        member.addRole(role)
        client.channels.get(`471227511263592448`).send(`Welcome ${member} to the GSC Public Server!`);
        }
          });

  var GoogleSpreadsheet = require('google-spreadsheet');
  var async = require('async');
  function myMethod( )
{ 
  // spreadsheet key is the long id in the sheets URL
  var doc = new GoogleSpreadsheet('1mMXHiBRf1YBo36t_Yi_gjFKr2pJ0fQiTrX99XFtYnf8');
  var sheet;
  var now = new Date();
  if(now.getDay !== 0 || now.getDay != 6){
  async.series([
    
    function setAuth(step) {
      // see notes below for authentication instructions!
      var creds = require('./privatekey.json');
   
      doc.useServiceAccountAuth(creds, step);
    },
    function getInfoAndWorksheets(step) {
      doc.getInfo(function(err, info) {
        console.log('Loaded doc: ');
        sheet = info.worksheets[0];
        console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
        step();
      });
    },

    function checkOne(step) {
      
      sheet.getCells({
        'min-row': 2,
        'max-row': 2,
        'return-empty': false
      }, function(err, cells) {
        if(cells[2] != null){
        var message = cells[2];
        var time = cells[3];
        var now1 = new Date();
        var now2 = new Date();
        var date = now1.getHours() + `:`+now2.getMinutes(); 
        console.log('Message:'+message.value+` Date:`+time.value+`    `+ date);
        var times = time.value
        var mes = message.value
        if(date == times){
          client.channels.get('411950891680268299').sendMessage(`${mes}`)
        }

        cells[0].value = `Ready!`;
        sheet.bulkUpdateCells(cells); //async
   
        step();
      }});
    },
  
  ],
  );
  
  
    async.series([
      function setAuth(step) {
        // see notes below for authentication instructions!
        var creds = require('./privatekey.json');
     
        doc.useServiceAccountAuth(creds, step);
      },
      function getInfoAndWorksheets(step) {
        doc.getInfo(function(err, info) {
          console.log('Loaded doc: ')
          sheet = info.worksheets[0];
          console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
          step();
        });
      },
  
      function checkTwo(step) {
        sheet.getCells({
          'min-row': 3,
          'max-row': 3,
          'return-empty': false
        }, function(err, cells) {
          
          if(cells[2] != null){
            var message = cells[2];
          var time = cells[3];
          var now1 = new Date();
          var now2 = new Date();
          var date = now1.getHours() + `:`+now2.getMinutes(); 
          console.log('Message:'+message.value+` Date:`+time.value+`    `+ date);
          var times = time.value
          var mes = message.value
          if(date == times){
            client.channels.get('411950891680268299').sendMessage(`${mes}`)
          }
  
          cells[0].value = `Ready!`;
          sheet.bulkUpdateCells(cells); //async
     
          step();
        }});
      },
    
    ],
    );
    
    
      async.series([
        function setAuth(step) {
          // see notes below for authentication instructions!
          var creds = require('./privatekey.json');
       
          doc.useServiceAccountAuth(creds, step);
        },
        function getInfoAndWorksheets(step) {
          doc.getInfo(function(err, info) {
            console.log('Loaded doc: ')
            sheet = info.worksheets[0];
            console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
            step();
          });
        },
    
        function checkThree(step) {
          sheet.getCells({
            'min-row': 4,
            'max-row': 4,
            'return-empty': false
          }, function(err, cells) {
            
            if(cells[2] != null){
            var time = cells[3];
            var message = cells[2];
            var now1 = new Date();
            var now2 = new Date();
            var date = now1.getHours() + `:`+now2.getMinutes(); 
            console.log('Message:'+message.value+` Date:`+time.value+`    `+ date);
            var times = time.value
            var mes = message.value
            if(date == times){
              client.channels.get('411950891680268299').sendMessage(`${mes}`)
            }
    
            cells[0].value = `Ready!`;
            sheet.bulkUpdateCells(cells); //async
       
            step();
          }});
        
        },
      
      ],
      );
      
      
        async.series([
          function setAuth(step) {
            // see notes below for authentication instructions!
            var creds = require('./privatekey.json');
         
            doc.useServiceAccountAuth(creds, step);
          },
          function getInfoAndWorksheets(step) {
            doc.getInfo(function(err, info) {
              console.log('Loaded doc: ')
              sheet = info.worksheets[0];
              console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
              step();
            });
          },
      
          function checkFour(step) {
            sheet.getCells({
              'min-row': 5,
              'max-row': 5,
              'return-empty': false
            }, function(err, cells) {
              
              if(cells[2] != null){
              var message = cells[2];
              var time = cells[3];
              var now1 = new Date();
              var now2 = new Date();
              var date = now1.getHours() + `:`+now2.getMinutes(); 
              console.log('Message:'+message.value+` Date:`+time.value+`    `+ date);
              var times = time.value
              var mes = message.value
              if(date == times){
                client.channels.get('411950891680268299').sendMessage(`${mes}`)
              }
      
              cells[0].value = `Ready!`;
              sheet.bulkUpdateCells(cells); //async
         
              step();
            }});
          },
        
        ],
        );
        
        
          async.series([
            function setAuth(step) {
              // see notes below for authentication instructions!
              var creds = require('./privatekey.json');
           
              doc.useServiceAccountAuth(creds, step);
            },
            function getInfoAndWorksheets(step) {
              doc.getInfo(function(err, info) {
                console.log('Loaded doc: '+info.title+' by '+info.author.email);
                sheet = info.worksheets[0];
                console.log('sheet 1: '+sheet.title+' '+sheet.rowCount+'x'+sheet.colCount);
                step();
              });
            },
        
            function checkFive(step) {
              sheet.getCells({
                'min-row': 6,
                'max-row': 6,
                'return-empty': false
              }, function(err, cells) {
                
                if(cells[2] != null){
                  var message = cells[2];
                var time = cells[3];
                var now1 = new Date();
                var now2 = new Date();
                var date = now1.getHours() + `:`+now2.getMinutes(); 
                console.log('Message:'+message.value+` Date:`+time.value+`    `+ date);
                var times = time.value
                var mes = message.value
                if(date == times){
                  client.channels.get('411950891680268299').sendMessage(`${mes}`)
                }
        
                cells[0].value = `Ready!`;
                sheet.bulkUpdateCells(cells); //async
           
                step();
              }});
            },
            function checkSeven(step) {
              sheet.getCells({
                'min-row': 6,
                'max-row': 6,
                'return-empty': false
              }, function(err, cells) {
                
                if(cells[2] != null){
                  var message = cells[2];
                var time = cells[3];
                var timedate = cells[4];
                var now1 = new Date();
                var now2 = new Date();
                var now3 = new Date();
                var date = now1.getHours() + `:`+now2.getMinutes() + now3.getDate()
 
                console.log('Message:'+message.value+` Date:`+time.value+`    `+ date + timedate);
                var times = time.value
                var timedate = timedate.value
                var mes = message.value
                if(date == times+timedate){
                  client.channels.get('411950891680268299').sendMessage(`${mes}`)
                }
        
                cells[0].value = `Ready!`;
                sheet.bulkUpdateCells(cells); //async
           
                step();
              }});
            },
          ],
          );
        }  }   

        client.on("message", message  => {

          var channelID = message.channel.id;
          var serverID = message.guild.id;
            var fs = require('fs');
            var author = message.member;
            user = message.member;
            member = message.member;
            console.log(`${member}`)
            var date = new Date().toLocaleString("en-US", {timeZone: "America/Denver"});
            var channel =   message.guild.channels.get(`${channelID}`).toString();
            if (message.guild.id == '446419048297922570' || channel == '471207008851460096' || message == '!accept') {
              let role = message.guild.roles.find('name', 'verified');
              member.addRole(role);
              member.removeRole(message.guild.roles.find("name", "unverified")) 
              
              }
            
        
            })

        client.on("message", message  => {

          var channelID = message.channel.id;
          var serverID = message.guild.id;
            var fs = require('fs');
            var author = message.member;
            user = message.member;
            member = message.member;
            console.log(`${member}`)
            var date = new Date().toLocaleString("en-US", {timeZone: "America/Denver"});
            var channel =   message.guild.channels.get(`${channelID}`).toString();
            if (message.guild.id == '446419048297922570' && channel == '471212210765430785' || message == '!contract' || message == '!join' || message == '!contact') {
              if(message == '!contract'){
                let role = message.guild.roles.find('name', 'Contracting');
                member.addRole(role);
                member.removeRole(message.guild.roles.find("name", "verified")) 
              }
            if(message == '!contact'){
                let role = message.guild.roles.find('name', 'Contact Only');
                member.addRole(role);
                member.removeRole(message.guild.roles.find("name", "verified")) 
            }}
              
              if(message == '!join'){
                let role = message.guild.roles.find('name', 'Recruit');
                member.addRole(role);
                member.removeRole(message.guild.roles.find("name", "verified")) 
              }
            })
init();
