/* Akıl Var Mı? – 51-100. bölümler (zor bölümler). index.html'deki LEVELS dizisine eklenir. */
function parca(s){ const dk=s.dk||0, yk=s.yk||0; return (dk===0?1:2*dk)*(yk+1); }
function ad(x){ return {kA:"A kesesi",kB:"B kesesi",kC:"C kesesi",a1:"1. altın",a2:"2. altın",a3:"3. altın"}[x]||x; }
window.LEVELS_EK = [
  // ===== 51 =====
  {
    il: "İstanbul",
    title: "Vapurda martı saldırısı! 🕊️",
    story: "Kadıköy vapurundasın, elinde sıcak simit. Ama martılar tepende dönüyor, ağzına götürdüğün an kapacaklar!",
    bg: "linear-gradient(180deg,#bfe4ff 0%,#7cc4f2 60%,#3d8fd1 100%)",
    hint: "Martıları kovamazsın ama başka yere çekebilirsin. Simidin küçük bir parçasını uzağa, denize at!",
    win: "Simidin ucunu denize attın, martılar oraya uçtu. Sen de çayınla simidini keyifle yedin!",
    items: [
      {id:"martilar", em:"🕊️", lb:s=> s.uzak ? "Martılar (uzakta)" : "Martılar (tepende)", x:s=> s.uzak ? 80 : 50, y:s=> s.uzak ? 22 : 16, target:true, look:s=> s.uzak ? "Denizdeki simit parçasının peşindeler!" : "Gözleri simidinde. Çok cesurlar!"},
      {id:"sen", em:"🧑", lb:"Sen", x:24, y:40, target:true, look:"Karnın aç, simit kokusu burnunda."},
      {id:"deniz", em:"🌊", lb:"Deniz (uzak)", x:80, y:40, target:true, look:"Vapurun arkasında köpüklü sular."},
      {id:"simit", em:"🥯", lb:"Simit", x:46, y:58, drag:true, look:"Mis gibi susamlı simit."},
      {id:"parca", em:"🍞", lb:"Simit parçası", x:22, y:80, drag:true, show:s=>s.parca && !s.uzak, look:"Simidin ucundan kopardığın küçük parça."},
      {id:"cay", em:"🍵", lb:"Çay", x:58, y:84, drag:true, look:"Vapur çayı. Sıcacık."}
    ],
    decoys:[{em:"☂️",lb:"Şemsiye",look:"Kapalı şemsiye.",no:"Şemsiyeyi açtın, rüzgâr ters çevirdi! 🌬️"},{em:"📢",lb:"Düdük",look:"Plastik düdük.",no:"Martılar düdükten hiç korkmadı, daha çok geldi!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="simit>sen"){
        if(s.uzak) return {type:"win", msg:"Martılar uzakta, sen simidini yiyorsun. Oh be! 🥯"};
        if(!s.parca){ s.parca=true; return {type:"progress", msg:"Simidin ucundan küçük bir parça kopardın. Bunu ne yapsan? 🤔", flash:"parca"}; }
        return {msg:"Simidi ağzına götürdün... martı dalış yaptı, az kalsın kapıyordu! 😱"};
      }
      if(k==="parca>deniz"){ s.uzak=true; return {type:"progress", msg:"Parçayı uzağa fırlattın, bütün martılar oraya uçtu! 🕊️💨", flash:"martilar"}; }
      if(k==="parca>martilar") return {msg:"Parçayı yanına attın, daha çok martı geldi! 😩"};
      if(k==="simit>martilar") return {msg:"Martı simidin tamamını kaptı, gitti! 😭 Neyse ki çantada bir tane daha vardı..."};
      if(k==="simit>deniz") return {msg:"Bütün simidi denize mi atıyorsun?! Sana bir şey kalmadı 😅"};
      if(k==="cay>sen") return {msg:"Çay güzel ama simitsiz olmaz! Martılar hâlâ tepende."};
      if(k==="cay>martilar") return {msg:"Martılar çay içmez 😂"};
      return null;
    }
  },
  // ===== 52 =====
  {
    il: "Ankara",
    title: "Kombi hata veriyor! 🥶",
    story: "Ankara ayazı, ev buz gibi. Kombinin ekranında 'Düşük basınç' yazıyor, petekler de yarım ısınıyor!",
    bg: "linear-gradient(180deg,#e6eef8 0%,#b9cbe3 100%)",
    hint: "Sıra önemli: Petekteki hava alınınca basınç düşer. Önce havayı al, sonra basıncı doldur, en son kombiyi resetle.",
    win: "Peteğin havasını aldın, basıncı 1,5'a getirdin, kombiyi resetledin. Ev mis gibi ısındı!",
    items: [
      {id:"kombi", em:"🔥", lb:s=> s.basinc ? "Kombi (basınç 1,5)" : "Kombi (basınç 0,3!)", x:22, y:26, target:true, look:s=> s.basinc ? "Basınç ibresi yeşilde." : "İbre kırmızıda: basınç çok düşük!"},
      {id:"petek", em:"♨️", lb:s=> s.hava ? "Petek (havası alındı)" : "Petek (üstü soğuk)", x:76, y:26, target:true, look:s=> s.hava ? "Baştan sona ısınacak durumda." : "Altı ılık, üstü buz gibi. İçinde hava var!"},
      {id:"anahtar", em:"🔑", lb:"Petek anahtarı", x:18, y:60, drag:true, look:"Peteğin köşesindeki küçük vidayı açar."},
      {id:"vana", em:"🚰", lb:"Doldurma vanası", x:48, y:62, drag:true, look:"Kombinin altındaki mavi musluk. Sisteme su verir."},
      {id:"reset", em:"🔘", lb:"Reset tuşu", x:80, y:62, drag:true, look:"Kombiyi yeniden başlatır."},
      {id:"kova", em:"🪣", lb:"Küçük kap", x:50, y:86, drag:true, look:"Petekten damlayan suyu tutmak için."}
    ],
    decoys:[{em:"🔨",lb:"Çekiç",look:"Ağır çekiç.",no:"Kombiye vurulmaz! Usta çağırmak daha ucuz olur 😬"},{em:"🕯️",lb:"Mum",look:"Bir paket mum.",no:"Mumla ev ısınmaz 🕯️"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="anahtar>petek"){ s.hava=true; const vardi=s.basinc; s.basinc=false; return {type:"progress", msg:vardi ? "Fısss... hava çıktı, su geldi. Ama basınç yine düştü! 😩" : "Fısss... hava çıktı, su gelince vidayı kapattın 💧", flash:"petek"}; }
      if(k==="vana>kombi"){ s.basinc=true; return {type:"progress", msg:"Vanayı yavaşça açtın, ibre 1,5'a gelince kapattın ✔", flash:"kombi"}; }
      if(k==="reset>kombi"){
        if(s.hava && s.basinc) return {type:"win", msg:"Kombi gürüldedi, petekler baştan sona ısındı! 🔥🏠"};
        if(!s.basinc) return {msg:"Resetledin ama basınç düşük, kombi yine hata verdi ❌"};
        return {msg:"Kombi çalıştı ama petekler yarım ısınıyor. İçlerinde hava var!"};
      }
      if(k==="vana>petek") return {msg:"Vana kombinin altında, petekte değil!"};
      if(k==="anahtar>kombi") return {msg:"Petek anahtarı kombiye uymaz 🔑"};
      if(k==="kova>petek") return {type:"info", msg:"Kabı peteğin altına koydun. Şimdi havayı alabilirsin."};
      if(d==="kova") return {msg:"Kabın burada bir işi yok."};
      return null;
    }
  },
  // ===== 53 =====
  {
    il: "Adana",
    title: "Gömleğe şalgam döküldü! 🟣",
    story: "Düğüne bir saat var. Bembeyaz gömleğine koca bir şalgam lekesi! Başka gömleğin de yok.",
    bg: "linear-gradient(180deg,#fff0f6 0%,#f3c6dd 100%)",
    hint: "Sıcak su lekeyi kumaşa yapıştırır! Önce soğuk su, sonra limon. Kuruturken de ütüyü değil Adana güneşini kullan.",
    win: "Soğuk su, limon ve Adana güneşi! Gömlek bembeyaz oldu, düğüne yetiştin.",
    items: [
      {id:"gomlek", em:"👔", lb:s=> s.temiz ? "Gömlek (ıslak, temiz)" : s.islak ? "Gömlek (ıslak, lekeli)" : "Gömlek (mor lekeli)", x:30, y:28, drag:true, target:true, look:s=> s.temiz ? "Leke çıktı! Ama sırılsıklam." : "Göğsünde kocaman mor bir leke."},
      {id:"ip", em:"🧵", lb:"Balkondaki ip", x:78, y:22, target:true, look:"Adana güneşi tam vuruyor. 40 derece!"},
      {id:"soguk", em:"🚿", lb:"Soğuk su", x:16, y:62, drag:true, look:"Musluktan buz gibi su."},
      {id:"sicak", em:"♨️", lb:"Kaynar su", x:44, y:66, drag:true, look:"Su ısıtıcısında yeni kaynamış su."},
      {id:"limon", em:"🍋", lb:"Limon", x:72, y:58, drag:true, look:"Sulu bir limon."},
      {id:"utu", em:"🧺", lb:"Ütü", x:84, y:84, drag:true, look:"Sıcak ütü."}
    ],
    decoys:[{em:"🖊️",lb:"Beyaz kalem",look:"Düzeltme kalemi.",no:"Gömleğe daksil mi sürüyorsun?! 😂"},{em:"🧴",lb:"Parfüm",look:"Babanın parfümü.",no:"Parfüm lekeyi çıkarmaz, sadece güzel kokan leke olur 😅"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="soguk>gomlek"){ if(s.islak) return {type:"info", msg:"Zaten ıslak."}; s.islak=true; return {type:"progress", msg:"Lekeyi tersinden soğuk suyla yıkadın, biraz açıldı 💧", flash:"gomlek"}; }
      if(k==="limon>gomlek"){ if(!s.islak) return {msg:"Kuru lekeye limon sıktın, pek işe yaramadı. Önce suyla ıslatsan?"}; s.temiz=true; return {type:"progress", msg:"Limonu sıktın, ovaladın... mor leke kayboldu! ✨", flash:"gomlek"}; }
      if(k==="sicak>gomlek") return {msg:"Kaynar su lekeyi kumaşa pişirdi! 😱 Neyse ki dolapta yedek gömlek çıktı..."};
      if(k==="gomlek>ip"){ if(s.temiz) return {type:"win", msg:"Adana güneşi 10 dakikada kuruttu! Gömlek bembeyaz 👔☀️"}; return {msg:"Lekeyle asarsan güneş lekeyi daha da sabitler!"}; }
      if(k==="utu>gomlek") return s.temiz ? {msg:"Islak gömleği ütüyle kurutamazsın, buhar bulutu oldu! Güneşe as."} : {msg:"Lekenin üstüne ütü bastın! Leke artık kalıcı 😩"};
      return null;
    }
  },
  // ===== 54 =====
  {
    il: "Manisa",
    title: "Mesir macunu saçılıyor! 🍬",
    story: "Mesir Macunu Festivali! Sultan Camii'nin kubbesinden kâğıda sarılı macunlar atılıyor. Herkes kapışıyor, sen hiç tutamıyorsun!",
    bg: "linear-gradient(180deg,#ffe9c2 0%,#f6b26b 100%)",
    hint: "Manisalılar macunu eliyle tutmaz. Bir şeyi açıp TERS çevirirsen kocaman bir sepet olur!",
    win: "Şemsiyeyi açıp ters çevirdin, macunlar içine yağdı! Tam bir Manisalı gibi topladın.",
    items: [
      {id:"kubbe", em:"🕌", lb:"Kubbe (macun atılıyor)", x:50, y:18, target:true, look:"Yukarıdan rengârenk macun paketleri yağıyor!"},
      {id:"sen", em:"🙋", lb:"Sen", x:24, y:46, target:true, look:"Kolların havada ama hep kaçırıyorsun."},
      {id:"semsiye", em:s=> s.ters ? "🥣" : s.acik ? "☂️" : "🌂", lb:s=> s.ters ? "Ters şemsiye" : s.acik ? "Açık şemsiye" : "Kapalı şemsiye", x:76, y:48, drag:true, look:s=> s.ters ? "Kocaman bir kâse gibi oldu!" : "Annenin büyük şemsiyesi."},
      {id:"sapka", em:"👒", lb:"Hasır şapka", x:18, y:82, drag:true, look:"Küçük bir şapka."},
      {id:"el", em:"✋", lb:"Elin", x:46, y:80, drag:true, look:"Bir şeyi açmak, çevirmek için."},
      {id:"anne", em:"👩", lb:"Annen", x:80, y:82, target:true, look:"\"Bana da macun getir, şifadır!\""}
    ],
    decoys:[{em:"🧺",lb:"Küçük sepet",look:"Elde taşınan küçük sepet.",no:"Sepet çok küçük, macunlar dışına düştü!"},{em:"🎒",lb:"Çanta",look:"Fermuarlı çanta.",no:"Çantanın ağzı dar, macunlar içine girmedi."}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>semsiye"){
        if(!s.acik){ s.acik=true; return {type:"progress", msg:"Şemsiyeyi açtın ☂️ Şimdi ne yapacaksın?", flash:"semsiye"}; }
        if(!s.ters){ s.ters=true; return {type:"progress", msg:"Şemsiyeyi TERS çevirdin, kocaman bir kâse oldu! 🥣", flash:"semsiye"}; }
        return {type:"info", msg:"Şemsiye hazır!"};
      }
      if(k==="semsiye>kubbe" || k==="semsiye>sen"){
        if(s.ters) return {type:"win", msg:"Macunlar ters şemsiyeye yağdı! Bir kucak dolusu mesir macunu 🍬🍬🍬"};
        if(s.acik) return {msg:"Açık şemsiye macunları sektirdi, hepsi başkalarına gitti 😂"};
        return {msg:"Kapalı şemsiyeyle macun tutulur mu? 😄"};
      }
      if(k==="sapka>kubbe" || k==="sapka>sen") return {msg:"Şapkaya bir tane düştü, gerisi kafana yağdı 😅"};
      if(k==="el>kubbe" || k==="el>sen") return {msg:"Ellerinle tutmaya çalıştın, hepsi parmaklarının arasından kaçtı!"};
      if(t==="anne") return {msg:"Annene götürecek macun yok ki daha!"};
      return null;
    }
  },
  // ===== 55 =====
  {
    il: "Nevşehir",
    title: "Testi kebabı kırılacak! 🏺",
    story: "Kapadokya'da misafirler sofrada. Testi kebabı tandırdan yeni çıktı, kızgın sıcak. Testiyi kırıp kebabı tabağa almalısın!",
    bg: "linear-gradient(180deg,#ffe2c4 0%,#e8a66b 100%)",
    hint: "Kızgın testiye çıplak elle dokunma! Kalın bir bezle tut, tabağın üstüne getir, çekiçle ortasına değil, BOYNUNA vur.",
    win: "Bezle tuttun, tabağın üstünde boynuna tık diye vurdun. Kebap tabağa döküldü, misafirler alkışladı!",
    items: [
      {id:"testi", em:"🏺", lb:s=> s.tutuldu ? "Testi (bezle tutuluyor)" : "Kızgın testi", x:50, y:28, drag:true, target:true, look:"Tandırdan yeni çıktı. Dumanı tütüyor! Ağzı hamurla kapalı."},
      {id:"tabak", em:"🍽️", lb:s=> s.ustunde ? "Tabak (testi üstünde)" : "Servis tabağı", x:22, y:58, target:true, look:"Büyük, derin bir tabak."},
      {id:"bez", em:"🧣", lb:"Kalın bez", x:80, y:56, drag:true, look:"Kat kat katlanmış kalın bez."},
      {id:"cekic", em:"🔨", lb:"Küçük çekiç", x:46, y:84, drag:true, look:"Testi kırmak için özel küçük çekiç."},
      {id:"misafir", em:"👨‍👩‍👧", lb:"Misafirler", x:82, y:22, target:true, look:"\"Hadi bakalım, kırışını görelim!\""},
      {id:"el", em:"✋", lb:"Elin", x:16, y:84, drag:true, look:"Çıplak elin."}
    ],
    decoys:[{em:"🧊",lb:"Buz",look:"Buz küpleri.",no:"Kızgın testiye buz koyarsan çatlayıp her yere saçılır! 💥"},{em:"🔪",lb:"Bıçak",look:"Ekmek bıçağı.",no:"Bıçakla testi kırılmaz, bıçak körleşti 😅"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>testi") return {msg:"Ahh! Kızgın testiye çıplak elle dokundun! 🔥 Elini soğuk suya tuttun neyse ki."};
      if(k==="bez>testi"){ s.tutuldu=true; return {type:"progress", msg:"Testiyi kalın bezle sardın, artık tutabilirsin 🧣", flash:"testi"}; }
      if(k==="testi>tabak"){ if(!s.tutuldu) return {msg:"Testiyi çıplak elle kaldıramazsın, kızgın! 🔥"}; s.ustunde=true; return {type:"progress", msg:"Testiyi yan yatırıp tabağın üstüne getirdin.", flash:"tabak"}; }
      if(k==="cekic>testi" || k==="cekic>tabak"){
        if(!s.tutuldu) return {msg:"Testi tandır taşının üstünde, kırarsan kebap yere dökülecek!"};
        if(!s.ustunde) return {msg:"Havada kırarsan kebap masaya, misafirlerin kucağına dökülecek! 😱 Tabağın üstüne getir."};
        return {type:"win", msg:"Tık! Testinin boynu temiz kırıldı, kebap tabağa aktı 🏺🍖"};
      }
      if(k==="testi>misafir") return {msg:"Kızgın testiyi misafire mi uzatıyorsun?! 😱"};
      if(k==="cekic>misafir") return {msg:"Misafire çekiç uzatılmaz 😄"};
      return null;
    }
  },
  // ===== 56 =====
  {
    title: "Tavada yağ alev aldı! 🔥",
    story: "Patates kızartırken telefonla konuştun, tavadaki yağ alev aldı! Alevler yükseliyor!",
    bg: "linear-gradient(180deg,#fff1e0 0%,#ffc49b 100%)",
    hint: "Yanan yağa ASLA su dökülmez, patlar! Önce ocağı kapat, sonra tavanın üstünü kapakla ya da ıslak bezle ört, havasız kalan alev söner.",
    win: "Ocağı kapattın, kapağı örttün. Alev havasız kaldı ve söndü. Sakin kaldın, aferin!",
    items: [
      {id:"tava", em:"🍳", lb:s=> s.sondu ? "Tava (söndü)" : "Tava (alev alev!) 🔥", x:44, y:28, target:true, look:"Yağ yanıyor, alevler yükseliyor!"},
      {id:"dugme", em:"🎛️", lb:s=> s.kapali ? "Ocak düğmesi (kapalı)" : "Ocak düğmesi (açık)", x:80, y:30, target:true, look:"Ocağın gaz düğmesi."},
      {id:"su", em:"🥛", lb:"Bardak su", x:14, y:58, drag:true, look:"Bir bardak su."},
      {id:"kapak", em:"🥘", lb:"Tencere kapağı", x:44, y:62, drag:true, look:"Tavaya tam oturan kapak."},
      {id:"el", em:"✋", lb:"Elin", x:76, y:62, drag:true, look:"Elinle düğmeyi çevirebilirsin."},
      {id:"un", em:"🌾", lb:"Un", x:26, y:86, drag:true, look:"Bir paket un."}
    ],
    decoys:[{em:"💨",lb:"Fön",look:"Saç kurutma makinesi.",no:"Fön ateşi körükledi! 🔥🔥 Asla!"},{em:"🧴",lb:"Deodorant",look:"Sprey deodorant.",no:"Spreyler yanıcıdır! Ateşe asla sıkılmaz 😱"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="su>tava") return {msg:"SAKIN! Yanan yağa su dökülmez, alev topu gibi patlar! 💥 Neyse ki son anda durdun."};
      if(k==="un>tava") return {msg:"Un yanıcı tozdur, alev parladı! 😱 Un da yanlış seçim."};
      if(k==="el>tava") return {msg:"Yanan tavayı elle taşımaya kalkma! Yağ sıçrar, yanarsın 🔥"};
      if(k==="el>dugme"){ s.kapali=true; return {type:"progress", msg:"Ocağı kapattın, gaz kesildi ✔ Ama tavadaki yağ hâlâ yanıyor!", flash:"dugme"}; }
      if(k==="kapak>tava"){
        if(!s.kapali) return {msg:"Kapağı örttün ama alttan ocak hâlâ ısıtıyor, yağ yine tutuşacak! Önce ocağı kapat."};
        s.sondu=true; return {type:"win", msg:"Kapağı örttün, alev havasız kalıp söndü. Bravo, soğukkanlı itfaiyeci! 🧯"};
      }
      if(k==="kapak>dugme") return {msg:"Kapakla düğme çevrilmez 😅"};
      return null;
    }
  },
  // ===== 57 =====
  {
    title: "Üç düğme, bir ampul! 💡",
    story: "Bodrumda 3 düğme var, sadece biri yukarıdaki odanın lambasını yakıyor. Odayı göremiyorsun ve yukarı SADECE BİR KEZ çıkabilirsin!",
    bg: "linear-gradient(180deg,#e9e4ff 0%,#b5a8f0 100%)",
    hint: "Ampul yanınca ışık verir ama bir de ISINIR! Bir düğmeyi açıp biraz bekle, sonra kapat. Başka birini aç ve yukarı çık. Ampule dokun!",
    win: "Işık + sıcaklık ile tek seferde buldun! Elektrikçi usta bile şaşırdı.",
    items: [
      {id:"d1", em:s=> s.a1 ? "🟢" : "⚪", lb:s=> "1: "+(s.a1?"açık":"kapalı"), x:16, y:22, target:true, look:"Eski tip bir anahtar."},
      {id:"d2", em:s=> s.a2 ? "🟢" : "⚪", lb:s=> "2: "+(s.a2?"açık":"kapalı"), x:50, y:22, target:true, look:"Eski tip bir anahtar."},
      {id:"d3", em:s=> s.a3 ? "🟢" : "⚪", lb:s=> "3: "+(s.a3?"açık":"kapalı"), x:84, y:22, target:true, look:"Eski tip bir anahtar."},
      {id:"merdiven", em:"🪜", lb:s=> s.girdi ? "Yukarı çıktın" : "Yukarı merdiven", x:84, y:52, target:true, look:"Yukarıdaki odaya çıkar. Sadece bir kez!"},
      {id:"lamba", em:"💡", lb:s=> s.gozlem, x:50, y:52, target:true, show:s=>s.girdi, look:s=> s.gozlem},
      {id:"el", em:"👆", lb:"Parmağın", x:16, y:80, drag:true, look:"Düğmeye basmak için."},
      {id:"saat", em:"⏳", lb:"10 dakika bekle", x:44, y:82, drag:true, look:"Kum saati. Sürükleyip merdivene bırak, oturup beklersin."},
      {id:"sen", em:"🚶", lb:"Sen", x:72, y:82, drag:true, look:"Yukarı çıkmaya hazırsın."},
      {id:"etiket", em:"🏷️", lb:"'LAMBA' etiketi", x:16, y:52, drag:true, look:"Doğru düğmeye yapıştıracaksın."}
    ],
    combine(d,t,s){
      const k=d+">"+t;
      const DOGRU="d2";
      const n={d1:1,d2:2,d3:3}[t];
      if(d==="el" && n){
        if(s.girdi) return {type:"info", msg:"Artık yukarıdasın, düğmeleri değiştirmenin anlamı yok."};
        s["a"+n]=!s["a"+n]; return {type:"progress", msg:n+". düğmeyi "+(s["a"+n]?"açtın":"kapattın")+".", flash:t};
      }
      if(k==="saat>merdiven" || k==="saat>sen"){
        if(s.girdi) return {type:"info", msg:"Yukarıdasın, beklemeye gerek yok."};
        [1,2,3].forEach(i=>{ if(s["a"+i]) s["s"+i]=true; });
        s.bekle=(s.bekle||0)+1;
        return {type:"progress", msg:"Merdivene oturup 10 dakika bekledin ⏳ (açık olan ampul varsa ısındı)", flash:"saat"};
      }
      if(k==="sen>merdiven"){
        if(s.girdi) return {type:"info", msg:"Zaten yukarıdasın."};
        s.girdi=true;
        const yanik=s["a2"], sicak=s["s2"];
        s.gozlem = yanik ? "Ampul YANIYOR" : sicak ? "Ampul sönük ama SICAK" : "Ampul sönük ve SOĞUK";
        return {type:"progress", msg:"Yukarı çıktın, ampule baktın ve dokundun: "+s.gozlem+"!", flash:"lamba"};
      }
      if(d==="etiket" && n){
        if(!s.girdi) return {msg:"Tahminle etiket yapıştırılmaz! Usta: \"Bir yanlış kablo, bütün ev karanlık!\" 😬"};
        if(t===DOGRU) return {type:"win", msg:"2. düğme! Etiket doğru yere yapıştı 🏷️💡"};
        return {msg:"Yanlış düğme! Ampulü yeniden düşün: yanıyor mu, sıcak mı, soğuk mu? 🤔"};
      }
      if(k==="el>lamba") return {type:"info", msg:"Ampule dokundun: "+s.gozlem+"."};
      if(k==="etiket>lamba") return {msg:"Etiket düğmeye yapıştırılacak, ampule değil!"};
      return null;
    }
  },
  // ===== 58 =====
  {
    il: "Diyarbakır",
    title: "Hangi karpuz olgun? 🍉",
    story: "Diyarbakır karpuzları dev gibi! Babana en olgununu seçmen lazım. Satıcı \"Kesmek yok, beğen al!\" diyor.",
    bg: "linear-gradient(180deg,#e8ffd8 0%,#9fd67a 100%)",
    hint: "Olgun karpuz tıklatınca tok ve boğuk 'bom bom' ses çıkarır, sapı da kurumuş olur. Taşırken de dev karpuzu kucaklayamazsın: el arabası lazım!",
    win: "Tıklatıp boğuk sesi buldun, el arabasıyla taşıdın. Kesince kıpkırmızı çıktı! Baban gurur duydu.",
    items: [
      {id:"k1", em:"🍉", lb:s=> s.t1 ? "1: ince 'tın tın' ses" : "1. karpuz", x:16, y:26, target:true, drag:true, look:"Sapı yemyeşil."},
      {id:"k2", em:"🍉", lb:s=> s.t2 ? "2: boğuk 'bom bom' ses" : "2. karpuz", x:50, y:24, target:true, drag:true, look:"Sapı kurumuş, altında sarı bir leke var."},
      {id:"k3", em:"🍉", lb:s=> s.t3 ? "3: ses yok, yumuşak" : "3. karpuz", x:84, y:26, target:true, drag:true, look:"Bir yeri çökmüş gibi."},
      {id:"parmak", em:"👊", lb:"Parmak boğumun", x:22, y:58, drag:true, look:"Tıklatmak için."},
      {id:"araba", em:"🛒", lb:s=> s.yuklu ? "El arabası (karpuz içinde)" : "El arabası", x:56, y:60, drag:true, target:true, look:"Satıcının el arabası."},
      {id:"baba", em:"👨", lb:"Baban", x:86, y:62, target:true, look:"\"Oğlum/kızım, olgununu seç. Kesince kırmızı çıkmazsa sen bilirsin!\""}
    ],
    decoys:[{em:"🔪",lb:"Bıçak",look:"Keskin bıçak.",no:"Satıcı: \"Kesmek yok dedim!\" 😠"},{em:"⚖️",lb:"Kantar",look:"Satıcının kantarı.",no:"Ağır olması olgun olduğunu göstermez!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="parmak>k1"){ s.t1=true; return {type:"progress", msg:"Tın tın... İnce, cılız bir ses. Ham! 🙅", flash:"k1"}; }
      if(k==="parmak>k2"){ s.t2=true; return {type:"progress", msg:"Bom bom! Tok ve boğuk bir ses. İşte bu! 👌", flash:"k2"}; }
      if(k==="parmak>k3"){ s.t3=true; return {type:"progress", msg:"Ses yok, parmağın gömüldü... Bu geçmiş! 🤢", flash:"k3"}; }
      if(k==="k2>araba"){ if(!s.t2) return {msg:"Emin olmadan mı aldın? Önce bir test etsen 🤔"}; s.yuklu=true; return {type:"progress", msg:"Dev karpuzu el arabasına yükledin 🛒", flash:"araba"}; }
      if(k==="k1>araba" || k==="k3>araba") return {msg:"Bu karpuz kötü çıktı! Baban kafasını salladı 😬"};
      if(k==="araba>baba"){ if(s.yuklu) return {type:"win", msg:"El arabasıyla babana getirdin. Kesti: kıpkırmızı, şeker gibi! 🍉"}; return {msg:"El arabası boş! Önce karpuzu seç."}; }
      if(k==="k2>baba") return {msg:"Dev karpuzu kucakladın... ağır! Elinden kayıp yere düştü, paramparça 😭"};
      if(k==="k1>baba" || k==="k3>baba") return {msg:"Baban kesti... bembeyaz/çürük çıktı! 😩"};
      if(t==="baba" && d==="parmak") return {msg:"Babanı tıklatmak yok 😂"};
      return null;
    }
  },
  // ===== 59 =====
  {
    title: "Tam 4 litre su! 🪣",
    story: "Annen bulgur pilavı için tencereye TAM 4 litre su istiyor. Elinde sadece 3 litrelik ve 5 litrelik iki kova var, üzerlerinde çizgi yok!",
    bg: "linear-gradient(180deg,#dff6ff 0%,#9fdcf5 100%)",
    hint: "5'liği doldur, 3'lüye boşalt (5'likte 2 kalır). 3'lüyü dök, 5'likteki 2'yi 3'lüye aktar. 5'liği yine doldur ve 3'lüyü tamamla. 5'likte ne kaldı?",
    win: "Tam 4 litre! Annen ölçüp şaşırdı: \"Matematiğin bal gibi!\"",
    items: [
      {id:"k3", em:"🪣", lb:s=> "3 L kova: "+(s.a||0)+" L", x:24, y:30, drag:true, target:true, look:"En fazla 3 litre alır."},
      {id:"k5", em:"🛢️", lb:s=> "5 L kova: "+(s.b||0)+" L", x:66, y:30, drag:true, target:true, look:"En fazla 5 litre alır."},
      {id:"cesme", em:"🚰", lb:"Çeşme", x:16, y:70, target:true, look:"Kovayı buraya getirirsen ağzına kadar dolar."},
      {id:"lavabo", em:"🕳️", lb:"Gider (boşalt)", x:48, y:74, target:true, look:"Kovayı buraya getirirsen tamamen boşalır."},
      {id:"tencere", em:"🍲", lb:"Tencere (4 L lazım)", x:82, y:70, target:true, look:"Annen: \"Ne eksik ne fazla, tam 4 litre!\""}
    ],
    decoys:[{em:"🥤",lb:"Bardak",look:"Ölçüsü belli değil.",no:"Bardak bardak saymak... kaç bardak 4 litre ki? Annen güldü."},{em:"🫖",lb:"Çaydanlık",look:"Ne kadar aldığı belli değil.",no:"Çaydanlığın kaç litre aldığını bilmiyorsun!"}],
    combine(d,t,s){
      const k=d+">"+t; s.a=s.a||0; s.b=s.b||0;
      if(k==="k3>cesme"){ s.a=3; return {type:"progress", msg:"3 litrelik kovayı doldurdun.", flash:"k3"}; }
      if(k==="k5>cesme"){ s.b=5; return {type:"progress", msg:"5 litrelik kovayı doldurdun.", flash:"k5"}; }
      if(k==="k3>lavabo"){ s.a=0; return {type:"progress", msg:"3 litrelik kovayı boşalttın.", flash:"k3"}; }
      if(k==="k5>lavabo"){ s.b=0; return {type:"progress", msg:"5 litrelik kovayı boşalttın.", flash:"k5"}; }
      if(k==="k5>k3"){ const m=Math.min(s.b,3-s.a); s.b-=m; s.a+=m; return {type:"progress", msg:"5'likten 3'lüye "+m+" litre aktardın.", flash:"k3"}; }
      if(k==="k3>k5"){ const m=Math.min(s.a,5-s.b); s.a-=m; s.b+=m; return {type:"progress", msg:"3'lüden 5'liğe "+m+" litre aktardın.", flash:"k5"}; }
      if(k==="k5>tencere"){ if(s.b===4) return {type:"win", msg:"Tam 4 litre tencereye! 🎯"}; const v=s.b; s.a=0; s.b=0; return {msg:v+" litre döktün, annen: \"Bu 4 değil!\" Tencereyi boşaltıp baştan başladın."}; }
      if(k==="k3>tencere"){ const v=s.a; s.a=0; s.b=0; return {msg:v+" litre döktün, annen: \"Bu 4 değil!\" Baştan başla."}; }
      return null;
    }
  },
  // ===== 60 =====
  {
    title: "Kurt, kuzu ve lahana! ⛵",
    story: "Çoban sensin. Kayığa senden başka tek bir şey sığıyor. Kurtla kuzuyu yalnız bırakırsan kurt kuzuyu yer; kuzuyla lahanayı bırakırsan kuzu lahanayı yer. Hepsini karşıya geçir!",
    bg: "linear-gradient(180deg,#d9f7d1 0%,#8fd3e8 50%,#d9f7d1 100%)",
    hint: "Önce kuzuyu geçir. Boş dön. Kurdu geçir ama dönerken kuzuyu GERİ getir! Lahanayı geçir, boş dön, en son kuzuyu al.",
    win: "Hepsi karşı kıyıda, kimse kimseyi yemedi! Bu bilmece yüzyıllardır sorulur, sen çözdün.",
    items: [
      {id:"kurt", em:"🐺", lb:s=> "Kurt "+(s.kurt?"(karşıda)":"(beride)"), x:s=> s.kurt ? 84 : 16, y:20, drag:true, look:"Aç gözlerle kuzuya bakıyor."},
      {id:"kuzu", em:"🐑", lb:s=> "Kuzu "+(s.kuzu?"(karşıda)":"(beride)"), x:s=> s.kuzu ? 84 : 16, y:42, drag:true, look:"Lahanaya göz dikmiş."},
      {id:"lahana", em:"🥬", lb:s=> "Lahana "+(s.lahana?"(karşıda)":"(beride)"), x:s=> s.lahana ? 84 : 16, y:64, drag:true, look:"Taze, çıtır bir lahana."},
      {id:"kayik", em:"⛵", lb:s=> "Kayık "+(s.kayik?"(karşıda)":"(beride)"), x:s=> s.kayik ? 66 : 34, y:88, drag:true, target:true, look:"Bir şeyi kayığa sürüklersen onunla karşıya geçersin. Kayığı nehre sürüklersen boş geçersin."},
      {id:"nehir", em:"🌊", lb:"Nehir", x:50, y:28, target:true, look:"Kayığı buraya sürüklersen tek başına karşıya geçersin."},
      {id:"bayrak", em:"🚩", lb:"Karşı kıyı", x:50, y:60, target:true, look:"Hepsi burada olmalı."}
    ],
    combine(d,t,s){
      const k=d+">"+t;
      const bas=()=>{ s.kurt=0; s.kuzu=0; s.lahana=0; s.kayik=0; };
      const tehlike=()=>{
        const yer=s.kayik?0:1; // kayığın olmadığı kıyı
        const o=x=> (s[x]||0)===yer;
        if(o("kurt") && o("kuzu")) return "Arkanı döner dönmez kurt kuzuya saldırdı! 🐺🐑";
        if(o("kuzu") && o("lahana")) return "Sen yokken kuzu lahanayı kıtır kıtır yedi! 🐑🥬";
        return null;
      };
      let gecen=null;
      if(["kurt","kuzu","lahana"].includes(d) && (t==="kayik" || t==="nehir" || t==="bayrak")){
        if((s[d]||0)!==(s.kayik||0)) return {type:"info", msg:"Kayık öbür kıyıda! Önce kayığı getir."};
        gecen=d;
      } else if(k==="kayik>nehir" || k==="kayik>bayrak"){ gecen="bos"; }
      if(!gecen) return null;
      s.kayik = s.kayik ? 0 : 1;
      if(gecen!=="bos") s[gecen]=s.kayik;
      const ad={kurt:"Kurdu",kuzu:"Kuzuyu",lahana:"Lahanayı",bos:"Kayıkla tek başına"}[gecen];
      const yon=s.kayik ? "karşıya" : "geri";
      const tt=tehlike();
      if(tt){ bas(); return {msg:tt+" Herkes başa döndü."}; }
      if(s.kurt && s.kuzu && s.lahana) return {type:"win", msg:"Son yolculuk da tamam, hepsi karşıda sapasağlam! 🎉"};
      return {type:"progress", msg: gecen==="bos" ? "Kayıkla tek başına "+(s.kayik?"karşıya geçtin":"geri döndün")+" ⛵" : ad+" "+yon+" geçirdin ⛵", flash:"kayik"};
    }
  },
  // ===== 61 =====
  {
    title: "8 kişiye 3 kesik! 🎂",
    story: "Doğum günü pastası 8 kişiye eşit bölünecek. Ama babaannen \"Pastayı 3 kesikten fazla kesersen dağılır!\" diyor.",
    bg: "linear-gradient(180deg,#ffe3f1 0%,#ffb3d4 100%)",
    hint: "Dikine iki kesikle 4 dilim olur. Üçüncü kesiği dikine atma... Pastayı YAN tarafından, ortasından ikiye ayır!",
    win: "İki dikine, bir yatay kesik: tam 8 eşit dilim! Babaannen \"Bu çocuk mühendis olacak!\" dedi.",
    items: [
      {id:"pasta", em:"🎂", lb:s=> (s.dk||s.yk) ? "Pasta ("+parca(s)+" parça, "+((s.dk||0)+(s.yk||0))+"/3 kesik)" : "Pasta (0/3 kesik)", x:50, y:30, target:true, look:"İki katlı, kalın bir pasta."},
      {id:"dik", em:"🔪", lb:"Bıçak: yukarıdan dikine", x:18, y:62, drag:true, look:"Pastayı üstten aşağı keser."},
      {id:"yatay", em:"🗡️", lb:"Bıçak: yandan yatay", x:56, y:64, drag:true, look:"Pastayı yan taraftan, katların arasından keser."},
      {id:"misafir", em:"👨‍👩‍👧‍👦", lb:"8 misafir", x:82, y:30, target:true, look:"Hepsi eşit dilim bekliyor!"},
      {id:"tabak", em:"🍽️", lb:"Tabaklar", x:84, y:84, drag:true, look:"8 tatlı tabağı."}
    ],
    decoys:[{em:"✂️",lb:"Makas",look:"Mutfak makası.",no:"Pasta makasla kesilmez, krema her yere yapıştı 😅"},{em:"📏",lb:"Cetvel",look:"30 cm cetvel.",no:"Ölçmek güzel ama kesik sayısı yine 3'le sınırlı!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="dik>pasta" || k==="yatay>pasta"){
        if(d==="dik") s.dk=(s.dk||0)+1; else s.yk=(s.yk||0)+1;
        const n=(s.dk||0)+(s.yk||0), p=parca(s);
        if(n<3) return {type:"progress", msg:(d==="dik"?"Dikine":"Yatay")+" kestin. Şu an "+p+" parça.", flash:"pasta"};
        if(p===8) return {type:"win", msg:"Üçüncü kesik ve... tam 8 dilim! 🎂"};
        s.dk=0; s.yk=0; return {msg:"3 kesik bitti ama "+p+" parça oldu, 8 değil! Babaannen yeni pasta çıkardı, baştan."};
      }
      if(k==="tabak>misafir" || k==="tabak>pasta") return {msg:"Önce pastayı 8'e bölmen lazım!"};
      if(t==="misafir") return {msg:"Misafirler bıçak değil pasta bekliyor 😄"};
      return null;
    }
  },
  // ===== 62 =====
  {
    title: "Top boruya düştü! ⚽",
    story: "Kardeşinin pinpon topu bahçedeki derin bir boruya düştü. Elin de sopan da yetişmiyor!",
    bg: "linear-gradient(180deg,#e6f9e2 0%,#a8e09a 100%)",
    hint: "Pinpon topu çok hafif... suda ne yapar? Boruya su doldur ama bir şişe yetmeyebilir!",
    win: "Boruyu suyla doldurdun, pinpon topu yüzerek ağzına kadar çıktı. Kardeşin bayıldı!",
    items: [
      {id:"boru", em:"🕳️", lb:s=> s.su>=2 ? "Boru (ağzına kadar su)" : s.su===1 ? "Boru (yarıya kadar su)" : "Derin boru", x:50, y:30, target:true, look:s=> s.su===1 ? "Top yükseldi ama hâlâ derinde." : "Dar ve derin. En dipte turuncu top görünüyor."},
      {id:"top", em:"🏓", lb:"Pinpon topu", x:50, y:14, drag:true, show:s=>s.su>=2, look:"Islak ama sapasağlam."},
      {id:"sise", em:"🍶", lb:s=> s.dolu ? "Şişe (dolu)" : "Şişe (boş)", x:20, y:62, drag:true, look:"1,5 litrelik pet şişe."},
      {id:"cesme", em:"🚰", lb:"Bahçe çeşmesi", x:16, y:86, target:true, look:"Şişeyi doldurabilirsin."},
      {id:"sopa", em:"🦯", lb:"Kısa sopa", x:56, y:64, drag:true, look:"Borudan kısa."},
      {id:"kardes", em:"🧒", lb:"Kardeşin", x:84, y:62, target:true, look:"\"Topum! Topum gitti!\" 😭"}
    ],
    decoys:[{em:"🧲",lb:"Mıknatıs",look:"Güçlü mıknatıs.",no:"Pinpon topu plastik, mıknatıs çekmez!"},{em:"🍯",lb:"Bal",look:"Yapışkan bal.",no:"Sopanın ucuna bal sürdün... top yapışmadı, sopa da bal oldu 🍯"}],
    combine(d,t,s){
      const k=d+">"+t; s.su=s.su||0;
      if(k==="sise>cesme"){ if(s.dolu) return {type:"info", msg:"Şişe zaten dolu."}; s.dolu=true; return {type:"progress", msg:"Şişeyi ağzına kadar doldurdun 💧", flash:"sise"}; }
      if(k==="sise>boru"){
        if(!s.dolu) return {msg:"Şişe boş! Önce doldur."};
        if(s.su>=2) return {type:"info", msg:"Boru zaten dolu."};
        s.dolu=false; s.su++;
        return s.su>=2 ? {type:"progress", msg:"Su ağzına kadar geldi, top yüzerek çıktı! 🏓", flash:"top"} : {type:"progress", msg:"Suyu döktün, top biraz yükseldi... ama yetmedi. Daha su lazım!", flash:"boru"};
      }
      if(k==="sopa>boru") return {msg:"Sopa kısa, topa yetişmiyor! Ayrıca topu daha da dibe ittin."};
      if(k==="top>kardes") return {type:"win", msg:"Kardeşin topunu aldı, sevinçten zıpladı! 🏓😄"};
      if(k==="sise>kardes") return {msg:"Kardeşin su istemiyor, topunu istiyor 😄"};
      return null;
    }
  },
  // ===== 63 =====
  {
    title: "Mumlar çok uzakta! 🕯️",
    story: "Dedenin 80. yaş pastası kocaman, mumlar tam ortada. Çakmak bitmiş, kibritler de çok kısa. Parmakların yanacak!",
    bg: "linear-gradient(180deg,#fff2d9 0%,#ffcf8a 100%)",
    hint: "Mutfakta uzun, ince ve yanabilen bir şey var: çiğ spagetti! Onu kibritle yak, uzun bir çubuk gibi kullan. Işıkları da en son kapat.",
    win: "Spagettiyle bütün mumları yaktın, ışıkları kapattın. Dede mumları üfledi, herkes alkışladı!",
    items: [
      {id:"pasta", em:"🎂", lb:s=> s.yandi ? "Pasta (mumlar yanıyor)" : "Pasta (80 mum)", x:50, y:28, target:true, look:"Mumlar ortada, kenardan uzak."},
      {id:"kibrit", em:"🗃️", lb:"Kısa kibrit", x:16, y:58, drag:true, look:"Çok kısa! Hemen yanıp bitiyor."},
      {id:"spagetti", em:"🍝", lb:s=> s.yanan ? "Yanan spagetti" : "Çiğ spagetti", x:46, y:62, drag:true, target:true, look:"Uzun, ince, kupkuru."},
      {id:"dugme", em:"💡", lb:s=> s.karanlik ? "Işıklar (kapalı)" : "Işık düğmesi", x:84, y:26, target:true, look:"Salonun ışıkları."},
      {id:"el", em:"✋", lb:"Elin", x:80, y:62, drag:true, look:"Düğmeye basmak için."},
      {id:"dede", em:"👴", lb:"Dede", x:20, y:26, target:true, look:"\"Hadi bakalım, üfleyecek mum nerede?\""}
    ],
    decoys:[{em:"🧻",lb:"Peçete",look:"Kâğıt peçete.",no:"Peçete hemen alev aldı, tabağa düştü! Söndürdün ama sakın 😱"},{em:"🔦",lb:"El feneri",look:"Fener.",no:"Fenerle mum yanmaz 😄"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>dugme"){
        if(!s.yandi) return {msg:"Karanlıkta kaldınız! Kibriti bile göremiyorsun 😅 Işıkları sonra kapat."};
        return {type:"win", msg:"Işıklar söndü, 80 mum pırıl pırıl! Dede üfledi: \"İyi ki varsınız!\" 🎂"};
      }
      if(k==="kibrit>pasta") return {msg:"Kibrit mumlara yetişmeden parmağını yaktı! 🔥 Aah!"};
      if(k==="kibrit>spagetti"){ if(s.yanan) return {type:"info", msg:"Spagetti zaten yanıyor."}; s.yanan=true; return {type:"progress", msg:"Spagettinin ucunu yaktın, uzun bir çubuk oldu 🔥", flash:"spagetti"}; }
      if(k==="spagetti>pasta"){ if(!s.yanan) return {msg:"Çiğ spagettiyle mum yakılmaz, önce onu tutuştur!"}; s.yandi=true; return {type:"progress", msg:"Tek tek bütün mumları yaktın 🕯️🕯️🕯️", flash:"pasta"}; }
      if(k==="spagetti>dede") return {msg:"Dedeye yanan spagetti uzatılmaz! 😱"};
      if(k==="kibrit>dede") return {msg:"Dede gülümsedi: \"Ben yakamam evladım, gözüm görmüyor.\""};
      return null;
    }
  },
  // ===== 64 =====
  {
    il: "Bitlis",
    title: "Araba karda patinaj! 🚙",
    story: "Bitlis'te kar dizleri aşmış. Babanın arabası kara saplandı, gaza bastıkça tekerler boşa dönüyor!",
    bg: "linear-gradient(180deg,#f3f8ff 0%,#cfe0f5 100%)",
    hint: "Gaz verdikçe teker daha çok gömülür. Önce tekerin önündeki karı kürekle aç, altına tutunacak bir şey koy, sonra iterek kurtar.",
    win: "Karı açtın, paspası tekerin altına koydun, arkadan ittin. Araba kurtuldu, baban kornayla teşekkür etti!",
    items: [
      {id:"araba", em:"🚙", lb:"Babanın arabası", x:50, y:26, target:true, look:"Arka tekerler karda gömülü."},
      {id:"teker", em:"🛞", lb:s=> s.paspas ? "Teker (altı paspaslı)" : s.kazildi ? "Teker (önü açık)" : "Teker (kara gömülü)", x:50, y:52, target:true, look:"Altında buz parlıyor."},
      {id:"kurek", em:"⛏️", lb:"Kar küreği", x:16, y:70, drag:true, look:"Sağlam kar küreği."},
      {id:"paspas", em:"🟫", lb:"Araba paspası", x:84, y:64, drag:true, show:s=>!s.paspas, look:"Kauçuk, pütürlü paspas."},
      {id:"sen", em:"💪", lb:"Sen (it!)", x:22, y:88, drag:true, look:"Arkadan itmeye hazırsın."},
      {id:"gaz", em:"🦶", lb:"Tam gaz!", x:54, y:88, drag:true, look:"Babana \"bas gaza\" de."}
    ],
    decoys:[{em:"♨️",lb:"Sıcak su",look:"Termostaki sıcak çay suyu.",no:"Sıcak su eridi... sonra hemen buz tuttu, daha da kaygan oldu! 🧊"},{em:"🧣",lb:"Atkı",look:"Yün atkı.",no:"Atkı tekere dolandı, hiç tutmadı."}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="kurek>teker" || k==="kurek>araba"){ if(s.kazildi) return {type:"info", msg:"Karı zaten açtın."}; s.kazildi=true; return {type:"progress", msg:"Tekerin önündeki karı kürekledin ⛏️", flash:"teker"}; }
      if(k==="paspas>teker"){ if(!s.kazildi) return {msg:"Paspas karın üstünde kaydı, tekerin altına giremedi. Önce karı aç!"}; s.paspas=true; return {type:"progress", msg:"Paspası tekerin altına sıkıştırdın, teker artık tutunacak 🟫", flash:"teker"}; }
      if(k==="gaz>araba" || k==="gaz>teker") return {msg:"Vıııın! Teker boşa döndü, araba daha da gömüldü! 😩"};
      if(k==="sen>araba" || k==="sen>teker"){
        if(s.kazildi && s.paspas) return {type:"win", msg:"Baban yavaşça gaz verdi, sen ittin... araba karı yarıp çıktı! 🚙💨"};
        return {msg:"İttin ittin... araba kıpırdamadı, sen kaydın düştün ❄️"};
      }
      return null;
    }
  },
  // ===== 65 =====
  {
    title: "Lastik patladı! 🛞",
    story: "Yolda lastik patladı, baban kolunu incitmiş. Stepneyi sen takacaksın! Ama sıra çok önemli...",
    bg: "linear-gradient(180deg,#eef0f3 0%,#b8c0cc 100%)",
    hint: "Teker havadayken bijon gevşetmeye çalışırsan teker döner! Bijonları araba YERDEYKEN biraz gevşet, sonra krikoyla kaldır.",
    win: "Önce gevşettin, sonra kaldırdın, stepneyi taktın, indirdin. Baban: \"Ustalar gibi!\"",
    items: [
      {id:"araba", em:"🚗", lb:s=> s.kalkik ? "Araba (krikoda, havada)" : "Araba (yerde)", x:50, y:24, target:true, look:"Sağ ön teker bomboş."},
      {id:"teker", em:"🛞", lb:s=> s.degisti ? "Stepne takıldı" : s.gevsek ? "Patlak teker (bijonlar gevşek)" : "Patlak teker (bijonlar sıkı)", x:50, y:50, target:true, look:"4 bijonla bağlı."},
      {id:"anahtar", em:"🔧", lb:"Bijon anahtarı", x:16, y:70, drag:true, look:"Uzun kollu bijon anahtarı."},
      {id:"kriko", em:"🗜️", lb:"Kriko", x:50, y:78, drag:true, look:"Arabayı kaldırır ya da indirir."},
      {id:"stepne", em:"⭕", lb:"Stepne", x:84, y:70, drag:true, show:s=>!s.degisti, look:"Bagajdaki yedek lastik."},
      {id:"baba", em:"👨", lb:"Baban", x:84, y:26, target:true, look:"Kolunu tutuyor: \"Sen yaparsın, ben söylerim.\""}
    ],
    decoys:[{em:"🩹",lb:"Yara bandı",look:"Lastik yaması değil!",no:"Patlak lastiğe yara bandı yapışır mı? 😂"},{em:"🎈",lb:"Pompa",look:"Bisiklet pompası.",no:"Lastik yırtılmış, pompalamak işe yaramaz!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="anahtar>teker"){
        if(s.degisti) return {type:"info", msg:"Yeni teker takılı."};
        if(s.gevsek) return {type:"info", msg:"Bijonlar zaten gevşek."};
        if(s.kalkik) return {msg:"Teker havada fırıl fırıl döndü, bijon gevşemiyor! 😩 Arabayı indir, yerdeyken gevşet."};
        s.gevsek=true; return {type:"progress", msg:"Araba yerdeyken bijonları yarım tur gevşettin 🔧", flash:"teker"};
      }
      if(k==="kriko>araba" || k==="kriko>teker"){
        if(!s.kalkik){ s.kalkik=true; return {type:"progress", msg:"Krikoyu çevirdin, araba yukarı kalktı ⬆️", flash:"araba"}; }
        s.kalkik=false;
        if(s.degisti) return {type:"win", msg:"Arabayı indirdin, bijonları sıktın. Yola devam! 🚗💨"};
        return {type:"progress", msg:"Arabayı geri indirdin ⬇️", flash:"araba"};
      }
      if(k==="stepne>teker" || k==="stepne>araba"){
        if(!s.kalkik) return {msg:"Araba yerdeyken teker çıkmaz ki! Önce kaldır."};
        if(!s.gevsek) return {msg:"Bijonlar sımsıkı, teker çıkmıyor!"};
        s.degisti=true; return {type:"progress", msg:"Patlak tekeri çıkardın, stepneyi taktın ⭕", flash:"teker"};
      }
      if(t==="baba") return {msg:"Baban kolunu incitti, ona iş verme 😅"};
      return null;
    }
  },
  // ===== 66 =====
  {
    il: "Kastamonu",
    title: "50 diş sarımsak! 🧄",
    story: "Taşköprü sarımsağından turşu kurulacak. Ninen 50 diş sarımsak soymanı istedi! Tek tek soyarsan akşam olur, parmakların da kokar.",
    bg: "linear-gradient(180deg,#fbf6ee 0%,#e7d8c0 100%)",
    hint: "Önce başı bıçağın yanıyla bastırıp dişlere ayır. Dişleri bir kaseye koy, üstüne ikinci kaseyi kapat ve var gücünle salla!",
    win: "Kaseler arasında salladın, kabuklar kendiliğinden ayrıldı! Ninen: \"Bunu kimden öğrendin?\"",
    items: [
      {id:"bas", em:"🧄", lb:s=> s.ayrildi ? "Sarımsak dişleri" : "Sarımsak başları", x:30, y:28, drag:true, show:s=>!s.icinde, look:s=> s.ayrildi ? "Kabuklu dişler." : "Koca koca başlar."},
      {id:"kase1", em:"🥣", lb:s=> s.kapali ? "Kaseler (kapalı)" : s.icinde ? "Kase (dişler içinde)" : "Metal kase", x:70, y:28, target:true, drag:true, look:"Derin metal kase."},
      {id:"kase2", em:"🥣", lb:"İkinci kase", x:84, y:58, drag:true, show:s=>!s.kapali, look:"Aynı boyda bir kase daha."},
      {id:"bicak", em:"🔪", lb:"Geniş bıçak", x:16, y:60, drag:true, look:"Yanı geniş, düz bir bıçak."},
      {id:"kollar", em:"💪", lb:"Kolların", x:48, y:62, drag:true, look:"Sallamaya hazır!"},
      {id:"nine", em:"👵", lb:"Ninen", x:50, y:86, target:true, look:"\"Akşama kadar bitir evladım!\""}
    ],
    decoys:[{em:"💅",lb:"Tırnakların",look:"Kısa tırnaklar.",no:"Tırnakla tek tek... 3 diş sonra parmakların sızladı, mis gibi de koktu 😩"},{em:"🧊",lb:"Buz",look:"Buz küpleri.",no:"Buz kabuğu soymaz, sarımsak üşüdü 😄"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="bicak>bas"){ if(s.ayrildi) return {type:"info", msg:"Zaten dişlere ayrıldı."}; s.ayrildi=true; return {type:"progress", msg:"Bıçağın yanıyla bastırdın, başlar dişlere ayrıldı 🧄", flash:"bas"}; }
      if(k==="bas>kase1"){ if(!s.ayrildi) return {msg:"Bütün başı kaseye attın, sallasan da açılmaz! Önce dişlere ayır."}; s.icinde=true; return {type:"progress", msg:"Dişleri kaseye koydun.", flash:"kase1"}; }
      if(k==="kase2>kase1"){ if(!s.icinde) return {msg:"Boş kaseleri mi kapatıyorsun? 😄"}; s.kapali=true; return {type:"progress", msg:"İkinci kaseyi ağız ağıza kapattın 🥣🥣", flash:"kase1"}; }
      if(k==="kollar>kase1"){
        if(s.kapali) return {type:"win", msg:"Şıkır şıkır 20 saniye salladın... açınca kabuklar ayrı, dişler ayrı! ✨"};
        if(s.icinde) return {msg:"Kapaksız salladın, sarımsaklar mutfağa saçıldı! 😂"};
        return {msg:"Boş kaseyi salladın 😄"};
      }
      if(k==="bas>nine" || k==="kase1>nine") return {msg:"Ninen: \"Daha soyulmamış bunlar!\""};
      if(k==="bicak>kase1") return {msg:"Kaseye bıçakla mı vuruyorsun? 😄"};
      return null;
    }
  },
  // ===== 67 =====
  {
    title: "Çiçekler tatilde susuz kalmasın! 🪴",
    story: "Bir hafta tatile gidiyorsunuz. Annenin sardunyası susuz kalırsa kurur, komşular da şehir dışında!",
    bg: "linear-gradient(180deg,#eaffea 0%,#b5e6b5 100%)",
    hint: "Pamuk ip suyu yavaş yavaş emer, fitil gibi taşır! Su kabını saksıdan YÜKSEĞE koy, ipin bir ucu suda, öbür ucu toprakta olsun.",
    win: "Kovayı rafa koydun, pamuk ipi kurdun. Bir hafta boyunca damla damla sulandı, sardunya çiçek açtı!",
    items: [
      {id:"saksi", em:"🪴", lb:"Sardunya saksısı", x:50, y:56, target:true, look:"Küçük masanın üstünde."},
      {id:"kova", em:"🪣", lb:s=> s.yuksek ? "Su kovası (rafta)" : "Su kovası (yerde)", x:s=> s.yuksek ? 22 : 18, y:s=> s.yuksek ? 22 : 82, drag:true, target:true, look:"Ağzına kadar su."},
      {id:"raf", em:"🗄️", lb:"Yüksek raf", x:22, y:38, target:true, look:"Saksıdan daha yüksekte."},
      {id:"ip", em:"🧶", lb:s=> s.suda ? "Pamuk ip (ucu suda)" : "Pamuk ip", x:78, y:30, drag:true, look:"Kalın pamuk ip. Suyu emiyor."},
      {id:"hortum", em:"🚿", lb:"Hortum", x:80, y:82, drag:true, look:"Musluğa bağlı hortum."}
    ],
    decoys:[{em:"🧊",lb:"Buz",look:"Bir torba buz.",no:"Buz bir günde erir, sonra 6 gün susuz! ❄️"},{em:"🥤",lb:"Bardak su",look:"Tek bardak.",no:"Bir bardak su bir günü bile çıkarmaz."}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="kova>raf"){ s.yuksek=true; return {type:"progress", msg:"Kovayı yüksek rafa koydun ⬆️", flash:"kova"}; }
      if(k==="ip>kova"){ s.suda=true; return {type:"progress", msg:"İpin bir ucunu kovanın dibine sarkıttın 🧶", flash:"ip"}; }
      if(k==="ip>saksi"){
        if(!s.suda) return {msg:"Kuru ipi toprağa gömdün... su nereden gelecek? 🤔"};
        if(!s.yuksek) return {msg:"Kova yerde, saksı yukarıda! Su yukarı tırmanmadı, bir haftada kurudu 🥀"};
        return {type:"win", msg:"İpin öbür ucunu toprağa gömdün. Su damla damla akıyor! 🪴💧"};
      }
      if(k==="kova>saksi") return {msg:"Bütün kovayı döktün! Saksı taştı, kökler çürüyecek 😱"};
      if(d==="hortum") return {msg:"Hortumu açık bırakıp gidersen ev sel olur! 🌊"};
      return null;
    }
  },
  // ===== 68 =====
  {
    title: "Yüzük parmakta kaldı! 💍",
    story: "Annenin yüzüğünü denedin, şimdi çıkmıyor! Parmağın şişmeye başladı, annen eve gelmeden çıkarmalısın.",
    bg: "linear-gradient(180deg,#fff4e0 0%,#ffd59e 100%)",
    hint: "Sıcak, şişliği artırır! Önce parmağı soğuk suyla küçült, elini yukarı kaldır. Sonra sabunla kaygan yap ve ÇEVİREREK çıkar.",
    win: "Soğuk su, havada el, sabun ve yavaş yavaş çevirme... Yüzük çıktı, annen hiçbir şey anlamadı!",
    items: [
      {id:"parmak", em:"🖐️", lb:s=> s.kaygan ? "Parmak (sabunlu)" : s.soguk ? "Parmak (şişlik indi)" : "Parmak (şişmiş!)", x:50, y:28, target:true, look:"Yüzük sımsıkı, parmak kızarmış."},
      {id:"yuzuk", em:"💍", lb:"Yüzük", x:50, y:48, target:true, look:"Annenin altın yüzüğü."},
      {id:"soguk", em:"🧊", lb:"Buzlu su", x:16, y:70, drag:true, look:"Kâsede buzlu su."},
      {id:"sicak", em:"♨️", lb:"Sıcak su", x:84, y:28, drag:true, look:"Ilık-sıcak su."},
      {id:"sabun", em:"🧼", lb:"Sabun", x:44, y:78, drag:true, look:"Sıvı sabun."},
      {id:"el", em:"🤏", lb:"Öbür elin", x:84, y:68, drag:true, look:"Yüzüğü tutup çevirmek için."}
    ],
    decoys:[{em:"🔧",lb:"Pense",look:"Kocaman pense.",no:"Penseyle çekersen parmağın da yüzük de zarar görür! 😱"},{em:"🧈",lb:"Tereyağı",look:"Dolaptan çıkmış soğuk tereyağı.",no:"Tereyağı katı, sürünmüyor, parmağın yağ içinde kaldı!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if((k==="soguk>parmak"||k==="soguk>yuzuk")){ if(s.soguk) return {type:"info", msg:"Şişlik zaten indi."}; s.soguk=true; return {type:"progress", msg:"Elini buzlu suya soktun, sonra havaya kaldırdın. Şişlik indi 🧊", flash:"parmak"}; }
      if(k==="sicak>parmak"||k==="sicak>yuzuk"){ s.soguk=false; return {msg:"Sıcak su parmağı daha da şişirdi! 😩"}; }
      if(k==="sabun>parmak"||k==="sabun>yuzuk"){ if(!s.soguk) return {msg:"Sabunladın ama parmak çok şiş, yüzük kımıldamıyor. Önce şişliği indir!"}; s.kaygan=true; return {type:"progress", msg:"Yüzüğün etrafını bol sabunladın 🧼", flash:"parmak"}; }
      if(k==="el>yuzuk"||k==="el>parmak"){
        if(s.soguk && s.kaygan) return {type:"win", msg:"Yavaş yavaş çevirerek kaydırdın... ÇIKTI! 💍✨"};
        return {msg:"Zorla çektin, parmak daha da kızardı! Acıyor 😣"};
      }
      return null;
    }
  },
  // ===== 69 =====
  {
    title: "İç içe sıkışan bardaklar! 🥛",
    story: "İki cam bardak iç içe geçti, çıkmıyor! Babaannenin çeyiz takımı, kırılırsa üzülür.",
    bg: "linear-gradient(180deg,#e8f7ff 0%,#b3defa 100%)",
    hint: "Soğuk cam küçülür, sıcak cam genişler. İçteki bardağa buz koy, dıştakini sıcak suya oturt!",
    win: "İçteki küçüldü, dıştaki genişledi... tık! Ayrıldılar. Babaannen: \"Fizik öğretmeni olacaksın!\"",
    items: [
      {id:"bardak", em:"🥛", lb:s=> (s.ic&&s.dis) ? "Bardaklar (gevşedi!)" : s.ic ? "Bardaklar (içi soğuk)" : s.dis ? "Bardaklar (dışı sıcak)" : "İç içe bardaklar", x:50, y:30, drag:true, target:true, look:"Biri ötekine tam oturmuş."},
      {id:"buz", em:"🧊", lb:"Buz küpleri", x:16, y:60, drag:true, look:"Buzluktan yeni çıktı."},
      {id:"legen", em:"🫕", lb:"Sıcak su leğeni", x:50, y:66, target:true, look:"Ilık-sıcak su. Kaynar değil."},
      {id:"surahi", em:"🫖", lb:"Kaynar su", x:84, y:60, drag:true, look:"Çaydanlıkta yeni kaynamış su."},
      {id:"buzdolabi", em:"🧊", lb:"Buzluk", x:84, y:28, target:true, look:"Dondurucu."},
      {id:"el", em:"✋", lb:"Elin", x:18, y:86, drag:true, look:"Bardakları ayırmak için."}
    ],
    decoys:[{em:"🔨",lb:"Çekiç",look:"Küçük çekiç.",no:"Çeyiz bardağına çekiç?! Babaannen bayılır! 😱"},{em:"🧴",lb:"Yağ",look:"Ayçiçek yağı.",no:"Yağ aralığa giremedi, sadece kayganlaştı, ellerin yağ oldu."}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="buz>bardak"){ if(s.ic) return {type:"info", msg:"İçteki zaten buz gibi."}; s.ic=true; return {type:"progress", msg:"İçteki bardağa buz doldurdun, cam büzüştü 🧊", flash:"bardak"}; }
      if(k==="bardak>legen"){ if(s.dis) return {type:"info", msg:"Dıştaki zaten ısındı."}; s.dis=true; return {type:"progress", msg:"Dıştaki bardağı sıcak suya oturttun, cam genişledi ♨️", flash:"bardak"}; }
      if(k==="surahi>bardak") return {msg:"Kaynar su içteki bardağa doldu, o genişledi, daha da sıkıştı! Üstelik cam çatlayabilir 😬"};
      if(k==="bardak>buzdolabi") return {msg:"İkisi birden soğudu, ikisi birden küçüldü. Hiçbir şey değişmedi!"};
      if(k==="el>bardak"){
        if(s.ic && s.dis) return {type:"win", msg:"Hafifçe çevirdin... tık! İkisi ayrıldı 🥛🥛"};
        return {msg:"Zorladın, bardaklar gıcırdadı! Kırılmak üzere 😬"};
      }
      return null;
    }
  },
  // ===== 70 =====
  {
    il: "Muğla",
    title: "Çam balı şekerlendi! 🍯",
    story: "Muğla'nın meşhur çam balı kavanozda taş gibi şekerlenmiş. Kahvaltıya 10 dakika var!",
    bg: "linear-gradient(180deg,#fff6d6 0%,#ffd36b 100%)",
    hint: "Bal doğrudan ateşe konmaz, şifası kaçar ve kavanoz çatlar. Tencereye su koy, ılıt, kavanozu kapağını açıp ılık suya oturt (benmari).",
    win: "Ilık suda yavaşça erittin, bal yine akışkan! Şifası da kaçmadı. Afiyet olsun!",
    items: [
      {id:"kavanoz", em:"🍯", lb:s=> s.acik ? "Bal kavanozu (kapak açık)" : "Bal kavanozu (metal kapak)", x:18, y:28, drag:true, target:true, look:"Cam kavanoz, metal kapak. İçi taş gibi."},
      {id:"tencere", em:"🍲", lb:s=> s.ilik ? "Tencere (ılık su)" : s.su ? "Tencere (soğuk su)" : "Boş tencere", x:52, y:28, drag:true, target:true, look:"Orta boy tencere."},
      {id:"ocak", em:"🔥", lb:"Ocak (kısık)", x:84, y:28, target:true, look:"En kısık ateş."},
      {id:"surahi", em:"💧", lb:"Sürahi su", x:16, y:66, drag:true, look:"Musluk suyu."},
      {id:"mikro", em:"📟", lb:"Mikrodalga", x:52, y:68, target:true, look:"Hızlı ısıtır."},
      {id:"el", em:"✋", lb:"Elin", x:84, y:66, drag:true, look:"Kapağı açmak için."}
    ],
    decoys:[{em:"🔨",lb:"Tokmak",look:"Et tokmağı.",no:"Kavanoza vurursan cam kırılır, bal cam dolu olur! 😱"},{em:"🥄",lb:"Kaşık",look:"Çay kaşığı.",no:"Taş gibi bala kaşık girmiyor, kaşık büküldü 😅"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>kavanoz"){ if(s.acik) return {type:"info", msg:"Kapak zaten açık."}; s.acik=true; return {type:"progress", msg:"Metal kapağı açtın, hava alsın 🍯", flash:"kavanoz"}; }
      if(k==="surahi>tencere"){ if(s.su) return {type:"info", msg:"Tencerede su var."}; s.su=true; return {type:"progress", msg:"Tencereye su koydun 💧", flash:"tencere"}; }
      if(k==="tencere>ocak"){ if(!s.su) return {msg:"Boş tencereyi ocağa koydun, dibi yanmaya başladı! 🔥"}; s.ilik=true; return {type:"progress", msg:"Suyu kısık ateşte ılıttın, elini sokabileceğin sıcaklıkta ♨️", flash:"tencere"}; }
      if(k==="kavanoz>tencere"){
        if(!s.ilik) return {msg:s.su ? "Soğuk suda bal erimez, bekledin bekledin..." : "Tencere boş!"};
        if(!s.acik) return {msg:"Kapalı kavanoz ısınınca içindeki hava genleşti, kapak fırladı! 😮 Önce kapağı aç."};
        return {type:"win", msg:"Kavanozu ılık suya oturttun, bal yavaş yavaş eridi. Altın gibi akıyor! 🍯✨"};
      }
      if(k==="kavanoz>ocak") return {msg:"Cam kavanozu doğrudan ateşe koydun... ÇAT! Çatladı 💥"};
      if(k==="kavanoz>mikro") return {msg:"Metal kapakla mikrodalga?! Kıvılcımlar saçıldı! ⚡"};
      return null;
    }
  },
  // ===== 71 =====
  {
    title: "Ekmek taş gibi, misafir kapıda! 🍞",
    story: "Misafirler 5 dakikaya geliyor. Ekmek dünden kalma, taş gibi! Bakkal da kapalı.",
    bg: "linear-gradient(180deg,#fff3dc 0%,#f2c98c 100%)",
    hint: "Bayat ekmek suyunu kaybetmiştir. Üstüne hafifçe su serp, sonra ISINMIŞ fırına koy. Buhar içini yumuşatır, dışı çıtır olur.",
    win: "Su serpip sıcak fırına koydun. 5 dakikada fırından yeni çıkmış gibi oldu! Misafirler \"Bu ekmek nereden?\" dedi.",
    items: [
      {id:"ekmek", em:"🥖", lb:s=> s.islak ? "Ekmek (hafif nemli)" : "Bayat ekmek", x:22, y:28, drag:true, target:true, look:"Vursan çivi çakar!"},
      {id:"firin", em:"♨️", lb:s=> s.sicak ? "Fırın (200° ısındı)" : "Fırın (soğuk)", x:76, y:28, target:true, look:s=> s.sicak ? "İçi kızgın." : "Kapalı, buz gibi."},
      {id:"fis", em:"💦", lb:"Fıs fıs su", x:20, y:62, drag:true, show:s=>!s.islak, look:"Sprey şişede su."},
      {id:"el", em:"✋", lb:"Elin", x:52, y:64, drag:true, look:"Fırının düğmesini çevirmek için."},
      {id:"mikro", em:"📟", lb:"Mikrodalga", x:82, y:64, target:true, look:"30 saniyede ısıtır."},
      {id:"tas", em:"🥣", lb:"Su dolu kâse", x:50, y:88, target:true, look:"Ağzına kadar su."}
    ],
    decoys:[{em:"🧈",lb:"Tereyağı",look:"Buz gibi tereyağı.",no:"Taş gibi ekmeğe soğuk tereyağı sürülmüyor ki! 😅"},{em:"🔨",lb:"Tokmak",look:"Et tokmağı.",no:"Ekmeği tokmakla dövdün, kırıntı oldu 😂"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>firin"){ if(s.sicak) return {type:"info", msg:"Fırın zaten sıcak."}; s.sicak=true; return {type:"progress", msg:"Fırını 200 dereceye açtın, ısındı ♨️", flash:"firin"}; }
      if(k==="fis>ekmek"){ s.islak=true; return {type:"progress", msg:"Ekmeğin dışına hafifçe su serptin 💦", flash:"ekmek"}; }
      if(k==="ekmek>tas") return {msg:"Ekmeği suya batırdın, hamur gibi oldu! 🤢"};
      if(k==="ekmek>mikro") return {msg:"Mikrodalgada yumuşadı... sonra lastik gibi oldu, soğuyunca daha da sertleşti!"};
      if(k==="ekmek>firin"){
        if(!s.sicak) return {msg:"Soğuk fırına koydun, ısınana kadar ekmek iyice kurudu!"};
        if(!s.islak) return {msg:"Kuru ekmeği fırınladın, peksimet gibi oldu! 😬"};
        return {type:"win", msg:"5 dakika sonra mis gibi koku! Dışı çıtır, içi yumuşacık 🥖✨"};
      }
      return null;
    }
  },
  // ===== 72 =====
  {
    title: "Mont fermuarı sıkıştı! 🧥",
    story: "Servis kapıda, dışarısı buz gibi. Montunun fermuarı yarıda sıkıştı, ne yukarı ne aşağı!",
    bg: "linear-gradient(180deg,#e6efff 0%,#a9c0ef 100%)",
    hint: "Zorlarsan kumaş yırtılır. Önce sıkışan astar parçasını cımbızla kurtar, sonra dişlere kurşun kalem sür, en son yavaşça kaydır.",
    win: "Astarı kurtardın, kalemin grafitiyle dişleri kayganlaştırdın. Fermuar kaydı, servise yetiştin!",
    items: [
      {id:"fermuar", em:"🧥", lb:s=> s.kayganlandi ? "Fermuar (kaygan)" : s.kurtuldu ? "Fermuar (astar kurtuldu)" : "Fermuar (astar sıkışmış)", x:50, y:30, target:true, look:s=> s.kurtuldu ? "Dişler kuru ve sıkı." : "Fermuarın içine astar kumaşı girmiş!"},
      {id:"cimbiz", em:"🥢", lb:"Cımbız", x:16, y:62, drag:true, look:"İnce uçlu cımbız."},
      {id:"kalem", em:"✏️", lb:"Kurşun kalem", x:44, y:66, drag:true, look:"Yumuşak uçlu 2B kalem."},
      {id:"el", em:"✋", lb:"Elin (kaydır)", x:74, y:62, drag:true, look:"Fermuarı tutup kaydırmak için."},
      {id:"servis", em:"🚌", lb:"Servis (bekliyor)", x:84, y:28, target:true, look:"Şoför korna çalıyor! 📢"}
    ],
    decoys:[{em:"✂️",lb:"Makas",look:"Keskin makas.",no:"Astarı kesersen mont mahvolur! 😱"},{em:"🔧",lb:"Pense",look:"Pense.",no:"Penseyle sıktın, fermuarın kafası ezildi!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="cimbiz>fermuar"){ if(s.kurtuldu) return {type:"info", msg:"Astar zaten kurtuldu."}; s.kurtuldu=true; return {type:"progress", msg:"Cımbızla sıkışan astarı dişlerin arasından çektin 🥢", flash:"fermuar"}; }
      if(k==="kalem>fermuar"){ if(!s.kurtuldu) return {msg:"Kumaşın üstüne kalem sürdün, astar kapkara oldu! Önce sıkışan kumaşı kurtar."}; s.kayganlandi=true; return {type:"progress", msg:"Dişlere kalem sürdün, grafit kaydırıcı oldu ✏️", flash:"fermuar"}; }
      if(k==="el>fermuar"){
        if(s.kurtuldu && s.kayganlandi) return {type:"win", msg:"Vızzt! Fermuar yağ gibi kaydı 🧥✨"};
        if(!s.kurtuldu) return {msg:"Zorladın, astar yırtılmak üzere! Bir şey sıkışmış, önce onu kurtar 😬"};
        return {msg:"Biraz kaydı ama yine takıldı. Dişler kupkuru!"};
      }
      if(t==="servis") return {msg:"Fermuar açıkken dışarı çıkarsan donarsın! 🥶"};
      return null;
    }
  },
  // ===== 73 =====
  {
    title: "Salona serçe girdi! 🐦",
    story: "Açık kapıdan bir serçe girdi, korkup dolabın üstüne kaçtı. Kovalarsan duvarlara çarpacak!",
    bg: "linear-gradient(180deg,#fdf7e8 0%,#e7dcc2 100%)",
    hint: "Kuşlar ışığa uçar. Odayı karart, sadece bir pencereyi aç: kuş kendisi aydınlığa çıkar. Kovalamak yok!",
    win: "Perdeleri çektin, lambayı söndürdün, tek pencereyi açtın. Serçe aydınlığa doğru pırrr diye uçtu gitti!",
    items: [
      {id:"kus", em:"🐦", lb:"Serçe (dolapta)", x:50, y:20, target:true, look:"Korkmuş, kalbi küt küt atıyor."},
      {id:"pencere", em:"🪟", lb:s=> s.acik ? "Pencere (açık)" : "Pencere (kapalı)", x:84, y:28, target:true, look:"Dışarısı güneşli."},
      {id:"perde", em:"🎭", lb:s=> s.perde ? "Öbür perdeler (kapalı)" : "Öbür perdeler (açık)", x:16, y:28, target:true, look:"Diğer pencerelerin perdeleri."},
      {id:"lamba", em:"💡", lb:s=> s.sondu ? "Lamba (sönük)" : "Lamba (yanıyor)", x:50, y:48, target:true, look:"Tavandaki avize."},
      {id:"el", em:"✋", lb:"Elin", x:28, y:76, drag:true, look:"Açmak, kapatmak için."},
      {id:"supurge", em:"🧹", lb:"Süpürge", x:72, y:76, drag:true, look:"Uzun saplı süpürge."}
    ],
    decoys:[{em:"🍞",lb:"Ekmek kırıntısı",look:"Bir avuç kırıntı.",no:"Kuş korkudan yemiyor bile, kırıntılar halıya saçıldı."},{em:"🧺",lb:"Çamaşır sepeti",look:"Boş sepet.",no:"Sepeti fırlattın, kuş korkup avizeye çarptı! 😟"}],
    combine(d,t,s){
      const k=d+">"+t;
      const tamam=()=> s.acik && s.perde && s.sondu;
      const bitir=(m)=> tamam() ? {type:"win", msg:m+" Oda karardı, tek aydınlık pencere... serçe pırrr diye uçtu! 🐦☀️"} : null;
      if(k==="el>pencere"){ if(s.acik) return {type:"info", msg:"Pencere açık."}; s.acik=true; return bitir("Pencereyi ardına kadar açtın.") || {type:"progress", msg:"Pencereyi açtın 🪟", flash:"pencere"}; }
      if(k==="el>perde"){ if(s.perde) return {type:"info", msg:"Perdeler kapalı."}; s.perde=true; return bitir("Öbür perdeleri çektin.") || {type:"progress", msg:"Öbür pencerelerin perdelerini çektin 🎭", flash:"perde"}; }
      if(k==="el>lamba"){ if(s.sondu) return {type:"info", msg:"Lamba sönük."}; s.sondu=true; return bitir("Lambayı söndürdün.") || {type:"progress", msg:"Lambayı söndürdün 💡", flash:"lamba"}; }
      if(k==="supurge>kus") return {msg:"Kuş korkup cama çarptı! Neyse ki sersemledi sadece... Kovalamak yok! 😟"};
      if(k==="el>kus") return {msg:"Elini uzatınca kuş panikle odada dönmeye başladı!"};
      if(d==="supurge") return {msg:"Süpürgeyle burada yapacak bir şey yok."};
      return null;
    }
  },
  // ===== 74 =====
  {
    title: "Ayakkabılar sırılsıklam! 👟",
    story: "Yağmurda futbol oynadın, ayakkabıların vıcık vıcık. Yarın okul var ve başka ayakkabın yok!",
    bg: "linear-gradient(180deg,#e9f1f5 0%,#b8cbd6 100%)",
    hint: "Kaloriferin ÜSTÜ ayakkabıyı çatlatır, tabanı açar. Bağcıkları çıkar, içine buruşturulmuş gazete doldur, kaloriferin YANINA koy.",
    win: "Bağcıklar çıktı, gazeteler suyu çekti, kaloriferin yanında sabaha kupkuru oldu. Hem de bozulmadan!",
    items: [
      {id:"ayakkabi", em:"👟", lb:s=> s.gazete ? "Ayakkabı (gazete dolu)" : s.bagcik ? "Ayakkabı (bağcıksız)" : "Islak ayakkabı", x:30, y:30, drag:true, target:true, look:"İçi su dolu, şıp şıp damlıyor."},
      {id:"kalorifer", em:"♨️", lb:"Kaloriferin üstü", x:76, y:24, target:true, look:"Kızgın sıcak!"},
      {id:"yan", em:"⬜", lb:"Kaloriferin yanı (1 adım)", x:78, y:50, target:true, look:"Ilık hava geliyor, yakmıyor."},
      {id:"el", em:"✋", lb:"Elin", x:16, y:66, drag:true, look:"Bağcık çıkarmak için."},
      {id:"gazete", em:"📰", lb:"Eski gazeteler", x:46, y:70, drag:true, look:"Buruşturunca suyu çeker."},
      {id:"fon", em:"💨", lb:"Fön makinesi", x:76, y:80, drag:true, look:"Sıcak hava üfler."}
    ],
    decoys:[{em:"🧂",lb:"Tuz",look:"Bir paket tuz.",no:"Ayakkabının içine tuz mu?! Kurursa beyaz leke olur 😅"},{em:"🧦",lb:"Kuru çorap",look:"Temiz çorap.",no:"Kuru çorabı ıslak ayakkabıya soktun, o da ıslandı 😩"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>ayakkabi"){ if(s.bagcik) return {type:"info", msg:"Bağcıklar zaten çıktı."}; s.bagcik=true; return {type:"progress", msg:"Bağcıkları çıkardın, dili açtın, içi hava alsın 👟", flash:"ayakkabi"}; }
      if(k==="gazete>ayakkabi"){ if(!s.bagcik) return {msg:"Bağcıklar sıkı, gazete içine girmiyor! Önce bağcıkları çıkar."}; s.gazete=true; return {type:"progress", msg:"Buruşturduğun gazeteleri içine doldurdun 📰", flash:"ayakkabi"}; }
      if(k==="ayakkabi>kalorifer") return {msg:"Kaloriferin üstünde taban açıldı, deri çatladı! 😱 Son anda aldın."};
      if(k==="fon>ayakkabi") return {msg:"Fönle yarım saat... kolun koptu, içi hâlâ ıslak, yapıştırıcı da yumuşadı!"};
      if(k==="ayakkabi>yan"){
        if(s.bagcik && s.gazete) return {type:"win", msg:"Sabah kupkuru ve sapasağlam! 👟☀️"};
        return {msg:"Bütün gece bekledi... sabah hâlâ nemli! İçindeki suyu çeken bir şey lazım."};
      }
      return null;
    }
  },
  // ===== 75 =====
  {
    il: "Yozgat",
    title: "Arabaşı hamuru donmuyor! 🍲",
    story: "Yozgat'ta arabaşı gecesi! Çorba hazır ama yanındaki hamur sıcacık, cıvık cıvık. Kesilmesi için donması lazım!",
    bg: "linear-gradient(180deg,#f5f7ff 0%,#c9d3ee 100%)",
    hint: "Hamuru tepsiye yay, dışarıdaki karın üstüne koy, donsun. Donmadan kesersen bıçağa yapışır! Kestikten sonra sofraya.",
    win: "Hamur karda dondu, küp küp kestin, sıcak çorbayla sofraya geldi. Herkes kaşığını hazırladı!",
    items: [
      {id:"hamur", em:"🫕", lb:"Sıcak hamur (tencerede)", x:18, y:28, drag:true, show:s=>!s.tepside, look:"Cıvık cıvık, buhar çıkıyor."},
      {id:"tepsi", em:"🟫", lb:s=> s.kesik ? "Tepsi (küp küp hamur)" : s.donmus ? "Tepsi (hamur dondu)" : s.tepside ? "Tepsi (sıcak hamur)" : "Boş tepsi", x:s=> s.disarda && !s.kesik ? 50 : 50, y:s=> s.disarda && !s.kesik ? 46 : 28, drag:true, target:true, look:"Geniş bakır tepsi."},
      {id:"balkon", em:"❄️", lb:"Balkon (kar)", x:82, y:24, target:true, look:"Yarım metre kar var!"},
      {id:"bicak", em:"🔪", lb:"Bıçak", x:20, y:70, drag:true, look:"Keskin bıçak."},
      {id:"sofra", em:"🥘", lb:"Sofra (sıcak çorba)", x:50, y:70, target:true, look:"Tavuklu, acılı arabaşı çorbası kaynıyor."},
      {id:"dolap", em:"🧊", lb:"Buzdolabı (tıklım tıklım)", x:82, y:80, target:true, look:"Tepsi sığmaz!"}
    ],
    decoys:[{em:"🌬️",lb:"Vantilatör",look:"Yazdan kalma.",no:"Kışın vantilatör? Hamur iki saatte ılık oldu sadece 😅"},{em:"🧂",lb:"Tuz",look:"Kaya tuzu.",no:"Hamura tuz serpmekle donmaz, tuzlu olur!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="hamur>tepsi"){ s.tepside=true; return {type:"progress", msg:"Hamuru tepsiye döküp düzgünce yaydın 🟫", flash:"tepsi"}; }
      if(k==="tepsi>balkon"){ if(!s.tepside) return {msg:"Boş tepsiyi karın üstüne koydun 😄"}; if(s.donmus) return {type:"info", msg:"Zaten dondu."}; s.disarda=true; s.donmus=true; return {type:"progress", msg:"Tepsiyi karın üstüne koydun. Yarım saatte buz gibi dondu ❄️", flash:"tepsi"}; }
      if(k==="tepsi>dolap") return {msg:"Buzdolabı tıklım tıklım, tepsi girmedi!"};
      if(k==="bicak>tepsi"){ if(!s.tepside) return {msg:"Tepside kesecek bir şey yok."}; if(!s.donmus) return {msg:"Sıcak hamur bıçağa yapıştı, lapa oldu! 🤢"}; s.kesik=true; return {type:"progress", msg:"Donmuş hamuru küp küp kestin 🔪", flash:"tepsi"}; }
      if(k==="hamur>sofra") return {msg:"Cıvık hamuru sofraya koydun, kimse ne olduğunu anlamadı 😂"};
      if(k==="tepsi>sofra"){ if(s.kesik) return {type:"win", msg:"Sıcak çorba, buz gibi hamur küpleri! Yozgat usulü afiyet olsun 🍲❄️"}; return {msg:"Hamur daha hazır değil!"}; }
      return null;
    }
  },
  // ===== 76 =====
  {
    il: "Kırşehir",
    title: "Konserde bağlama teli koptu! 🪕",
    story: "Neşet Ertaş anma gecesinde sahneye çıkmana 5 dakika var. Bağlamanın teli koptu! Çantada yedek tel var.",
    bg: "linear-gradient(180deg,#f7e9d7 0%,#d6a77a 100%)",
    hint: "Teli tak, burguyu çevirerek ger. Ama kulakla tahmin etme: akort aletiyle doğru sese getir, sonra sahneye çık.",
    win: "Teli taktın, gerdin, akort aletiyle tam sese getirdin. 'Gönül dağı' çaldın, salon ayağa kalktı!",
    items: [
      {id:"baglama", em:"🪕", lb:s=> s.akort ? "Bağlama (akortlu)" : s.gergin ? "Bağlama (akortsuz)" : s.takili ? "Bağlama (tel gevşek)" : "Bağlama (tel kopuk)", x:30, y:30, drag:true, target:true, look:"Babadan kalma bağlama."},
      {id:"burgu", em:"🔩", lb:"Burgu", x:12, y:56, target:true, look:"Teli gerer ya da gevşetir."},
      {id:"tel", em:"〰️", lb:"Yedek tel", x:72, y:24, drag:true, show:s=>!s.takili, look:"Çantadaki yedek çelik tel."},
      {id:"el", em:"✋", lb:"Elin", x:40, y:66, drag:true, look:"Burguyu çevirmek için."},
      {id:"akort", em:"📟", lb:"Akort aleti", x:72, y:62, drag:true, look:"Doğru sese gelince yeşil yanar."},
      {id:"sahne", em:"🎤", lb:"Sahne", x:84, y:86, target:true, look:"Seyirciler bekliyor!"}
    ],
    decoys:[{em:"🩹",lb:"Bant",look:"Selobant.",no:"Kopuk teli bantla birleştirdin... ilk vuruşta tak diye koptu 😅"},{em:"🧶",lb:"Yün ip",look:"Örgü ipi.",no:"Yün ipten ses çıkmaz ki! 😂"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="tel>baglama"){ s.takili=true; return {type:"progress", msg:"Yeni teli taktın ama gevşek sallanıyor.", flash:"baglama"}; }
      if(k==="el>burgu" || k==="el>baglama"){ if(!s.takili) return {msg:"Burguyu çevirdin ama tel yok ki!"}; if(s.gergin) return {type:"info", msg:"Tel gergin."}; s.gergin=true; return {type:"progress", msg:"Burguyu çevirdin, tel gerildi. Ama ses doğru mu? 🤔", flash:"baglama"}; }
      if(k==="akort>baglama"){ if(!s.gergin) return {msg:"Gevşek telden ses çıkmıyor, akort aleti bir şey göstermedi."}; s.akort=true; return {type:"progress", msg:"Akort aletine bakarak inceden ayarladın... yeşil yandı ✅", flash:"baglama"}; }
      if(k==="baglama>sahne"){
        if(s.akort) return {type:"win", msg:"İlk tezeneyle salon sustu, sonra ayağa kalktı! 🪕👏"};
        if(s.gergin) return {msg:"Akortsuz çaldın, ön sıradaki amca kulaklarını tıkadı! 🙉"};
        return {msg:"Teli eksik bağlamayla sahneye mi çıkıyorsun?!"};
      }
      return null;
    }
  },
  // ===== 77 =====
  {
    title: "Arabaya arı girdi! 🐝",
    story: "Baban otoyolda araba sürerken açık camdan bir arı girdi, direksiyonun etrafında dolanıyor. Baban panikliyor!",
    bg: "linear-gradient(180deg,#fff9d6 0%,#ffe27a 100%)",
    hint: "En önemlisi güvenlik: önce babana sağa çekip durmasını söyle. Sonra bütün camları aç, arıyı bir kâğıtla nazikçe dışarı yönlendir.",
    win: "Baban sağa çekti, camları açtın, arıyı haritayla dışarı yönlendirdin. Kimse sokulmadı, yolculuk devam!",
    items: [
      {id:"baba", em:"👨‍✈️", lb:s=> s.durdu ? "Baban (sağa çekti)" : "Baban (sürüyor!)", x:22, y:28, target:true, look:s=> s.durdu ? "Dörtlüleri yaktı, rahatladı." : "\"Arı! Arı! Ne yapayım?!\" Gözü arıda!"},
      {id:"ari", em:"🐝", lb:"Arı", x:52, y:20, target:true, look:"Vızz vızz... o da korkmuş."},
      {id:"cam", em:"🪟", lb:s=> s.acik ? "Camlar (açık)" : "Camlar (kapalı)", x:84, y:30, target:true, look:"Elektrikli camlar."},
      {id:"soz", em:"💬", lb:"\"Baba sağa çek!\"", x:20, y:66, drag:true, look:"Sakin bir sesle söyle."},
      {id:"el", em:"✋", lb:"Elin", x:50, y:70, drag:true, look:"Cam düğmesine basmak için."},
      {id:"harita", em:"🗺️", lb:"Kâğıt harita", x:82, y:68, drag:true, look:"Katlanmış kâğıt harita."}
    ],
    decoys:[{em:"🧴",lb:"Böcek spreyi",look:"Torpidoda bir sprey.",no:"Kapalı arabada sprey sıktın, herkes öksürüyor! 🤢"},{em:"🍬",lb:"Şeker",look:"Meyveli şeker.",no:"Arı şekere geldi, kucağına kondu! 😱"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="soz>baba"){ if(s.durdu) return {type:"info", msg:"Baban zaten durdu."}; s.durdu=true; return {type:"progress", msg:"Baban sinyal verip emniyet şeridine çekti, durdu 🚗", flash:"baba"}; }
      if(k==="el>cam"){ s.acik=true; return {type:"progress", msg:"Bütün camları ardına kadar açtın 🪟", flash:"cam"}; }
      if(k==="harita>ari"){
        if(!s.durdu) return {msg:"Baban arıya bakarken direksiyon kaydı, korna sesleri! 😱 Önce durmanız lazım."};
        if(!s.acik) return {msg:"Arıyı yönlendirdin ama camlar kapalı, gidecek yeri yok! Cama çarpıp sinirlendi."};
        return {type:"win", msg:"Haritayla nazikçe yönlendirdin, arı açık camdan vızz diye uçtu 🐝👋"};
      }
      if(k==="el>ari") return {msg:"Elinle kovaladın... AHH! Soktu! 😣"};
      if(k==="harita>baba") return {msg:"Babana harita mı veriyorsun? Yol sorun değil, arı sorun! 😄"};
      if(k==="soz>ari") return {msg:"Arı söz dinlemiyor 😄"};
      return null;
    }
  },
  // ===== 78 =====
  {
    title: "Gümüş tepsi kapkara! 🥈",
    story: "Yarın ablanın kına gecesi. Ninenin gümüş tepsisi kararmış, simsiyah! Ovalamaya kalksan sabah olur.",
    bg: "linear-gradient(180deg,#f2f2f7 0%,#c6c6d6 100%)",
    hint: "Leğenin dibine alüminyum folyo ser, karbonat ve sıcak su koy, gümüşü içine yatır. Kararma kendiliğinden folyoya geçer!",
    win: "Folyo, karbonat, sıcak su... ve tepsi pırıl pırıl! Kararma folyoya geçti. Kına gecesinin yıldızı tepsiydi!",
    items: [
      {id:"tepsi", em:"🪙", lb:"Kararmış gümüş tepsi", x:20, y:28, drag:true, look:"Kapkara lekeler."},
      {id:"legen", em:"🫕", lb:s=> "Leğen"+(s.folyo?" +folyo":"")+(s.karbonat?" +karbonat":"")+(s.su?" +sıcak su":""), x:56, y:30, target:true, look:"Plastik leğen."},
      {id:"folyo", em:"🧻", lb:"Alüminyum folyo", x:16, y:64, drag:true, show:s=>!s.folyo, look:"Parlak folyo."},
      {id:"karbonat", em:"🧂", lb:"Karbonat", x:44, y:68, drag:true, show:s=>!s.karbonat, look:"Bir paket karbonat."},
      {id:"su", em:"♨️", lb:"Sıcak su", x:72, y:64, drag:true, show:s=>!s.su, look:"Su ısıtıcısından."},
      {id:"tel", em:"🧽", lb:"Bulaşık teli", x:86, y:86, drag:true, look:"Sert tel."}
    ],
    decoys:[{em:"🧴",lb:"Çamaşır suyu",look:"Klorlu.",no:"Çamaşır suyu gümüşü daha da karartır, kokusu da dayanılmaz! 🤢"},{em:"🦷",lb:"Diş fırçası",look:"Eski diş fırçası.",no:"Fırçayla ovaladın, yarım saatte bir köşesi açıldı. Sabaha biter mi bu?"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="folyo>legen"){ s.folyo=true; return {type:"progress", msg:"Leğenin dibine folyoyu serdin, parlak yüzü yukarı ✨", flash:"legen"}; }
      if(k==="karbonat>legen"){ s.karbonat=true; return {type:"progress", msg:"Karbonatı serptin 🧂", flash:"legen"}; }
      if(k==="su>legen"){ s.su=true; return {type:"progress", msg:"Sıcak suyu döktün, fokurdamaya başladı ♨️", flash:"legen"}; }
      if(k==="tepsi>legen"){
        if(s.folyo && s.karbonat && s.su) return {type:"win", msg:"Tepsiyi yatırdın... gözünün önünde siyahlar kayboldu! Pırıl pırıl 🥈✨"};
        return {msg:"Tepsi leğende bekledi ama hiçbir şey olmadı. Bir şeyler eksik! 🤔"};
      }
      if(d==="tel") return {msg:"Bulaşık teliyle gümüşü çizdin! Ninen görürse... 😱"};
      if(k==="su>tepsi" || k==="karbonat>tepsi" || k==="folyo>tepsi") return {msg:"Tepsinin üstünde işe yaramadı. Hepsi bir arada, bir kabın içinde olmalı!"};
      return null;
    }
  },
  // ===== 79 =====
  {
    title: "Beyazların arasında kırmızı çorap! 🧦",
    story: "Çamaşır makinesi beyazları yıkıyor. Camdan bakınca gördün: içinde KIRMIZI bir çorap dönüyor! Her şey pembe olmadan kurtar!",
    bg: "linear-gradient(180deg,#f2fbff 0%,#c7e8f7 100%)",
    hint: "Çalışan makinenin kapağı kilitlidir, zorlarsan kırılır. Önce programı iptal et, suyun boşalmasını bekle, kilit açılınca kapağı aç.",
    win: "İptal ettin, su boşaldı, kilit açıldı, çorabı kaptın! Beyazlar bembeyaz kaldı, annen hiç bilmeyecek.",
    items: [
      {id:"makine", em:"🫧", lb:s=> s.kapak ? "Makine (kapak açık)" : s.bos ? "Makine (kilit açıldı)" : s.iptal ? "Makine (su boşalıyor)" : "Makine (çalışıyor, kilitli)", x:50, y:30, target:true, look:s=> s.kapak ? "Beyazların arasında kırmızı çorap!" : "Kapakta kilit işareti yanıyor 🔒"},
      {id:"dugme", em:"⏹️", lb:"Program düğmesi", x:84, y:26, target:true, look:"'Bekle / İptal' için 3 saniye bas."},
      {id:"corap", em:"🧦", lb:"Kırmızı çorap", x:50, y:56, drag:true, show:s=>s.kapak, look:"Suçlu bu!"},
      {id:"el", em:"✋", lb:"Elin", x:16, y:62, drag:true, look:"Düğmeye basmak, kapağı açmak için."},
      {id:"bekle", em:"⏳", lb:"2 dakika bekle", x:50, y:84, drag:true, look:"Makinenin yanına sürükle, beklersin."},
      {id:"sepet", em:"🧺", lb:"Renkliler sepeti", x:84, y:66, target:true, look:"Kırmızı çorabın yeri burası!"}
    ],
    decoys:[{em:"🔧",lb:"Tornavida",look:"Düz tornavida.",no:"Kapağı tornavidayla zorlarsan kilit kırılır, su yere boşalır! 😱"},{em:"🧴",lb:"Çamaşır suyu",look:"Klorlu.",no:"Şimdi çamaşır suyu eklersen kırmızı çorap da beyazlar da mahvolur!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>dugme"){ if(s.iptal) return {type:"info", msg:"Program zaten iptal edildi."}; s.iptal=true; return {type:"progress", msg:"Düğmeye 3 saniye bastın, program iptal oldu. Pompa suyu boşaltıyor... 💦", flash:"makine"}; }
      if(k==="bekle>makine"){ if(!s.iptal) return {msg:"Beklerken makine dönmeye devam etti, beyazlar pembeleşmeye başladı! 😱"}; if(s.bos) return {type:"info", msg:"Kilit zaten açıldı."}; s.bos=true; return {type:"progress", msg:"Su boşaldı, kapaktaki kilit işareti söndü 🔓", flash:"makine"}; }
      if(k==="el>makine"){
        if(s.kapak) return {type:"info", msg:"Kapak açık."};
        if(!s.bos) return {msg:"Kapak kilitli! Zorladın, kolu az kalsın kırılıyordu 😬"};
        s.kapak=true; return {type:"progress", msg:"Kapağı açtın, kırmızı çorabı gördün! 🧦", flash:"corap"};
      }
      if(k==="corap>sepet") return {type:"win", msg:"Çorap renkliler sepetine! Beyazlar bembeyaz kurtuldu 🤍"};
      if(k==="corap>makine") return {msg:"Çorabı tekrar beyazların arasına mı attın?! 😂"};
      if(k==="bekle>dugme") return {msg:"Beklerken makine dönmeye devam etti, beyazlar pembeleşmeye başladı! 😱"};
      return null;
    }
  },
  // ===== 80 =====
  {
    il: "Mersin",
    title: "Domatesler yemyeşil! 🍅",
    story: "Mersin'den bir kasa domates geldi ama hepsi yemyeşil. Ninen iki gün sonra salça yapacak, kızarmaları lazım!",
    bg: "linear-gradient(180deg,#f0ffe8 0%,#bfe6a1 100%)",
    hint: "Olgun meyveler 'olgunlaştırıcı' bir gaz verir. Domatesleri olgun muzlarla birlikte kâğıt torbaya koy, ağzını kapat, serin ve karanlık bir dolaba kaldır.",
    win: "Kâğıt torba + olgun muz + karanlık dolap! İki günde hepsi kıpkırmızı. Salça kazanı kaynıyor!",
    items: [
      {id:"domates", em:"🟢", lb:"Yeşil domatesler", x:18, y:28, drag:true, show:s=>!s.dom, look:"Sert ve yemyeşil."},
      {id:"muz", em:"🍌", lb:"Olgun muzlar", x:50, y:26, drag:true, show:s=>!s.muz, look:"Benekli, çok olgun Anamur muzu."},
      {id:"torba", em:"🛍️", lb:s=> "Kâğıt torba"+(s.dom?" +domates":"")+(s.muz?" +muz":""), x:50, y:56, drag:true, target:true, look:"Kahverengi kese kâğıdı."},
      {id:"dolap", em:"🚪", lb:"Kiler dolabı (serin, karanlık)", x:84, y:28, target:true, look:"Serin ve karanlık."},
      {id:"buzdolabi", em:"🧊", lb:"Buzdolabı", x:16, y:82, target:true, look:"Soğuk!"},
      {id:"gunes", em:"☀️", lb:"Güneşli pencere önü", x:84, y:82, target:true, look:"Cayır cayır güneş."}
    ],
    decoys:[{em:"🛍️",lb:"Naylon poşet",look:"İnce naylon poşet.",no:"Naylon poşette domatesler terledi, küflenmeye başladı! 🤢"},{em:"🧂",lb:"Tuz",look:"Bir paket tuz.",no:"Tuz domatesi kızartmaz 😅"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="domates>torba"){ s.dom=true; return {type:"progress", msg:"Domatesleri kâğıt torbaya koydun 🍅", flash:"torba"}; }
      if(k==="muz>torba"){ s.muz=true; return {type:"progress", msg:"Olgun muzları da yanlarına koydun 🍌", flash:"torba"}; }
      if(k==="torba>dolap"){
        if(s.dom && s.muz) return {type:"win", msg:"İki gün sonra torbayı açtın: kıpkırmızı! 🍅🍅🍅"};
        if(s.dom) return {msg:"İki gün bekledi... biraz pembeleşti ama salçalık değil! Yanlarında bir yardımcı olsa?"};
        return {msg:"Torbada domates yok ki!"};
      }
      if(k==="domates>buzdolabi" || k==="torba>buzdolabi") return {msg:"Soğukta domates olgunlaşmaz, tadı da kaçar! ❄️"};
      if(k==="domates>gunes" || k==="torba>gunes") return {msg:"Güneşte domatesler buruştu, kabukları çatladı! ☀️😩"};
      if(k==="muz>domates" || k==="domates>muz") return {msg:"Açıkta yan yana koydun, gaz uçup gitti, pek bir şey olmadı."};
      return null;
    }
  },
  // ===== 81 =====
  {
    title: "Akü bitti, araba çalışmıyor! 🔋",
    story: "Sabah okula gidecektiniz ama araba 'tık tık' yapıyor, akü bitmiş. Komşu Ahmet Amca takviye kablosuyla yardıma geldi!",
    bg: "linear-gradient(180deg,#eef3f7 0%,#b9c7d3 100%)",
    hint: "Önce KIRMIZI kablo: iki akünün artısı (+). Sonra SİYAH kablo: komşunun eksisinden (−) sizin arabanın motor gövdesine. Önce komşu çalıştırsın, sonra siz.",
    win: "Kırmızı artıya, siyah eksiye. Komşu çalıştırdı, sonra sizinki de homurdandı! Okula zamanında vardınız.",
    items: [
      {id:"bizim", em:"🚗", lb:s=> "Sizin araba"+(s.kirmizi?" (kırmızı takılı)":""), x:20, y:28, target:true, look:"Kaput açık. Akünün + ve − kutbu görünüyor."},
      {id:"komsu", em:"🚙", lb:s=> "Komşunun arabası"+(s.siyah?" (siyah takılı)":""), x:80, y:28, target:true, look:"Kaput açık, akü dolu."},
      {id:"kirmizi", em:"🟥", lb:"Kırmızı kablo (+)", x:18, y:62, drag:true, show:s=>!s.kirmizi, look:"Artı kutupları birleştirir."},
      {id:"siyah", em:"⬛", lb:"Siyah kablo (−)", x:50, y:66, drag:true, show:s=>!s.siyah, look:"Eksi kutup ve motor gövdesi için."},
      {id:"amca", em:"👨‍🦳", lb:s=> s.calisti ? "Ahmet Amca (motor çalışıyor)" : "Ahmet Amca", x:82, y:62, target:true, look:"\"Söyle, çalıştırayım!\""},
      {id:"soz", em:"💬", lb:"\"Amca, çalıştır!\"", x:48, y:88, drag:true, look:"Komşuya işaret ver."},
      {id:"anahtar", em:"🔑", lb:"Sizin kontak anahtarı", x:16, y:86, drag:true, look:"Babanın anahtarı."}
    ],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="kirmizi>bizim" || k==="kirmizi>komsu"){ s.kirmizi=true; return {type:"progress", msg:"Kırmızı kabloyu iki akünün ARTI (+) kutbuna taktın 🟥", flash:"bizim"}; }
      if(k==="siyah>bizim" || k==="siyah>komsu"){
        if(!s.kirmizi) return {msg:"Dur! Önce kırmızı (+) kablo takılır. Yoksa kıvılcım çıkar ⚡"};
        s.siyah=true; return {type:"progress", msg:"Siyah kabloyu komşunun eksisinden sizin motor gövdesine bağladın ⬛", flash:"komsu"};
      }
      if(k==="soz>amca"){ if(!(s.kirmizi && s.siyah)) return {msg:"Kablolar bağlı değil, amca boşuna çalıştırdı 😅"}; s.calisti=true; return {type:"progress", msg:"Ahmet Amca motoru çalıştırdı, birkaç dakika bekledi 🚙💨", flash:"amca"}; }
      if(k==="anahtar>bizim"){
        if(s.calisti) return {type:"win", msg:"Vrooom! Sizin araba da çalıştı. Teşekkürler Ahmet Amca! 🚗✨"};
        return {msg:"Tık tık tık... Akü bomboş, çalışmadı!"};
      }
      if(k==="anahtar>komsu" || k==="anahtar>amca") return {msg:"Bu anahtar sizin arabanın!"};
      return null;
    }
  },
  // ===== 82 =====
  {
    title: "Sahte altın hangisi? ⚖️",
    story: "Kuyumcu dede: \"Bu 3 kesenin birinde sahte altın var, o kese daha HAFİF. Keseyi bulunca içindeki 3 altından da sahteyi bul. Teraziyi sadece İKİ kez kullanabilirsin!\"",
    bg: "linear-gradient(180deg,#fff7dc 0%,#f2cf6b 100%)",
    hint: "İki keseyi tart. Eşitse sahte üçüncüdedir, değilse hafif olandadır. O keseyi aç, iki altını tart: eşitse sahte üçüncüsü, değilse hafif olanı!",
    win: "İki tartıda sahteyi buldun! Kuyumcu dede: \"Ben bu bilmeceyi 40 yıldır sorarım, ilk kez bu kadar hızlı çözüldü.\"",
    items: [
      {id:"terazi", em:"⚖️", lb:s=> s.sol ? "Terazi: sol kefede "+ad(s.sol)+"..." : (s.sonuc || "Terazi")+" ("+(s.tarti||0)+"/2)", x:50, y:24, target:true, look:"Bir şeyi teraziye bırak sol kefeye konur, ikinciyi bırakınca tartılır."},
      {id:"kA", em:"👝", lb:"A kesesi", x:14, y:50, drag:true, show:s=>s.acilan!=="kA", look:"3 altın var."},
      {id:"kB", em:"👝", lb:"B kesesi", x:40, y:50, drag:true, show:s=>s.acilan!=="kB", look:"3 altın var."},
      {id:"kC", em:"👝", lb:"C kesesi", x:66, y:50, drag:true, show:s=>s.acilan!=="kC", look:"3 altın var."},
      {id:"masa", em:"🪵", lb:s=> s.acilan ? ad(s.acilan)+" açıldı" : "Masa (keseyi aç)", x:88, y:62, target:true, look:"Keseyi buraya bırakırsan açıp altınları dökersin."},
      {id:"a1", em:"🪙", lb:"1. altın", x:16, y:78, drag:true, show:s=>!!s.acilan, look:"Parlak bir altın."},
      {id:"a2", em:"🪙", lb:"2. altın", x:42, y:82, drag:true, show:s=>!!s.acilan, look:"Parlak bir altın."},
      {id:"a3", em:"🪙", lb:"3. altın", x:68, y:78, drag:true, show:s=>!!s.acilan, look:"Parlak bir altın."},
      {id:"dede", em:"👴", lb:"Kuyumcu dede", x:86, y:24, target:true, look:"\"Sahte altını bana getir. Keseyi değil, altını!\""}
    ],
    combine(d,t,s){
      const k=d+">"+t;
      const AGIR={kA:3,kB:3,kC:2, a1:1,a2:1,a3:1};
      const w=x=> (s.acilan==="kC" && x==="a2") ? 0.5 : AGIR[x];
      if(t==="terazi" && AGIR[d]){
        if(s.sol && s.sol[0]!==d[0]) return {type:"info", msg:"Keseyle altın karşılaştırılmaz! Kese keseyle, altın altınla."};
        if(!s.sol){ if((s.tarti||0)>=2) { Object.keys(s).forEach(x=>delete s[x]); return {msg:"Dede: \"İki tartı hakkın bitti!\" Altınlar keselere geri kondu, baştan başla."}; } s.sol=d; return {type:"progress", msg:ad(d)+" sol kefeye kondu. Şimdi sağa ne koyacaksın?", flash:"terazi"}; }
        if(s.sol===d) return {type:"info", msg:"Bu zaten kefede!"};
        const a=w(s.sol), b=w(d); s.tarti=(s.tarti||0)+1; if(d.startsWith("k")) s.keseTarti=true; else s.altinTarti=true;
        s.sonuc = a===b ? ad(s.sol)+" = "+ad(d)+" (eşit)" : (a<b ? ad(s.sol)+" HAFİF" : ad(d)+" HAFİF");
        s.sol=null;
        return {type:"progress", msg:"Tartıldı: "+s.sonuc, flash:"terazi"};
      }
      if(t==="masa" && d.startsWith("k")){ if(!s.keseTarti && !s.acilan) return {msg:"Dede: \"Hangi kese olduğunu bilmeden açma! Önce tart.\""}; if(s.acilan) return {type:"info", msg:"Masada zaten bir kese açık."}; s.acilan=d; s.sol=null; return {type:"progress", msg:ad(d)+" açıldı, 3 altını masaya döktün 🪙🪙🪙", flash:"masa"}; }
      if(t==="dede" && d.startsWith("a")){
        if(!s.altinTarti) return {msg:"Dede: \"Tartmadan nereden bildin? Tahmin kabul etmem!\""};
        if(s.acilan==="kC" && d==="a2") return {type:"win", msg:"Dede altını dişledi: \"Sahte! Aferin sana!\" 🏆"};
        return {msg:"Dede altını tarttı: \"Bu gerçek altın evladım! Tahminle olmaz.\""};
      }
      if(t==="dede" && d.startsWith("k")) return {msg:"Dede: \"Keseyi değil, sahte ALTINI getir!\""};
      return null;
    }
  },
  // ===== 83 =====
  {
    il: "Zonguldak",
    title: "Soba duman yapıyor! 🔥",
    story: "Zonguldak'ta dedenin evi. Kömür sobasını yakmaya çalışıyorsun ama ev dumanla doldu, gözler yanıyor!",
    bg: "linear-gradient(180deg,#e9e6e1 0%,#a9a29a 100%)",
    hint: "Önce pencereyi aç, duman çıksın. Sobanın şiberi (hava kapağı) kapalı kalmış, onu aç. Yaş odun duman yapar, KURU odun at.",
    win: "Pencereyi açtın, şiberi açtın, kuru odunu attın. Soba çekmeye başladı, çıtır çıtır yanıyor!",
    items: [
      {id:"soba", em:"🔥", lb:"Kömür sobası", x:50, y:28, target:true, look:"İçi tütüyor, alev yok."},
      {id:"siber", em:"🎚️", lb:s=> s.siber ? "Şiber (açık)" : "Şiber (kapalı)", x:50, y:52, target:true, look:"Sobanın borusundaki hava kapağı."},
      {id:"pencere", em:"🪟", lb:s=> s.pencere ? "Pencere (açık)" : "Pencere (kapalı)", x:84, y:26, target:true, look:"Duman buraya yığılıyor."},
      {id:"el", em:"✋", lb:"Elin", x:16, y:30, drag:true, look:"Açmak, çevirmek için."},
      {id:"kuru", em:"🪵", lb:"Kuru odun", x:18, y:72, drag:true, look:"Kupkuru, çıtır."},
      {id:"yas", em:"🌿", lb:"Yaş odun", x:82, y:72, drag:true, look:"Yeni kesilmiş, nemli."}
    ],
    decoys:[{em:"🛢️",lb:"Gazyağı",look:"Bir bidon gazyağı.",no:"Sobaya gazyağı dökülmez, parlar! Çok tehlikeli! 😱"},{em:"📰",lb:"Islak gazete",look:"Yağmurda kalmış.",no:"Islak gazete sadece tüttü, daha çok duman! 😵"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>pencere"){ if(s.pencere) return {type:"info", msg:"Pencere açık."}; s.pencere=true; return {type:"progress", msg:"Pencereyi ardına kadar açtın, duman dışarı akıyor 🌬️", flash:"pencere"}; }
      if(k==="el>siber"){ if(s.siber) return {type:"info", msg:"Şiber açık."}; s.siber=true; return {type:"progress", msg:"Şiberi açtın, sobanın borusu çekmeye başladı 🎚️", flash:"siber"}; }
      if(k==="yas>soba") return {msg:"Yaş odun cızırdadı, dumandan göz gözü görmüyor! 😵"};
      if(k==="kuru>soba"){
        if(!s.siber) return {msg:"Kuru odun da tüttü, duman borudan çıkamıyor! Bir kapak kapalı olmalı."};
        if(!s.pencere) return {msg:"Soba yandı ama içerisi hâlâ duman dolu, nefes alamıyorsun! Önce havalandır."};
        return {type:"win", msg:"Çıtır çıtır yandı, duman borudan gidiyor. Ev ısınıyor! 🔥🏠"};
      }
      if(k==="el>soba") return {msg:"Sobaya elle dokunma, yanarsın! 🔥"};
      return null;
    }
  },
  // ===== 84 =====
  {
    title: "Kütüphane kitabı ıslandı! 📚",
    story: "Okul kütüphanesinden aldığın kitabın üstüne su döküldü! Yarın teslim etmen lazım, sayfalar dalga dalga olacak!",
    bg: "linear-gradient(180deg,#f4efe6 0%,#d8c7a7 100%)",
    hint: "Isı sayfaları kıvırır. Sayfaların arasına kâğıt havlu koy, kapatıp üstüne ağır bir şey bastır ve bir gece bekle.",
    win: "Kâğıt havlular suyu çekti, ağır sözlük düzleştirdi. Sabah kitap neredeyse yepyeni! Kütüphaneci hiçbir şey anlamadı.",
    items: [
      {id:"kitap", em:"📘", lb:s=> s.bastirildi ? "Kitap (sözlüğün altında)" : s.havlu ? "Kitap (araları havlulu)" : "Islak kitap", x:50, y:24, target:true, look:"Sayfalar yapış yapış."},
      {id:"havlu", em:"🧻", lb:"Kâğıt havlu", x:16, y:56, drag:true, look:"Emici kâğıt havlu rulosu."},
      {id:"sozluk", em:"📕", lb:"Kalın sözlük", x:50, y:64, drag:true, look:"2 kiloluk sözlük."},
      {id:"fon", em:"💨", lb:"Fön makinesi", x:84, y:56, drag:true, look:"Sıcak hava."},
      {id:"kalorifer", em:"♨️", lb:"Kalorifer", x:84, y:26, target:true, look:"Sıcacık."},
      {id:"gece", em:"🌙", lb:"Bir gece bekle", x:28, y:86, drag:true, look:"Kitabın yanına sürükle, sabah olsun."}
    ],
    decoys:[{em:"🧲",lb:"Ütü",look:"Sıcak ütü.",no:"Ütü sayfaları kavurdu, kenarlar sarardı! 😱"},{em:"🍚",lb:"Pirinç",look:"Bir torba pirinç.",no:"Kitabı pirincin içine gömdün, sayfalar pirinç tanesi doldu 😂"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="havlu>kitap"){ if(s.havlu) return {type:"info", msg:"Havlular zaten yerinde."}; s.havlu=true; return {type:"progress", msg:"Her birkaç sayfanın arasına kâğıt havlu koydun 🧻", flash:"kitap"}; }
      if(k==="sozluk>kitap"){ if(!s.havlu) return {msg:"Islak sayfaları bastırdın, birbirine yapıştılar! 😩 Önce araya bir şey koy."}; s.bastirildi=true; return {type:"progress", msg:"Kitabı kapatıp üstüne kalın sözlüğü koydun 📕", flash:"kitap"}; }
      if(k==="gece>kitap"){
        if(s.havlu && s.bastirildi) return {type:"win", msg:"Sabah oldu: sayfalar kupkuru ve dümdüz! 📘✨"};
        return {msg:"Sabah kitaba baktın: sayfalar dalga dalga kurumuş! 😩"};
      }
      if(d==="fon") return {msg:"Fön sayfaları kıvırdı, kenarlar dalgalandı!"};
      if(t==="kalorifer") return {msg:"Kaloriferde sayfalar kavruldu, akordeon gibi oldu! 😱"};
      return null;
    }
  },
  // ===== 85 =====
  {
    il: "Bolu",
    title: "Yemek tuzlu oldu! 🧂",
    story: "Mengen'in ünlü aşçı dedesine yardım ediyorsun. Sen tuzu iki kere attın, türlü zehir gibi tuzlu! Misafirler yolda.",
    bg: "linear-gradient(180deg,#fff8ec 0%,#f0d2a1 100%)",
    hint: "Dede'nin sırrı: soyulmuş çiğ patatesi doğrayıp tencereye at, tuzu emsin. Biraz da su ekle. Sonra tadına bak.",
    win: "Patates tuzu emdi, su dengeledi. Dede tadına baktı: \"Mengen aşçısı olursun sen!\"",
    items: [
      {id:"tencere", em:"🍲", lb:s=> (s.patates&&s.su) ? "Türlü (dengelendi)" : "Türlü (çok tuzlu!)", x:50, y:28, target:true, look:"Kaynıyor, kokusu güzel ama tuzu fazla."},
      {id:"patates", em:"🥔", lb:s=> s.soyuldu ? "Doğranmış patates" : "Çiğ patates", x:16, y:58, drag:true, target:true, show:s=>!s.patates, look:"Kabuklu, toprağı üstünde."},
      {id:"bicak", em:"🔪", lb:"Bıçak", x:44, y:62, drag:true, look:"Soyacak, doğrayacak."},
      {id:"su", em:"💧", lb:"Bir bardak su", x:78, y:58, drag:true, show:s=>!s.su, look:"Musluk suyu."},
      {id:"kasik", em:"🥄", lb:"Tadım kaşığı", x:30, y:86, drag:true, look:"Tadına bakmak için."},
      {id:"dede", em:"👨‍🍳", lb:"Aşçı dede", x:82, y:28, target:true, look:"\"Tuz fazla mı? Çaresi var, düşün!\""}
    ],
    decoys:[{em:"🍬",lb:"Şeker",look:"Toz şeker.",no:"Tuzlu türlüye şeker attın, tatlı-tuzlu rezalet! 🤢"},{em:"🧂",lb:"Daha çok tuz",look:"Tuzluk.",no:"Daha çok tuz mu?! 😱"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="bicak>patates"){ if(s.soyuldu) return {type:"info", msg:"Zaten doğrandı."}; s.soyuldu=true; return {type:"progress", msg:"Patatesi soyup iri iri doğradın 🥔", flash:"patates"}; }
      if(k==="patates>tencere"){ if(!s.soyuldu) return {msg:"Kabuklu, topraklı patatesi tencereye attın! 😱 Neyse ki çabuk çıkardın."}; s.patates=true; return {type:"progress", msg:"Patatesler tencerede, tuzu emiyor 🥔", flash:"tencere"}; }
      if(k==="su>tencere"){ s.su=true; return {type:"progress", msg:"Bir bardak su ekledin, karıştırdın 💧", flash:"tencere"}; }
      if(k==="kasik>tencere"){
        if(s.patates && s.su) return {type:"win", msg:"Tadına baktın: tuzu yerinde! Misafirler gelebilir 🍲😋"};
        return {msg:"Tadına baktın... hâlâ zehir gibi tuzlu! 🤢"};
      }
      if(t==="dede") return {msg:"Dede: \"Bana getirme, çaresini sen bul!\""};
      return null;
    }
  },
  // ===== 86 =====
  {
    title: "Mantar şişenin içine kaçtı! 🍾",
    story: "Ninenin nar ekşisi şişesinin mantarını açayım derken içeri ittin! Mantar şişenin içinde yüzüyor, şişeden hiçbir şey dökülmüyor.",
    bg: "linear-gradient(180deg,#fbe9ea 0%,#e6a6ad 100%)",
    hint: "Naylon poşeti şişenin içine sok, ağzını dışarıda tut. Mantarı poşetin üstüne getir, sonra poşeti içeriden şişir. Poşet mantarı sarar, çek!",
    win: "Poşet içeride şişti, mantarı sardı, yavaşça çektin... PLOP! Mantar dışarıda. Ninen \"Sihirbaz mısın?\" dedi.",
    items: [
      {id:"sise", em:"🍶", lb:s=> s.sisti ? "Şişe (poşet şişti, mantarı sardı)" : s.poset ? "Şişe (içinde poşet)" : "Şişe (mantar içeride)", x:50, y:30, target:true, look:"Mantar ağzın hemen altında yüzüyor."},
      {id:"poset", em:"🛍️", lb:"İnce naylon poşet", x:18, y:62, drag:true, show:s=>!s.poset, look:"Uzun, ince bir poşet."},
      {id:"ufle", em:"😮‍💨", lb:"Üfle", x:50, y:66, drag:true, look:"Poşetin ağzından üflersin."},
      {id:"el", em:"✋", lb:"Elin (çek)", x:82, y:62, drag:true, look:"Yavaşça çekmek için."},
      {id:"nine", em:"👵", lb:"Ninen", x:84, y:26, target:true, look:"\"Nar ekşisiz salata olur mu?\""}
    ],
    decoys:[{em:"🍢",lb:"Şiş",look:"Metal şiş.",no:"Şişle dürttün, mantar parçalandı, şişe kırıntı doldu! 😩"},{em:"🔨",lb:"Çekiç",look:"Küçük çekiç.",no:"Şişeyi kırarsan nar ekşisi de gider! 😱"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="poset>sise"){ s.poset=true; return {type:"progress", msg:"Poşeti şişenin içine soktun, ağzı dışarıda. Mantarı poşetin üstüne getirdin.", flash:"sise"}; }
      if(k==="ufle>sise"){ if(!s.poset) return {msg:"Şişeye üfledin, nar ekşisi yüzüne sıçradı! 😂"}; if(s.sisti) return {type:"info", msg:"Poşet zaten şişik."}; s.sisti=true; return {type:"progress", msg:"Poşetin ağzından üfledin, içeride balon gibi şişip mantarı sardı 🎈", flash:"sise"}; }
      if(k==="el>sise"){
        if(s.sisti) return {type:"win", msg:"Yavaşça çektin... PLOP! Mantar dışarıda! 🍾"};
        if(s.poset) return {msg:"Poşeti çektin, mantar içeride kaldı. Poşetin mantarı sarması lazım!"};
        return {msg:"Parmağın şişeye girmiyor ki 😅"};
      }
      if(t==="nine") return {msg:"Ninen: \"Önce mantarı çıkar evladım.\""};
      return null;
    }
  },
  // ===== 87 =====
  {
    title: "İplik iğneye girmiyor! 🪡",
    story: "Babaannen bayramlık düğmeni dikecek ama gözü görmüyor, ipliği iğneye geçiremiyor. Sen yardım et!",
    bg: "linear-gradient(180deg,#fff0f4 0%,#f5c0cf 100%)",
    hint: "Dağınık uçlu iplik geçmez. Ucu makasla EĞİK kes, hafifçe ıslat ki lifler toplansın. İğneyi de lambanın ışığına tut.",
    win: "Eğik kesim, ıslak uç, bol ışık... İplik tek seferde geçti! Babaannen düğmeni dikti.",
    items: [
      {id:"iplik", em:"🧵", lb:s=> (s.kesik&&s.islak) ? "İplik (sivri, ıslak uç)" : s.kesik ? "İplik (eğik kesildi)" : s.islak ? "İplik (ıslak, dağınık)" : "İplik (ucu dağınık)", x:20, y:28, drag:true, target:true, look:"Ucu fırça gibi açılmış."},
      {id:"igne", em:"🪡", lb:s=> s.isik ? "İğne (ışıkta)" : "İğne (gölgede)", x:52, y:30, drag:true, target:true, look:"İğnenin deliği minicik."},
      {id:"lamba", em:"💡", lb:"Masa lambası", x:84, y:28, target:true, look:"Parlak ışık."},
      {id:"makas", em:"✂️", lb:"Makas", x:20, y:66, drag:true, look:"Keskin makas."},
      {id:"su", em:"💧", lb:"Bir damla su", x:50, y:70, drag:true, look:"Bardaktaki su."},
      {id:"babaanne", em:"👵", lb:"Babaannen", x:82, y:66, target:true, look:"\"Gözlüğümle bile göremiyorum evladım.\""}
    ],
    decoys:[{em:"🧴",lb:"Yapıştırıcı",look:"Japon yapıştırıcısı.",no:"İpliğin ucu yapıştırıcıyla taş gibi oldu, iğneye de yapıştı! 😩"},{em:"🔍",lb:"Büyüteç",look:"Büyüteç.",no:"Büyüteç tutarken iki elin kalmadı, iplik yine kaçtı!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="makas>iplik"){ s.kesik=true; return {type:"progress", msg:"İpliğin ucunu eğik kestin, sivri oldu ✂️", flash:"iplik"}; }
      if(k==="su>iplik"){ s.islak=true; return {type:"progress", msg:"Ucunu hafifçe ıslattın, lifler toplandı 💧", flash:"iplik"}; }
      if(k==="igne>lamba"){ s.isik=true; return {type:"progress", msg:"İğneyi lambanın ışığına tuttun, deliği parladı 💡", flash:"igne"}; }
      if(k==="iplik>igne"){
        if(s.kesik && s.islak && s.isik) return {type:"win", msg:"Tek seferde geçti! 🪡✨"};
        return {msg:"İplik deliğe değdi, ucu açıldı, geçmedi! "+(!s.kesik?"Ucu dağınık. ":"")+(!s.islak?"Lifler toplanmamış. ":"")+(!s.isik?"Delik de görünmüyor.":"")};
      }
      if(k==="igne>iplik") return {msg:"İğneyi ipliğe mi geçireceksin? 😄 Tersi!"};
      if(t==="babaanne") return {msg:"Babaannen: \"İğneye ipliği sen geçir, ben dikerim.\""};
      return null;
    }
  },
  // ===== 88 =====
  {
    title: "Tavuklar kümese girmiyor! 🐔",
    story: "Köyde akşam oluyor. Tavuklar bahçede dağınık, tilki gelmeden kümese girmeleri lazım. Kovaladıkça kaçıyorlar!",
    bg: "linear-gradient(180deg,#ffd9a8 0%,#c9895c 100%)",
    hint: "Tavuklar karanlıkta aydınlığa gider. Kümesin lambasını yak, içine yem serp, bekle. Hepsi girince kapıyı kapat.",
    win: "Kümes aydınlandı, yem serpildi, tavuklar tek tek girdi. Kapıyı kapattın, tilki eli boş döndü!",
    items: [
      {id:"tavuk", em:"🐔", lb:"Tavuklar (dağınık)", x:22, y:26, target:true, show:s=>!s.girdi, look:"Gıt gıt gıdak... eşeleniyorlar."},
      {id:"kumes", em:"🛖", lb:s=> s.girdi ? "Kümes (tavuklar içeride)" : "Kümes", x:72, y:30, target:true, look:s=> s.lamba ? "İçeride ışık yanıyor." : "İçi kapkaranlık."},
      {id:"lamba", em:"💡", lb:s=> s.lamba ? "Kümes lambası (yanıyor)" : "Kümes lambası (sönük)", x:46, y:46, target:true, look:"Kümesin içine bakan ampul."},
      {id:"el", em:"✋", lb:"Elin", x:16, y:62, drag:true, look:"Düğmeye basmak, kapı kapatmak için."},
      {id:"yem", em:"🌾", lb:"Bir avuç yem", x:50, y:68, drag:true, show:s=>!s.yem, look:"Mısır ve buğday."},
      {id:"bekle", em:"⏳", lb:"5 dakika bekle", x:24, y:88, drag:true, look:"Sürükle, beklersin."}
    ],
    decoys:[{em:"🪵",lb:"Sopa",look:"Uzun sopa.",no:"Sopayla kovaladın, tavuklar dört bir yana kaçtı! 🐔💨"},{em:"📯",lb:"Düdük",look:"Düdük.",no:"Düdükten korkan tavuklar ağaca kondu! 😩"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>lamba"){ s.lamba=true; return {type:"progress", msg:"Kümesin lambasını yaktın 💡", flash:"kumes"}; }
      if(k==="yem>kumes"){ s.yem=true; return {type:"progress", msg:"Yemi kümesin içine serptin 🌾", flash:"kumes"}; }
      if(k==="yem>tavuk") return {msg:"Yemi bahçeye attın, tavuklar daha da dağıldı yemek için!"};
      if(k==="bekle>tavuk" || k==="bekle>kumes"){
        if(s.girdi) return {type:"info", msg:"Tavuklar zaten içeride."};
        if(s.lamba && s.yem){ s.girdi=true; return {type:"progress", msg:"Tavuklar ışığa ve yeme doğru tek tek kümese girdi! 🐔🐔🐔", flash:"kumes"}; }
        return {msg:"Beklerken hava karardı, tavuklar bahçede kaldı. Uzaktan tilki sesi! 🦊"};
      }
      if(k==="el>kumes"){
        if(s.girdi){ s.kapali=true; return {type:"win", msg:"Kapıyı kapattın, sürgüyü sürdün. Tavuklar güvende! 🔒🐔"}; }
        return {msg:"Kapıyı kapattın ama tavuklar dışarıda! 😅"};
      }
      if(k==="el>tavuk") return {msg:"Tavuğu yakalamaya çalıştın, kanat çırpıp kaçtı!"};
      return null;
    }
  },
  // ===== 89 =====
  {
    il: "Ardahan",
    title: "Kapı önü buz pisti! 🧊",
    story: "Ardahan'da -25 derece. Kapının önündeki merdiven buz tuttu. Deden camiye gidecek, kayarsa düşer!",
    bg: "linear-gradient(180deg,#f0f8ff 0%,#bcd6ee 100%)",
    hint: "Sıcak su döken buzu daha da kalınlaştırır! Önce karı kürekle, sonra sobadan kül ya da tuz serp. Dedeye de koluna girerek eşlik et.",
    win: "Karı kürekledin, sobanın külünü serptin, dedenin koluna girdin. Güvenle camiye vardı, sana dua etti!",
    items: [
      {id:"merdiven", em:"🪜", lb:s=> s.kul ? "Merdiven (kül serpili)" : s.temiz ? "Merdiven (buz parlıyor)" : "Merdiven (kar + buz)", x:50, y:30, target:true, look:"Altında cam gibi buz."},
      {id:"kurek", em:"⛏️", lb:"Kar küreği", x:16, y:60, drag:true, look:"Sağlam kürek."},
      {id:"kul", em:"🪨", lb:"Soba külü", x:44, y:64, drag:true, look:"Sobanın dibinden bir kova kül."},
      {id:"sicak", em:"♨️", lb:"Kaynar su", x:76, y:62, drag:true, look:"Çaydanlıkta kaynamış su."},
      {id:"dede", em:"👴", lb:"Deden", x:84, y:28, target:true, look:"\"Hadi evladım, ezana az kaldı.\""},
      {id:"kol", em:"🤝", lb:"Koluna gir", x:26, y:86, drag:true, look:"Dedeye destek ol."}
    ],
    decoys:[{em:"🧹",lb:"Süpürge",look:"Saman süpürge.",no:"Süpürge buzu süpürmez, kar da yapışık! 😅"},{em:"🛷",lb:"Kızak",look:"Tahta kızak.",no:"Dedeyi kızakla mı götüreceksin?! 😂"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="kurek>merdiven"){ if(s.temiz) return {type:"info", msg:"Kar zaten temizlendi."}; s.temiz=true; return {type:"progress", msg:"Karı küreğe küreğe kenara attın ⛏️ Altında buz var!", flash:"merdiven"}; }
      if(k==="kul>merdiven"){ if(!s.temiz) return {msg:"Külü karın üstüne serptin, kar onu yuttu. Önce karı temizle!"}; s.kul=true; return {type:"progress", msg:"Buzun üstüne kül serptin, artık pütür pütür, kaymıyor 🪨", flash:"merdiven"}; }
      if(k==="sicak>merdiven") return {msg:"Kaynar suyu döktün... iki dakikada daha kalın buz oldu! 🧊😱"};
      if(k==="kol>dede"){
        if(s.temiz && s.kul) return {type:"win", msg:"Dedenin koluna girdin, adım adım indiniz. Hiç kaymadı! 🤝🕌"};
        return {msg:"Koluna girdin ama ikiniz birden kaydınız! Neyse ki yumuşak kara düştünüz 😅"};
      }
      if(t==="dede") return {msg:"Dedeye bunu mu vereceksin? 😄"};
      return null;
    }
  },
  // ===== 90 =====
  {
    title: "AVM'de kardeşin kayboldu! 🛍️",
    story: "Kalabalık AVM'de bir anda küçük kardeşini göremez oldun! Panikle koşturursan hem sen kaybolursun hem onu bulamazsın.",
    bg: "linear-gradient(180deg,#f4f0ff 0%,#cdc0f2 100%)",
    hint: "Koşturma! Danışmaya git, telefondaki fotoğrafını göster ki anons yapsınlar. Sonra danışmanın yanında BEKLE. Kardeşin oraya getirilecek.",
    win: "Danışma anons yaptı, güvenlik kardeşini oyuncakçının önünde buldu ve danışmaya getirdi. Sıkı sarıldınız!",
    items: [
      {id:"danisma", em:"🛎️", lb:s=> s.anons ? "Danışma (anons yapıldı)" : "Danışma masası", x:50, y:26, target:true, look:"\"Size nasıl yardımcı olabilirim?\""},
      {id:"magaza", em:"🏬", lb:"Mağazalar (kalabalık)", x:84, y:28, target:true, look:"Yüzlerce insan, 3 kat."},
      {id:"telefon", em:"📱", lb:"Telefonun (fotoğraf)", x:16, y:60, drag:true, look:"Bu sabah çektiğin fotoğrafı: sarı montlu, mavi şapkalı."},
      {id:"sen", em:"🧍", lb:"Sen", x:50, y:66, drag:true, look:"Kalbin küt küt atıyor ama sakin olmalısın."},
      {id:"bagir", em:"📢", lb:"Bağırarak ara", x:82, y:62, drag:true, look:"Adını bağırarak koşmak."}
    ],
    decoys:[{em:"🍦",lb:"Dondurma",look:"Elindeki dondurma.",no:"Şimdi dondurmanın zamanı değil! 😅"},{em:"🎈",lb:"Balon",look:"Kardeşinin balonu.",no:"Balonu havaya bıraktın, kimse fark etmedi bile."}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="telefon>danisma"){ s.anons=true; return {type:"progress", msg:"Fotoğrafı gösterdin. Görevli anons yaptı: \"Sarı montlu, mavi şapkalı...\" 📢", flash:"danisma"}; }
      if(k==="sen>danisma"){
        if(!s.anons) return {msg:"Danışmanın yanında bekliyorsun ama kimse kardeşini aramıyor! Görevliye bilgi ver."};
        return {type:"win", msg:"Yerinden ayrılmadan bekledin. 5 dakika sonra güvenlik kardeşini getirdi! 🤗"};
      }
      if(k==="sen>magaza") return {msg:"Mağazalar arasında koşturdun, şimdi sen de kayboldun! 😰"};
      if(k==="bagir>magaza" || k==="bagir>danisma") return {msg:"Bağırdın bağırdın, kalabalıkta sesin duyulmadı, herkes sana baktı 😳"};
      if(k==="telefon>magaza") return {msg:"Fotoğrafı rastgele birine gösterdin, \"Görmedim\" dedi. Daha iyi bir yol olmalı."};
      return null;
    }
  },
  // ===== 91 =====
  {
    title: "Şişme havuz, pompa yok! 🏊",
    story: "Bahçeye kocaman şişme havuz aldınız ama pompası kutudan çıkmadı! Ağızla üflersen başın döner, kardeşler sabırsız.",
    bg: "linear-gradient(180deg,#e0f7ff 0%,#8fd8f5 100%)",
    hint: "Elektrik süpürgesi sadece emmez: hortumu arka taraftaki ÜFLEME deliğine takarsan hava verir! Sonra fişe tak ve havuza tut.",
    win: "Süpürgenin hortumunu üfleme deliğine taktın, 3 dakikada havuz kocaman şişti. Bahçede şamata başladı!",
    items: [
      {id:"havuz", em:"🛟", lb:"Sönük havuz", x:50, y:26, target:true, look:"Yerde serili bir plastik yığını."},
      {id:"supurge", em:"🧹", lb:s=> (s.ufleme?"Süpürge (üfleme modunda)":"Süpürge (emme modunda)")+(s.fis?" ⚡":""), x:20, y:56, drag:true, target:true, look:s=> s.ufleme ? "Hortum arka delikte, hava veriyor." : "Hortum ön delikte: emiyor. Arkada bir delik daha var..."},
      {id:"hortum", em:"➰", lb:"Süpürge hortumu", x:56, y:60, drag:true, show:s=>!s.ufleme, look:"Çıkarılıp başka deliğe takılabilir."},
      {id:"priz", em:"🔌", lb:"Bahçe prizi", x:84, y:58, target:true, look:"Uzatma kablosu takılı."},
      {id:"agiz", em:"😮‍💨", lb:"Ağzınla üfle", x:84, y:28, drag:true, look:"Ciğerlerin hazır mı?"}
    ],
    decoys:[{em:"🚲",lb:"El pompası",look:"Ucu havuzun ventiline uymuyor.",no:"Pompanın ucu havuzun ventiline uymadı, hava kaçtı!"},{em:"🌀",lb:"Vantilatör",look:"Masa vantilatörü.",no:"Vantilatörün rüzgârı havuzun içine girmiyor ki 😅"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="hortum>supurge"){ s.ufleme=true; return {type:"progress", msg:"Hortumu çıkarıp arkadaki üfleme deliğine taktın 💨", flash:"supurge"}; }
      if(k==="supurge>priz"){ if(s.fis) return {type:"info", msg:"Fiş zaten takılı."}; s.fis=true; return {type:"progress", msg:"Süpürgenin fişini taktın ⚡", flash:"supurge"}; }
      if(k==="supurge>havuz"){
        if(!s.fis) return {msg:"Fişi takılı değil, süpürge çalışmadı!"};
        if(!s.ufleme) return {msg:"Süpürge havuzun içindeki havayı EMDİ, plastik büzüştü! 😂 Ters iş yapıyor."};
        return {type:"win", msg:"Vıııın! Havuz balon gibi şişti 🛟💦"};
      }
      if(k==="agiz>havuz") return {msg:"Beş dakika üfledin, başın döndü, havuz hâlâ dümdüz 😵"};
      if(k==="hortum>havuz") return {msg:"Hortum tek başına hava vermez, makineye takılı olmalı!"};
      return null;
    }
  },
  // ===== 92 =====
  {
    title: "Ketçap çıkmıyor! 🍟",
    story: "Patates kızartması soğuyor. Cam ketçap şişesini sallıyorsun, vuruyorsun... Tek damla çıkmıyor!",
    bg: "linear-gradient(180deg,#fff3e6 0%,#ffc58f 100%)",
    hint: "Önce şişenin ağzındaki kurumuş ketçabı kürdanla aç. Sonra şişeyi ters çevir ve boynundaki '57' yazısına parmağınla hafifçe vur!",
    win: "Kurumuş ağzı açtın, ters çevirip boynuna tık tık vurdun. Ketçap süzüldü! Patatesler sıcak sıcak yendi.",
    items: [
      {id:"sise", em:"🫙", lb:s=> s.akti ? "Ketçap akıyor!" : s.acik ? "Şişe (ağzı açık)" : "Şişe (ağzı kurumuş)", x:30, y:28, drag:true, target:true, look:"Boynunda küçük bir '57' yazısı var. Ağzında kuru ketçap tıkacı."},
      {id:"patates", em:"🍟", lb:"Patates kızartması", x:76, y:28, target:true, look:"Soğumadan yemek lazım!"},
      {id:"kurdan", em:"🦯", lb:"Kürdan", x:16, y:64, drag:true, look:"Tahta kürdan."},
      {id:"parmak", em:"☝️", lb:"Parmağın", x:46, y:66, drag:true, look:"Şişenin boynuna tık tık vurmak için."},
      {id:"bicak", em:"🔪", lb:"Bıçak", x:78, y:64, drag:true, look:"Tereyağı bıçağı."}
    ],
    decoys:[{em:"💧",lb:"Su",look:"Bir bardak su.",no:"Ketçaba su koydun, sulu çorba gibi oldu! 🤢"},{em:"🔨",lb:"Tokmak",look:"Et tokmağı.",no:"Cam şişeye tokmak?! Az kalsın kırılıyordu 😱"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="kurdan>sise"){ if(s.acik) return {type:"info", msg:"Ağzı zaten açık."}; s.acik=true; return {type:"progress", msg:"Kürdanla ağızdaki kurumuş ketçabı açtın 🦯", flash:"sise"}; }
      if(k==="parmak>sise"){
        if(!s.acik) return {msg:"Vurdun vurdun... ağız tıkalı, basınç yaptı, pıt diye kapağına sıçradı! 😅"};
        s.akti=true; return {type:"progress", msg:"Ters çevirip '57'ye tık tık vurdun, ketçap kaymaya başladı! 🍅", flash:"sise"};
      }
      if(k==="sise>patates"){
        if(s.akti) return {type:"win", msg:"Ketçap patateslerin üstüne süzüldü. Afiyet olsun! 🍟❤️"};
        return {msg:"Şişeyi patateslerin üstünde salladın, ketçap çıkmadı, patatesler soğudu 😩"};
      }
      if(k==="bicak>sise") return {msg:"Bıçağı şişeye soktun, ketçap bıçağa yapıştı, şişenin ağzı daha da tıkandı!"};
      return null;
    }
  },
  // ===== 93 =====
  {
    title: "Elektrik gitti, zifiri karanlık! 🕯️",
    story: "Gece fırtına çıktı, elektrikler kesildi. Mum ve kibrit mutfak çekmecesinde ama göz gözü görmüyor. Telefonun şarjı da %3!",
    bg: "linear-gradient(180deg,#3a3f5c 0%,#1f2236 100%)",
    hint: "Telefonun fenerini sadece çekmeceyi bulmak için kullan. Mumu yak ve devrilmesin diye bir tabağa sabitle. Perdeye, halıya yakın koyma!",
    win: "Fenerle çekmeceyi buldun, mumu yaktın, tabağa sabitledin. Fırtına geçene kadar sıcacık bir ışık!",
    items: [
      {id:"cekmece", em:"🗄️", lb:s=> s.bulundu ? "Çekmece (açık)" : "Mutfak çekmecesi (karanlıkta)", x:22, y:26, target:true, look:"Karanlıkta zor seçiliyor."},
      {id:"telefon", em:"📱", lb:"Telefon (%3)", x:62, y:24, drag:true, look:"Fener uygulaması var."},
      {id:"mum", em:"🕯️", lb:s=> s.yandi ? "Mum (yanıyor)" : "Mum", x:22, y:56, drag:true, show:s=>s.bulundu, look:"Uzun beyaz mum."},
      {id:"kibrit", em:"🗃️", lb:"Kibrit", x:50, y:60, drag:true, show:s=>s.bulundu, look:"Kuru kibritler."},
      {id:"tabak", em:"🍽️", lb:"Çay tabağı", x:80, y:56, target:true, look:"Mumu sabitlemek için."},
      {id:"perde", em:"🪟", lb:"Perde", x:84, y:26, target:true, look:"Tül perde."}
    ],
    decoys:[{em:"🎮",lb:"Oyun konsolu",look:"Kablosuz kol.",no:"Elektrik yok, konsol çalışmıyor 😅"},{em:"📺",lb:"Tablet",look:"Şarjı bitmiş.",no:"Tabletin şarjı sıfır, ekran simsiyah."}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="telefon>cekmece"){ if(s.bulundu) return {type:"info", msg:"Çekmece açık."}; s.bulundu=true; return {type:"progress", msg:"Fenerle çekmeceyi bulup açtın, mum ve kibrit orada! Fener kapandı, şarj bitti 🔦", flash:"mum"}; }
      if(d==="telefon") return {msg:"Fenerle etrafa bakarken şarj gitti! 🪫 Şimdi daha da karanlık."};
      if(k==="kibrit>mum"){ s.yandi=true; return {type:"progress", msg:"Kibriti çakıp mumu yaktın 🕯️", flash:"mum"}; }
      if(k==="mum>tabak"){
        if(!s.yandi) return {msg:"Sönük mumu tabağa koydun... hâlâ karanlık!"};
        return {type:"win", msg:"Birkaç damla erimiş mumu tabağa damlatıp mumu üstüne sabitledin. Güvenli ve aydınlık! 🕯️✨"};
      }
      if(k==="mum>perde" || k==="kibrit>perde") return {msg:"Perdeye yakın ateş?! Tül perde tutuşmak üzereydi! 🔥😱"};
      if(k==="kibrit>tabak") return {msg:"Kibriti tabakta yaktın, söndü gitti."};
      return null;
    }
  },
  // ===== 94 =====
  {
    title: "Kedi taşıma çantasına girmiyor! 🐈",
    story: "Pamuk aşı olacak, veterinere gitmeniz lazım. Ama taşıma çantasını görünce dört ayağıyla kapıya yapışıyor!",
    bg: "linear-gradient(180deg,#fff2fb 0%,#f2c4e3 100%)",
    hint: "Çantayı onun için güzel yap: içine kokulu battaniyesini ve sevdiği mamayı koy. Sonra çantayı DİK tut, kediyi arkasından kapıya değmeden yavaşça indir.",
    win: "Battaniye, mama, dik çanta... Pamuk mırlayarak içeri kaydı. Veterinere zamanında yetiştiniz!",
    items: [
      {id:"kedi", em:"🐈", lb:"Pamuk", x:22, y:28, drag:true, target:true, look:"Kuyruğu kabarmış, şüpheyle bakıyor."},
      {id:"canta", em:"🧳", lb:s=> "Taşıma çantası"+(s.dik?" (dik)":"")+(s.battaniye?" +battaniye":"")+(s.mama?" +mama":""), x:70, y:30, target:true, look:"Önden kapaklı plastik çanta."},
      {id:"battaniye", em:"🧣", lb:"Pamuk'un battaniyesi", x:16, y:66, drag:true, show:s=>!s.battaniye, look:"Onun kokusunu taşıyor."},
      {id:"mama", em:"🐟", lb:"Ödül maması", x:50, y:66, drag:true, show:s=>!s.mama, look:"En sevdiği ton balıklı mama."},
      {id:"el", em:"✋", lb:"Elin", x:82, y:66, drag:true, look:"Çantayı çevirmek için."}
    ],
    decoys:[{em:"🧹",lb:"Süpürge",look:"Süpürge.",no:"Süpürgeyle kovaladın, Pamuk yatağın altına kaçtı! 🙀"},{em:"🥛",lb:"Süt",look:"Bir kase inek sütü.",no:"Kedilere inek sütü iyi gelmez, karnı ağrır!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="battaniye>canta"){ s.battaniye=true; return {type:"progress", msg:"Battaniyesini çantaya serdin, içi onun gibi kokuyor 🧣", flash:"canta"}; }
      if(k==="mama>canta"){ s.mama=true; return {type:"progress", msg:"Ödül mamasını çantanın en dibine koydun 🐟", flash:"canta"}; }
      if(k==="el>canta"){ if(s.dik) return {type:"info", msg:"Çanta zaten dik."}; s.dik=true; return {type:"progress", msg:"Çantayı kapağı yukarı bakacak şekilde dik tuttun ⬆️", flash:"canta"}; }
      if(k==="kedi>canta"){
        if(s.dik && s.battaniye && s.mama) return {type:"win", msg:"Pamuk'u yavaşça indirdin, kokuyu tanıdı, mamaya daldı. Kapak kapandı! 🐈💜"};
        if(!s.dik) return {msg:"Pamuk dört ayağıyla kapının kenarına yapıştı, tırmaladı! 😾"};
        return {msg:"Çantaya girdi ama hemen fırladı. İçi ona yabancı geliyor!"};
      }
      if(k==="el>kedi") return {msg:"Pamuk'u ensesinden zorla tuttun, hırladı ve kaçtı 😾"};
      if(k==="mama>kedi") return {msg:"Mamayı hemen yedi... ve çantaya girmek için sebebi kalmadı 😅"};
      return null;
    }
  },
  // ===== 95 =====
  {
    il: "Aydın",
    title: "İncir kurutma telaşı! 🌿",
    story: "Aydın'da incir zamanı! Taze incirleri güneşte kurutacaksın. Ama sinekler, arılar ve akşam çiği hepsini bozabilir.",
    bg: "linear-gradient(180deg,#fff4d8 0%,#e7c27a 100%)",
    hint: "İncirleri tepsiye diz, damdaki güneşe çıkar, üstünü tülbentle ört. Akşam olunca nem (çiğ) düşmeden tepsiyi içeri al!",
    win: "Tepsi, güneş, tülbent ve akşam içeri! Bir haftada bal gibi kuru incirler oldu. Aydın'a yakışır!",
    items: [
      {id:"incir", em:"🟣", lb:"Taze incirler", x:16, y:28, drag:true, show:s=>!s.dizildi, look:"Ballı, yumuşacık."},
      {id:"tepsi", em:"🟫", lb:s=> "Hasır tepsi"+(s.dizildi?" (incirli)":"")+(s.ortulu?" (tülbentli)":"")+(s.damda?" ☀️":""), x:46, y:30, drag:true, target:true, look:"Havadar hasır tepsi."},
      {id:"dam", em:"🏠", lb:"Güneşli dam", x:84, y:20, target:true, look:"Bütün gün güneş alıyor."},
      {id:"tulbent", em:"🧕", lb:"Tülbent", x:16, y:64, drag:true, show:s=>!s.ortulu, look:"İnce, delikli bez. Hava geçirir, sinek geçirmez."},
      {id:"ay", em:"🌙", lb:"Akşam oluyor! Çiğ düşecek", x:50, y:62, target:true, show:s=>s.damda && s.ortulu, look:"Güneş batıyor, hava nemleniyor."},
      {id:"ev", em:"🚪", lb:"Ev (içerisi)", x:84, y:80, target:true, look:"Kuru ve serin."}
    ],
    decoys:[{em:"🛍️",lb:"Naylon örtü",look:"Hava geçirmez naylon.",no:"Naylonun altında incirler terledi, küflendi! 🤢"},{em:"🧴",lb:"Sinek ilacı",look:"Sprey.",no:"Yiyeceğin incire ilaç sıkılmaz! 😱"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="incir>tepsi"){ s.dizildi=true; return {type:"progress", msg:"İncirleri tepsiye tek tek, aralıklı dizdin 🟣", flash:"tepsi"}; }
      if(k==="tulbent>tepsi"){ if(!s.dizildi) return {msg:"Boş tepsiyi mi örtüyorsun? 😄"}; s.ortulu=true; return {type:"progress", msg:"Üstünü tülbentle örttün, sinekler giremeyecek 🧕", flash:"tepsi"}; }
      if(k==="tepsi>dam"){
        if(!s.dizildi) return {msg:"Boş tepsiyi dama çıkardın 😄"};
        if(s.damda) return {type:"info", msg:"Tepsi zaten damda."};
        s.damda=true;
        if(!s.ortulu){ s.dizildi=false; s.damda=false; return {msg:"Açık bıraktın, arılar ve sinekler incirlere üşüştü! Yenilerini topladın, baştan."}; }
        return {type:"progress", msg:"Tepsiyi güneşli dama çıkardın ☀️ Gün boyu kurudu... akşam oluyor!", flash:"ay"};
      }
      if(k==="tepsi>ev"){
        if(s.damda && s.ortulu) return {type:"win", msg:"Çiğ düşmeden içeri aldın! Bir hafta böyle: bal gibi kuru incir 🌿🟣"};
        return {msg:"Daha güneş görmeden içeri mi aldın? İncirler hâlâ sulu!"};
      }
      if(k==="tepsi>ay") return {msg:"Gece dışarıda kaldı, çiğ incirleri ıslattı, küflenmeye başladı! 😩"};
      return null;
    }
  },
  // ===== 96 =====
  {
    title: "Pilav dibi tuttu! 🍚",
    story: "Misafirler sofrada, pilavın dibi tuttu! Mutfaktan yanık kokusu geliyor. Pilavın tamamı kokmadan kurtar!",
    bg: "linear-gradient(180deg,#fffaf0 0%,#f0dcb9 100%)",
    hint: "Önce ocağı kapat. Tencereyi soğuk suya oturt ki yanma dursun. Üstüne bir dilim ekmek koy, kokuyu çeksin. Sakın karıştırma!",
    win: "Ocağı kapattın, tencereyi soğuk suya oturttun, üstüne ekmek koydun. Kimse bir şey anlamadı, pilav tane tane!",
    items: [
      {id:"tencere", em:"🍲", lb:s=> s.sogudu ? "Pilav (soğuk suda)" : "Pilav (dibi yanıyor!)", x:50, y:28, drag:true, target:true, look:"Üstü güzel, dibi kömür."},
      {id:"ocak", em:"🔥", lb:s=> s.kapali ? "Ocak (kapalı)" : "Ocak (yanıyor)", x:16, y:28, target:true, look:"Altında hâlâ ateş."},
      {id:"legen", em:"🫕", lb:"Soğuk su leğeni", x:84, y:28, target:true, look:"Lavabodaki soğuk su."},
      {id:"el", em:"✋", lb:"Elin", x:16, y:66, drag:true, look:"Ocağı kapatmak için."},
      {id:"ekmek", em:"🍞", lb:"Bir dilim ekmek", x:48, y:66, drag:true, look:"Bayatlamış bir dilim."},
      {id:"kepce", em:"🥄", lb:"Kepçe", x:82, y:66, drag:true, look:"Pilav kepçesi."}
    ],
    decoys:[{em:"🧴",lb:"Oda spreyi",look:"Lavanta kokulu.",no:"Lavanta kokulu yanık pilav?! Daha kötü oldu 🤢"},{em:"🧂",lb:"Baharat",look:"Kimyon.",no:"Kimyon yanık kokusunu örtmedi, pilav da kimyonlu oldu 😅"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>ocak"){ if(s.kapali) return {type:"info", msg:"Ocak kapalı."}; s.kapali=true; return {type:"progress", msg:"Ocağı hemen kapattın 🔥❌", flash:"ocak"}; }
      if(k==="tencere>legen"){ if(!s.kapali) return {msg:"Tencereyi aldın ama ocak yanık kaldı! Önce ocağı kapat, yangın çıkmasın."}; if(s.sogudu) return {type:"info", msg:"Tencere zaten suda."}; s.sogudu=true; return {type:"progress", msg:"Tencerenin dibini soğuk suya oturttun, cızzz... yanma durdu 💦", flash:"tencere"}; }
      if(k==="ekmek>tencere"){
        if(s.sogudu) return {type:"win", msg:"Ekmek yanık kokusunu çekti. Üstten tane tane pilav, misafirler bayıldı! 🍚"};
        return {msg:"Ekmeği koydun ama dip hâlâ yanıyor, koku artıyor!"};
      }
      if(k==="kepce>tencere") return {msg:"Karıştırdın, yanık tabaka bütün pilava karıştı! Şimdi hepsi kokuyor 😩"};
      if(k==="tencere>ocak") return {msg:"Tencere zaten ocakta yanıyor! 😱"};
      return null;
    }
  },
  // ===== 97 =====
  {
    title: "Kardeşinin eline kıymık battı! 🪵",
    story: "Kardeşin tahta bankta oynarken parmağına kıymık battı. Ağlıyor, kimse dokundurmuyor. Annen işte!",
    bg: "linear-gradient(180deg,#fff6ef 0%,#f7cdb0 100%)",
    hint: "Sıkarsan kıymık daha da gömülür! Önce cımbızı kolonyayla temizle, büyüteçle kıymığın hangi yönden girdiğine bak, sonra AYNI yönden çek. En son yara bandı.",
    win: "Temiz cımbız, büyüteç, doğru yönden tek çekiş! Kıymık çıktı, yara bandını yapıştırdın. Kardeşin: \"Hiç acımadı!\"",
    items: [
      {id:"parmak", em:"☝️", lb:s=> s.cikti ? "Parmak (kıymık çıktı)" : s.gordu ? "Parmak (kıymık çaprazlama)" : "Kardeşinin parmağı", x:50, y:28, target:true, look:"Küçük, kahverengi bir çizgi."},
      {id:"cimbiz", em:"🥢", lb:s=> s.temiz ? "Cımbız (temiz)" : "Cımbız", x:16, y:58, drag:true, target:true, look:"İnce uçlu cımbız."},
      {id:"kolonya", em:"🍋", lb:"Kolonya", x:42, y:62, drag:true, look:"Limon kolonyası."},
      {id:"buyutec", em:"🔍", lb:"Büyüteç", x:70, y:58, drag:true, look:"Dedenin büyüteci."},
      {id:"bant", em:"🩹", lb:"Yara bandı", x:84, y:28, drag:true, look:"Çocuklar için desenli."},
      {id:"kardes", em:"😢", lb:"Kardeşin", x:16, y:26, target:true, look:"\"Çok acıyor!\""}
    ],
    decoys:[{em:"🪡",lb:"Toplu iğne",look:"Kirli bir toplu iğne.",no:"Kirli iğneyle kurcalamak mikrop kaptırır! 😱"},{em:"🦷",lb:"Dişlerin",look:"...",no:"Kıymığı dişle çekmek mi?! Hiç hijyenik değil 🤢"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="kolonya>cimbiz"){ s.temiz=true; return {type:"progress", msg:"Cımbızın uçlarını kolonyayla sildin 🍋", flash:"cimbiz"}; }
      if(k==="buyutec>parmak"){ s.gordu=true; return {type:"progress", msg:"Büyüteçle baktın: kıymık soldan sağa çaprazlama girmiş 🔍", flash:"parmak"}; }
      if(k==="cimbiz>parmak"){
        if(!s.temiz) return {msg:"Kirli cımbız! Yarayı mikroplarsın, önce temizle."};
        if(!s.gordu) return {msg:"Körlemesine çektin, kıymık kırıldı, yarısı içeride kaldı! 😣"};
        if(s.cikti) return {type:"info", msg:"Kıymık zaten çıktı."};
        s.cikti=true; return {type:"progress", msg:"Girdiği yönden tek hamlede çektin. Çıktı! ✔", flash:"parmak"};
      }
      if(k==="bant>parmak"){
        if(s.cikti) return {type:"win", msg:"Yara bandını yapıştırdın. Kardeşin gülümsedi: \"Hiç acımadı!\" 🩹😊"};
        return {msg:"Kıymığın üstüne bant yapıştırdın, içeride kaldı! 😩"};
      }
      if(k==="kolonya>parmak") return {msg:"Açık yaraya kolonya döktün, kardeşin acıdan zıpladı! 😭"};
      if(t==="kardes") return {msg:"Kardeşin elini sakladı: \"Önce ne yapacağını söyle!\""};
      return null;
    }
  },
  // ===== 98 =====
  {
    title: "Kurabiyelerin altı yanıyor! 🍪",
    story: "Bayram kurabiyelerinin ilk tepsisi altı kapkara çıktı! Fırın alttan çok yakıyor. İkinci tepsiyi kurtarmalısın.",
    bg: "linear-gradient(180deg,#fff4e6 0%,#f2c89b 100%)",
    hint: "Tepsiye yağlı kâğıt ser, tepsiyi alt rafa değil ORTA rafa koy, fırının derecesini de 170'e düşür.",
    win: "Yağlı kâğıt, orta raf, 170 derece... Kurabiyeler altın sarısı! Bayram sofrasının yıldızı oldu.",
    items: [
      {id:"tepsi", em:"🍪", lb:s=> s.kagit ? "Kurabiye tepsisi (yağlı kâğıtlı)" : "Kurabiye tepsisi", x:20, y:26, drag:true, target:true, look:"Çiğ kurabiyeler dizili."},
      {id:"alt", em:"⬇️", lb:"Fırının alt rafı", x:62, y:62, target:true, look:"Rezistansa çok yakın."},
      {id:"orta", em:"↔️", lb:"Fırının orta rafı", x:62, y:38, target:true, look:"Isı her yerden eşit gelir."},
      {id:"derece", em:"🌡️", lb:s=> s.derece ? "Fırın: 170°" : "Fırın: 220° (çok sıcak)", x:84, y:16, target:true, look:"Düğmeyle ayarlanır."},
      {id:"kagit", em:"📜", lb:"Yağlı kâğıt", x:16, y:62, drag:true, show:s=>!s.kagit, look:"Pişirme kâğıdı."},
      {id:"el", em:"✋", lb:"Elin", x:30, y:86, drag:true, look:"Düğmeyi çevirmek için."}
    ],
    decoys:[{em:"🧈",lb:"Tereyağı",look:"Bir kalıp tereyağı.",no:"Tepsiye daha çok yağ sürdün, altı kızardı daha da!"},{em:"⏱️",lb:"Zamanlayıcı",look:"Mutfak saati.",no:"Süreyi kısalttın, altı yine yandı, üstü çiğ kaldı! 😩"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="kagit>tepsi"){ s.kagit=true; return {type:"progress", msg:"Tepsiye yağlı kâğıt serdin, kurabiyeleri üstüne dizdin 📜", flash:"tepsi"}; }
      if(k==="el>derece"){ if(s.derece) return {type:"info", msg:"Zaten 170°."}; s.derece=true; return {type:"progress", msg:"Fırını 170 dereceye düşürdün 🌡️", flash:"derece"}; }
      if(k==="tepsi>alt") return {msg:"Alt raf rezistansa çok yakın! İkinci tepsinin de altı yandı 😩"};
      if(k==="tepsi>orta"){
        if(s.kagit && s.derece) return {type:"win", msg:"15 dakika sonra: altın sarısı, mis kokulu kurabiyeler! 🍪✨"};
        return {msg:"Orta raf iyi ama "+(!s.derece?"fırın hâlâ 220°, kenarlar yandı! ":"")+(!s.kagit?"tepsiye yapıştılar, kırıldılar!":"")};
      }
      return null;
    }
  },
  // ===== 99 =====
  {
    title: "Yangın alarmı çalıyor! 🚨",
    story: "Apartmanda yangın alarmı çaldı! Koridordan hafif duman kokusu geliyor. Evde yalnızsın ve 5. kattasın.",
    bg: "linear-gradient(180deg,#ffe8e3 0%,#f39b8b 100%)",
    hint: "Kapıyı açmadan önce elinin TERSİYLE kapıya dokun: sıcaksa açma! Ağzını ıslak bezle kapat, eğilerek merdivenden in. Yangında ASANSÖR asla kullanılmaz.",
    win: "Kapıyı kontrol ettin, ağzını ıslak havluyla kapattın, eğilerek merdivenden indin. Toplanma alanında itfaiye 'Aferin!' dedi.",
    items: [
      {id:"kapi", em:"🚪", lb:s=> s.kontrol ? "Kapı (soğuk, güvenli)" : "Daire kapısı", x:50, y:24, target:true, look:"Koridora açılıyor."},
      {id:"asansor", em:"🛗", lb:"Asansör", x:84, y:26, target:true, look:"Kapısı açık bekliyor."},
      {id:"merdiven", em:"🪜", lb:"Yangın merdiveni", x:16, y:26, target:true, look:"Aşağıya iniyor."},
      {id:"el", em:"🤚", lb:"Elinin tersi", x:20, y:62, drag:true, look:"Kapının sıcaklığını kontrol etmek için."},
      {id:"havlu", em:"🧻", lb:"Islak havlu", x:50, y:66, drag:true, show:s=>!s.havlu, look:"Musluktan ıslattın."},
      {id:"sen", em:"🧍", lb:s=> s.havlu ? "Sen (ağzın kapalı)" : "Sen", x:80, y:62, drag:true, target:true, look:"Sakin ol, düşün!"}
    ],
    decoys:[{em:"🎒",lb:"Eşyaların",look:"Tablet, oyun konsolu...",no:"Eşya toplamak için vakit kaybetme! Önce can güvenliği. 🚫"},{em:"💧",lb:"Su kovası",look:"Kova dolusu su.",no:"Yangını kendin söndürmeye çalışma, kaç ve itfaiyeyi bekle!"}],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="el>kapi"){ s.kontrol=true; return {type:"progress", msg:"Elinin tersiyle dokundun: kapı soğuk. Koridor güvenli, kapıyı açtın 🤚", flash:"kapi"}; }
      if(k==="havlu>sen"){ s.havlu=true; return {type:"progress", msg:"Islak havluyu ağzına ve burnuna kapattın 🧻", flash:"sen"}; }
      if(k==="sen>asansor") return {msg:"YANGINDA ASANSÖR KULLANILMAZ! Elektrik kesilirse içinde kalırsın 😱"};
      if(k==="sen>merdiven"){
        if(!s.kontrol) return {msg:"Kapıyı kontrol etmeden açıp fırladın! Ya koridor alevler içindeyse? 😱"};
        if(!s.havlu) return {msg:"Merdivende duman var, öksürmeye başladın! Ağzını bir şeyle kapat 😷"};
        return {type:"win", msg:"Eğilerek, tırabzana tutunarak indin. Toplanma alanındasın, güvendesin! 🚒✔"};
      }
      if(k==="sen>kapi") return {msg:"Dur! Kapıyı açmadan önce sıcak mı diye kontrol etmelisin!"};
      if(k==="havlu>kapi") return {msg:"Havluyu kapıya mı sardın? Ağzına lazım!"};
      return null;
    }
  },
  // ===== 100 =====
  {
    title: "BÜYÜK FİNAL: Dedenin sandığı! 🗝️",
    story: "Dede'nin eski sandığı 3 haneli şifreyle kilitli. Dede gülümsüyor: \"Şifre bu odada saklı. Önce takvimdeki gün, sonra DURMUŞ saat, sonra torunlarımın sayısı.\"",
    bg: "linear-gradient(180deg,#f7e7c9 0%,#c99e63 100%)",
    hint: "Takvime büyüteçle bak. Aynadaki saat TERS görünür, gerçek saati görmek için koltuğu çek. Fotoğrafın ARKASINI çevir. Sonra şifre kâğıdını sandığa götür.",
    win: "7-4-3! Sandık gıcırdayarak açıldı. İçinde dedenin çocukluk oyuncakları ve bir not: \"Aklın var, helal olsun!\" 🏆",
    items: [
      {id:"sandik", em:"🧰", lb:"Kilitli sandık (_ _ _)", x:50, y:22, target:true, look:"Pirinç kilitli, 3 haneli."},
      {id:"takvim", em:"📅", lb:"Duvar takvimi", x:14, y:22, target:true, look:"Bir gün kırmızı kalemle daire içine alınmış ama yazı çok küçük."},
      {id:"ayna", em:"🪞", lb:"Ayna", x:86, y:22, target:true, look:"Aynada arkadaki duvar saati görünüyor."},
      {id:"koltuk", em:"🛋️", lb:s=> s.cekildi ? "Koltuk (çekildi)" : "Koltuk", x:84, y:46, target:true, look:"Arkasında duvarda bir şey var gibi."},
      {id:"saat", em:"🕓", lb:"Duvar saati (durmuş)", x:50, y:64, target:true, show:s=>s.cekildi, look:"Pili bitmiş, ibreler durmuş."},
      {id:"foto", em:"🖼️", lb:s=> s.cevrildi ? "Fotoğraf (arkası çevrildi)" : "Aile fotoğrafı", x:16, y:46, target:true, look:"Dede, nine ve torunlar bir ağacın altında."},
      {id:"buyutec", em:"🔍", lb:"Büyüteç", x:16, y:86, drag:true, look:"Küçük yazıları okumak için."},
      {id:"el", em:"✋", lb:"Elin", x:48, y:86, drag:true, look:"Çekmek, çevirmek için."},
      {id:"kagit", em:"📝", lb:s=> "Şifre: "+(s.h1||"_")+" "+(s.h2||"_")+" "+(s.h3||"_"), x:80, y:86, drag:true, look:"Bulduğun rakamları buraya yazıyorsun."},
      {id:"dede", em:"👴", lb:"Dede", x:50, y:44, target:true, look:"\"Önce gün, sonra DURMUŞ saat, sonra torunlarım. Gözlerine her zaman güvenme!\""}
    ],
    combine(d,t,s){
      const k=d+">"+t;
      if(k==="buyutec>takvim"){ s.h1="7"; return {type:"progress", msg:"Büyüteçle okudun: 7 Mart daire içinde! İlk rakam 7 📅", flash:"kagit"}; }
      if(k==="buyutec>ayna" || k==="el>ayna"){ s.h2="8"; return {type:"progress", msg:"Aynadaki saat 8:00 gösteriyor... İkinci rakama 8 yazdın. (Ama aynada her şey ters değil midir? 🤔)", flash:"kagit"}; }
      if(k==="el>koltuk"){ if(s.cekildi) return {type:"info", msg:"Koltuk zaten çekildi."}; s.cekildi=true; return {type:"progress", msg:"Koltuğu çektin, arkasında duvar saati çıktı! 🕓", flash:"saat"}; }
      if(k==="buyutec>saat" || k==="el>saat"){ s.h2="4"; return {type:"progress", msg:"Gerçek saate baktın: 4:00'te durmuş! İkinci rakam 4 🕓", flash:"kagit"}; }
      if(k==="el>foto"){ s.cevrildi=true; s.h3="3"; return {type:"progress", msg:"Fotoğrafı çevirdin, arkasında: \"Üç torunumla, 2009\". Üçüncü rakam 3 🖼️", flash:"kagit"}; }
      if(k==="buyutec>foto") return {type:"info", msg:"Ön yüzde bir ağaç ve gülen yüzler... rakam yok. Arkasına baksan?"};
      if(k==="kagit>sandik"){
        const sifre=(s.h1||"_")+(s.h2||"_")+(s.h3||"_");
        if(sifre==="743") return {type:"win", msg:"Klik! 7-4-3 doğru! Sandık açıldı 🧰✨"};
        if(sifre.includes("_")) return {msg:"Şifre eksik! Kilit açılmadı. Bütün rakamları bul."};
        s.h2=s.h2==="8"?null:s.h2; return {msg:"Kilit açılmadı! "+sifre+" yanlış. Dede: \"Gözlerine her zaman güvenme demiştim!\" 😉"};
      }
      if(k==="kagit>dede") return {msg:"Dede: \"Şifreyi bana değil, sandığa söyle!\""};
      if(k==="buyutec>sandik") return {type:"info", msg:"Kilitte üç döner rakam var."};
      return null;
    }
  },
];
