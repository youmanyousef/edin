module.exports = {
	name: 'kerim',
	description: "Kerim be like!",
	execute(message,args){
		var randomJ = Math.floor(Math.random() * 3);  //case switcher
		var randomI = Math.floor(Math.random() * 4);  //kerim choking
		const edin = "Edin <@374998852840718337>,";	  //string for repeat
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
				message.channel.send(edin + " fix your stupid bot balega.");
		}
	}
}
