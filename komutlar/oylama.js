const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .setDescription("Oylama yapmak için bir konu girmen gerek.")
     .setColor(0x00bfff)

       )
     console.log("-oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("0x00bfff")
       .setThumbnail(client.user.avatarURL)
       .setFooter("MBB Bot™", client.user.avatarURL)
       .setTimestamp()

       .addField(`${message.author.tag} adlı yetkili tarafından oylama yapılıyor.`, `▫ | **Oylama konusu**: ${question}`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};
