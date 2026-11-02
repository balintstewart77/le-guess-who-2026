// Le Guess Who? 2026 — 5–8 November, Utrecht.
// Timetable copied from https://leguesswho.com/timetable on 2 November 2026.
// Venue addresses from https://leguesswho.com/about/venues/<slug>; coordinates from OpenStreetMap.

window.LGW_VENUES = {
  tivoli:          { name: "TivoliVredenburg",         address: "Vredenburgkade 11, 3511 WC",       lat: 52.09245, lng: 5.11277, page: "tivolivredenburg" },
  stadsschouwburg: { name: "Stadsschouwburg",          address: "Lucasbolwerk 24", lat: 52.09339, lng: 5.12750, page: "stadsschouwburg-utrecht" },
  jacobikerk:      { name: "Jacobikerk",               address: "St Jacobsstraat 171, 3511 BP",     lat: 52.09506, lng: 5.11525, page: "jacobikerk" },
  helling:         { name: "De Helling",               address: "Helling 7, 3523 CB",               lat: 52.07683, lng: 5.12177, page: "de-helling" },
  kikker:          { name: "Theater Kikker",           address: "Ganzenmarkt 14, 3512 GD",          lat: 52.09221, lng: 5.11919, page: "theater-kikker" },
  acu:             { name: "ACU",                      address: "Voorstraat 71, 3512 BX",           lat: 52.09506, lng: 5.12194, page: "acu" },
  ekko:            { name: "EKKO",                     address: "Bemuurde Weerd Westzijde 3, 3513 BH", lat: 52.09750, lng: 5.11450, page: "ekko" },
  speelklok:       { name: "Museum Speelklok",         address: "Steenweg 6, 3511 JP",              lat: 52.09073, lng: 5.11941, page: "museum-speelklok" },
  kapitaal:        { name: "Kapitaal",                 address: "Paardenveld 5, 3511 RG",           lat: 52.09507, lng: 5.11160, page: "kapitaal" },
  kabul:           { name: "KABUL à GoGo",             address: "Gietijzerstraat 3, 3534 AV",       lat: 52.10316, lng: 5.08305, page: "kabul-a-gogo" },
  dbs:             { name: "dB's",                     address: "Vlampijpstraat 63, 3534 AR",       lat: 52.10571, lng: 5.08334, page: "dbs" },
  was:             { name: "WAS.",                     address: "Tractieweg 41, 3534 AP",           lat: 52.10539, lng: 5.08011, page: "was" },
  basis:           { name: "BASIS",                    address: "Oudegracht aan de Werf 97, 3511 AL", lat: 52.09289, lng: 5.11665, page: "basis" },
  // "extra" venues: talks, film, exhibitions and the free U? city programme
  theaterutrecht:  { name: "Theater Utrecht",          address: "Boorstraat 107, 3513 SE",          lat: 52.09697, lng: 5.10502, page: "theater-utrecht", extra: true },
  slachtstraat:    { name: "Slachtstraat Filmtheater", address: "Slachtstraat 5, 3512 BC",          lat: 52.09309, lng: 5.11967, page: "slachtstraat-filmtheater", extra: true },
  centraal:        { name: "Centraal Museum",          address: "Agnietenstraat 1, 3512 XA",        lat: 52.08361, lng: 5.12566, page: "centraal-museum", extra: true },
  bak:             { name: "BAK / Basecamp",           address: "Pauwstraat 13A, 3512 TG",          lat: 52.09453, lng: 5.11780, page: "bak-basecamp", extra: true },
  moira:           { name: "Moira",                    address: "Wolvenstraat 10, 3512 CH",         lat: 52.09708, lng: 5.12375, page: "moira", extra: true },
  cartesius:       { name: "Cartesius Area",           address: "Cartesiusweg (U? city programme)", lat: 52.10248, lng: 5.08812, extra: true },
};

