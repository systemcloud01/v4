




exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa bot


*Harga*
- Pengguna baru Rp. 10.000 
- Perpanjang Rp. 3000
- Masa aktif 15 Hari


*Harga*
- Pengguna baru Rp. 15.000
- Perpanjang Rp. 5000
- Masa aktif 20 Hari

*User Premium*
*Harga*
- Pengguna baru Rp. 5.000 
- Perpanjang Rp. 3.000
- Masa aktif  15 Hari

*Fitur Premium*
• Limit tanpa batas
• Klaim lebih banyak EXP Harian
• Hidetag, mentionAll  ____________________________________________
`
}

const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

    




















