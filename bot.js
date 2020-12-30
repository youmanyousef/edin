const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTEwOTEyMTU5ODk5ODQ0NjA5.W-c-Bw.kHkMG4VMwgpYCm65CK2ZGXrOK2A';
var prefix = '!';
var jArray = ['1', '2', '3'];
var goons = 'goons';
var gArray = [];

const edinID = "374998852840718337";
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name,command);
}




client.on("ready", () => {
    console.log("I am ready!");
    client.user.setActivity('jays server getting bodied', {
        type: 'WATCHING'
    });
});
// update using this vid -> https://www.youtube.com/watch?v=AUOb9_aAk7U&ab_channel=CodeLyon
client.on("message", (message) => {
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (message.author.id == edinID)
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
});
client.login(token);