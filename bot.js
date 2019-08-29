const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`صور اللايك والاشتراك واكتبيلي رساله في الخاص وتعالي استلم كودك  `,"http://twitch.tv/ahmed")
client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
