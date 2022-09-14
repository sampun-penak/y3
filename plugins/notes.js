let fetch = require('node-fetch')
let fs = require('fs')

let handler = async (m, { conn }) => {
	const fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 99999999,
    status: 404,
    surface : 404,
    message: '📝 Catatan Update Bot',
    orderTitle: `▮Menu ▸`,
    thumbnail: await conn.resize(await (await fetch('https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg')).buffer(), 300, 300), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: 'Ziv San Bot'
    }))
    if (!res.ok) throw eror
    let json = await res.json()
    let zivsan = json.items.map((repo, index) => {
        return `Dibuat pada *${formatDate(repo.created_at)}*
Terakhir Update Pada *${formatDate(repo.updated_at)}*

👁 Watchers : ${repo.watchers}   
🍴 Forks : ${repo.forks} 
⭐ Start : ${repo.stargazers_count}

*Deskripsi:*
${repo.description}`.trim()
    }).join('\n\n')
await conn.sendButtonImg(m.chat, await (await fetch('https://botcahx-rest-api.herokuapp.com/api/tools/ssweb?link=https://github.com/Zivfurr/Furry-Bot/commit/750c128838985ab6e0747d7222eb3d11c9775d61')).buffer(), zivsan, wm, 'Owner', '.owner', m, { quoted: fload, contextInfo: { 
         externalAdReply: { showAdAttribution: true,
             title: 'Script Ini Update Secara Real Time Online',
             body: `${pickRandom(['Furry Indonesia :3', 'Suka Pokemon Nggak Kak :3', 'Kangen Ziv San Nggak?', 'Udah makan belum kak?', 'Udah Makan Belum?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'Jangan spam ya kak!', 'Jangan lupa donasi yak kak! QωQ', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! UωU', 'Ziv San Sayang Kamu :3', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,
             description: 'Now Playing...', 
             mediaType: 2, 
           thumbnail: await (await fetch(fla + 'Update')).buffer(), 
          mediaUrl: `https://instagram.com/sampun_penak` 
         } 
      } 
   })
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
handler.help = ['note']
handler.tags = ['info']
handler.command = /^(catatanperubahan|perubahan|notes)$/i

module.exports = handler

function formatDate(n, locale = 'id') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}
