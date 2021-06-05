module.exports =({
name: "poll",
code: `
$title[Time For A New Poll! Vote Now!]
$addReactions[👍;👎]
$description[$message] 
$footer[👍 You like it - 👎 You don't like it] 
$deletecommand $suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
$onlyIf[$hasRole[$authorID;$getVar[staffrole]!=true;]
`
})