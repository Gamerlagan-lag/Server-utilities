module.exports =({
name: "slowmode",
aliases: ["sm"],
code: `$slowmode[$channelID;$messages]
$deleteIn[5s]
$deletecommand
$title[Slowmode]
$description[Set slowmode to $messages] 
$onlyIf[$hasRole[$authorID;$getVar[staffrole]]==true;]`
})
