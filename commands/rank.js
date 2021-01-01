module.exports = {
	name: 'rank',
	description: "This has absolutely no purpose other than inside memes.",
	execute(message,args){
		var randomJ = Math.floor((Math.random() * 24)+1);  
		message.channel.send({files: ["./images/rank/" + randomJ + ".gif"]});
		
	}
}
