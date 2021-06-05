module.exports =({
name: "reboot",
aliases: ["restart"],
code: `
$onlyForID[$ownerID]
$reboot[index.js]
`
})