module.exports =({
name: "revokewarn",
 aliases: ["rw"],
code: `$setUserVar[warn;$sum[$getUserVar[warn;$mentioned[1]];-1];$mentioned[1]]
$description[**Revoked the last warn for <@$mentioned[1]>!**]
$onlyIf[$getUserVar[warn;$mentioned[1]]>0;They dont have any warnings.
 or you need to: 
**Mention A User!**
__**Example**__
\`>rw <@user>\` ]
$title[__**Revoke Warn**__]
$footer[Requested by @$username]
$color[d7342a]
$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]]!=true;]`
})
