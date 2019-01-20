const Discord = require('discord.js');

var client = new Discord.Client();

exports.run = function(client, message) {

        const davet = new Discord.RichEmbed()
        .setColor(0x00bfff)
        .setAuthor('MBB Bot™', client.user.avatarURL)
        .addField('**Davet Linki**', 'https://bit.ly/2Cgdxg4\nDavet linkini botu kendi sunucuna davet edip orada kullanmak için kullanabilirsin.')
        .setTimestamp()
        message.channel.send(davet);


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Komutları gösterir.',
  usage: 'davet'
};
