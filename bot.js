var Discord = require('discord.io');
var auth = require('./auth.json');
const random = require('random')

// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

const talkedRecently = new Set();
const url = "https://raw.githubusercontent.com/Artheriom/PhilippeEtchebot/master/images/";

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.toLowerCase().startsWith("!philippe")) {
	bot.deleteMessage({messageID: evt.d.id, channelID:channelID});
		
		if (talkedRecently.has(userID)) {
			bot.sendMessage({ to: userID, message: "ARRÊTE DE SPAMMER LES PHILIPPES PUTAIN DE BORDEL DE MERDE\n " + url + 11 + ".gif"});
		} else {

				var args = message.substring(9);
				var cmd = args;

				rand = new Date();
				rand = rand.getMonth() + rand.getDay() + rand.getFullYear();
				rand = (rand % 35) + 1;

				switch(cmd) {
					case '':
						bot.sendMessage({ to: channelID, message: ":wave: Voici votre Philippe : \n " + url + random.int(1, 35) + ".gif"});
						break;
					case ' aide':
						bot.sendMessage({ to: channelID, message: "`!philippe` : Envoi un Philippe au hasard \n`!philippe du jour` : Envoi le Philippe du jour \n `!philippe about` : A propos."});
						break;
					case ' du jour':
						bot.sendMessage({ to: channelID, message: ":wave: Voici votre Philippe du jour : \n " + url + rand + ".gif"});
						break;
					case ' about':
						bot.sendMessage({ to: channelID, message: "Philippe Etchebot - v1.2.0 by @Artheriom\nSources sur https://github.com/Artheriom/PhilippeEtchebot"});
						break;
					default:
						bot.sendMessage({ to: channelID, message: 'Commande inconnue. Tapez `!philippe aide` pour avoir la liste des commandes.' });
				}

			// Adds the user to the set so that they can't talk for a minute
			talkedRecently.add(userID);
			setTimeout(() => {
			  // Removes the user from the set after a minute
			  talkedRecently.delete(userID);
			}, 60000);
		}
	
       
    }
});
