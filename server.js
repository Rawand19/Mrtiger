const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ''

     
client.on("ready", () => {
client.user.setActivity("هەتا کەی؟ لەگەڵ هەمووان پێ ئەکەنیت و بەتەنیاش ئەگری..؟!🙂💔", {type: 'PLAYING'});
client.user.setStatus("idle");
});

client.on("ready", () => {
  var x = client.channels.get("585052986561265674");
  if (x) x.join();  
});

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});
client.on("ready", async ready => {
  var i = 0;
  var list = [
    "!",
    "𝗥𝗔𝗪𝗔",
    "𝗥𝗔𝗪𝗔๏",
    "𝗥𝗔𝗪𝗔๏𝗦",
    "𝗥𝗔𝗪𝗔๏𝗦𝗛",
    "𝗥𝗔𝗪𝗔๏𝗦𝗛𝗘",
    "𝗥𝗔𝗪𝗔๏𝗦𝗛𝗘𝗟",
    "𝗥𝗔𝗪𝗔๏𝗦𝗛𝗘𝗟𝗕",
    "𝗥𝗔𝗪𝗔๏𝗦𝗛𝗘𝗟𝗕𝗬",
 ]; 
 setInterval(() => {
   var guild = client.guilds.get("584491260484648962")
   var reva = guild.members.get("562392176793747456")
   reva.setNickname(list[i]
   );                 
   if(i + 1 === 9) {
     i = 0;
   } else { 
     i++;
    
   } 
 }, 2500); 
});  

client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {
  

case "a":
message.channel.send(`وێنەی ئەکاونتەکەت ئەوەیە☟: ${message.author.avatarURL}`)
break;
}
});
    
client.on("message", msg => {
if (msg.content === "<@562392176793747456>") {  
msg.reply("`💔😂تاگم مەکە کاتم نیە بۆ کەسی کاتی`");
 
}
})
  

client.login("NTYyMzkyMTc2NzkzNzQ3NDUsOXQZOAql8");
      
            
    
