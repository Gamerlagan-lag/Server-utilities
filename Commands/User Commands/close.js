module.exports =({
 name: "close",
 code: `
$closeTicket[Unable to close your ticket <@$authorID>❕ Use this command in *__ticket channel__* or it might closed already!]
$wait[5s]
$sendMessage[Thanks for the patience. Hope your issue resolved!;]$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]
`
})