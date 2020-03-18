var Discord = require('discord.io');
var auth = require('./auth.json');


// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});



bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.startsWith("!philippe")) {
        var args = message.substring(9);
        var cmd = args;
		
		var ph = [
		"https://thumbs.gfycat.com/FalseChubbyBarnowl-small.gif",
"https://66.media.tumblr.com/018364fcebee54799506e3bb68d1f849/tumblr_nz2bt07RyU1rymr5wo1_500.gifv",
"https://i.pinimg.com/originals/f2/b0/6b/f2b06b20a7e9087c1f83a7c370d57d73.gif",
"https://66.media.tumblr.com/bf3e4100dc890c6c28ae5cab7f9e0c1e/tumblr_omklv4OD8R1si5tqro1_400.gifv",
"https://media1.tenor.com/images/7bd6c3293c24ed6923e46c6749f1fb5e/tenor.gif?itemid=11585082",
"https://66.media.tumblr.com/8b5dedc784b9dbf7a44da447074d2077/tumblr_p45vvkhyPq1s8gg4mo1_500.gifv",
"https://66.media.tumblr.com/6da9f80abb8fe237688d60815389dde4/tumblr_orhu27Zm0V1u0lfzjo1_500.gifv",
"https://media1.tenor.com/images/3f529e0b6ba44d36f43c8d1f53e1bcc9/tenor.gif?itemid=11585028",
"https://media1.tenor.com/images/e2d4b5604ad86783388b3ca1108c367f/tenor.gif?itemid=11585000",
"https://66.media.tumblr.com/a8f16b8f0cf62d4005e8f5fb24b6456a/tumblr_om78xggUhV1si5tqro1_400.gifv",
"https://66.media.tumblr.com/96d1ceed24e4aefb4ac41c4d1d1cb3a5/tumblr_n0pgwcVK4t1rb2l1co1_400.gif",
"https://img.buzzfeed.com/buzzfeed-static/static/2016-11/18/3/asset/buzzfeed-prod-fastlane03/anigif_sub-buzz-23759-1479459565-2.gif",
"http://media.topito.com//wp-content/uploads/2019/01/ScreenRecorderProject33.gif",
"https://66.media.tumblr.com/ac716ce9ad95bf6a22b434a166cdb8ea/tumblr_nmg4rd7vcx1rb2l1co1_400.gifv",
"https://img.buzzfeed.com/buzzfeed-static/static/2016-11/18/3/asset/buzzfeed-prod-fastlane02/anigif_sub-buzz-10581-1479459459-4.gif?output-quality=auto&output-format=auto&downsize=360:*",
"https://media1.tenor.com/images/8c19a9af3a2d8b07758c69aa56b30b42/tenor.gif?itemid=11585092",
"https://66.media.tumblr.com/9d115ad20c496afc6f86ce2521d4f0f5/tumblr_nn2a7xip9U1rb2l1co1_500.gifv",
"http://media.topito.com//wp-content/uploads/2017/02/ezgif.com-c4b6ffc013.gif",
"http://media.topito.com//wp-content/uploads/2017/01/ezgif.com-6f41e4ee37.gif",
"http://media.topito.com//wp-content/uploads/2019/02/12.gif",
"https://media1.tenor.com/images/3808f0122c198cbeae1dea8fa759e23b/tenor.gif?itemid=11584981",
"https://i.pinimg.com/originals/df/29/9f/df299fe7eb603bde924a13af21126939.gif",
"http://media.topito.com//wp-content/uploads/2019/04/fghfgh.gif",
"http://media.topito.com//wp-content/uploads/2018/03/12.gif",
"http://media.topito.com//wp-content/uploads/2018/04/ScreenRecorderProject7-2.gif",
"http://media.topito.com//wp-content/uploads/2019/02/ScreenRecorderProject6-2.gif",
"http://media.topito.com//wp-content/uploads/2017/03/ezgif-3-9c696e74b0.gif",
"https://steamuserimages-a.akamaihd.net/ugc/961964040899594899/DCD68AE5536EA13EED20266025B2FFFABDED88D3/",
"http://media.topito.com//wp-content/uploads/2018/02/tumblr_o1x4jmDgB61si5tqro1_r1_500.gif",
"https://66.media.tumblr.com/d11da3f7db7320f534789d1abc182e2d/tumblr_nnbp6m8XJx1uq5nsxo1_500.gif",
"https://steamuserimages-a.akamaihd.net/ugc/961964040899587994/2CCBFEB6694CC0BE08091975F0092DA459AAB0DE/?imw=502&imh=278&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
"https://i.imgur.com/NqUlxL5.gif",
"https://teleddict.files.wordpress.com/2017/05/defrgthy1.gif?w=346"
		];

        rand = new Date();
        rand = rand.getMonth() + rand.getDay() + rand.getFullYear();
		rand = rand % 33;

        switch(cmd) {
            case '':
                bot.sendMessage({ to: channelID, message: ":wave: Voici votre Philippe of the Day (POTD) : \n " + ph[rand]});
                break;

            case ' aide':
                bot.sendMessage({ to: channelID, message: "!philippe : Envoi le Philippe of the Day (POTD)"});
                break;
            case ' poutou':
                bot.sendMessage({to: channelID, message: "PHILIPPE POUTOU, BREH BREH ! \n https://www.youtube.com/watch?v=bIft0PeKoJw"});
                break;
            case ' random':
                rand = Math.floor(Math.random() * Math.floor(33));
                bot.sendMessage({ to: channelID, message: ":wave: Voici votre Random Philippe : \n " + ph[rand]});
                break;
            default:
                bot.sendMessage({ to: channelID, message: 'Commande inconnue. Tapez !aide pour avoir la liste des commandes.' });
        }
    }
});
