const Discord = require('discord.js');

const cevaplar = [
    "Evet.",
    "Hayır.",
    "Belki.",
    "Olabilir.",
    "Daha sonra tekrar sor.",
    "İmkansız.",
    "Kesinlikle!",
    "Bu soruyu cevaplamamak için para aldım.",
    "Sorunun cevabını kendinde ara.",
    "İyiyim, sen nasılsın?",
    "Sanane!",
    "Kim demiş?",
    "Zengin bir milyarder!",
    "O bir oyun yapımcısı.",
    "Hmm.. O kim ya? Tanımıyorum!",
    "7 hektar azarisi, 4 villası, 3 apartmanı, 12 arabası, 5 holdingi, 120 şirketi, 5 karısı, 100 çocuğu olan bir milyarder!",
    "Valla onu bende tanımıyorum.",
    "Daha açık söyler misin?"
];

exports.run = function(client, message, args) {
    var soru = (' ')

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply(':warning: ``-sor <soru>`` :warning:')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sor',
  description: 'Sorularınızı cevaplar.',
  usage: 'sor <soru>'
};
