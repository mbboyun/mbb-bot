const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setColor(0x00bfff)
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setImage(message.author.avatarURL)
        .setTimestamp()

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['avatarım'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Avatarınızı gösterir',
  usage: 'avatar'
};
