module.exports = {
	name: 'kerim',
	description: "Kerim be like!",
	execute(message,args){
		var randomJ = Math.floor(Math.random() * 3);  //case switcher
		var randomI = Math.floor(Math.random() * 5)+1;  //kerim choking
		const edin = "Edin <@374998852840718337>,";	  //string for repeat
		if (args.length == 0)
		{
			switch(randomJ){
				case 0:
					message.channel.send({files: ["./images/kerim/" + randomI + ".png"]});
					break;
				case 1: 
					message.channel.send(edin + ' can I edit my motherboard?');
					break;
				case 2:
					message.channel.send(edin + ' do not AMD have console processors?');
					break;
				default:
					message.channel.send(edin + "fix your stupid bot balega.");
			}
		}
		else 
		{
			var picture = args[0];

			if (fs.existsSync("./images/kerim/" + picture + ".png")){
				message.channel.send({files: ["./images/kerim/" + picture + ".png"]});
			}
			else {
				message.channel.send("Brus Li says this file doesnt exist govnohead.");
			}
			
		}
	}
}
