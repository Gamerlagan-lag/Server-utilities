module.exports = ({
      name: "purge",
       aliases: ["clear", "p"],
 usage: "purge <amount>",
 description: "[Clears a specific amount of messages from a channel.]",
      code: `$clear[$message]  
$deletecommand
$title[**Purge**]
$footer[$username - $authorID]
$thumbnail[$authorAvatar]
$description[**$message messages have been deleted!**]
$addReactions[🤖]
$deleteIn[5s]
$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]]!=true;]`
})
