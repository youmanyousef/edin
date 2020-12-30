module.exports = {
	name: 'rank',
	description: "this is the rank command!",
	execute(message,args){
		var randomJ = Math.floor(Math.random() * 23);  
		message.channel.send({files: ["./images/rank/" + randomJ + ".gif"]});
		
	}
}