const Discord = require('discord.js');


exports.run = function(client, message , args) {
	const sayi = args.slice(0).join(' ');

	if(sayi.length < 1) {
		return message.channel.send(":no_entry: Silmem için bir miktar belirt. :no_entry:")
	} else {
        message.channel.bulkDelete(sayi);
		message.channel.send("**" + sayi + "** adet mesaj silindi!").then(msg => {
		msg.delete("5000")


	});
	}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sil',
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'sil <miktar>'
};
