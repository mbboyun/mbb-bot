const Discord = require('discord.js');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = function(client, message, args) {
    var soru = args.join(' ');

    if(!soru) return message.reply('Doğru Kullanım: ``-hesapla (sayı) (işlem) (sayı)``\nİşlem= Çarpma:"*" Bölme:"/" Toplama:"+" Çıkarma:"-"')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Doğru Kullanım: ``-hesapla (sayı) (işlem) (sayı)``\nİşlem= Çarpma:"*" Bölme:"/" Toplama:"+" Çıkarma:"-"')
        }

        const embed = new Discord.RichEmbed()
        .setColor(0x00bfff)
        .setTimestamp()
        .addField('Soru', soru)
        .addField('Cevap', cevap)
        message.channel.send(embed)
    }


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hesapla',
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};
