let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg',
`Hi Kak @${m.sender.split('@')[0]} 

◪ 📮 *SCRIPT BOT*
│ *Script :* 
│ ╰ https://github.com/sampun-penak
│ *Base :* 
│ ╰ https://github.com/Fokusdotid/Family-MD
╰──────────═┅═──────────
`,`📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star & kasih credit

Official By @${'0'.split('@')[0]}
Powered By @${`${global.owner[0]}`.split('@')[0]}`, 'Pemilik Bot', '#owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
