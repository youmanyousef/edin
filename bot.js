const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.token;
var prefix = '!';
var jArray = ['1', '2', '3'];
var goons = 'goons';
var gArray = [];

const edinID = "374998852840718337";
const edinIDAlt = "700096282785480734";
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name,command);
}




client.on("ready", () => {
    console.log("I am ready!");
    client.user.setActivity('Play cyberfuck 1987 at 57p', {
        type: 'PLAYING'
    });
});
// update using this vid -> https://www.youtube.com/watch?v=AUOb9_aAk7U&ab_channel=CodeLyon
client.on("message", (message) => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (message.content.startsWith(prefix))
	{
		if (message.author.id == edinID || message.author.id == edinIDAlt)
		{
			message.channel.send("Serbian.");
		
		}
		else
		{
			if (command === 'rank'){
				client.commands.get('rank').execute(message,args);
			}
			if (command === 'kerim'){
				client.commands.get('kerim').execute(message,args);
			}
		}	
	}
	
});
client.login(token);