// "## date" starts a day, "# venue | stage" starts a stage,
// then "start-end | artist | project (optional) | lineup slug (optional)".
// Times after midnight belong to the same festival night.
window.LGW_TIMETABLE = `
## 2026-11-05
# tivoli | Grote Zaal
18:30-19:00 | Mohammed el-Kurd | aja monet | mohammed-el-kurd
19:45-20:45 | Alsarah & The Nubatones | aja monet | alsarah-the-nubatones
21:45-22:45 | Harriet Tubman & Georgia Anne Muldrow | aja monet | harriet-tubman-georgia-anne-muldrow
23:30-00:30 | aja monet | aja monet | aja-monet
01:00-01:45 | Shadia Mansour | aja monet | shadia-mansour
# tivoli | Ronda
19:00-20:00 | Tortoise | | tortoise
20:45-21:45 | Ibex Band | | ibex-band
22:45-00:45 | Water Damage presents Static Ecstatic | | water-damage-presents-static-ecstatic
01:30-02:15 | Arsenal Mikebe ft. HHY & Valentina Magaletti | | arsenal-mikebe-ft-hhy-valentina-magaletti
# tivoli | Pandora
19:45-20:45 | Tainá e i o u | | taina-e-i-o-u
21:45-22:30 | Nirosta Steel | | nirosta-steel
23:15-00:00 | GENA feat. Liv.e & Karriem Riggins | | gena-feat-live-karriem-riggins
00:45-01:30 | The Shits | | the-shits
# tivoli | Cloud Nine
18:45-19:30 | Cody ChesnuTT presents MAKING SCIENCE SIMPLE (RSVP) | aja monet | cody-chesnutt-presents-making-science-simple-rsvp
20:45-21:45 | Mohammad Syfkhan | | mohammad-syfkhan
22:30-23:30 | Aïta Mon Amour | | aita-mon-amour
00:30-01:30 | Kampire | | kampire
# tivoli | Hertz
19:30-20:45 | ęmí: freedomsong by Rohan Ayinde and Tayo Rapoport | | emi-freedomsong-by-rohan-ayinde-and-tayo-rapoport
21:45-22:45 | Ana Roxanne | | ana-roxanne
23:45-00:40 | Ángeles Toledano | | angeles-toledano
# tivoli | COSMOS Foyer / Pandora Studio
19:00-20:45 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
20:45-21:20 | More Eaze | COSMOS | more-eaze
21:20-22:00 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
22:00-23:00 | YPY | COSMOS | ypy
23:00-23:30 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
23:30-00:00 | Sign Libra | COSMOS | sign-libra-robert-nikolajev
00:00-00:30 | Robert Nikolajev | COSMOS | sign-libra-robert-nikolajev
00:30-02:00 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
# centraal | Annex
11:00-17:00 | MUSCLE by Karimah Ashadu | | muscle-by-karimah-ashadu

## 2026-11-06
# tivoli | Ronda
17:00-18:00 | goat (JP) | Tropical Fuck Storm | goat-jp
18:45-19:45 | OOIOO | | ooioo
20:45-21:45 | 20 Years of GNOD | | 20-years-of-gnod
22:45-23:45 | Melt-Banana | Los Thuthanaka | melt-banana
00:30-01:30 | Chuquimamani-Condori presents DJ E | Los Thuthanaka | chuquimamani-condori-presents-dj-e
# tivoli | Pandora
18:00-18:45 | Joshua Chuquimia Crampton | Los Thuthanaka | joshua-chuquimia-crampton
19:45-20:45 | Pra Gira Girar | | pra-gira-girar
21:45-22:45 | Khadija Warzazia & Bnat el Houariyat | | khadija-warzazia-bnat-el-houariyat
23:30-01:00 | Galecta | | galecta
01:00-02:00 | DJ K | | dj-k
# tivoli | Cloud Nine
16:30-17:00 | Georgia Anne Muldrow presents The Windgrease Session (RSVP) | aja monet | georgia-anne-muldrow-presents-the-windgrease-session-rsvp
17:45-18:30 | Cody ChesnuTT presents MAKING SCIENCE SIMPLE (RSVP) | aja monet | cody-chesnutt-presents-making-science-simple-rsvp
20:30-21:20 | Loraine James | | loraine-james
22:15-23:00 | Tercet Imperial | | tercet-imperial
23:45-00:30 | King Ayisoba | aja monet | king-ayisoba
01:00-02:00 | Serokolo 7 | | serokolo-7
# tivoli | Hertz
17:45-18:35 | Maryam Saleh | | maryam-saleh
19:45-20:45 | Tony & Billa | | tony-billa
21:45-22:45 | أحمد [Ahmed] | Tropical Fuck Storm | ahmd-ahmed
23:45-00:45 | Amparo Heredia "La Repompilla" | Tropical Fuck Storm | amparo-heredia-la-repompilla
# tivoli | COSMOS Foyer / Pandora Studio
17:00-17:45 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
17:45-18:15 | Kareem Samara | COSMOS | kareem-samara
18:15-19:00 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
19:00-20:00 | Spāre & Roma Vjazemski | COSMOS | spare-roma-vjazemski
20:00-20:45 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
20:45-21:30 | Chuck Roth | Tropical Fuck Storm | chuck-roth
21:30-22:15 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
22:15-22:55 | Radio Hito | COSMOS | radio-hito
23:00-01:00 | Palestinian Sound Archive | aja monet | palestinian-sound-archive
01:00-02:00 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
# stadsschouwburg | Main Room
16:30-17:30 | Craven Faults | | craven-faults
19:00-20:00 | SHABAKA | aja monet | shabaka
21:15-22:45 | Yasuaki Shimizu | | yasuaki-shimizu
# jacobikerk |
15:45-16:30 | Roy Montgomery & Martha Skye Murphy | | roy-montgomery-martha-skye-murphy
18:00-19:00 | Leo Middea | | leo-middea
20:00-20:55 | Ángeles Toledano | | angeles-toledano
22:30-23:30 | Gigi Masin - Movement for | Los Thuthanaka | gigi-masin-movement-for
# helling |
18:00-19:00 | TENGGER | | tengger
19:45-20:45 | Bono / Burattini | | bono-burattini
21:45-22:35 | Billy Fuller | | billy-fuller
23:30-00:30 | Horse Lords | | horse-lords
01:15-02:00 | Deafkids | | deafkids
# kikker |
16:00-16:45 | Gintė Preisaitė | COSMOS | ginte-preisaite
17:30-18:15 | Maarja Nuut | COSMOS | maarja-nuut
19:00-19:45 | Carmen Villain | | carmen-villain
20:30-21:15 | Rai Tateishi (live processing by Koshiro Hino) | | rai-tateishi-live-processing-by-koshiro-hino
# acu |
18:15-19:00 | Devon Rexi | | devon-rexi
19:45-20:30 | The Ensemble of Cultural Approximation | | the-ensemble-of-cultural-approximation
21:15-22:15 | Conjunto Media Luna | | conjunto-media-luna
# ekko |
17:15-18:15 | ESINAM | aja monet | esinam
19:00-19:45 | ouri | | ouri
20:30-21:20 | A.R. Kane | | ar-kane
21:50-22:35 | Gabe 'Nandez | | gabe-nandez
23:15-23:55 | H31R | | h31r
00:15-01:15 | DJ Plead | | dj-plead
01:35-02:35 | Ambu Bambu | | ambu-bambu
# speelklok |
16:15-17:00 | Roxanne Tataei with HKU students | | roxanne-tataei-with-hku-students
18:30-19:10 | Posuposu Otani | | posuposu-otani
# kapitaal |
14:00-14:30 | Ricardo Dias Gomes | | ricardo-dias-gomes
15:30-16:10 | Radio Hito | COSMOS | radio-hito
17:15-17:55 | Conjunto Media Luna | | conjunto-media-luna
# theaterutrecht | Theater Zaal
10:00-11:00 | Diasporic Soundscapes: The Urgency of Intangible Cultural Heritage | Sound & Culture Summit | diasporic-soundscapes-the-urgency-of-intangible-cultural-heritage
12:00-13:00 | The Art of Dissent: Political Expression in the Music Industry | Sound & Culture Summit | the-art-of-dissent-political-expression-in-the-music-industry
14:00-15:00 | The Politics of Culture: Responsibility in the Cultural Sector | Sound & Culture Summit | the-politics-of-culture-responsibility-in-the-cultural-sector
16:00-17:00 | Right Relations: Bridging The Gap Between Communities and Institutions | Sound & Culture Summit | right-relations-bridging-the-gap-between-communities-and-institutions
# theaterutrecht | Studio 1
11:00-12:30 | Workshop: Artist Visa Toolkit (RSVP) | Sound & Culture Summit | workshop-artist-visa-toolkit-rsvp
13:30-15:00 | Workshop: ęmí: freedomsong / The Humming Score (RSVP) | Sound & Culture Summit | workshop-emi-freedomsong-the-humming-score-rsvp
15:30-17:00 | Workshop: Decode & Deconstruct with Ableton (RSVP) | Sound & Culture Summit | workshop-decode-deconstruct-with-ableton-rsvp
# theaterutrecht | Studio 3
11:00-12:00 | How Black Music Took Over the World: A Book Discussion with Melvin Gibbs | Sound & Culture Summit | how-black-music-took-over-the-world-a-book-discussion-with-melvin-gibbs
12:30-13:30 | Tech, Sound, Power: Sounds Systems and Dub | Sound & Culture Summit | tech-sound-power-sounds-systems-and-dub
13:30-14:30 | Legacies of Resistance: The Evolution of Dub | Sound & Culture Summit | legacies-of-resistance-the-evolution-of-dub
15:00-16:30 | VOICES | Sound & Culture Summit | voices
# theaterutrecht | Koepel Zaal
10:30-11:15 | How To Curate a Line-Up | Sound & Culture Summit | how-to-curate-a-line-up
11:45-12:30 | How To Run a Label | Sound & Culture Summit | how-to-run-a-label
13:00-13:45 | How To Set Up an Online Radio Station | Sound & Culture Summit | how-to-set-up-an-online-radio-station
14:15-15:00 | How To Dub | Sound & Culture Summit | how-to-dub
15:30-17:30 | Palestinian Sound Archive: My beautiful side of the archive | Sound & Culture Summit | palestinian-sound-archive-my-beautiful-side-of-the-archive
# theaterutrecht | Foyer
10:00-17:00 | TIMES Documentaries | Sound & Culture Summit | times-documentaries
# slachtstraat | Zaal 1
12:30-13:45 | AFRICA IS THE FUTURE (Nicolas Premier) + Q&A | aja monet | africa-is-the-future-nicolas-premier-qa
14:45-16:38 | BLKNWS: Terms & Conditions (Kahlil Joseph) | aja monet | blknws-terms-conditions-kahlil-joseph
# slachtstraat | Zaal 2
13:15-13:44 | Ensayo #1 (tiempos de guerra) | Film | ensayo-1-tiempos-de-guerra
15:30-16:00 | Lmra Heyya Kulshi — Woman Is Everything | Film | lmra-heyya-kulshi-woman-is-everything
# centraal | Annex
11:00-17:00 | MUSCLE by Karimah Ashadu | | muscle-by-karimah-ashadu

## 2026-11-07
# tivoli | Grote Zaal
18:00-18:45 | Pitch, Pigeon, Puerta | | pitch-pigeon-puerta
19:30-20:15 | GENA feat. Liv.e & Karriem Riggins | | gena-feat-live-karriem-riggins
21:15-22:15 | Kelsey Lu | | kelsey-lu
23:00-00:00 | Raúl Monsalve y Los Forajidos | | raul-monsalve-y-los-forajidos
00:45-01:15 | Comunidad Sikuris Berlin | Los Thuthanaka | comunidad-sikuris-berlin
01:15-02:15 | Los Thuthanaka | Los Thuthanaka | los-thuthanaka
# tivoli | Ronda
17:15-17:55 | Ryoichi Kurokawa | | ryoichi-kurokawa
18:45-19:30 | Wu-Lu & POiSON ANNA present: BAKERZ DOZEN | | wu-lu-poison-anna-present-bakerz-dozen
20:15-21:15 | The Ex & Brass Unbound | | the-ex-brass-unbound
22:15-23:00 | Deafkids | | deafkids
00:00-00:45 | EDU & JUDGITZU | | edu-judgitzu
# tivoli | Pandora
17:45-18:45 | REMIX by Sharon MN | Los Thuthanaka | remix-by-sharon-mn
19:30-20:30 | weed420 | | weed420
21:15-22:15 | Martina Camargo | | martina-camargo
23:00-23:50 | Tshegue | aja monet | tshegue
00:45-02:15 | Danifox b2b Lycox | | danifox-b2b-lycox
# tivoli | Cloud Nine
18:00-18:45 | Jessica Moss & Tony Buck | | jessica-moss-tony-buck
19:45-20:35 | Maalem Houssam Guinia | | maalem-houssam-guinia
21:30-22:15 | Mark Fell & Pat Thomas | Tropical Fuck Storm | mark-fell-pat-thomas
23:15-00:00 | Heith & Tarawangsawelas | | heith-tarawangsawelas
01:00-01:45 | BBBBBBB | | bbbbbbb
# tivoli | Hertz
19:00-19:45 | Okkyung Lee presents 'gyeol' | | okkyung-lee-presents-gyeol
20:30-21:30 | Mai Mai Mai & Tareq Abboushi | | mai-mai-mai-tareq-abboushi
22:15-23:05 | Ustad Hassan Haider Khan | | ustad-hassan-haider-khan
00:00-00:50 | Tony Njoku | | tony-njoku
# tivoli | COSMOS Foyer / Pandora Studio
17:15-18:45 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
18:45-19:45 | Teatre & Maarja Nuut | COSMOS | teatre-maarja-nuut
19:45-20:30 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
20:30-21:00 | Comunidad Sikuris Berlin | Los Thuthanaka | comunidad-sikuris-berlin
21:00-22:45 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
22:45-23:30 | Brigadera | COSMOS | brigadera
23:30-00:30 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
00:30-02:00 | MF Andrade | Sounds of Cabo Verde | mf-andrade
# kabul |
16:00-17:00 | Nakibembe Embaire Group live mixed by Mad Professor | 24 HOUR DUB | nakibembe-embaire-group-live-mixed-by-mad-professor
17:00-18:30 | Dubplate Pearl | 24 HOUR DUB | dubplate-pearl
18:30-19:30 | Mad Professor & Sista Aisha | 24 HOUR DUB | mad-professor-sista-aisha
19:30-20:30 | Habesha x Empress Black Omolo | 24 HOUR DUB | habesha-x-empress-black-omolo
20:30-21:30 | Scientist performing 'Scientist Rids the World of the Evil Curse of The Vampires' | 24 HOUR DUB | scientist-performing-scientist-rids-the-world-of-the-evil-curse-of-the-vampires
21:30-23:00 | Greentea Selecta | 24 HOUR DUB | greentea-selecta
23:00-00:00 | The Bug vs Ghost Dubs | 24 HOUR DUB | the-bug-vs-ghost-dubs
00:00-02:00 | Aba Shanti-I | 24 HOUR DUB | aba-shanti-i
02:00-03:00 | The Bug feat. Warrior Queen | 24 HOUR DUB | the-bug-feat-warrior-queen
03:00-04:00 | Tash LC | 24 HOUR DUB | tash-lc
04:00-05:30 | Introspekt | 24 HOUR DUB | introspekt
05:30-06:30 | Chinnamasta | 24 HOUR DUB | chinnamasta
06:30-07:30 | CARISTA | 24 HOUR DUB | carista
07:30-08:30 | Azu Tiwaline | 24 HOUR DUB | azu-tiwaline
# helling |
15:30-16:20 | Nancy Vieira | Sounds of Cabo Verde | nancy-vieira
16:20-16:50 | MF Andrade | Sounds of Cabo Verde | mf-andrade
16:50-17:20 | Sima nos é só nos | Sounds of Cabo Verde | sima-nos-e-so-nos
17:20-17:50 | MF Andrade | Sounds of Cabo Verde | mf-andrade
17:50-18:35 | Acácia Maior | Sounds of Cabo Verde | acacia-maior
18:35-18:45 | Tamboreiras de Rotterdam | Sounds of Cabo Verde | tamboreiras-de-rotterdam
18:45-19:30 | Frequência Tabanka DJ set | Sounds of Cabo Verde | frequencia-tabanka-dj-set
19:30-20:20 | Grupo Pilon | Sounds of Cabo Verde | grupo-pilon
20:20-21:05 | Frequência Tabanka DJ set + MF Andrade | Sounds of Cabo Verde | frequencia-tabanka-dj-set
21:05-21:55 | Fidju Kitxora | Sounds of Cabo Verde | fidju-kitxora
# jacobikerk |
16:00-17:00 | Low Jack presents Lacrimosa with Ensemble vocal Voix des Outre-Mer | | low-jack-presents-lacrimosa-with-ensemble-vocal-voix-des-outre-mer
17:45-18:15 | Fadi Tabbal | | fadi-tabbal
19:00-19:45 | BETHLEHEM | | bethlehem
20:45-21:45 | Grouper | | grouper
# kapitaal |
14:00-14:40 | Álvaro Lancelotti | | alvaro-lancelotti
15:30-16:10 | Sarine & Yantra | | sarine-yantra
17:15-17:45 | Spooky-J | | spooky-j
# speelklok |
16:15-17:00 | Indrė Jurgelevičiūtė & Eli Wewentxu | | indre-jurgeleviciute-eli-wewentxu
17:45-18:30 | CALID | | calid
# kikker |
15:30-16:15 | The Talk (Heith, Günseli Yalcinkaya, Andrea Belosi) | | the-talk-heith-gunseli-yalcinkaya-andrea-belosi
17:15-17:55 | Posuposu Otani | | posuposu-otani
19:30-20:30 | ZÖJ | Tropical Fuck Storm | zoj
# ekko |
16:45-17:30 | Jules Reidy | | jules-reidy
18:15-19:05 | Chuck Roth | Tropical Fuck Storm | chuck-roth
19:55-20:45 | Bill Orcutt | Tropical Fuck Storm | bill-orcutt
21:30-22:10 | Deradoorian | | deradoorian
23:00-00:00 | MEMORIALS | Tropical Fuck Storm | memorials
00:45-01:35 | Black Bombaim & Isaiah Mitchell | | black-bombaim-isaiah-mitchell
01:35-03:00 | DJ Fitz | | dj-fitz
# dbs | Main Stage
16:15-16:45 | Sublux | totally wired | sublux
17:45-18:25 | The Woman | totally wired | the-woman
19:30-20:00 | Sarsour صرصور | totally wired | sarsour-srsor
21:00-21:25 | Snake Eater مارخور | totally wired | snake-eater-markhor
22:25-23:00 | ZANJEER زنجیر | totally wired | zanjeer-zngyr
# dbs | Bar Stage
15:15-16:00 | The Earwurms | totally wired | the-earwurms
17:05-17:35 | Gimic | totally wired | gimic
18:30-19:10 | Emirhan X | totally wired | emirhan-x
20:00-20:40 | BeaBop | totally wired | beabop
21:45-22:15 | BOMBSTRAP | totally wired | bombstrap
# was |
23:00-01:00 | jannah | WAS. | jannah
01:00-05:00 | Eris Drew & Octo Octa | WAS. | eris-drew-octo-octa
05:00-07:00 | Hervé | WAS. | herve
# cartesius |
13:00-20:00 | U? (free city programme) | | u
# slachtstraat | Zaal 1
12:30-13:29 | Blakk wi Blak...k...k | Film | blakk-wi-blakkk
14:30-16:05 | La guitarra flamenca de Yerai Cortés | Film | la-guitarra-flamenca-de-yerai-cortes
# slachtstraat | Zaal 2
13:00-15:30 | COSMOS Embassy Films + Q&A | COSMOS | cosmos-embassy-films-qa
# centraal | Annex
11:00-17:00 | MUSCLE by Karimah Ashadu | | muscle-by-karimah-ashadu

## 2026-11-08
# tivoli | Grote Zaal
16:00-17:10 | Yerai Cortés | | yerai-cortes
18:15-19:30 | Mazaher | | mazaher
20:30-22:00 | Dirty Three | Tropical Fuck Storm | dirty-three
# tivoli | Ronda
15:00-16:00 | Juana Molina | | juana-molina
17:15-18:15 | Etran de L'Aïr | Tropical Fuck Storm | etran-de-lair
19:30-20:20 | Holy Tongue | | holy-tongue
22:00-23:00 | Nakibembe Embaire Group | | nakibembe-embaire-group
# tivoli | Pandora
16:15-17:10 | Radwan Ghazi Moumneh & Frédéric D. Oberland | | radwan-ghazi-moumneh-frederic-d-oberland
18:00-19:00 | weed420 | | weed420
20:10-21:00 | Bitchin Bajas | | bitchin-bajas
21:30-22:15 | Aunty Rayzor | | aunty-rayzor
23:00-02:30 | Afterparty | |
# tivoli | Cloud Nine
15:00-23:00 | WAI8 | KMRU presents WAI8 | wai8
# tivoli | Hertz
15:15-16:15 | FUJI|||||||||||TA | Tropical Fuck Storm | fuji-ta
17:15-18:00 | Mother Tongue | | mother-tongue
19:00-20:00 | Henri Texier Quartet | | henri-texier-quartet
21:00-22:10 | Ishaaq Aarkistra & Ustad Hassan Haider Khan | Tropical Fuck Storm | ishaaq-aarkistra-ustad-hassan-haider-khan
# tivoli | COSMOS Foyer / Pandora Studio
15:15-15:45 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
15:45-16:45 | R_R_ & Gintė Preisaitė | COSMOS | r-r-ginte-preisaite
16:45-17:30 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
17:30-18:00 | Marielle Groven | COSMOS | marielle-groven
18:00-19:00 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
19:00-19:30 | Lida Brouskari | COSMOS | lida-brouskari
19:30-20:30 | Michael Holland | COSMOS | michael-holland
20:30-22:00 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
22:00-00:00 | Mama Demba | COSMOS | mama-demba
00:00-01:30 | COSMOS x Refuge Worldwide | COSMOS | cosmos-x-refuge-worldwide
# kabul |
08:30-09:30 | Kelman Duran live mixed by Chernosyl | 24 HOUR DUB | kelman-duran-live-mixed-by-chernosyl
09:30-10:30 | ojoo | 24 HOUR DUB | ojoo
10:30-11:15 | SEEKERSINTERNATIONAL | 24 HOUR DUB | seekersinternational
11:15-13:15 | Touching Bass DJs | 24 HOUR DUB | touching-bass-djs
13:15-14:15 | Star David Connection (Nyabinghi) | 24 HOUR DUB | star-david-connection-nyabinghi
14:15-15:00 | Mutabaruka | 24 HOUR DUB | mutabaruka
15:00-16:00 | Kat7 (Exile Di Brave and Gavsborg) | 24 HOUR DUB | kat7-exile-di-brave-and-gavsborg
# dbs | Main Stage
14:30-15:15 | Jess Ribeiro | | jess-ribeiro
16:00-16:50 | Bleak Squad | Tropical Fuck Storm | bleak-squad
# basis |
15:30-21:00 | … (live electronic) | Curated by Perry Gits | dotdotdot
# bak |
11:30-17:00 | EPHEMERA: PRACTICES OF PRESERVATION | Curated by Fai Aldhukair | ephemera-practices-of-preservation
# moira |
14:00-20:00 | Tender Monsters and Filthy Queers | Curated by Jô Páscoa | tender-monsters-and-filthy-queers
# centraal | Annex
11:00-17:00 | MUSCLE by Karimah Ashadu | | muscle-by-karimah-ashadu
`;
