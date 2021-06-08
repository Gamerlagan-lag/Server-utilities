module.exports =({
      name: "warn",
       ussage: "warn <user> (reason)",
 description: "warns a user for a certain reason.",
 aliases: "w",
      code: `
$textSplit[$message; ]
$title[**Warn**]

$description[
User: <@$mentioned[1]> Has been warned
Reason:$noMentionMessage
Moderator: <@$authorID>]
$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];1];$mentioned[1]]
$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]]==true;]`
})
