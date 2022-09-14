let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • XL [087848115476]
│ • Gopay  [087848115476]
│ • Dana  [087848115476]
│ • Saweria  [https://saweria.co/mimimproject]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6283816446896
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, '🎀 MENU 🎀', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler