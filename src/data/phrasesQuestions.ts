import { PhraseQuestion } from '../types';

export const PHRASES_QUESTIONS: PhraseQuestion[] = [
  {
    id: 1,
    phraseEn: "A table for two, please.",
    meaningHu: "Egy asztalt kérnénk két személyre.",
    situationEn: "You arrive at the restaurant host desk without a reservation and need a table for you and your friend.",
    situationHu: "Megérkezel az étterembe foglalás nélkül, és asztalt szeretnél magadnak és a barátodnak.",
    category: "arrival",
    dialoguePreviewEn: "Host: Good evening! Welcome to The Bistro. How many in your party? — You: A table for two, please.",
    dialoguePreviewHu: "Fogadó: Jó estét! Hány személyre? — Te: Egy asztalt kérnénk két személyre.",
    options: [
      {
        id: "p1-correct",
        phraseEn: "A table for two, please.",
        meaningHu: "Egy asztalt kérnénk két főre.",
        isCorrect: true,
        explanationEn: "Correct! 'A table for two, please' is the natural, courteous way to request seating for 2 people.",
        explanationHu: "Helyes! Ez a legtermészetesebb és legudvariasabb módja a két fős asztal kérésének."
      },
      {
        id: "p1-wrong1",
        phraseEn: "Give me two chairs and wood.",
        meaningHu: "Adj nekem két széket és fát.",
        isCorrect: false,
        explanationEn: "Incorrect and awkward phrasing.",
        explanationHu: "Helytelen és természetellenes kifejezés."
      },
      {
        id: "p1-wrong2",
        phraseEn: "I sit with two humans now.",
        meaningHu: "Két emberrel ülök most.",
        isCorrect: false,
        explanationEn: "Unnatural and grammatical error.",
        explanationHu: "Nem megfelelő éttermi kifejezés."
      },
      {
        id: "p1-wrong3",
        phraseEn: "Two person place required.",
        meaningHu: "Két személyes hely szükséges.",
        isCorrect: false,
        explanationEn: "Sounds robotic and impolite.",
        explanationHu: "Túlságosan mechanikus és nem udvarias."
      }
    ]
  },
  {
    id: 2,
    phraseEn: "Could we have the bill, please?",
    meaningHu: "Kérhetnénk a számlát?",
    situationEn: "You have finished dessert and coffee, and want to ask the waiter to bring the final total.",
    situationHu: "Befejeztétek az étkezést, és szeretnéd kérni a számlát a pincértől.",
    category: "paying",
    dialoguePreviewEn: "Waiter: Can I get you anything else? — You: No, thank you. Could we have the bill, please?",
    dialoguePreviewHu: "Pincér: Hozhatok még valamit? — Te: Köszönjük nem, kérhetnénk a számlát?",
    options: [
      {
        id: "p2-correct",
        phraseEn: "Could we have the bill, please?",
        meaningHu: "Kérhetnénk a számlát?",
        isCorrect: true,
        explanationEn: "Correct! 'Could we have the bill, please?' uses polite modal verbs and courtesy words.",
        explanationHu: "Helyes! Udvarias módbeli segédigével ('Could we have') kéri a számlát."
      },
      {
        id: "p2-wrong1",
        phraseEn: "Take my money quickly!",
        meaningHu: "Vedd el a pénzem gyorsan!",
        isCorrect: false,
        explanationEn: "Rude and aggressive phrasing.",
        explanationHu: "Udvariatlan és követelőző."
      },
      {
        id: "p2-wrong2",
        phraseEn: "How much did you cost me?",
        meaningHu: "Mennyibe kerültél nekem?",
        isCorrect: false,
        explanationEn: "Directly insulting to the staff.",
        explanationHu: "Sértő a pincérrel szemben."
      },
      {
        id: "p2-wrong3",
        phraseEn: "I want to escape this place.",
        meaningHu: "El akarok menekülni innen.",
        isCorrect: false,
        explanationEn: "Inappropriate for paying a bill.",
        explanationHu: "Nem éttermi kifejezés."
      }
    ]
  },
  {
    id: 3,
    phraseEn: "Keep the change.",
    meaningHu: "Tartsa meg a visszajárót.",
    situationEn: "Your bill is $26, you hand the waiter a $30 banknote, and want them to keep the remaining $4 as a tip.",
    situationHu: "A számlád 26 dollár, adsz egy 30-ast, és a 4 dollár visszajárót borravalóként neki szánod.",
    category: "paying",
    dialoguePreviewEn: "Waiter: Here is your $4 change, sir. — You: Thank you, keep the change!",
    dialoguePreviewHu: "Pincér: Itt a 4 dollár visszajárója. — Te: Köszönöm, tartsa meg a visszajárót!",
    options: [
      {
        id: "p3-correct",
        phraseEn: "Keep the change.",
        meaningHu: "Tartsa meg a visszajárót.",
        isCorrect: true,
        explanationEn: "Correct! 'Keep the change' tells the server they do not need to return coins/bills as it is their tip.",
        explanationHu: "Helyes! A 'Keep the change' a bevett angol kifejezés arra, hogy a visszajáró a borravaló."
      },
      {
        id: "p3-wrong1",
        phraseEn: "Don't give me your dirty coins.",
        meaningHu: "Ne add nekem a koszos érméidet.",
        isCorrect: false,
        explanationEn: "Very impolite.",
        explanationHu: "Nagyon udvariatlan."
      },
      {
        id: "p3-wrong2",
        phraseEn: "I throw away the small money.",
        meaningHu: "Eldobom az aprópénzt.",
        isCorrect: false,
        explanationEn: "Incorrect phrasing.",
        explanationHu: "Helytelen megfogalmazás."
      },
      {
        id: "p3-wrong3",
        phraseEn: "Keep my whole wallet forever.",
        meaningHu: "Tartsd meg az egész tárcámat örökre.",
        isCorrect: false,
        explanationEn: "Nonsensical phrase.",
        explanationHu: "Értelmetlen mondat."
      }
    ]
  },
  {
    id: 4,
    phraseEn: "What do you recommend?",
    meaningHu: "Mit ajánl / mit ajánlana?",
    situationEn: "You are unsure which pasta or fish dish to select and want the waiter's personal favorite or house specialty advice.",
    situationHu: "Bizonytalan vagy, hogy mit rendelj, és kikéred a pincér szakmai véleményét / a ház specialitását.",
    category: "ordering",
    dialoguePreviewEn: "You: Everything looks tempting! What do you recommend? — Waiter: The seafood risotto is fresh today!",
    dialoguePreviewHu: "Te: Minden csábítóan néz ki! Mit ajánl? — Pincér: A tenger gyümölcsei rizottó ma friss!",
    options: [
      {
        id: "p4-correct",
        phraseEn: "What do you recommend?",
        meaningHu: "Mit ajánl?",
        isCorrect: true,
        explanationEn: "Correct! 'What do you recommend?' or 'What's the chef's special?' is ideal.",
        explanationHu: "Helyes! Ez a legtermészetesebb kérdés a pincér ajánlásának kérésére."
      },
      {
        id: "p4-wrong1",
        phraseEn: "Which food is not poisoned?",
        meaningHu: "Melyik étel nincs megmérgezve?",
        isCorrect: false,
        explanationEn: "Offensive to the restaurant.",
        explanationHu: "Sértő és illetlen kérdés."
      },
      {
        id: "p4-wrong2",
        phraseEn: "Choose my dinner or else.",
        meaningHu: "Válaszd ki a vacsorámat vagy különben.",
        isCorrect: false,
        explanationEn: "Aggressive demand.",
        explanationHu: "Fenyegető hangvételű."
      },
      {
        id: "p4-wrong3",
        phraseEn: "Tell me what you eat at home.",
        meaningHu: "Mondd el mit eszel otthon.",
        isCorrect: false,
        explanationEn: "Irrelevant personal question.",
        explanationHu: "Nem a menüre vonatkozó kérdés."
      }
    ]
  },
  {
    id: 5,
    phraseEn: "Can we split the bill?",
    meaningHu: "Szétoszthatjuk a számlát külön fizetéssel?",
    situationEn: "You and your dining partner want to pay separately for your own meals by card.",
    situationHu: "A partnerrel külön szeretnétek kifizetni a fogyasztásotokat bankkártyával.",
    category: "paying",
    dialoguePreviewEn: "You: Can we split the bill between two cards? — Waiter: Absolutely, no problem at all.",
    dialoguePreviewHu: "Te: Különbonthatjuk a számlát két kártyára? — Pincér: Természetesen, semmi akadálya.",
    options: [
      {
        id: "p5-correct",
        phraseEn: "Can we split the bill?",
        meaningHu: "Szétbonthatjuk a számlát?",
        isCorrect: true,
        explanationEn: "Correct! 'Split the bill' or 'pay separately' is standard terminology.",
        explanationHu: "Helyes! A 'split the bill' jelenti a számla szétosztását / külön fizetést."
      },
      {
        id: "p5-wrong1",
        phraseEn: "Can we cut the paper bill with scissors?",
        meaningHu: "Elvághatjuk a papírszámlát ollóval?",
        isCorrect: false,
        explanationEn: "Literal and humorous error.",
        explanationHu: "Szó szerinti, hibás félreértés."
      },
      {
        id: "p5-wrong2",
        phraseEn: "We fight for who pays nothing.",
        meaningHu: "Harcolunk, hogy ki nem fizet semmit.",
        isCorrect: false,
        explanationEn: "Inappropriate phrasing.",
        explanationHu: "Helytelen kifejezés."
      },
      {
        id: "p5-wrong3",
        phraseEn: "Divide our friendship by money.",
        meaningHu: "Oszd el a barátságunkat pénzzel.",
        isCorrect: false,
        explanationEn: "Philosophical nonsense.",
        explanationHu: "Nem éttermi kifejezés."
      }
    ]
  },
  {
    id: 6,
    phraseEn: "I am allergic to nuts.",
    meaningHu: "Allergiás vagyok a mogyorófélékre / diófélékre.",
    situationEn: "You have a severe food allergy and must warn the kitchen before ordering the chocolate tart.",
    situationHu: "Súlyos ételallergiád van diófélékre, és figyelmeztetned kell a felszolgálót.",
    category: "dietary",
    dialoguePreviewEn: "You: Excuse me, does this dessert contain almonds? I am allergic to nuts. — Waiter: I'll check with the chef immediately.",
    dialoguePreviewHu: "Te: Elnézést, tartalmaz ez a desszert mandulát? Allergiás vagyok a diófélékre. — Pincér: Azonnal egyeztetek a séffel.",
    options: [
      {
        id: "p6-correct",
        phraseEn: "I am allergic to nuts.",
        meaningHu: "Allergiás vagyok a magvakra/diófélékre.",
        isCorrect: true,
        explanationEn: "Correct! 'I am allergic to...' clearly communicates medical dietary requirements.",
        explanationHu: "Helyes! Az 'I am allergic to [allergén]' az egyértelmű módja az ételallergia jelzésének."
      },
      {
        id: "p6-wrong1",
        phraseEn: "Nuts are my mortal enemy in spirit.",
        meaningHu: "A diófélék a halálos lelki ellenségeim.",
        isCorrect: false,
        explanationEn: "Dramatic and unclear to kitchen staff.",
        explanationHu: "Félreérthető és nem szakmai közlés."
      },
      {
        id: "p6-wrong2",
        phraseEn: "I dislike little round trees.",
        meaningHu: "Nem szeretem a kis kerek fákat.",
        isCorrect: false,
        explanationEn: "Nonsensical description.",
        explanationHu: "Értelmetlen mondat."
      },
      {
        id: "p6-wrong3",
        phraseEn: "Keep squirrel food away.",
        meaningHu: "Tartsd távol a mókusételt.",
        isCorrect: false,
        explanationEn: "Inappropriate joke.",
        explanationHu: "Nem megfelelő éttermi kifejezés."
      }
    ]
  },
  {
    id: 7,
    phraseEn: "With sauce on the side, please.",
    meaningHu: "A szószt külön tálkában kérem az oldalára.",
    situationEn: "You order grilled chicken breast but don't want the peppercorn cream sauce poured directly on top.",
    situationHu: "Grillezett csirkét rendelsz, de nem szeretnéd, ha a mártást ráöntenék a húsra, hanem külön tálkában kéred.",
    category: "ordering",
    dialoguePreviewEn: "You: I'll have the grilled chicken breast, but with sauce on the side, please. — Waiter: Certainly!",
    dialoguePreviewHu: "Te: A grillezett csirkemellet kérném, de a szószt külön tálkában, kérem. — Pincér: Természetesen!",
    options: [
      {
        id: "p7-correct",
        phraseEn: "With sauce on the side, please.",
        meaningHu: "A mártást külön tálkában, kérem.",
        isCorrect: true,
        explanationEn: "Correct! 'On the side' means served in a separate small dish next to the meal.",
        explanationHu: "Helyes! Az 'on the side' a bevett éttermi kifejezés a külön tálkában felszolgált öntetekre."
      },
      {
        id: "p7-wrong1",
        phraseEn: "Put sauce behind my chair.",
        meaningHu: "Tedd a szószt a székem mögé.",
        isCorrect: false,
        explanationEn: "Literal misunderstanding of 'side'.",
        explanationHu: "Félreértelmezett szó szerinti fordítás."
      },
      {
        id: "p7-wrong2",
        phraseEn: "Drown the entire table in sauce.",
        meaningHu: "Fojtsd meg az egész asztalt szószban.",
        isCorrect: false,
        explanationEn: "Nonsensical request.",
        explanationHu: "Értelmetlen mondat."
      },
      {
        id: "p7-wrong3",
        phraseEn: "Deliver sauce to another customer.",
        meaningHu: "Szállítsd a szószt másik vendégnek.",
        isCorrect: false,
        explanationEn: "Incorrect phrasing.",
        explanationHu: "Helytelen megfogalmazás."
      }
    ]
  },
  {
    id: 8,
    phraseEn: "Could we have a couple more minutes?",
    meaningHu: "Kérhetnénk még pár percet (az étlap átnézéséhez)?",
    situationEn: "The waiter arrives to take your food order, but you and your friends haven't finished reading the menu yet.",
    situationHu: "A felszolgáló megérkezik felvenni a rendelést, de ti még nem döntöttetek az étlapról.",
    category: "polite_request",
    dialoguePreviewEn: "Waiter: Are you ready to order your mains? — You: Could we have a couple more minutes to look over the menu?",
    dialoguePreviewHu: "Pincér: Készen állnak a főételek rendelésére? — Te: Kérhetnénk még pár percet átnézni az étlapot?",
    options: [
      {
        id: "p8-correct",
        phraseEn: "Could we have a couple more minutes?",
        meaningHu: "Kérhetnénk még pár percet?",
        isCorrect: true,
        explanationEn: "Correct! 'Could we have a couple more minutes?' is polite and gives you time to decide.",
        explanationHu: "Helyes! Ez a legudvariasabb módja annak, hogy időt kérj az étlap áttekintéséhez."
      },
      {
        id: "p8-wrong1",
        phraseEn: "Go away and never return!",
        meaningHu: "Menj el és soha ne térj vissza!",
        isCorrect: false,
        explanationEn: "Extremely rude to the waiter.",
        explanationHu: "Rendkívül sértő a felszolgálóval szemben."
      },
      {
        id: "p8-wrong2",
        phraseEn: "Stop looking at our faces.",
        meaningHu: "Hagyd abba az arcunk bámulását.",
        isCorrect: false,
        explanationEn: "Confrontational and rude.",
        explanationHu: "Udvariatlan és támadó."
      },
      {
        id: "p8-wrong3",
        phraseEn: "Time does not exist here.",
        meaningHu: "Az idő itt nem létezik.",
        isCorrect: false,
        explanationEn: "Weird philosophical answer.",
        explanationHu: "Nem éttermi kifejezés."
      }
    ]
  }
];
