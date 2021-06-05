module.exports = {
 name: "warns",
          ussage: "warns",
 description: "shows your warns.",
 aliases: "ws",
 code: `$if[$message[1]!=;]
$title[__**WARN CHECK**__]
$description[**$username[$mentioned[1]]#$discriminator[$mentioned[1]] has $replaceText[$getUserVar[warn;$mentioned[1]]; ;0] Warnings**]
$footer[Requested by @$username]
$color[d7342a]
$elseIf[$message[1]==;]
$title[__**WARN CHECK**__]
$description[**$username#$discriminator[$authorID] has $replaceText[$getUserVar[warn]; ;0] Warnings**]
$footer[Requested by @$username]
$color[d7342a]
$endElseIf
$endIf
$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
`
}