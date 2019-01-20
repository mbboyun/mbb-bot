const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setColor(0x00bfff)
        .setDescription("**Sunucu Iconu**")
        .setImage(message.guild.iconURL)
        .setTimestamp()

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'servericon',
  description: 'Serverin iconunu gösterir',
  usage: 'servericon'
};
