const Discord = require('discord.js');

var client = new Discord.Client();

exports.run = function(client, message) {

        const help = new Discord.RichEmbed()
        .setColor(0x00bfff)
        .setAuthor('MBB Bot™', client.user.avatarURL)
        .addField('Komutlar', '» Toplam komut sayısı **22**\n ')
        .addField('» Eğlence', '-mcbaşarım <başarı> | Minecraft başarım hazırlar.\n-atatürk | Atatürk gifleri gösterir.\n-hıyarcm | Hıyarınızı ölçer.\n-sor <soru> | Sorularınızı cevaplar.\n-stresçarkı | Stres çarkı döndürür.\n-yaz <mesaj> | Bota yazı yazdırırsınız.\n-yazıtura | Yazı, tura oynar.\n ')
        .addField('» Moderasyon', '-kick <@üye> <sebep> | Oyuncuları kickler.\n-oylama <mesaj> | Oylama yapar.\n-sil <miktar> | Belirtilen sayı kadar mesaj siler.\n ')
        .addField('» Bilgi', '-yardım | Komutları gösterir.\n-avatar | Avatarınız gösterir.\n-botbilgi | Bot ile ilgili bilgileri gösterir.\n-davet | Botun davet linkini alabilirsiniz.\n-havadurumu <şehir> | Hava durumunu gösterir.\n-kullanıcı | Kullanıcı bilgilerini gösterir.\n-rolinfo <rol> | Rollerin bilgilerini gösterir.\n-servericon | Serverın iconunu gösterir.\n-sunucubilgi | Sunucu ile ilgili bilgileri verir.\n-yapımcı | Yapımcı ile ilgili bilgileri verir.\n-ping | Botun pinigin gösterir.\n ')
        .addField('Araçlar', '-hesapla <sayı> <işlem> <sayı> | İşlem yapar.\n ')
        .setTimestamp()
        message.channel.send(help);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Komutları gösterir.',
  usage: 'yardım'
};
