const version = require("@adiwajshing/baileys/package.json").version
const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2023').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})

////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

/*
let yes = "*「 _Error_ * ❌"
let no =""

const feat = (q) => {
let status = false
Object.keys(db.data.listerror).forEach((i) => {
if (db.data.listerror[i].cmd === q) {
status = true
}
})
return status
}
*/



exports.allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
return `ʜᴀʟᴏ ᴋᴀᴋ 👋. ꜱᴀyᴀ ᴀᴅᴀʟᴀʜ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴩᴩ ᴏᴛᴏᴍᴀᴛɪꜱ yᴀɴɢ ᴅᴀᴩᴀᴛ ᴍᴇᴍʙᴀɴᴛᴜ ᴍᴇʟᴀᴋᴜᴋᴀɴ ꜱᴇꜱᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴩᴀᴛᴋᴀɴ ᴅᴀᴛᴀ ᴀᴛᴀᴜ ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛꜱᴀᴩᴩ.

╔═════[ *INFO BOT* ]
║ ❏  *ʟɪʙʀᴀʀy :*  Baileys 
║ ❏  *ᴩʟᴀᴛꜰᴏʀᴍ :*  linux 
║ ❏  *ᴅᴀᴛᴇ :*. ${calender}
║ ❏  *ᴜꜱᴇʀ :* ${Object.keys(db.data.users).length}
╚══════════════•••
 
${readmore}`}

