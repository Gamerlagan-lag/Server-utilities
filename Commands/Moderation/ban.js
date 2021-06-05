module.exports=({
 name: "ban",
 ussage: "ban <user> (reason)",
 description: "Bans a user from the server.",
 aliases: "b",
 code: `

 $dm[$mentioned[1]]
$title[Ban]
  $description[hey bro, sorry but you were banned in $serverName... bummer :(]
  $wait[5s]
$ban[$mentioned[1]]
$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]!=true;]
`
})