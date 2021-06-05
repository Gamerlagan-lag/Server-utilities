const keepAlive = require('./server.js');
const config = require('./config.json');
const Aoijs = require('aoi.js');
console.log('Linked to config.json and ready to be 24/7!')
const bot = new Aoijs.Bot({
	token: 'ODA1OTMyODYxMzM2NDUzMTMx.YBiFdw.0qPBgnTGncb8Hfa9DMLHA2dHxhI',
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
staffrole: '' //DO EDIT (put your staff role id)
});

bot.loopCommand({
	code: `
  $editChannel[850762211848749117;$default;Members: $sub[$membersCount;$botCount] ]`,
	channel: '850762211848749117',
	executeOnStartup: true,
	every: 30000
});
bot.loopCommand({
	code: `
  $editChannel[850762608783917088;$default;Bots: $botCount]`,
	channel: '850762608783917088',
	executeOnStartup: true,
	every: 30000
});

bot.loopCommand({
	code: `
  $editChannel[850762407344996352;$default;Boosts: $serverBoostCount]`,
	channel: '850762407344996352',
	executeOnStartup: true,
	every: 30000
});
bot.loopCommand({
	code: `
  $editChannel[850762294505111573;$default;➡ dsc.gg/lytc ⬅]`,
	channel: '850762294505111573',
	executeOnStartup: true,
	every: 30000
});
bot.loopCommand({
	code: `
  $editChannel[850762178050916362;$default;Total Members: $membersCount ]`,
	channel: '850762178050916362',
	executeOnStartup: true,
	every: 30000
});
bot.deletedCommand({
    channel: '850763306704961567',
    code: `
$title[Message Deleted]
  $description[Message from $username, was deleted in <#$channelUsed>: \`$message\`]
  $onlyIf[$authorID!=785680312591056900;]`
});
bot.onMessageDelete()

bot.updateCommand({
	channel: '850763306704961567',
	code: `$title[Message Updated!]
        $description[Message edited from $username in <#$channelUsed>:
$message
Old message: $oldMessage]`
});
bot.onMessageUpdate();

bot.roleCreateCommand({
	channel: '850763306704961567',
	code: `
Role Created:
$newRole[name]
`
});
bot.onRoleCreate();
bot.roleDeleteCommand({
	channel: '850763306704961567',
	code: `
Role Deleted:
Old Name: $oldRole[name]
`
});
bot.onRoleDelete();
bot.roleUpdateCommand({
	channel: '850763306704961567',
	code: `
Role Name Updated:
Old Name: $oldRole[name]
New Name: $newRole[name]
`
});
bot.onJoined();
bot.leaveCommand({
	channel: '850763306704961567',
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