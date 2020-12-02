const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//for (const file of commandFiles) {
	//const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	//client.commands.set(command.name, command);
//}

const animeInf = require(`./animeInf.json`);
//
//
//
//
client.once('ready', () => {
	console.log('Artemis is Shining!');
});





//message with var
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
        
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

    if (command === 'arg') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}
//
//
else if (command === 'args') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}
	else if (args[0] === 'foo') {
		return message.channel.send('bar');
	}

	message.channel.send(`First argument: ${args[0]}`);
}
//
//
else if (command === 'ping') {

	// grab the "first" mentioned user from the message
	// this will return a `User` object, just like `message.author`
	

	message.channel.send(`${taggedUser} Ha! You got pinged!`);
}
//
//
else if (command === 'warn') {
    const taggedUser = message.mentions.users.first();
	if (!args.length) {
		return message.channel.send(`Because of.......WHAT? Say it!, ${message.author}!`);
    }
    else if (!message.mentions.users.size) {
	return message.reply('you need to tag a user!');
}
    message.channel.send(`Why you are warned ${taggedUser}: \nArguments: ${args}`);

}





//show avatar
else if (command === 'avatar') {
	if (!message.mentions.users.size) {
		return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
	}
    const avatarList = message.mentions.users.map(user => {
		return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
	});

	// send the entire array of strings as a message
	// by default, discord.js will `.join()` the array with `\n`
	message.channel.send(avatarList);
	// ...
}








//clear msg
else if (command === 'clear') {
	const amount = parseInt(args[0]);

	if (isNaN(amount)) {
		return message.reply('that doesn\'t seem to be a valid number.');
    }
    else if (amount < 2 || amount > 100) {
        return message.reply('you need to input a number between 2 and 100.');
    }
    
    message.channel.bulkDelete(amount);
    // ...
    //message.channel.bulkDelete(amount, true).catch(err => {
        //console.error(err);
        //message.channel.send('there was an error trying to prune messages in this channel!');
    //});
}

    });





//message without var
client.on('message', message => {
	if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    }
else if (message.content === `${prefix}beep`) {
	message.channel.send('Boop.');
}
else if (message.content === `${prefix}server`) {
	message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
}
else if (message.content === `${prefix}user`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
}
else if (message.content === `${prefix}kill me`) {
message.channel.send(`NO, I never kill people like you. ${message.author}!`);
}
else if (message.content === `${prefix}say`) {

	const SaySomething = new Discord.MessageEmbed()
	.setColor('#33ffff')
	.setTitle('')
	.setURL('https://discord.js.org/')
	.setAuthor('Nixaria#', '', '')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

message.channel.send(SaySomething);
}







else if (message.content === `${prefix}rules`) {
	const Pfp = message.author.username;
	const pfppic = message.author.displayAvatarURL({ format: "png", dynamic: true });
	const rules = new Discord.MessageEmbed()
	.setColor('#17f34f')
	.setTitle('__Rules__')
	.setURL('https://i.imgur.com/dUaz1ra.png')
	.setAuthor(Pfp,pfppic)
	.setDescription('Rules are things, we need in the whole life! \nIt give us a social place like here')
	.setThumbnail('https://i.imgur.com/dUaz1ra.png')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: '__**Chat**__', value: 'We have a general Behavior! \n  ```NO:```\n- Spam!\n- Racism\n- Curse Words\n- useless ping\n And be politely to all STAFFs', inline: true },
		{ name: '__**Image**__', value: 'Also not every images are allowed! \n ```NO:```\n- 18+ Content\n- Racism Pictures\n- Racism Memes', inline: true },
		{ name: '__**Promotions**__', value: 'Surely you can promote any stuffs(Youtube, Server, etc.) in this Server \n```BUT:```\nAsk first any STAFFs! They will post your promotion in a channel', inline: true},
		{ name: '\u200B', value: '\u200B'},
		{ name: '__**Problems?**__', value: 'If you have any Problems, just ping our STAFF or ask them to DM!'},
		{ name: '__**Suggestions**__', value: 'Suggest to the STAFFs or in the suggestion-Channel'}
	)
	.setImage('https://i.imgur.com/CaCvzKU.png')
	.setTimestamp()
	.setFooter('pay attention', 'https://i.imgur.com/Z4spMl5.png');
	message.channel.bulkDelete(1);
	message.channel.send(rules);
}






else if (message.content === `${prefix}ann`) {
	const Pfp = message.author.username;
	const Msg = message.content;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const pfppic = message.author.displayAvatarURL({ format: "png", dynamic: true });
	const command = args.shift().toLowerCase();
	const Announcements = new Discord.MessageEmbed()
	.setColor(`#17f34f`)
	.setAuthor(Pfp, pfppic)
	.setTitle('Announcement')
	.setDescription(args)
	.setThumbnail('')
	.setImage('')
	.setFooter('Posted', pfppic)
	.setTimestamp();
	message.channel.send(Announcements);
}

});


client.login(token);