exports.fitur = (prefix) => {
return`
 ╒════╡ *Info* ╞═══࿐
 │ ⧐.sewa
 │ ⧐.owner
 │ ⧐.donasi
 │ ⧐.script
 │ ⧐.runtime
 ╘═══════════════乡
 
 ╒════╡ *Funn* ╞═══࿐
 │ ⧐.sad
 │ ⧐.puisi
 │ ⧐.dare
 │ ⧐.truth
 │ ⧐.cecan
 │ ⧐.cogan
 │ ⧐.bucin
 │ ⧐.quotes
 │ ⧐.pantun
 │ ⧐.ppcouple
 │ ⧐.katabijak
 │ ⧐.faktaunik
 │ ⧐.katailham
 ╘═══════════════乡

 

 ╒════╡ *Downloader* ╞═══࿐
 │ ⧐.play
 │ ⧐.tiktok
 │ ⧐.gdrive
 │ ⧐.igstory
 │ ⧐.ytmp3
 │ ⧐.ytmp4
 │ ⧐.twiterdl
 │ ⧐.gitclone
 │ ⧐.capcutdl
 │ ⧐.facebook
 │ ⧐.mediafire
 │ ⧐.carimusik
 │ ⧐.instagram  
 │ ⧐.zippyshare
 │ ⧐.tiktokmusik 
 │ ⧐.tiktoknowm
 │ ⧐.capcutmusik
 ╘═══════════════乡

 
 ╒════╡ *Image ai* ╞═══࿐
 │ ⧐.remini
 │ ⧐.pertajam
 │ ⧐.color
 │ ⧐.anime2d
 │ ⧐.cartoon_3d
 │ ⧐.pretty_soldier
 │ ⧐.bizarre
 │ ⧐.romance_comic
 │ ⧐.maid_dressing
 │ ⧐.superhero_comic
 │ ⧐.watercolor
 │ ⧐.doodle
 │ ⧐.america_comic
 │ ⧐.starry_girl
 │ ⧐.jadianime  
 ╘═══════════════乡

 
 ╒════╡ *Random* ╞═══࿐
 │ ⧐.ai
 │ ⧐.qc
 │ ⧐.ss
 │ ⧐.tts
 │ ⧐.ocr
 │ ⧐.ssfull
 │ ⧐.speed
 │ ⧐.nulis
 │ ⧐.rules
 │ ⧐.inspect
 │ ⧐.tagme
 │ ⧐.tagwa
 │ ⧐.resize
 │ ⧐.wallml
 │ ⧐.volume
 │ ⧐.qrcode
 │ ⧐.cekresi
 │ ⧐.apatuh
 │ ⧐.runtime 
 │ ⧐.wamod
 │ ⧐.qchitam
 │ ⧐.translate 
 │ ⧐.kalkulator
 │ ⧐.ktpmaker  
 │ ⧐.jarak jakarta|bandung
 ╘═══════════════乡

 ╒════╡ *Game* ╞═══࿐
 │ ⧐.suit
 │ ⧐.truth
 │ ⧐.dare
 │ ⧐.siapaaku
 │ ⧐.tekateki
 │ ⧐.family100
 │ ⧐.susunkata
 │ ⧐.tebaklagu
 │ ⧐.tictactoe
 │ ⧐.tebaklirik
 │ ⧐.caklontong
 │ ⧐.tebakkimia
 │ ⧐.tebakgambar
 │ ⧐.tebakbendera
 │ ⧐.tebaktebakan
 │ ⧐.nyerah  < untuk nyerah ketika game >
 ╘═══════════════乡

 ╒════╡ *Search* ╞═══࿐
 │ ⧐.yts
 │ ⧐.gempa
 │ ⧐.lirik
 │ ⧐.weather
 │ ⧐.kodepos
 │ ⧐.ttsearch
 │ ⧐.pinterest
 │ ⧐.animeterbaru 
 ╘═══════════════乡
 

 ╒════╡ *User* ╞═══࿐
 │ ⧐.sewa
 │ ⧐.limit 
 │ ⧐.claim
 │ ⧐.profile
 │ ⧐.premium
 │ ⧐.transfer 
 │ ⧐.buylimit 
 │ ⧐.buyglimit 
 │ ⧐.topbalance
 ╘═══════════════乡

 ╒════╡ *Islamic* ╞═══࿐
 │ ⧐.surah
 │ ⧐.getsurah
 │ ⧐.listsurah
 │ ⧐.jadwalsolat
 ╘═══════════════乡

 ╒════╡ *Stalking* ╞═══࿐
 │ ⧐.ffstalk
 │ ⧐.mlstalk
 ╘═══════════════乡

  
 ╒════╡ *Short Url* ╞═══࿐
 │ ⧐.tourl
 │ ⧐.bitly
 │ ⧐.tinyurl 
 │ ⧐.anonfile
 ╘═══════════════乡

 ╒════╡ *Sticker* ╞═══࿐
 │ ⧐.s
 │ ⧐.qc
 │ ⧐.ttp
 │ ⧐.blur
 │ ⧐.attp
 │ ⧐.take
 │ ⧐.smeme
 │ ⧐.horny
 │ ⧐.glass
 │ ⧐.lolice
 │ ⧐.wasted
 │ ⧐.simlcard
 │ ⧐.comrade
 │ ⧐.triggered
 │ ⧐.pixelate
 │ ⧐.stiktele
 │ ⧐.anticolong
 │ ⧐.emojimix 😔+🤣
 ╘═══════════════乡
 
 
╒════╡ *Convert* ╞═══࿐
│ ⧐.toimg 
│ ⧐.tomp3 
│ ⧐.tomp4 
│ ⧐.toptt 
│ ⧐.togif 
│ ⧐.hode 
│ ⧐.ghost 
│ ⧐.nightcore 
│ ⧐.tupai 
│ ⧐.imut 
│ ⧐.slowmo
│ ⧐.terbalik
│ ⧐.berat
╘═══════════════乡
 

╒════╡ *Random Gambar* ╞═══࿐
│ ⧐.aesthetic
│ ⧐.ahegao
│ ⧐.akira
│ ⧐.akiyama
│ ⧐.ana
│ ⧐.anjing
│ ⧐.art
│ ⧐.ass
│ ⧐.asuna
│ ⧐.ayuzawa
│ ⧐.bdsm
│ ⧐.boneka
│ ⧐.boruto
│ ⧐.bts
│ ⧐.cecan
│ ⧐.chiho
│ ⧐.chitoge
│ ⧐.cogan
│ ⧐.cosplay
│ ⧐.cosplayloli
│ ⧐.cosplaysagiri
│ ⧐.cuckold
│ ⧐.cum
│ ⧐.cyber
│ ⧐.deidara
│ ⧐.doraemon
│ ⧐.eba
│ ⧐.elaina
│ ⧐.emilia
│ ⧐.ero
│ ⧐.erza
│ ⧐.exo
│ ⧐.femdom
│ ⧐.foot
│ ⧐.freefire
│ ⧐.gamewallpaper
│ ⧐.gangbang
│ ⧐.gifs
│ ⧐.glasses
│ ⧐.gremory
│ ⧐.hekel
│ ⧐.hentai
│ ⧐.hestia
│ ⧐.hijaber
│ ⧐.hinata
│ ⧐.husbu
│ ⧐.inori
│ ⧐.islamic
│ ⧐.isuzu
│ ⧐.itachi
│ ⧐.itori
│ ⧐.jahy
│ ⧐.jeni
│ ⧐.jiso
│ ⧐.justina
│ ⧐.kaga
│ ⧐.kagura
│ ⧐.kakasih
│ ⧐.kaori
│ ⧐.kartun
│ ⧐.katakata
│ ⧐.keneki
│ ⧐.kotori
│ ⧐.kpop
│ ⧐.kucing
│ ⧐.kurumi
│ ⧐.lisa
│ ⧐.loli
│ ⧐.madara
│ ⧐.masturbation
│ ⧐.megumin
│ ⧐.mikasa
│ ⧐.mikey
│ ⧐.miku
│ ⧐.milf
│ ⧐.minato
│ ⧐.mobil
│ ⧐.motor
│ ⧐.mountain
│ ⧐.naruto
│ ⧐.neko
│ ⧐.neko2
│ ⧐.nekonime
│ ⧐.nezuko
│ ⧐.onepiece
│ ⧐.orgy
│ ⧐.panties
│ ⧐.pentol
│ ⧐.pokemon
│ ⧐.programming
│ ⧐.pubg
│ ⧐.randblackpink
│ ⧐.randomnime
│ ⧐.randomnime2
│ ⧐.rize
│ ⧐.rose
│ ⧐.ryujin
│ ⧐.sagiri
│ ⧐.sakura
│ ⧐.sasuke
│ ⧐.satanic
│ ⧐.shina
│ ⧐.shinka
│ ⧐.shinomiya
│ ⧐.shizuka
│ ⧐.shota
│ ⧐.tatasurya
│ ⧐.technology
│ ⧐.tejina
│ ⧐.tentacles
│ ⧐.thighs
│ ⧐.toukachan
│ ⧐.tsunade
│ ⧐.waifu
│ ⧐.wallhp
│ ⧐.wallml
│ ⧐.wallnime
│ ⧐.yotsuba
│ ⧐.yuki
│ ⧐.yulibocil
│ ⧐.yumeko
╘═══════════════乡


  

╒════╡ *Sticker Anime* ╞═══࿐
│ ⧐.cry
│ ⧐.kill
│ ⧐.hug
│ ⧐.pat
│ ⧐.lick
│ ⧐.kiss
│ ⧐.bite
│ ⧐.yeet
│ ⧐.neko
│ ⧐.bully
│ ⧐.bonk
│ ⧐.wink
│ ⧐.poke
│ ⧐.nom
│ ⧐.slap
│ ⧐.smile
│ ⧐.wave
│ ⧐.awoo
│ ⧐.blush
│ ⧐.smug
│ ⧐.glomp
│ ⧐.happy
│ ⧐.dance
│ ⧐.cringe
│ ⧐.cuddle
│ ⧐.highfive
│ ⧐.shinobu
│ ⧐.megumin
│ ⧐.handhold
╘═══════════════乡




╒════╡ *Ephotot* ╞═══࿐
│ ⧐.glitchtext
│ ⧐.writetext
│ ⧐.advancedglow
│ ⧐.typographytext
│ ⧐.pixelglitch
│ ⧐.neonglitch
│ ⧐.flagtext
│ ⧐.flag3dtext
│ ⧐.deletingtext
│ ⧐.blackpinkstyle
│ ⧐.glowingtext
│ ⧐.underwatertext
│ ⧐.logomaker
│ ⧐.cartoonstyle
│ ⧐.papercutstyle
│ ⧐.watercolortext
│ ⧐.effectclouds
│ ⧐.blackpinklogo
│ ⧐.gradienttext
│ ⧐.summerbeach
│ ⧐.luxurygold
│ ⧐.multicoloredneon
│ ⧐.sandsummer
│ ⧐.galaxywallpaper
│ ⧐.1917style
│ ⧐.makingneon
│ ⧐.royaltext
│ ⧐.freecreate
│ ⧐.galaxystyle
│ ⧐.lighteffects
╘═══════════════乡


╒════╡ *Photooxy* ╞═══࿐
│ ⧐.shadow
│ ⧐.write
│ ⧐.romantic
│ ⧐.burnpaper
│ ⧐.smoke
│ ⧐.narutobanner
│ ⧐.love
│ ⧐.undergrass
│ ⧐.doublelove
│ ⧐.coffecup
│ ⧐.underwaterocean
│ ⧐.smokyneon
│ ⧐.starstext
│ ⧐.rainboweffect
│ ⧐.balloontext
│ ⧐.metalliceffect
│ ⧐.embroiderytext
│ ⧐.flamingtext
│ ⧐.stonetext
│ ⧐.writeart
│ ⧐.summertext
│ ⧐.wolfmetaltext
│ ⧐.nature3dtext
│ ⧐.rosestext
│ ⧐.naturetypography
│ ⧐.quotesunder
│ ⧐.shinetext
╘═══════════════乡


╒════╡ *Image Markert* ╞═══࿐
│ ⧐.wanted 
│ ⧐.utatoo
│ ⧐.unsharpen 
│ ⧐.thanos 
│ ⧐.sniper 
│ ⧐.sharpen  
│ ⧐.sepia
│ ⧐.scary
│ ⧐.rip
│ ⧐.redple  
│ ⧐.rejected 
│ ⧐.posterize 
│ ⧐.ps4
│ ⧐.pixelize
│ ⧐.missionpassed 
│ ⧐.moustache 
│ ⧐.lookwhatkarenhave
│ ⧐.jail  
│ ⧐.invert 
│ ⧐.greyscale 
│ ⧐.glitch
│ ⧐.gay 
│ ⧐.frame 
│ ⧐.fire 
│ ⧐.distort 
│ ⧐.dictator 
│ ⧐.deepfry  
│ ⧐.ddungeon  
│ ⧐.circle  
│ ⧐.challenger 
│ ⧐.burn│ ⧐
│ ⧐.brazzers 
│ ⧐.beautiful 
│ ⧐.approved  
│ ⧐.3000years 
╘═══════════════乡


╒════╡ *Group* ╞═══࿐
│ ⧐.ceksider
│ ⧐.totag
│ ⧐.autosimi
│ ⧐.antilink
│ ⧐.antilinkgc
│ ⧐.antivirtex
│ ⧐.antiasing
│ ⧐.welcome on/off
│ ⧐.addkick
│ ⧐.delkick
│ ⧐.listkick
│ ⧐.infogc 
│ ⧐.linkgc 
│ ⧐.setppgc 
│ ⧐.setnamegc 
│ ⧐.setdesc 
│ ⧐.gc open/close 
│ ⧐.revoke 
│ ⧐.hidetag 
│ ⧐.kick  _fitur ini tutup_
│ ⧐.add  _fitur ini tutup_
│ ⧐.opentime 
│ ⧐.closetime 
│ ⧐.demote 
│ ⧐.promote 
│ ⧐.kickme 
│ ⧐.ban 
│ ⧐.unban 
│ ⧐.listban 
│ ⧐.getppgc 
│ ⧐.getpp 
│ ⧐.getidgc 
│ ⧐.listonline 
╘═══════════════乡



╒════╡ *Setting Bot* ╞═══࿐ 
│ ⧐.setprefix 
│ ⧐.setthumb 
│ ⧐.setppbot 
│ ⧐.setreply 
│ ⧐.setbio 
│ ⧐.setgif
│ ⧐.setimgquoted 
╘═══════════════乡


╒════╡ *Storage* ╞═══࿐
│ ⧐.addstik
│ ⧐.delstik  
│ ⧐.liststik  
│ ⧐.addvn
│ ⧐.delvn 
│ ⧐.listvn 
│ ⧐.adderror  
│ ⧐.clearallerror 
│ ⧐.listerror
╘═══════════════乡


╒════╡ *Database* ╞═══࿐
│ ⧐.addsewa
│ ⧐.ceksewa
│ ⧐.addowner
│ ⧐.addcmdowner
│ ⧐.addcmdlimit
│ ⧐.addcmdprem
│ ⧐.listowner
│ ⧐.listcmdowner
│ ⧐.listcmdlimit
│ ⧐.listcmdprem
│ ⧐.clearallerror
│ ⧐.clearalluser
│ ⧐.clearallban
│ ⧐.clearallblock
╘═══════════════乡

╒════╡ *Owner* ╞═══࿐
│ ⧐.unbanwa
│ ⧐.filetozip
│ ⧐.banchat 
│ ⧐.unbanchat 
│ ⧐.chat 
│ ⧐.join 
│ ⧐.bc 
│ ⧐.bcgc 
│ ⧐.react 
│ ⧐.block 
│ ⧐.unblock 
│ ⧐.getcase 
│ ⧐.getfile 
│ ⧐.listpc 
│ ⧐.listgc 
│ ⧐.> / x / c / evalcode
│ ⧐.=> / evalcode2
│ ⧐.$ / executor
╘═══════════════乡


╒════╡ *Thanks To* ╞═══࿐
│ ⧐ Satria Developer
│ ⧐ SatriaTech
│ ⧐ Satria.Net
╘═══════════════乡

`
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})
