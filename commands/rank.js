module.exports = {
	name: 'rank',
	description: "This has absolutely no purpose other than inside memes.",
	execute(message,args){
		var max = 23;
		var min = 1;
		var randomJ = Math.floor((Math.random() * max)+min);  
		
		if (args.length == 0) {
			message.channel.send({files: ["./images/rank/" + randomJ + ".gif"]});
			console.log(randomJ + "  brauh");
		}
		else{
			var arguments = args[0];
			console.log("epic   " + arguments);
			
			if (arguments === "help"){
				const embed = {
					"title": "!rank help",
					"description": "!rank help bottom text",
					"color": 1091111,
					"footer": {
						"icon_url": "https://i.imgur.com/asPLuuO.png",
						"text": "footner text <@329556848111910922>"
					},
					"thumbnail": {
						"url": "https://i.imgur.com/AJPOl7L.gif"
					},
					"author": {
						"name": "Govno Tactics",
						"icon_url": "https://i.imgur.com/asPLuuO.png"
					},
					"fields": [
						{
							"name": "help",
							"value": "well you are here now retard ",
							"inline": false
						},
						{
							"name": "!rank",
							"value": "hair\nmod\nwallet\nmad\nsegway\nlore\ntrap\nbond\n",
							"inline": true
						}
					]
				};
			message.channel.send({ embed });
			}
			else if (arguments === "hair")
				message.channel.send({files: ["./images/rank/21.gif"]});
			else if (arguments === "mod")
				message.channel.send({files: ["./images/rank/13.gif"]});
			else if (arguments === "wallet")
				message.channel.send({files: ["./images/rank/17.gif"]});
			else if (arguments === "mad")
				message.channel.send({files: ["./images/rank/3.gif"]});
			else if (arguments === "segway")
				message.channel.send({files: ["./images/rank/6.gif"]});
			else if (arguments === "lore")
				message.channel.send({files: ["./images/rank/12.gif"]});
			else if (arguments === "trap")
				message.channel.send({files: ["./images/rank/14.gif"]});
			else if (arguments === "bond")
				message.channel.send({files: ["./images/rank/16.gif"]});
			else if ((typeof parseInt(arguments)) === "number") {
				var img = parseInt(arguments);
				if (img <= max && img >= min)
					message.channel.send({files: ["./images/rank/" + arguments + ".gif"]});
				else
					message.channel.send("Jebem ti mater govno head, use `!rank help` and let brus li tell u what to do");
			}
			else
				message.channel.send("Jebem ti mater govno head, use `!rank help` and let brus li tell u what to do");
		}
	}
}
