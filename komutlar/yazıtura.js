const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
	"Tura",
	"Yazı"
];

exports.run = function(client, message) {

	var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

	if (cevap === "Yazı") {

		 const embedyazı = new Discord.RichEmbed()
		.setColor(0x00bfff)
		.setDescription(cevap)
		.setThumbnail("http://www.freakonomics.com/wp-content/uploads/2013/01/coin-300x218.jpg")
		.setTimestamp()
		message.channel.send(embedyazı);

	} else if (cevap === "Tura") {

		const embedtura = new Discord.RichEmbed()
		.setColor(0x00bfff)
		.setDescription(cevap)
		.setThumbnail("https://www.wallets-online.com/webadmin/items/ogon/ogon_cd_red_1.jpg")
		.setTimestamp()
		message.channel.send(embedtura);

	}


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};
