module.exports =({
name: "slowmode",
 aliases: ["sm"],
code: `$if[$message==;]
$slowmode[$channelID;$messages]
$deleteIn[5s]
$deletecommand
$title[Slowmode]
$description[Set slowmode to $messages]
$elseIf[$message!=;]
$endElseIf
$endIf
$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001] $onlyIf[$hasRole[$authorID;$getVar[staffrole]!=true;]`
})