let handler = async m => m.reply(`
            Grup Senz

            https://chat.whatsapp.com/DDwFYaE7IaL7MDvvhzdpoD
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
