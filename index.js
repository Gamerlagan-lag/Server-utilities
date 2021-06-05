const keepAlive = require('./server.js');
const config = require('./config.json');
const Aoijs = require('aoi.js');
console.log('Linked to config.json and ready to be 24/7!')
const bot = new Aoijs.Bot({
	token: 'your bot token',
	prefix: config.prefix,
	autoUpdate: true
});
console.log('Running aoi.js')
keepAlive();
bot.onMessage();
bot.loadCommands('./Commands/');

bot.command({
	name: 'ping',
	code: `Pong! \`$ping\``
});

bot.status({
   text: config.statustext,
      type: config.statustype,
      time: 12
})

bot.variables({
	warn: '0', //DONT EDIT
	message: '0', //DONT EDIT
	afk: 'false', //DONT EDIT
	AFK: '', //DONT EDIT
	afkwhy: '', //DONT EDIT
	time: '', //DONT EDIT
	Ticket: '', //DO EDIT (put your ticket catergorie id)
staffrole: '', //DO EDIT (put your staff role id)
	logchannel: '' //DO EDIT (put your staff log channel id)
});

bot.deletedCommand({
    channel: '$getVar[logchannel]',
    code: `
$title[Message Deleted]
  $description[Message from $username, was deleted in <#$channelUsed>: \`$message\`]
  $onlyIf[$authorID!=785680312591056900;]`
});
bot.onMessageDelete()

bot.updateCommand({
	channel: '$getVar[logchannel]',
	code: `$title[Message Updated!]
        $description[Message edited from $username in <#$channelUsed>:
$message
Old message: $oldMessage]`
});
bot.onMessageUpdate();

bot.roleCreateCommand({
	channel: '$getVar[logchannel]',
	code: `
Role Created:
$newRole[name]
`
});
bot.onRoleCreate();
bot.roleDeleteCommand({
	channel: '$getVar[logchannel]',
	code: `
Role Deleted:
Old Name: $oldRole[name]
`
});
bot.onRoleDelete();
bot.roleUpdateCommand({
	channel: '$getVar[logchannel]',
	code: `
Role Name Updated:
Old Name: $oldRole[name]
New Name: $newRole[name]
`
});
bot.onJoined();
bot.leaveCommand({
	channel: '$getVar[logchannel]',
	code: `$username left what a noob!`
});
bot.onLeave();
bot.command({
	name: '$alwaysExecute',
	nonPrefixed: true,
	code: `
  $changeNickname[$authorID;Moderated Nickname $random[11;99999]]
  
  $onlyIf[$checkContains[$nickname;Ð;Ө,Ð,Я,∆,Ø,П,Ƨ,♛,𝗦,𝗻,𝗮,𝗴,𝗯,𝗹,𝗲,𝘀;𝑪;𝑬;𝑹;𝑻;𝑰;𝑭;𝑰;𝑬;𝑫;𝑃;✰]==true]
  $onlyif[$checkContains[$nickname;Moderated Nickname]!=true]
  `
});
bot.command({
    name: "hide",
    code: `$modifyChannelPerms[$channelID;-viewchannel;848603069369155604]
$title[Hidden]
$description[This channel is now hidden!]
$deletecommand $deletein[3s] $suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;848603613353607168]==true;You can't hide a channel!]`
});
bot.command({
    name: "unhide",
    code: `$modifyChannelPerms[$channelID;+viewchannel;848603069369155604]
$title[Unhidden]
$description[This channel is now unhidden!]
$deletecommand $deletein[3s] $suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;848603613353607168]==true;You can't hide a channel!]`
});
bot.command({
  name: "@someone", nonPrefixed: true,
  code: `$randomMention $cooldown[10m;Dont spam ping! Please wait %time% before using \`@someone\` again!] $deletecommand`
})
