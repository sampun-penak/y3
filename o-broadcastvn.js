const { toAudio, toPTT } = require('../lib/converter')
let fs = require('fs')
let fetch = require("node-fetch")
let handler = async (m, { conn, text }) => {
	let user = global.db.data.users[m.sender]
	let haori = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999999999,
    status: 404,
    surface : 404,
    message: `©BROADCAST\nFrom ${conn.getName(m.sender)} 🌠`, 
    orderTitle: `▮By Mimim ▸`,
    thumbnail: await (await fetch('https://telegra.ph/file/74d983dd46e8bac065b48.jpg')).buffer(),
    }
    }
    }
      let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
 let media = await q.download()
    if (!media) throw 'Media tidak dapat diunduh'
    let audio = await toPTT(media, 'mp4')
    if (!audio.data) throw 'Gagal melakukan konversi.'
    let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       await conn.delay(1500)
     await  await    await conn.sendFile(id, audio.data, 'error.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true, contextInfo: { forwardingScore: 999, isForwarded: true,
         externalAdReply: { 
             title: 'ꕥ─────•「 AUDIO BROADCAST 」•─────ꕥ',  
             body: '📢 Isi Pesan :' + text,
             description: '',  
             mediaType: 2, 
           thumbnail: await (await fetch(fla + 'Broadcast')).buffer(), 
          mediaUrl: `https://instagram.com/sampun_penak` 
         } 
      } 
   })
}
    m.reply('_*Broadcast Selesai*_')
}
handler.help = ['bcvn'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastvn|bcvn)$/i

handler.owner = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
