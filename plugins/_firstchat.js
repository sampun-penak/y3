let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    let hao = `*Official Bot By @${'0'.split('@')[0]}* 
*Powered By @${global.owner[1].split('@')[0]}*`
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
        await conn.send3ButtonLoc(m.chat, 'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg', ` ${ucapan()}, @${m.sender.split`@`[0]}
 ${user.banned ? 'kamu dibanned' : `
Saya Adalah Bot, Bot What'sapp Yang Bisa Anda Gunakan Untuk Membuat Sticker, Mendownload Sesuatu, Bermain Game, Dll.

Tolong Jangan Spam, Telepon, Vc, Kirim Virtex.`} 
 `.trim(), hao, user.banned ? '🛡 PEMILIK BOT 🛡' : '🎀 MENU 🎀', user.banned ? '!owner' : '.menu', '🔖 PANDUAN 🔖', '.tutorbot', '🗂 VERIFY 🗂', '.daftar ${conn.getName(m.sender)}.16', m) 
     user.pc = new Date * 1 
 } 
 

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi 🌅"
    }
    if (time > 10) {
        res = "Selamat siang 🏞️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌌"
    }
    return res
}
