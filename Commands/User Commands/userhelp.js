module.exports=({
  name: "help",
  code: `
$title[Help]
$description[User Commands
--
\`warns, calculate, revive, ticket, close\`
--] $suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]]==true;]`
})
