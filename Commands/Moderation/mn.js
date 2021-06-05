module.exports =({
name: "moderate",
 aliases: "mn",
code: `
$changeNickname[$mentioned[1];Moderated Nickname $random[11;99999]]
$deletecommand
$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]!=true;]`
})