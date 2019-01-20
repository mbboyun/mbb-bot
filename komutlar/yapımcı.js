const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Yapımcı**")
        .setImage("https://i.resimyukle.xyz/7NWBHf.png")
        .setThumbnail("https://i.resimyukle.xyz/7NWBHf.png")
        .setColor(0x00bfff)
        .setTimestamp()
        .addField("Lakabı", "MBB", true)
        .addField("Discord Sunucusu", `https://discord.gg/nTbbGhH`, true)
   .addField("Discord", `MBB_Oyun#0001`, true)


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'Yapımcı hakkında bilgi verir.',
  usage: 'yapımcı'
};
