module.exports=({
      name: "help",
      code: `
$if[$message==;]

$title[Help]
$description[Mod Commands
--
\`warn, kick, ban, mute, unmute, mn, sm, purge, rw, lockdown, hide\`
--]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]!=true;]
$elseIf[$message!=;]
$color[RED]
$title[Help]
$description[Name: $commandInfo[$message;name]
Ussage: $commandInfo[$message;ussage]
Description: $commandInfo[$message;description]
Aliases: $commandInfo[$message;aliases]]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]!=true;]
$endelseIf
$endif
$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
`
})