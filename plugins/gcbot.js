let fetch = require('node-fetch') 
 let handler = async(m, { conn }) => { 
     try { 
         let pp = await(await fetch(image)).buffer 
         let caption = ` 
 *group official Bot!* 
 Sekedar meramaikan, atau juga jika ada informasi mengenai bot. 
  
 *Group 1* 
https://chat.whatsapp.com/EJik1WvMpxeCoCEGAFRqiV
  
 *Group 2* 
https://chat.whatsapp.com/KTIbnN1E8i424xk3b5jkdg
  
 *Group 3* 
https://chat.whatsapp.com/HeyPTXroU670omQ7axe12f
  
 `.trim() 
         await conn.reply(m.chat, caption, m, { contextInfo: { 
             externalAdReply: { 
               sourceUrl: 'https://instagram.com/sampun_penak', 
               title: 'Official group', 
               body: 'TheBotz', 
               thumbnail: pp 
             } 
         }}) 
     } catch (e) { 
         let tulisan = ` 
 *Join Juga Group Official Bot!* 
Sekedar meramaikan, atau juga jika ada informasi mengenai bot. 
  
 *Group 1* 
https://chat.whatsapp.com/EJik1WvMpxeCoCEGAFRqiV
 
 `.trim() 
     await conn.sendButtonDoc(m.chat, tulisan.trim(), 'Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.', '📳 RULES 📳', '.rules', m, {
    quoted: m,
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
        	sourceUrl: 'https://instagram.com/sampun_penak',
            title: 'Group Official',
            body: '© TheBotz-Ofc By Mimim-Ofc',
          thumbnail: await (await fetch('https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg')).buffer()
        }
     }
    })
 } 
 }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 module.exports = handler
