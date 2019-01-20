const Discord = require('discord.js');

exports.run = async (client, message, args, guild) => {
         let mesaj = args.join(' ');
     if (mesaj.length < 1) return message.channel.send(`Çekilişin ödülünü giriniz.`);

  const cek = new Discord.RichEmbed()
  .setTitle(`${mesaj} Çekilişi`) // ${message.author.tag} Çekilişi yapan kişinin adı
  .addField('Ödül:', `${mesaj}`)
  .addField('Kazanan:', `${message.guild.members.random().displayName}`)
  .setTimestamp()
  .setColor('0x00bfff')
message.channel.send(cek)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'çekiliş',
  description: '(Anlık)Çekiliş yapabilirsiniz.',
  usage: 'çekiliş'
};
