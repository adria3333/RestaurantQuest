import { WordQuestion } from '../types';

export const WORDS_QUESTIONS: WordQuestion[] = [
  {
    id: 1,
    wordEn: "cutlery",
    phonetic: "/ˈkʌtləri/",
    meaningHu: "evőeszközök (kés, villa, kanál)",
    category: "cutlery",
    iconType: "cutlery",
    promptQuestionEn: "Which word means knives, forks, and spoons used for eating food?",
    promptQuestionHu: "Melyik szó jelenti az evőeszközöket (kés, villa, kanál)?",
    exampleSentenceEn: "Excuse me, could we please have an extra set of cutlery?",
    exampleSentenceHu: "Elnézést, kaphatnánk még egy készlet evőeszközt?",
    funFactEn: "In American English, this is often called 'silverware' or 'flatware'.",
    options: [
      {
        id: "w1-cutlery",
        wordEn: "Cutlery",
        meaningHu: "Evőeszközök",
        isCorrect: true,
        explanationEn: "Correct! 'Cutlery' refers to knives, forks, and spoons.",
        explanationHu: "Helyes! A 'cutlery' az evőeszközök gyűjtőneve."
      },
      {
        id: "w1-napkin",
        wordEn: "Napkin",
        meaningHu: "Szalvéta",
        isCorrect: false,
        explanationEn: "'Napkin' is a piece of cloth or paper used to wipe your mouth.",
        explanationHu: "A 'napkin' szalvétát jelent, nem evőeszközt."
      },
      {
        id: "w1-tablecloth",
        wordEn: "Tablecloth",
        meaningHu: "Asztalterítő",
        isCorrect: false,
        explanationEn: "'Tablecloth' is the cloth covering the table.",
        explanationHu: "A 'tablecloth' asztalterítőt jelent."
      },
      {
        id: "w1-saucer",
        wordEn: "Saucer",
        meaningHu: "Csészealj",
        isCorrect: false,
        explanationEn: "'Saucer' is a small shallow dish under a cup.",
        explanationHu: "A 'saucer' kis csészealjat jelent."
      }
    ]
  },
  {
    id: 2,
    wordEn: "napkin",
    phonetic: "/ˈnæpkɪn/",
    meaningHu: "szalvéta",
    category: "tableware",
    iconType: "napkin",
    promptQuestionEn: "What do you call the cloth or paper used to wipe your lips and protect your clothes?",
    promptQuestionHu: "Hogy hívják a szalvétát angolul?",
    exampleSentenceEn: "Could you bring a few extra paper napkins, please?",
    exampleSentenceHu: "Hozna még néhány papírszalvétát, kérem?",
    funFactEn: "In British English, a cloth napkin is also called a 'serviette'.",
    options: [
      {
        id: "w2-napkin",
        wordEn: "Napkin",
        meaningHu: "Szalvéta",
        isCorrect: true,
        explanationEn: "Correct! 'Napkin' (or serviette) is placed on your lap or used to dab your mouth.",
        explanationHu: "Helyes! A 'napkin' a szalvéta."
      },
      {
        id: "w2-tray",
        wordEn: "Tray",
        meaningHu: "Tálca",
        isCorrect: false,
        explanationEn: "'Tray' is a flat container for carrying food and drinks.",
        explanationHu: "A 'tray' tálcát jelent."
      },
      {
        id: "w2-apron",
        wordEn: "Apron",
        meaningHu: "Kötény",
        isCorrect: false,
        explanationEn: "'Apron' is worn by the chef or waiter to protect clothes.",
        explanationHu: "Az 'apron' kötényt jelent."
      },
      {
        id: "w2-coaster",
        wordEn: "Coaster",
        meaningHu: "Poháralátét",
        isCorrect: false,
        explanationEn: "'Coaster' is a mat placed under a drinking glass.",
        explanationHu: "A 'coaster' poháralátétet jelent."
      }
    ]
  },
  {
    id: 3,
    wordEn: "sparkling water",
    phonetic: "/ˈspɑːklɪŋ ˈwɔːtər/",
    meaningHu: "szénsavas ásványvíz",
    category: "drinks",
    iconType: "sparkling",
    promptQuestionEn: "What is the English term for carbonated water with bubbles?",
    promptQuestionHu: "Hogyan mondjuk angolul a szénsavas ásványvizet?",
    exampleSentenceEn: "Would you like still or sparkling water with your meal?",
    exampleSentenceHu: "Mentes vagy szénsavas vizet szeretne az ételéhez?",
    options: [
      {
        id: "w3-sparkling",
        wordEn: "Sparkling water",
        meaningHu: "Szénsavas víz",
        isCorrect: true,
        explanationEn: "Correct! 'Sparkling water' is fizzy carbonated water (opposed to 'still water').",
        explanationHu: "Helyes! A 'sparkling water' a szénsavas víz (a 'still water' a mentes víz)."
      },
      {
        id: "w3-boiled",
        wordEn: "Boiled water",
        meaningHu: "Forralt víz",
        isCorrect: false,
        explanationEn: "'Boiled water' is heated water, not carbonated beverage.",
        explanationHu: "A 'boiled water' forralt vizet jelent."
      },
      {
        id: "w3-stagnant",
        wordEn: "Stagnant water",
        meaningHu: "Állóvíz",
        isCorrect: false,
        explanationEn: "'Stagnant water' is non-flowing, unhygienic water.",
        explanationHu: "A 'stagnant water' állóvizet jelent."
      },
      {
        id: "w3-plain",
        wordEn: "Raw water",
        meaningHu: "Nyers víz",
        isCorrect: false,
        explanationEn: "Not used in restaurants. We say 'still' or 'tap' water.",
        explanationHu: "Nem használt éttermi kifejezés."
      }
    ]
  },
  {
    id: 4,
    wordEn: "bill / check",
    phonetic: "/bɪl/ (UK) • /tʃek/ (US)",
    meaningHu: "számla (éttermi fizetésnél)",
    category: "bill_money",
    iconType: "bill",
    promptQuestionEn: "What do you ask for when you are finished eating and ready to pay?",
    promptQuestionHu: "Mit kérsz a pincértől, amikor fizetni szeretnél?",
    exampleSentenceEn: "Could we have the bill (UK) / check (US), please?",
    exampleSentenceHu: "Kérhetnénk a számlát?",
    funFactEn: "British speakers ask for the 'bill', while American speakers usually say 'check'.",
    options: [
      {
        id: "w4-bill",
        wordEn: "Bill / Check",
        meaningHu: "Számla",
        isCorrect: true,
        explanationEn: "Correct! 'Bill' in UK English and 'Check' in US English.",
        explanationHu: "Helyes! Brit angolban 'bill', amerikai angolban 'check'."
      },
      {
        id: "w4-receipt",
        wordEn: "Receipt",
        meaningHu: "Nyugta (fizetés után kapott igazolás)",
        isCorrect: false,
        explanationEn: "A 'receipt' is the proof of payment given AFTER you have paid.",
        explanationHu: "A 'receipt' a fizetés UTÁN kiadott blokk/nyugta."
      },
      {
        id: "w4-invoice",
        wordEn: "Corporate invoice",
        meaningHu: "Céges áfás számla",
        isCorrect: false,
        explanationEn: "'Invoice' is generally used for business B2B billing.",
        explanationHu: "Az 'invoice' hivatalos céges számlát jelent."
      },
      {
        id: "w4-ticket",
        wordEn: "Ticket",
        meaningHu: "Jegy",
        isCorrect: false,
        explanationEn: "'Ticket' is used for buses, concerts, or movies.",
        explanationHu: "A 'ticket' jegyet jelent."
      }
    ]
  },
  {
    id: 5,
    wordEn: "appetizer / starter",
    phonetic: "/ˈæpɪtaɪzər/ (US) • /ˈstɑːtər/ (UK)",
    meaningHu: "előétel",
    category: "food_service",
    iconType: "starter",
    promptQuestionEn: "What is a small dish eaten at the beginning of a meal before the main course?",
    promptQuestionHu: "Melyik szó jelenti a főétel előtt felszolgált előételt?",
    exampleSentenceEn: "For starters, we will share the garlic bread and bruschetta.",
    exampleSentenceHu: "Előételnek fokhagymás kenyeret és bruschettát osztunk meg.",
    options: [
      {
        id: "w5-starter",
        wordEn: "Starter / Appetizer",
        meaningHu: "Előétel",
        isCorrect: true,
        explanationEn: "Correct! 'Starter' (UK) and 'Appetizer' (US) are served before the main dish.",
        explanationHu: "Helyes! A 'starter' (UK) és 'appetizer' (US) az előétel."
      },
      {
        id: "w5-dessert",
        wordEn: "Dessert",
        meaningHu: "Desszert",
        isCorrect: false,
        explanationEn: "'Dessert' is the sweet dish served at the very end.",
        explanationHu: "A 'dessert' az étkezés végén fogyasztott édesség."
      },
      {
        id: "w5-side",
        wordEn: "Side dish",
        meaningHu: "Köretek",
        isCorrect: false,
        explanationEn: "A 'side dish' is eaten alongside the main course (e.g. fries, salad).",
        explanationHu: "A 'side dish' a főétel mellé tálalt köret."
      },
      {
        id: "w5-snack",
        wordEn: "Snack",
        meaningHu: "Rágcsálnivaló",
        isCorrect: false,
        explanationEn: "'Snack' is food eaten between meals.",
        explanationHu: "A 'snack' étkezések közötti harapnivaló."
      }
    ]
  },
  {
    id: 6,
    wordEn: "corkscrew",
    phonetic: "/ˈkɔːkskruː/",
    meaningHu: "dugóhúzó",
    category: "cutlery",
    iconType: "corkscrew",
    promptQuestionEn: "Which tool is used by a waiter or guest to open a bottle of wine sealed with cork?",
    promptQuestionHu: "Hogy hívják a dugóhúzót angolul?",
    exampleSentenceEn: "Could you please bring a corkscrew to open this bottle of red wine?",
    exampleSentenceHu: "Hozna egy dugóhúzót, hogy kinyissuk ezt az üveg vörösbort?",
    options: [
      {
        id: "w6-corkscrew",
        wordEn: "Corkscrew",
        meaningHu: "Dugóhúzó",
        isCorrect: true,
        explanationEn: "Correct! A 'corkscrew' extracts corks from wine bottles.",
        explanationHu: "Helyes! A 'corkscrew' a borosüvegek dugójának kihúzására szolgál."
      },
      {
        id: "w6-can-opener",
        wordEn: "Can opener",
        meaningHu: "Konzervnyitó",
        isCorrect: false,
        explanationEn: "A 'can opener' is for opening metal cans of food.",
        explanationHu: "A 'can opener' konzervnyitót jelent."
      },
      {
        id: "w6-whisk",
        wordEn: "Whisk",
        meaningHu: "Kézi habverő",
        isCorrect: false,
        explanationEn: "A 'whisk' is for beating eggs or cream.",
        explanationHu: "A 'whisk' habverőt jelent."
      },
      {
        id: "w6-ladle",
        wordEn: "Ladle",
        meaningHu: "Merőkanál",
        isCorrect: false,
        explanationEn: "A 'ladle' is a deep spoon used for soup.",
        explanationHu: "A 'ladle' merőkanalat jelent."
      }
    ]
  },
  {
    id: 7,
    wordEn: "rare / medium / well-done",
    phonetic: "/reər/ • /ˈmiːdiəm/ • /ˌwel ˈdʌn/",
    meaningHu: "hús átsütöttségi fokozatai (angolos / közepes / jól átsült)",
    category: "cooking",
    iconType: "steak",
    promptQuestionEn: "What restaurant terms describe how thoroughly a beef steak is cooked?",
    promptQuestionHu: "Hogyan nevezik a steak sütési fokozatait angolul?",
    exampleSentenceEn: "How would you like your steak cooked? — Medium-rare, please.",
    exampleSentenceHu: "Hogyan kéri a steaket átsütve? — Közepesen angolosan, kérem.",
    options: [
      {
        id: "w7-doneness",
        wordEn: "Rare, Medium, Well-done",
        meaningHu: "Átsütöttségi fokozatok",
        isCorrect: true,
        explanationEn: "Correct! Rare (lightly cooked red center), Medium (pink center), Well-done (fully cooked through).",
        explanationHu: "Helyes! Rare (véres/angolos), Medium (közepes rózsaszín), Well-done (teljesen átsült)."
      },
      {
        id: "w7-spicy",
        wordEn: "Mild, Medium, Extra Hot",
        meaningHu: "Csípősségi szintek",
        isCorrect: false,
        explanationEn: "These describe chili spiciness levels, not steak meat doneness.",
        explanationHu: "Ezek a csípősségi szinteket jelzik."
      },
      {
        id: "w7-size",
        wordEn: "Small, Regular, Large",
        meaningHu: "Adagméretek",
        isCorrect: false,
        explanationEn: "These describe portion sizes.",
        explanationHu: "Ezek az adagméretet jelölik."
      },
      {
        id: "w7-crispy",
        wordEn: "Soft, Crunchy, Burnt",
        meaningHu: "Állagok",
        isCorrect: false,
        explanationEn: "These describe textures, not culinary steak meat temperatures.",
        explanationHu: "Ezek általános textúrák."
      }
    ]
  },
  {
    id: 8,
    wordEn: "tip / gratuity",
    phonetic: "/tɪp/ • /ɡrəˈtjuːəti/",
    meaningHu: "borravaló",
    category: "bill_money",
    iconType: "tip",
    promptQuestionEn: "What extra money do customers leave for the waiter for friendly, good service?",
    promptQuestionHu: "Milyen szót használunk a pincérnek adott borravalóra?",
    exampleSentenceEn: "The service was wonderful, let's leave a generous tip for our server.",
    exampleSentenceHu: "A kiszolgálás csodálatos volt, hagyjunk bőséges borravalót!",
    options: [
      {
        id: "w8-tip",
        wordEn: "Tip / Gratuity",
        meaningHu: "Borravaló",
        isCorrect: true,
        explanationEn: "Correct! 'Tip' or formal 'gratuity' is rewarded for good service.",
        explanationHu: "Helyes! A 'tip' (borravaló) vagy formálisabban 'gratuity'."
      },
      {
        id: "w8-discount",
        wordEn: "Discount",
        meaningHu: "Kedvezmény / árengedmény",
        isCorrect: false,
        explanationEn: "'Discount' is a price reduction from the restaurant.",
        explanationHu: "A 'discount' árengedményt jelent."
      },
      {
        id: "w8-deposit",
        wordEn: "Deposit",
        meaningHu: "Kaució / előleg",
        isCorrect: false,
        explanationEn: "'Deposit' is advance money paid to hold a table booking.",
        explanationHu: "A 'deposit' foglalási előleget jelent."
      },
      {
        id: "w8-fine",
        wordEn: "Fine / Surcharge",
        meaningHu: "Bírság / felár",
        isCorrect: false,
        explanationEn: "'Fine' is a penalty payment.",
        explanationHu: "A 'fine' büntetést jelent."
      }
    ]
  }
];
