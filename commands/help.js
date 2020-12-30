module.exports = {
    name: 'help',
    description: "this is a help command!",
	execute(message,args){
            //message.channel.send("**HAMDI BOT HELP** **h!** is the prefix -- `h!fortnite` - _fortnite corrections_ || `h!vincent` - _vincent rOAST_ || `h!al` - _al rOAST_ || `h!molly` - _molly rOAST_ || `h!flag` - _the bosnian flag_ || `h!jay` - _jay rOAST_ || `h!hieu` - _hieu rOAST_ || `h!hue` - _hue rOAST_ || `h!justin` - _justin rOAST_ || `h!ct` - _Counter-Jays Win_ || `h!t` - _Jays Win_ || `h!og` - _ORANGE!, og_");
            var embed = {
                "title": "Hamdija Bot Help!",
                "color": 3447003,
                "thumbnail": {
                    "url": "https://i.imgur.com/ExQD0tO.png"
                },
                "author": {
                    "name": "made by joseph (youmanyousef)",
                    "icon_url": "https://i.imgur.com/xJTWqIF.jpg"
                },
                "fields": [{
                        "name": "_`h!`_",
                        "value": "Is the prefix for all commands. the number in the description represents how many results you can get."
                    },
                    {
                        "name": "`h!flag`",
                        "value": "_The Bosnian Flag_",
                        "inline": true
                    },
                    {
                        "name": "`h!goons`",
                        "value": "_Type `h!goons help` for more info._",
                        "inline": true
                    },
                    {
                        "name": "`h!hamdi`",
                        "value": "_A shitty pic of Hamdija_",
                        "inline": true
                    },
                    {
                        "name": "`h!ms`",
                        "value": "_Gary's Mugshot_",
                        "inline": true
                    },
                    {
                        "name": "`h!al`",
                        "value": "_al rOAST_ (3)",
                        "inline": true
                    },
                    {
                        "name": "`h!molly`",
                        "value": "_molly rOAST_",
                        "inline": true
                    },
                    {
                        "name": "`h!vincent`",
                        "value": "_vincent rOAST_ (3)",
                        "inline": true
                    },
                    {
                        "name": "`h!justin`",
                        "value": "_justin rOAST_ (3)",
                        "inline": true
                    },
                    {
                        "name": "`h!hieu`",
                        "value": "_hieu rOAST_ (3)",
                        "inline": true
                    },
                    {
                        "name": "`h!hue`",
                        "value": "_hue rOAST_",
                        "inline": true
                    },
                    {
                        "name": "`h!ct`",
                        "value": "_Counter-Jays Win!_",
                        "inline": true
                    },
                    {
                        "name": "`h!t`",
                        "value": "_Jays Win!_",
                        "inline": true
                    },
                    {
                        "name": "`h!flag`",
                        "value": "_these last two_",
                        "inline": true
                    },
                    {
                        "name": "`h!og`",
                        "value": "_OG!_ (3)",
                        "inline": true
                    },
                    {
                        "name": "`h!fortnite`",
                        "value": "_Fortnite is Garbage._ (3)",
                        "inline": true
                    }
                ]
            };
            message.channel.send({embed});
        
	}
}