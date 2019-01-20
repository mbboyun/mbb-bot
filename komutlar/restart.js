const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot, Yeniden başlatılıyor...").then(msg => {
        console.log("Bot, Yeniden başlatılıyor...");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'restart',
  description: 'Botu yeniden başlatır',
  usage: 'restart'
};
