const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `Nih Kontak Ownerku <3`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
	conn.p[id] = [
	await conn.sendKontak(m.chat, kontak2, ftroli, { contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
	]
	await delay(100)
  return conn.sendButtonDoc(m.chat, `Hay kak @${await m.sender.split('@')[0]}, itu nomor ownerku jangan dispam yah ^_^`, 'Itu Owner Ku Yah Kak Jangan Sungkem Untuk Chat ;3','📍 CREDITS 📍', '.tqto', m, { quoted: conn.p[id][0],
    contextInfo: { //forwardingScore: 99999, isForwarded: true,
        externalAdReply: { //showAdAttribution: true,
        	sourceUrl: 'https://instagram.com/sampun_penak',
            title: 'Jangan Bully Mimim Dia Kang Recode <3',
            body: 'Follow Instagram Saya Bang',
          thumbnail: await (await fetch(pp)).buffer()
        }
     }
    }) 
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
