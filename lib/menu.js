exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*

Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini$✨

📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*

         ───
♻ Command / Perintah :
         ───
         
╭───「 *Menu* 」
├≽ ️$sticker
├≽️ $pantun
├≽️ $quotes
├≽️ $foto cewek/cowok
├≽️ $tts
├≽️ $say
├≽️ $quran
├≽️ $twt
├≽️ $fb
├≽️ $ig
├≽️ $ytmp3
├≽️ $yt
├≽️ $wiki
├≽️ $lirik
├≽️ $nulis
├≽️ $sholat (nama daerahmu)
├≽️ $toxic (kata)
├≽️ $fotoanime
├≽️ $covid
├≽️ $alay
├≽️ $nama
├≽️ $pasangan
├≽️ $owner
├≽️ $creator
├≽️ $cek
├≽️ #info
╰─────────

[ Keterangan ]

» $sticker Contoh: kirim gambar dengan caption $sticker
» $pantun Contoh: $pantun
» $quotes Contoh: $quotes
» $foto Contoh: $foto cowo
» $tts Contoh: $tts yudi wiratama (${BotName} akan mengirim link download)
» $say Contoh: $say halo  
» $quran Contoh: $quran
» $twt Contoh: $twt https://tweter.com/aris187id
» $fb Contoh: $fb https://facebook.com/aris187id
» $ig Contoh: $ig https://instagram.com/_sadboy.ig
» $ytmp3 Contoh: $ytmp3 https://youtu.be/aris187id
» $yt Contoh: $yt https://youtu.be/aris187id
» $wiki Contoh: $wiki PKI
» $lirik Contoh: $lirik
» $nulis Contoh: $nulis Kelas X MIPA2
» $fotoanime Contoh: $fotoanime
» $covid Contoh: $covid
» $nama Contoh $nama Yudi
» $pasangan Contoh: $pasangan Adam & Abdul
» #info Contoh: #info
 
 
├≽️💰 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS$
├≽️💰 MAU DONASI? SILAHKAN KETIK #donate
 
├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${instagramlu}
 
├───≽️「 *INFORMASI COVID-19 TERBARU$* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER$_
 
├≽️☎️ WA : *${whatsapplu}*
 
├≽️📌 *Modifikasi By YudiWiratama* ‼️
├≽️📌 *Kalo ada bug maklumin yah* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️


├≽️💥 *Group WhatsApp* ; ${grupch2}
├≽️💥 *YouTube* : ${grupch2}
├≽️💥 *Instagram* : ${@grupch3}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
