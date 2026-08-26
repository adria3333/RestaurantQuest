import { DialogueQuestion } from '../types';

export const DIALOGUE_QUESTIONS: DialogueQuestion[] = [
  {
    id: 1,
    scenario: "Arrival & Table Reservation",
    scenarioHu: "Érkezés és asztalfoglalás",
    waiterText: "Good evening! Welcome to The Olive Tree. Do you have a reservation?",
    waiterTranslationHu: "Jó estét kívánok! Üdvözöljük a The Olive Tree-ben. Van asztalfoglalásuk?",
    category: "booking",
    tipsEn: "Use polite formula: 'We have a booking/reservation under the name...'",
    tipsHu: "Használd az udvarias formát: 'We have a booking/reservation under the name...'",
    options: [
      {
        id: "1a",
        text: "No, we don't. Just give us any empty table by the window.",
        isCorrect: false,
        explanationEn: "'Just give us' sounds demanding and bossy to the host. In restaurant etiquette, politely ask: 'No, we don't. Do you happen to have a table for two available?'",
        explanationHu: "A 'Just give us' (Csak adjatok) túl parancsoló és követelőző a fogadóval szemben. Udvariasabban: 'No, we don't. Do you have a table for two available?'",
        toneNote: "Too direct / Impolite"
      },
      {
        id: "1b",
        text: "Yes, we have a booking under the name Miller.",
        isCorrect: true,
        explanationEn: "'We have a booking/reservation under the name [Name]' is the standard, natural B1-B2 phrase to confirm a reservation upon arrival.",
        explanationHu: "A 'We have a booking under the name...' a legtermészetesebb és legudvariasabb módja a foglalás igazolásának érkezéskor.",
        toneNote: "Polite & Professional"
      },
      {
        id: "1c",
        text: "Yes, we booked for 8 PM, but my colleague haven't arrived yet with the code.",
        isCorrect: false,
        explanationEn: "Subject-verb agreement error: 'my colleague' is third-person singular, so it must be 'hasn't arrived yet' instead of 'haven't arrived yet'.",
        explanationHu: "Nyelvtani egyeztetési hiba: 'my colleague' egyes szám 3. személy, így 'hasn't arrived yet' a helyes alak a 'haven't' helyett.",
        toneNote: "Grammar error"
      },
      {
        id: "1d",
        text: "No, but we saw a free table on the terrace, so we'll just go sit there and wait.",
        isCorrect: false,
        explanationEn: "In restaurants with a host podium, seating yourself without waiting to be seated disrupts the staff assignments and floor plan.",
        explanationHu: "Éttermi etikett hiba: ahol fogadópult van, meg kell várni a leültetést, nem szabad önkényesen leülni egy üres asztalhoz.",
        toneNote: "Inappropriate etiquette"
      }
    ]
  },
  {
    id: 2,
    scenario: "Seating Preferences",
    scenarioHu: "Ültetés és helyválasztás",
    waiterText: "Would you prefer to sit inside near the fireplace, or out on the heated terrace?",
    waiterTranslationHu: "Bent szeretnének ülni a kandalló mellett, vagy kint a fűtött teraszon?",
    category: "booking",
    tipsEn: "Use conditional 'would' like 'The terrace would be lovely/great...'",
    tipsHu: "Használj feltételes módot: 'The terrace would be lovely/great...'",
    options: [
      {
        id: "2a",
        text: "Whatever, it doesn't matter to me at all.",
        isCorrect: false,
        explanationEn: "'Whatever' sounds indifferent and dismissive to the host trying to seat you comfortably. A polite alternative is: 'Either would be fine, thank you.'",
        explanationHu: "A 'Whatever' (Mindegy) kifejezetten flegma és elutasító. Udvariasan: 'Either would be fine, thank you.'",
        toneNote: "Dismissive / Impolite"
      },
      {
        id: "2b",
        text: "The terrace sounds nice, but inside is more warmer for the evening.",
        isCorrect: false,
        explanationEn: "Double comparative error: 'more warmer' is grammatically incorrect. Use simply 'warmer' or 'much warmer'.",
        explanationHu: "Kettős középfok hiba: a 'more warmer' helytelen, helyesen 'warmer' vagy 'much warmer'.",
        toneNote: "Grammar error"
      },
      {
        id: "2c",
        text: "The terrace would be lovely, if there's a table available.",
        isCorrect: true,
        explanationEn: "Excellent B2 phrasing! Uses the polite conditional 'would be lovely' with a polite condition clause.",
        explanationHu: "Kiváló B2 szintű kifejezés! Udvarias feltételes módot ('would be lovely') használ udvarias kiegészítéssel.",
        toneNote: "Sophisticated & Polite"
      },
      {
        id: "2d",
        text: "We'll take the terrace, but only if you promise nobody next to us will talk loudly.",
        isCorrect: false,
        explanationEn: "Demanding that other restaurant patrons stay quiet is an unreasonable condition to place on the host.",
        explanationHu: "Indokolatlan és betarthatatlan követelés a többi vendég viselkedését előre megkövetelni a személyzettől.",
        toneNote: "Unreasonable demand"
      }
    ]
  },
  {
    id: 3,
    scenario: "Ordering Drinks First",
    scenarioHu: "Italrendelés az étlap átnézése előtt",
    waiterText: "Can I start you off with something to drink while you look over the menu?",
    waiterTranslationHu: "Hozhatok valami innivalót kezdésnek, amíg átnézik az étlapot?",
    category: "ordering",
    tipsEn: "Order standard water or aperitif using 'Just ... for now, please.'",
    tipsHu: "Kérj vizet vagy italt a 'Just ... for now, please' fordulattal.",
    options: [
      {
        id: "3a",
        text: "Just some sparkling water with lemon for now, please.",
        isCorrect: true,
        explanationEn: "'Just [drink] for now, please' is the most natural and polite way to order initial drinks while browsing the menu.",
        explanationHu: "A 'Just [ital] for now, please' a legtermészetesebb és legudvariasabb módja az induló ital kérésének.",
        toneNote: "Natural & Polite"
      },
      {
        id: "3b",
        text: "No, we want to order all our food and drinks at the exact same time.",
        isCorrect: false,
        explanationEn: "Sounds sharp and abrupt. A polite alternative is: 'We'll wait and order our drinks together with our food, thank you.'",
        explanationHu: "Túl nyers és rideg elutasítás. Udvariasabban: 'We'll wait and order our drinks with the meal, thank you.'",
        toneNote: "Too blunt / Inflexible"
      },
      {
        id: "3c",
        text: "You can just bring whatever you think is the most expensive bottle of wine.",
        isCorrect: false,
        explanationEn: "Boastful and unhelpful, leaving the server guessing your actual wine preference, grape style, or meal pairing.",
        explanationHu: "Kérkedő és nem segíti a felszolgálót abban, hogy milyen ízvilágú vagy stílusú bort szeretnétek.",
        toneNote: "Awkward & Boastful"
      },
      {
        id: "3d",
        text: "We would like two glass of still water with ice, please.",
        isCorrect: false,
        explanationEn: "Plural noun error: after 'two', the countable noun 'glass' must take the plural form 'glasses' ('two glasses of still water').",
        explanationHu: "Többes szám hiba: a 'two' számnév után a 'glass' főnévnek többes számban kell állnia ('two glasses of still water').",
        toneNote: "Grammar error"
      }
    ]
  },
  {
    id: 4,
    scenario: "Asking for More Time",
    scenarioHu: "Több idő kérése a választáshoz",
    waiterText: "Are you ready to order your main courses, or would you like a few more minutes?",
    waiterTranslationHu: "Készen állnak a főételek megrendelésére, vagy kérnek még pár percet?",
    category: "ordering",
    tipsEn: "'Could you give us a couple of minutes?' or 'We're still deciding.'",
    tipsHu: "'Could you give us a couple of minutes?' vagy 'We're still deciding.'",
    options: [
      {
        id: "4a",
        text: "We obviously haven't even opened the menus yet, so don't rush us.",
        isCorrect: false,
        explanationEn: "Aggressive and defensive toward a server doing a standard check-in. Instead say: 'We need a few more minutes, please.'",
        explanationHu: "Támadó és feleslegesen védekező a szokásos felszolgálói érdeklődésre. Helyesen: 'We need a few more minutes, please.'",
        toneNote: "Overly defensive / Rude"
      },
      {
        id: "4b",
        text: "We're still deciding, actually. Could you give us a couple more minutes?",
        isCorrect: true,
        explanationEn: "Perfect B1-B2 phrasing! Expresses ongoing decision politely with 'We're still deciding' and 'Could you give us...?'",
        explanationHu: "Tökéletes B1-B2 szintű mondat! Udvariasan jelzi a folyamatot: 'We're still deciding... Could you give us a couple more minutes?'",
        toneNote: "Courteous & Clear"
      },
      {
        id: "4c",
        text: "We didn't decided yet, so please come back in five minutes.",
        isCorrect: false,
        explanationEn: "Auxiliary verb error: after 'didn't', use the base verb form ('didn't decide'), or use present perfect ('We haven't decided yet').",
        explanationHu: "Segédige hiba: a 'didn't' után szótári alak kell ('didn't decide'), vagy befejezett jelen: 'We haven't decided yet'.",
        toneNote: "Grammar error"
      },
      {
        id: "4d",
        text: "I have no idea what to choose, so you can just pick any random dish for me.",
        isCorrect: false,
        explanationEn: "Puts an unfair burden on the server. If you need assistance, politely ask for recommendations: 'What would you recommend?'",
        explanationHu: "Kellemetlen helyzetbe hozza a pincért. Ha segítség kell, kérj ajánlást: 'What would you recommend?'",
        toneNote: "Unhelpful / Awkward"
      }
    ]
  },
  {
    id: 5,
    scenario: "Out-of-Stock Item",
    scenarioHu: "Kifogyott étel kezelése és ajánlás kérése",
    waiterText: "I'm terribly sorry, but we've just run out of the grilled sea bass for tonight.",
    waiterTranslationHu: "Borzasztóan sajnálom, de ma estére épp elfogyott a grillezett tengeri sügérünk.",
    category: "ordering",
    tipsEn: "Acknowledge smoothly: 'That's a shame. What would you recommend instead?'",
    tipsHu: "Reagálj rugalmasan: 'That's a shame. What would you recommend instead?'",
    options: [
      {
        id: "5a",
        text: "That's a shame! What would you recommend instead that is similar?",
        isCorrect: true,
        explanationEn: "'That's a shame' is a polite way to express disappointment, and asking for a recommendation keeps the conversation constructive.",
        explanationHu: "A 'That's a shame' (Kár / Milyen kár) természetes reakció a csalódottságra, a helyettesítő ajánlás kérése pedig kiváló B2-es fordulat.",
        toneNote: "Constructive & Polite"
      },
      {
        id: "5b",
        text: "Why is it listed on the menu if you can't even serve it? That's quite unprofessional.",
        isCorrect: false,
        explanationEn: "Overly combative; restaurants that prepare fresh fish frequently sell out near the end of a busy evening service.",
        explanationHu: "Túl agresszív és kötekedő; friss alapanyagokkal dolgozó éttermekben természetes, hogy estére elfogyhat egy népszerű fogás.",
        toneNote: "Too aggressive / Critical"
      },
      {
        id: "5c",
        text: "Oh, that is disappointing. Do you have another fishes on the menu tonight?",
        isCorrect: false,
        explanationEn: "Countable noun/plural error: 'fish' has the irregular plural 'fish' in culinary context, and with plural use 'other fish' instead of 'another fishes'.",
        explanationHu: "Főnévragozási hiba: a 'fish' többes száma gasztronómiában 'fish', és többes szám előtt 'other fish' vagy 'another fish dish' a helyes alak.",
        toneNote: "Grammar error"
      },
      {
        id: "5d",
        text: "In that case, we might as well cancel all our drinks and look for another restaurant.",
        isCorrect: false,
        explanationEn: "A dramatic overreaction to a single ingredient shortage when the rest of the menu is available.",
        explanationHu: "Túlzó és sértődött reakció egyetlen kifogyott fogás miatt felállni az egész asztaltársasággal.",
        toneNote: "Dramatic overreaction"
      }
    ]
  },
  {
    id: 6,
    scenario: "Meat Cooking Preferences",
    scenarioHu: "Hússütési fokozat megadása",
    waiterText: "And for your ribeye steak, how would you like that prepared?",
    waiterTranslationHu: "És a ribeye steaket hogyan szeretné elkészítve?",
    category: "ordering",
    tipsEn: "Culinary terms: rare, medium-rare, medium, medium-well, well-done.",
    tipsHu: "Sütési fokozatok: rare (véres), medium-rare (közepesen átsült/rózsaszín), medium, well-done (átsült).",
    options: [
      {
        id: "6a",
        text: "Just make sure it's tasty and don't make it too tough or too bloody.",
        isCorrect: false,
        explanationEn: "Vague and subjective. Chefs need recognized culinary temperatures (rare, medium-rare, medium, well-done) to cook steaks accurately.",
        explanationHu: "Túl szubjektív és pontatlan. A konyhának pontos fokozatra van szüksége (rare, medium-rare, medium, well-done).",
        toneNote: "Vague & Non-standard"
      },
      {
        id: "6b",
        text: "Medium-rare, please, with the peppercorn sauce on the side.",
        isCorrect: true,
        explanationEn: "'Medium-rare' is the precise culinary term, and 'on the side' is a useful B1-B2 restaurant request.",
        explanationHu: "A 'Medium-rare' a pontos gasztronómiai kifejezés, az 'on the side' (külön tálkában) pedig nagyon hasznos B1-B2-es fordulat.",
        toneNote: "Precise & Idiomatic"
      },
      {
        id: "6c",
        text: "I would like it cook until it is completely brown on the inside.",
        isCorrect: false,
        explanationEn: "Passive participle error: say 'I would like it cooked' (past participle) or 'to be cooked', not the bare verb 'cook'.",
        explanationHu: "Befejezett melléknévi igenév hiba: 'I would like it cooked' vagy 'to be cooked' a helyes a 'cook' helyett.",
        toneNote: "Grammar error"
      },
      {
        id: "6d",
        text: "Medium, and please tell the chef not to overcook it like last time.",
        isCorrect: false,
        explanationEn: "Condescending and distrustful toward the kitchen staff before the food has even been prepared.",
        explanationHu: "Lekezelő és bizalmatlan a konyhai személyzettel szemben még az étel elkészítése előtt.",
        toneNote: "Condescending"
      }
    ]
  },
  {
    id: 7,
    scenario: "Dietary Requirements & Allergies",
    scenarioHu: "Ételérzékenység és összetevők egyeztetése",
    waiterText: "Do any of your guests have food allergies or dietary restrictions we should be aware of?",
    waiterTranslationHu: "Van a vendégek között ételallergiás vagy speciális étrendet követő, amiről tudnunk kellene?",
    category: "special_requests",
    tipsEn: "Use: 'I'm allergic to...' or 'Does this contain any...?'",
    tipsHu: "Használd: 'I'm allergic to...' vagy 'Does this contain any...?'",
    options: [
      {
        id: "7a",
        text: "Yes, I am lactose intolerant, so could you make sure there's no cream or butter in the risotto?",
        isCorrect: true,
        explanationEn: "Clear, precise dietary statement with a polite request to check specific ingredients.",
        explanationHu: "Világos, pontos ételérzékenységi közlés udvarias kéréssel a konkrét összetevők (tejszín/vaj) elhagyására.",
        toneNote: "Clear & Safe"
      },
      {
        id: "7b",
        text: "Yes, my friend is allergic with nuts, so please check the sauces carefully.",
        isCorrect: false,
        explanationEn: "Preposition error: the correct dependent preposition is 'allergic to' (allergic to nuts), not 'allergic with'.",
        explanationHu: "Helytelen vonzat/elöljárószó: az 'allergic to' (allergiás valamire) a helyes szerkezet az 'allergic with' helyett.",
        toneNote: "Grammar error"
      },
      {
        id: "7c",
        text: "None of us have allergies, but if the ingredients aren't 100% organic, we won't eat them.",
        isCorrect: false,
        explanationEn: "Haughty and confrontational tone. Medical allergies and personal organic preferences should be communicated respectfully.",
        explanationHu: "Fölényes és követelőző hangnem, ami nem segíti az orvosi allergiák pontos tisztázását.",
        toneNote: "Demanding & Snobbish"
      },
      {
        id: "7d",
        text: "I sometimes feel a bit strange after eating dairy, so just use your best judgment.",
        isCorrect: false,
        explanationEn: "Ambiguous information creates serious safety risks for kitchen staff. Always state allergies directly and clearly.",
        explanationHu: "A homályos megfogalmazás veszélyes a konyhai allergénkezelésben. Mindig egyértelműen kell nyilatkozni az érzékenységről.",
        toneNote: "Vague & Risky"
      }
    ]
  },
  {
    id: 8,
    scenario: "Mid-Meal Check-in",
    scenarioHu: "Felszolgálói érdeklődés evés közben",
    waiterText: "How is everything tasting for you this evening? Can I get you anything else?",
    waiterTranslationHu: "Hogy ízlik az étel ma este? Hozhatok még bármit?",
    category: "ordering",
    tipsEn: "Compliment food & service politely: 'Everything is delicious/cooked to perfection, thank you.'",
    tipsHu: "Köszönd meg az érdeklődést: 'Everything is delicious, thank you for asking.'",
    options: [
      {
        id: "8a",
        text: "Can't you see we're in the middle of a private conversation right now?",
        isCorrect: false,
        explanationEn: "Unnecessarily sharp and rude to a server performing a standard, polite hospitality check-in.",
        explanationHu: "Feleslegesen éles és udvariatlan reakció a vendéglátásban megszokott udvarias érdeklődésre.",
        toneNote: "Snappy / Impolite"
      },
      {
        id: "8b",
        text: "The pasta tastes wonderfully, but we need a little more water, please.",
        isCorrect: false,
        explanationEn: "Sense verb error: 'taste' as a linking verb takes a predicate adjective ('tastes wonderful'), not the adverb 'wonderfully'.",
        explanationHu: "Érzékelést kifejező igék szabálya: a 'taste' után melléknév áll ('tastes wonderful'), nem határozószó ('wonderfully').",
        toneNote: "Grammar error"
      },
      {
        id: "8c",
        text: "Everything is delicious, thank you! Could we just get some extra napkins when you have a moment?",
        isCorrect: true,
        explanationEn: "Gracious compliment combined with a polite request using 'when you have a moment'.",
        explanationHu: "Szívélyes dicséret udvarias kéréssel kombinálva ('when you have a moment' = amikor van egy perce).",
        toneNote: "Warm & Courteous"
      },
      {
        id: "8d",
        text: "It's fine, but the portion is huge, so could you pack half of it into a takeaway box right this second?",
        isCorrect: false,
        explanationEn: "Interrupting an active meal to demand immediate takeaway packaging disrupts the flow of dinner; wait until you've finished.",
        explanationHu: "Étkezés közepén azonnali elviteles dobozolást követelni szokatlan és megakasztja a vacsorát; ezt a végén illik kérni.",
        toneNote: "Awkward timing"
      }
    ]
  },
  {
    id: 9,
    scenario: "Polite Complaint / Wrong Item",
    scenarioHu: "Udvarias panaszkezelés / téves köret",
    waiterText: "Here is your grilled chicken. Oh, I apologize—the kitchen sent mashed potatoes instead of the roasted vegetables you ordered.",
    waiterTranslationHu: "Itt a grillezett csirke. Ó, elnézést kérek—a konyha tört burgonyát küldött a kért sült zöldségek helyett.",
    category: "complaints",
    tipsEn: "Respond graciously: 'Don't worry, it happens' or 'Could you swap it when possible?'",
    tipsHu: "Kezeld higgadtan és udvariasan: 'No problem, it happens. Could you change it when you get a chance?'",
    options: [
      {
        id: "9a",
        text: "I specifically repeated my order twice, so I expect a discount on our total bill for this.",
        isCorrect: false,
        explanationEn: "Demanding immediate financial compensation for an instantly acknowledged minor side dish mistake is entitled and aggressive.",
        explanationHu: "Azonnali számlakedvezményt követelni egy azonnal beismert köretcsere miatt aránytalan és ellenséges.",
        toneNote: "Overreacting / Entitled"
      },
      {
        id: "9b",
        text: "No worries at all, these things happen. Could you swap it for the vegetables when you get a chance?",
        isCorrect: true,
        explanationEn: "'No worries, these things happen' shows high emotional intelligence and B2 fluency in resolving minor issues calmly.",
        explanationHu: "A 'No worries, these things happen' magas társalgási intelligenciát és magabiztos B2 nyelvtudást mutat a helyzet nyugodt megoldásában.",
        toneNote: "Diplomatic & Polite"
      },
      {
        id: "9c",
        text: "That's okay, but could you please bringing the vegetables as soon as possible?",
        isCorrect: false,
        explanationEn: "Modal verb error: modal auxiliaries like 'could you please' must be followed by the base infinitive ('bring', not 'bringing').",
        explanationHu: "Módbeli segédige hiba: a 'could you please' után a főige szótári alakja következik ('bring', nem pedig 'bringing').",
        toneNote: "Grammar error"
      },
      {
        id: "9d",
        text: "I refuse to touch any of this food until the correct side dish is sitting on the table.",
        isCorrect: false,
        explanationEn: "Overly dramatic and uncooperative when the server has already offered to fix the mistake.",
        explanationHu: "Túldramatizált és ellenséges reakció egy olyan helyzetben, amikor a pincér már magától felajánlotta a javítást.",
        toneNote: "Passive-aggressive"
      }
    ]
  },
  {
    id: 10,
    scenario: "Asking for the Bill & Splitting",
    scenarioHu: "Számla kérése és a költségek megosztása",
    waiterText: "Can I bring you some dessert or coffee to finish your meal?",
    waiterTranslationHu: "Hozhatok desszertet vagy kávét az étkezés lezárásaként?",
    category: "paying",
    tipsEn: "Use: 'We're quite full, so could we have the bill/check, please? Can we split it?'",
    tipsHu: "Használd: 'We're quite full, so could we have the bill, please? Could we split it between us?'",
    options: [
      {
        id: "10a",
        text: "No, we have to leave immediately, so hurry up and bring the bill.",
        isCorrect: false,
        explanationEn: "Telling service staff to 'hurry up' is impolite. Better phrasing: 'We're in a bit of a rush, so could we have the bill, please?'",
        explanationHu: "A 'hurry up' (siess) tiszteletlen a felszolgálóval szemben. Udvariasan: 'Could we have the bill please? We're a bit short on time.'",
        toneNote: "Rude / Bossy"
      },
      {
        id: "10b",
        text: "We're actually quite full, thank you. Could we just get the bill, and is it possible to split it equally between two cards?",
        isCorrect: true,
        explanationEn: "A complete, elegant B2 phrase: thanks the staff, declines dessert politely, and clearly asks to split the bill ('split it equally between two cards').",
        explanationHu: "Tökéletes B2 szintű összetett mondat: udvariasan elhárítja a desszertet, kéri a számlát és rákérdez a kártyás felezésre.",
        toneNote: "Polished & Fluent"
      },
      {
        id: "10c",
        text: "No dessert for us, thanks. Could we pay separate with our credit cards?",
        isCorrect: false,
        explanationEn: "Adverb error: 'pay' is an action verb and requires the adverb 'separately' ('pay separately'), not the adjective 'separate'.",
        explanationHu: "Határozószó hiba: az ige módjának kifejezésére 'separately' (külön-külön) szükséges a 'separate' melléknév helyett.",
        toneNote: "Grammar error"
      },
      {
        id: "10d",
        text: "No dessert, but could you calculate each individual ingredient we ate and itemize it on separate bills?",
        isCorrect: false,
        explanationEn: "An impossible request that standard restaurant billing systems and kitchens cannot accommodate.",
        explanationHu: "Teljesíthetetlen és aránytalan követelés, amelyet egyetlen éttermi kasszarendszer és személyzet sem tud kiszámolni.",
        toneNote: "Impractical demand"
      }
    ]
  }
];
