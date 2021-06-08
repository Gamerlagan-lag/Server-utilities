module.exports = ({
 name: "kick",
 usage: "kick <user>",
 description: "Kicks the user specified by you.",
 perms: "kick",
 aliases: "k",
 code: `
 $suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
 $kick[$findMember[$message;no]]
 $title[Kick]
 $description[\`$findMember[$message;no]\` was kicked by the moderator / administrator - **$username[$authorID]**]
 $color[PURPLE]
 $onlyIf[$findMember[$message;no]!=$authorID;{title: :mg_reactno: Error!} {description: Maybe someone else?} {color: #fc0000}]
 $onlyIf[$userExists[$findMember[$message;no]]==true;{title: :mg_reactno: Error!} {description: The user does not exist!} {color: #fc0000}]
 $argsCheck[1;{title: :mg_reactno: Error!} {description: Specify a user!} {color: #fc0000}]
 $onlyPerms[ban;{title: :mg_reactno: Error!} {description: Not enough rights! Required rights - \`Administrator or ban\`} {color: RED}]
$onlyBotPerms[kick;{title: Error} {description: Bot doesn't have ban permissions/Bot role below user role} {color: #fc0000}]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]]==true;]
 `
})
