module.exports =({
 name: "ticket",
 code: `Ticket made! <#$channelID[$toLowercase[$replaceText[$username; ;-]]]>
 $newTicket[$username;{title:Ticket opened!}{description:Hello, <@$authorID>. Here is your ticket!🎟️ Please give the information about your problem or feedback. The **Admin** or the **Moderators** will review your ticket shortly! Thanks in advance for being patient}{footer:Use >close to close your ticket};$getServerVar[Ticket];no;<@$authorID>, I failed to create your ticket! Try again]$suppressErrors[Sorry but something went wrong! Please DM LaganYT#0001]`
})