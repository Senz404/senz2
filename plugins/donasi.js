let handler = async m => m.reply(`
╭─・[ Donasi ]
│・ [ 083800930156 ]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
