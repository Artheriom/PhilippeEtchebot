var Discord = require('discord.io');
var auth = require('./auth.json');


// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});



bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.toLowerCase().startsWith("!philippe")) {
        var args = message.substring(9);
        var cmd = args;
        var url = "https://raw.githubusercontent.com/Artheriom/PhilippeEtchebot/master/images/";

        rand = new Date();
        rand = rand.getMonth() + rand.getDay() + rand.getFullYear();
		rand = rand % 33;

        switch(cmd) {
            case '':
                bot.sendMessage({ to: channelID, message: ":wave: Voici votre Philippe of the Day (POTD) : \n " + url + rand + ".gif"});
                break;

            case ' aide':
                bot.sendMessage({ to: channelID, message: "`!philippe` : Envoi le Philippe of the Day (POTD) \n`!philippe random` : Envoi un Random Philippe \n `!philippe poutou` : BREH BREH \n `!philippe about` : A propose."});
                break;
            case ' poutou':
                bot.sendMessage({to: channelID, message: "PHILIPPE POUTOU, BREH BREH ! \n https://www.youtube.com/watch?v=bIft0PeKoJw"});
                break;
            case ' random':
                rand = Math.floor(Math.random() * Math.floor(33));
                bot.sendMessage({ to: channelID, message: ":wave: Voici votre Random Philippe : \n " + url + rand + ".gif"});
                break;

            case ' about':
                bot.sendMessage({ to: channelID, message: "Philippe Etchebot - v1.1.0 by @Artheriom\nSources sur https://github.com/Artheriom/PhilippeEtchebot"});
                break;
            default:
                bot.sendMessage({ to: channelID, message: 'Commande inconnue. Tapez `!philippe aide` pour avoir la liste des commandes.' });
        }
    }
});
