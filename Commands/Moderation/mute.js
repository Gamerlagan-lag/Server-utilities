module.exports = ({
name: "mute",
 aliases: ["m"],
 usage: "mute <user>",
 description: "Mutes the user specified by a mod.",
code: `
$takeRole[$mentioned[1];$roleID[Muted]]
$wait[$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;2d];false;$messageSlice[1]]]
$giveRole[$mentioned[1];$roleID[Muted]]
 $channelSendMessage[$channelID;Succesfully Muted ​<@$mentioned[1]>]
 
 $takeRole[$mentioned[1];831648587061395476]
 $suppressErrors[I dont have enough permissions]
 $onlyIf[$roleExists[$findRole[Muted]]==true;I can't find Role "Muted" Please create that role and try again ]
 $argsCheck[>1;Please mention someone to mute]
 $suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
 $onlyPerms[manageroles;You need manage roles permission to use this command]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]]!=true;]`})
