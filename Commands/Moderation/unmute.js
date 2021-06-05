module.exports = ({
name: "unmute",
 aliases: ["unm"],
code: `
$wait[$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;2d];false;$messageSlice[1]]]
$takeRole[$mentioned[1];832030527300829255]
 $channelSendMessage[$channelID;Succesfully unmuted ​<@$mentioned[1]>]
 $giveRole[$mentioned[1];831648587061395476]
 $suppressErrors[I dont have enough permissions]
 $onlyIf[$roleExists[$findRole[Muted]]==true;I can't find Role "Muted" Please create that role and try again ]
 $argsCheck[>1;Please mention someone to unmute]
 $suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]!=true;]`})