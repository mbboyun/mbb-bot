const Discord = require("discord.js");
const weather = require('weather-js');

exports.run =  (bot, message, args) => {
  if (!args[0]) return message.channel.send({embed: {
       color: Math.floor(Math.random() * (0x00bfff + 1)),
       description: (`:no_entry_sign: Şehir adı giriniz..`)

 }});
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
            if (err) message.channel.send({embed: {
       color: Math.floor(Math.random() * (0x00bfff + 1)),
       description: (`:no_entry_sign:${err}`)

 }});
            if (!result) {
                message.channel.send({embed: {
       color: Math.floor(Math.random() * (0x00bfff + 1)),
       description: (`:no_entry_sign: Geçerli şehir adı giriniz..`)

 }})
                return;
            }
            var current = result[0].current;
            var location = result[0].location;
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`)
                .setTimestamp()
                .setAuthor(`${current.observationpoint} İçin Hava Durumu`)
                .setThumbnail(current.imageUrl)
                .setColor(0x00bfff)
                .addField('Sıcaklık',`${current.temperature} Derece`, true)
                .addField('Hissedilen Sıcaklık',`${current.feelslike} Derece`, true)
                .addField('Rüzgar',current.winddisplay, true)
                .addField('Rüzgar Hızı',current.windspeed, true)
                .addField('Nem', `${current.humidity}%`, true)
                message.channel.send({embed});
        });
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hava','havadurum'],
  permLevel: 0
};

exports.help = {
  name: 'havadurumu',
  description: 'Havadurumu söyler',
  usage: 'havadurumu [şehir]'
};
