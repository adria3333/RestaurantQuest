import { CompletionQuestion } from '../types';

export const COMPLETION_QUESTIONS: CompletionQuestion[] = [
  {
    id: 1,
    sentenceBefore: "Could we have a",
    blankPlaceholder: "select word...",
    sentenceAfter: "of tap water for the table, please?",
    correctAnswer: "jug",
    targetAnswers: ["jug", "pitcher"],
    pictureLabelEn: "Jug of Water",
    pictureLabelHu: "Kancsó víz poharakkal",
    hintEn: "A large glass pouring vessel with a handle used for serving water to everyone at the table.",
    hintHu: "Nagy üveg kiöntőedény (kancsó) füllel, amiből az egész asztalnak töltenek.",
    fullSentence: "Could we have a jug of tap water for the table, please?",
    explanationEn: "In British restaurants, asking for a 'jug of tap water' is the standard, polite way to request free drinking water for the whole table.",
    explanationHu: "Brit és nemzetközi éttermekben a 'jug of tap water' a bevett, udvarias kifejezés, ha egy kancsó csapvizet kérsz az asztalra.",
    category: "vocabulary",
    options: [
      {
        id: "1-jug",
        value: "jug",
        labelEn: "jug",
        labelHu: "jug (kancsó)",
        isCorrect: true,
        type: "correct",
        explanationEn: "Correct! 'Jug of tap water' perfectly matches the picture showing a glass pouring jug with lemon slices and glasses for the table.",
        explanationHu: "Helyes! A 'jug' (kancsó) pontosan a képen látható, füllel és citromkarikákkal ellátott vizeskancsót jelöli."
      },
      {
        id: "1-jar",
        value: "jar",
        labelEn: "jar",
        labelHu: "jar (befőttesüveg)",
        isCorrect: false,
        type: "similar",
        explanationEn: "'Jar' sounds similar to 'jug', but a jar is a storage container with a screw lid (e.g. jam jar or pickle jar), not a pouring vessel for table water.",
        explanationHu: "A 'jar' hasonlóan hangzik, de az öblös befőttesüveget vagy lekvárosüveget jelent menetes tetővel, nem pedig füllel ellátott kiöntőkancsót."
      },
      {
        id: "1-bottle",
        value: "bottle",
        labelEn: "bottle",
        labelHu: "bottle (palack / üveg)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "While 'a bottle of water' is a common restaurant phrase, the illustration specifically shows an open glass pouring jug with multiple glasses.",
        explanationHu: "Bár a 'bottle of water' (palack víz) gyakori rendelés, a képen egyértelműen egy füllel ellátott asztali kancsó (jug) látható."
      },
      {
        id: "1-glass",
        value: "glass",
        labelEn: "glass",
        labelHu: "glass (pohár)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "You can ask for a 'glass of water' for one person, but 'for the table' with multiple glasses refers to the large serving jug.",
        explanationHu: "Egy pohár vizet ('glass of water') egyetlen személynek kérünk, de az 'egész asztalnak' ('for the table') a képen látható nagy kancsót (jug) kérik."
      },
      {
        id: "1-fork",
        value: "fork",
        labelEn: "fork",
        labelHu: "fork (villa)",
        isCorrect: false,
        type: "incorrect",
        explanationEn: "A fork is a piece of cutlery used for eating food; it is completely nonsensical when ordering liquid tap water.",
        explanationHu: "A 'fork' (villa) evőeszköz szilárd ételekhez; víz rendelésénél teljesen értelmetlen."
      }
    ]
  },
  {
    id: 2,
    sentenceBefore: "I would like to",
    blankPlaceholder: "select word...",
    sentenceAfter: "a table for four people at 8:00 PM tonight.",
    correctAnswer: "book",
    targetAnswers: ["book", "reserve"],
    pictureLabelEn: "Book a Table",
    pictureLabelHu: "Asztalfoglalás",
    hintEn: "The standard English verb used when reserving a table or room in advance.",
    hintHu: "A leggyakoribb angol ige asztalfoglalás kezdeményezésekor.",
    fullSentence: "I would like to book a table for four people at 8:00 PM tonight.",
    explanationEn: "'To book a table' (or 'reserve a table') is the standard collocation used when scheduling a restaurant reservation.",
    explanationHu: "A 'to book a table' (vagy 'reserve a table') a természetes kifejezés asztalfoglalásra.",
    category: "vocabulary",
    options: [
      {
        id: "2-book",
        value: "book",
        labelEn: "book",
        labelHu: "book (lefoglal)",
        isCorrect: true,
        type: "correct",
        explanationEn: "Correct! 'Book a table' matches the reservation calendar displayed in the picture and fits after 'would like to'.",
        explanationHu: "Helyes! A 'book a table' pontosan illeszkedik a képen látható foglalási naptárhoz és a 'would like to' kifejezéshez."
      },
      {
        id: "2-booking",
        value: "booking",
        labelEn: "booking",
        labelHu: "booking (foglalás / -ing alak)",
        isCorrect: false,
        type: "similar",
        explanationEn: "Grammatical error: after the modal structure 'would like to', you must use the base infinitive verb ('book'), not the '-ing' form.",
        explanationHu: "Nyelvtani hiba: a 'would like to' után a főige szótári alakja ('book') következik, nem pedig a folyamatos/főnévi '-ing' alak."
      },
      {
        id: "2-cancel",
        value: "cancel",
        labelEn: "cancel",
        labelHu: "cancel (lemond)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "'Cancel a table' is a valid restaurant phrase, but the picture shows creating an active reservation for tonight, not cancelling one.",
        explanationHu: "Bár a 'cancel a table' (asztal lemondása) valós kifejezés, a képen egy új foglalás rögzítése látható a naptárban, nem lemondás."
      },
      {
        id: "2-set",
        value: "set",
        labelEn: "set",
        labelHu: "set (megterít)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "Restaurant staff 'set a table' (lay out cutlery and glasses), but customers making a reservation 'book a table'.",
        explanationHu: "A személyzet 'megteríti az asztalt' (set the table), de a vendég érkezés előtt asztalt foglal (book a table)."
      },
      {
        id: "2-cook",
        value: "cook",
        labelEn: "cook",
        labelHu: "cook (főz)",
        isCorrect: false,
        type: "incorrect",
        explanationEn: "You cook meals or ingredients; 'cooking a table' is completely nonsensical.",
        explanationHu: "Főzni ételeket szoktunk; az 'asztal főzése' teljesen értelmetlen."
      }
    ]
  },
  {
    id: 3,
    sentenceBefore: "Excuse me, does this dressing contain any",
    blankPlaceholder: "select word...",
    sentenceAfter: "? My friend is severely allergic.",
    correctAnswer: "nuts",
    targetAnswers: ["nuts", "peanuts"],
    pictureLabelEn: "Contains Nuts?",
    pictureLabelHu: "Diófélék / Mogyoró",
    hintEn: "A common tree or ground allergen that can cause severe reactions in prepared salads and dressings.",
    hintHu: "Gyakori allergén (dió- és mogyorófélék), amely súlyos reakciót válthat ki öntetekben.",
    fullSentence: "Excuse me, does this dressing contain any nuts? My friend is severely allergic.",
    explanationEn: "Asking 'Does this contain any nuts?' is the standard medical allergy inquiry for food safety.",
    explanationHu: "A 'Does this contain any nuts?' a szabványos kérdés allergia tisztázására éttermekben.",
    category: "politeness",
    options: [
      {
        id: "3-nuts",
        value: "nuts",
        labelEn: "nuts",
        labelHu: "nuts (dió- és mogyorófélék)",
        isCorrect: true,
        type: "correct",
        explanationEn: "Correct! 'Nuts' matches the peanut/walnut allergen warning symbol clearly shown on the salad dressing in the picture.",
        explanationHu: "Helyes! A 'nuts' pontosan megfelel a képen az öntet mellett látható mogyoró/dió allergén figyelmeztetésnek."
      },
      {
        id: "3-nutty",
        value: "nutty",
        labelEn: "nutty",
        labelHu: "nutty (diós ízű - melléknév)",
        isCorrect: false,
        type: "similar",
        explanationEn: "'Nutty' is an adjective describing taste or texture. After 'contain any', a plural noun ('nuts') is grammatically required.",
        explanationHu: "A 'nutty' egy diós ízvilágot leíró melléknév. A 'contain any' szerkezet után többes számú főnév ('nuts') szükséges."
      },
      {
        id: "3-dairy",
        value: "dairy",
        labelEn: "dairy",
        labelHu: "dairy (tejtermék)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "'Dairy' is a common allergen, but the picture specifically highlights tree nuts/peanuts on the allergen warning badge.",
        explanationHu: "A tejtermék ('dairy') szintén gyakori allergén, de a képen kifejezetten dió/mogyoró ('nuts') figyelmeztetés szerepel."
      },
      {
        id: "3-shellfish",
        value: "shellfish",
        labelEn: "shellfish",
        labelHu: "shellfish (kagyló / rákfélék)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "'Shellfish' is a valid food allergy, but it is not the allergen illustrated in the house salad dressing graphic.",
        explanationHu: "A tenger gyümölcsei ('shellfish') valós allergén, de a képen nem ez, hanem a mogyorófélék láthatók."
      },
      {
        id: "3-napkins",
        value: "napkins",
        labelEn: "napkins",
        labelHu: "napkins (szalvéták)",
        isCorrect: false,
        type: "incorrect",
        explanationEn: "Napkins are paper products used to wipe your hands; they are not food ingredients or allergens.",
        explanationHu: "A 'napkins' (szalvéták) papíreszköz kéztörléshez; semmiképpen sem ételösszetevő vagy allergén."
      }
    ]
  },
  {
    id: 4,
    sentenceBefore: "Everything was wonderful! You can keep the",
    blankPlaceholder: "select word...",
    sentenceAfter: "as a thank you for the great service.",
    correctAnswer: "change",
    targetAnswers: ["change"],
    pictureLabelEn: "Keep the Change",
    pictureLabelHu: "Visszajáró / Borravaló",
    hintEn: "The coins or notes returned to you after paying more than the bill total.",
    hintHu: "A fizetés után visszajáró készpénz vagy aprópénz.",
    fullSentence: "Everything was wonderful! You can keep the change as a thank you for the great service.",
    explanationEn: "'Keep the change' is the idiomatic phrase used worldwide when leaving the returned money as a tip.",
    explanationHu: "A 'Keep the change' (Tartsa meg a visszajárót) a klasszikus kifejezés a készpénzes borravaló átadásakor.",
    category: "paying",
    options: [
      {
        id: "4-change",
        value: "change",
        labelEn: "change",
        labelHu: "change (visszajáró)",
        isCorrect: true,
        type: "correct",
        explanationEn: "Correct! 'Keep the change' matches the banknotes and returned gold tip coins shown in the bill booklet.",
        explanationHu: "Helyes! A 'keep the change' pontosan megfelel a számlatartóban látható visszajáró pénzérméknek és bankjegyeknek."
      },
      {
        id: "4-changes",
        value: "changes",
        labelEn: "changes",
        labelHu: "changes (változtatások)",
        isCorrect: false,
        type: "similar",
        explanationEn: "Plural error: money returned from a financial transaction is the uncountable noun 'change'. 'Changes' means modifications.",
        explanationHu: "Nyelvtani hiba: a visszajáró pénz megszámlálhatatlan főnévként mindig 'change'. A többes számú 'changes' változtatásokat jelent."
      },
      {
        id: "4-receipt",
        value: "receipt",
        labelEn: "receipt",
        labelHu: "receipt (blokk / nyugta)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "A receipt is printed at checkout, but telling the server to 'keep the receipt' does not leave them a monetary tip.",
        explanationHu: "A 'receipt' a pénztári nyugta, de annak ott hagyása nem minősül pénzbeli borravalónak."
      },
      {
        id: "4-menu",
        value: "menu",
        labelEn: "menu",
        labelHu: "menu (étlap)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "The menu is restaurant property; guests do not leave menus as gratuities for good service.",
        explanationHu: "Az étlap az étterem tulajdona; a vendég nem az étlapot adja oda borravalóként."
      },
      {
        id: "4-chair",
        value: "chair",
        labelEn: "chair",
        labelHu: "chair (szék)",
        isCorrect: false,
        type: "incorrect",
        explanationEn: "A chair is dining room furniture; it is completely nonsensical when thanking a server at payment.",
        explanationHu: "A 'chair' (szék) bútor; fizetéskor és borravalóadáskor teljesen értelmetlen."
      }
    ]
  },
  {
    id: 5,
    sentenceBefore: "Excuse me, the tomato soup has gotten a bit cold. Could you please",
    blankPlaceholder: "select word...",
    sentenceAfter: "it up for me?",
    correctAnswer: "heat",
    targetAnswers: ["heat", "warm"],
    pictureLabelEn: "Heat it up",
    pictureLabelHu: "Felmelegítés",
    hintEn: "A common kitchen verb meaning to raise the temperature of a dish (combined with 'up').",
    hintHu: "Ige: ételt megmelegíteni a konyhában (az 'up' szócska előtt).",
    fullSentence: "Excuse me, the tomato soup has gotten a bit cold. Could you please heat it up for me?",
    explanationEn: "'Heat it up' (or 'warm it up') is the polite, standard phrasal verb to request kitchen reheating.",
    explanationHu: "A 'heat it up' (vagy 'warm it up') az udvarias fordulat, ha egy kihűlt étel megmelegítését kéred.",
    category: "complaints",
    options: [
      {
        id: "5-heat",
        value: "heat",
        labelEn: "heat",
        labelHu: "heat (felmelegít)",
        isCorrect: true,
        type: "correct",
        explanationEn: "Correct! 'Heat it up' matches the warming steam and flame graphic on the soup bowl in the picture.",
        explanationHu: "Helyes! A 'heat it up' pontosan megfelel a levesestál mellett látható melegítési/gőz szimbólumnak."
      },
      {
        id: "5-heating",
        value: "heating",
        labelEn: "heating",
        labelHu: "heating (fűtés / melegítés - ing alak)",
        isCorrect: false,
        type: "similar",
        explanationEn: "Grammatical error: after the modal phrase 'could you please', you must use the bare base verb 'heat', not the participle 'heating'.",
        explanationHu: "Nyelvtani hiba: a 'could you please' segédige után szótári alapalak ('heat') szükséges, nem pedig '-ing' végződés."
      },
      {
        id: "5-wrap",
        value: "wrap",
        labelEn: "wrap",
        labelHu: "wrap (becsomagol)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "'Wrap it up' means packaging food to take away, but the customer wants to eat the soup hot right now.",
        explanationHu: "A 'wrap it up' elviteles csomagolást jelent, de a vendég most szeretné melegen elfogyasztani a levest."
      },
      {
        id: "5-serve",
        value: "serve",
        labelEn: "serve",
        labelHu: "serve (felszolgál)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "'Serve it up' means dishing out a new plate, but the soup is already on the table and just needs reheating.",
        explanationHu: "A 'serve it up' új fogás tálalását jelenti, de a leves már az asztalon van, csak melegítésre szorul."
      },
      {
        id: "5-drink",
        value: "drink",
        labelEn: "drink",
        labelHu: "drink (iszik)",
        isCorrect: false,
        type: "incorrect",
        explanationEn: "'Drink it up for me' would nonsensically ask the waiter to drink the customer's soup.",
        explanationHu: "A 'drink it up for me' azt jelentené, hogy a pincér igya meg a vendég levesét, ami abszurd."
      }
    ]
  },
  {
    id: 6,
    sentenceBefore: "Could you please put the Caesar salad dressing on the",
    blankPlaceholder: "select word...",
    sentenceAfter: "rather than mixing it in?",
    correctAnswer: "side",
    targetAnswers: ["side"],
    pictureLabelEn: "On the Side",
    pictureLabelHu: "Külön tálkában",
    hintEn: "The classic restaurant phrase meaning served in a separate small container next to the dish.",
    hintHu: "Az alapvető éttermi kifejezés arra, ha az öntetet nem a salátára öntve, hanem külön kis tálkában kéred.",
    fullSentence: "Could you please put the Caesar salad dressing on the side rather than mixing it in?",
    explanationEn: "'On the side' is an essential restaurant term for sauces, dressings, or dips served in a separate ramekin.",
    explanationHu: "Az 'on the side' alapvető kifejezés a külön edényben felszolgált öntetekre és szószokra.",
    category: "vocabulary",
    options: [
      {
        id: "6-side",
        value: "side",
        labelEn: "side",
        labelHu: "side (külön / az étel mellett)",
        isCorrect: true,
        type: "correct",
        explanationEn: "Correct! 'On the side' matches the picture showing the Caesar salad with the dressing in a separate ramekin bowl.",
        explanationHu: "Helyes! Az 'on the side' pontosan megfelel a képen a saláta mellett külön tálkában álló öntetnek."
      },
      {
        id: "6-sideways",
        value: "sideways",
        labelEn: "sideways",
        labelHu: "sideways (oldalra fordítva - határozószó)",
        isCorrect: false,
        type: "similar",
        explanationEn: "'Sideways' is an adverb meaning tilted or moving to the side; the fixed culinary phrase is 'on the side'.",
        explanationHu: "A 'sideways' egy mozgásirányt/dőlést kifejező határozószó; az éttermi kifejezés rögzült alakja 'on the side'."
      },
      {
        id: "6-top",
        value: "top",
        labelEn: "top",
        labelHu: "top (tetejére)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "Putting dressing 'on the top' means pouring it directly over the salad, which directly contradicts 'rather than mixing it in'.",
        explanationHu: "Az 'on the top' a salátára ráöntött dresszinget jelentené, ami ellentétes a külön kéréssel ('rather than mixing it in')."
      },
      {
        id: "6-table",
        value: "table",
        labelEn: "table",
        labelHu: "table (asztal felülete)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "Dressing belongs in a small bowl, not poured directly onto the table surface.",
        explanationHu: "Az öntetet kis tálkában kérik a tányér mellé, nem közvetlenül az asztal lapjára öntve."
      },
      {
        id: "6-floor",
        value: "floor",
        labelEn: "floor",
        labelHu: "floor (padló)",
        isCorrect: false,
        type: "incorrect",
        explanationEn: "Serving food on the floor is unhygienic and completely nonsensical in a restaurant.",
        explanationHu: "Az étel padlóra öntése higiéniai képtelenség és teljesen értelmetlen."
      }
    ]
  },
  {
    id: 7,
    sentenceBefore: "We loved the food, but we couldn't finish it all. Could we have a",
    blankPlaceholder: "select word...",
    sentenceAfter: "bag to take the leftovers home?",
    correctAnswer: "doggy",
    targetAnswers: ["doggy", "takeaway"],
    pictureLabelEn: "Doggy Bag",
    pictureLabelHu: "Elviteles doboz / tasak",
    hintEn: "The famous, classic English compound phrase for packing unfinished restaurant food to take home.",
    hintHu: "A híres és elterjedt angol kifejezés a meghagyott étel elviteles csomagolására.",
    fullSentence: "We loved the food, but we couldn't finish it all. Could we have a doggy bag to take the leftovers home?",
    explanationEn: "'Doggy bag' is the recognized, ubiquitous English idiom for packaging restaurant meal leftovers.",
    explanationHu: "A 'doggy bag' a világszerte legismertebb kifejezés a maradék étel elcsomagolásának kérésére.",
    category: "politeness",
    options: [
      {
        id: "7-doggy",
        value: "doggy",
        labelEn: "doggy",
        labelHu: "doggy (maradékot elvivő - 'doggy bag')",
        isCorrect: true,
        type: "correct",
        explanationEn: "Correct! 'Doggy bag' matches the takeaway container and paper food bag shown on the table in the picture.",
        explanationHu: "Helyes! A 'doggy bag' pontosan a képen látható elviteles maradékcsomagoló dobozt és tasakot jelenti."
      },
      {
        id: "7-dog",
        value: "dog",
        labelEn: "dog",
        labelHu: "dog (kutya)",
        isCorrect: false,
        type: "similar",
        explanationEn: "The idiom is specifically 'doggy bag'. Using the literal noun 'dog bag' is grammatically non-standard.",
        explanationHu: "A rögzült kifejezés 'doggy bag'. A szó szerinti 'dog bag' formailag helytelen és szokatlan."
      },
      {
        id: "7-shopping",
        value: "shopping",
        labelEn: "shopping",
        labelHu: "shopping (bevásárló szatyor)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "A 'shopping bag' is used for supermarket or clothing retail, not for packaging hot restaurant meal leftovers.",
        explanationHu: "A 'shopping bag' ruházati vagy élelmiszerbolti bevásárlótáskát jelent, nem pedig éttermi ételcsomagolást."
      },
      {
        id: "7-plastic",
        value: "plastic",
        labelEn: "plastic",
        labelHu: "plastic (műanyag)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "While bags can be made of plastic, the established idiomatic phrase for food leftovers is 'doggy bag'.",
        explanationHu: "Bár a zacskó anyaga lehet műanyag, a maradék étel elcsomagolásának bevett nyelvi fordulata a 'doggy bag'."
      },
      {
        id: "7-spoon",
        value: "spoon",
        labelEn: "spoon",
        labelHu: "spoon (kanál)",
        isCorrect: false,
        type: "incorrect",
        explanationEn: "A spoon is a piece of soup cutlery; 'spoon bag' is completely nonsensical.",
        explanationHu: "A 'spoon' (kanál) evőeszköz; a 'kanáltáska' teljesen értelmetlen."
      }
    ]
  },
  {
    id: 8,
    sentenceBefore: "Pardon me, I think there is a small",
    blankPlaceholder: "select word...",
    sentenceAfter: "on our bill—we were charged for two desserts instead of one.",
    correctAnswer: "mistake",
    targetAnswers: ["mistake", "error"],
    pictureLabelEn: "Bill Mistake",
    pictureLabelHu: "Számlaeltérés / Hiba",
    hintEn: "A diplomatic noun meaning an unintentional error or discrepancy on an invoice.",
    hintHu: "Udvarias és diplomatikus főnév a számlán lévő tévedés vagy hiba jelzésére.",
    fullSentence: "Pardon me, I think there is a small mistake on our bill—we were charged for two desserts instead of one.",
    explanationEn: "'I think there is a small mistake...' is the most diplomatic way to raise a billing error without causing conflict.",
    explanationHu: "Az 'I think there is a small mistake...' a legudvariasabb és legtermészetesebb módja a számlázási hiba jelzésének.",
    category: "complaints",
    options: [
      {
        id: "8-mistake",
        value: "mistake",
        labelEn: "mistake",
        labelHu: "mistake (tévedés / hiba)",
        isCorrect: true,
        type: "correct",
        explanationEn: "Correct! 'A small mistake' matches the red circle highlighting the extra accidental charge on the bill in the picture.",
        explanationHu: "Helyes! A 'small mistake' pontosan megfelel a számlán pirossal bekarikázott téves tételnek."
      },
      {
        id: "8-mistaken",
        value: "mistaken",
        labelEn: "mistaken",
        labelHu: "mistaken (tévedő / tévedésben lévő - melléknév)",
        isCorrect: false,
        type: "similar",
        explanationEn: "'Mistaken' is an adjective (e.g. 'I am mistaken'). After 'a small...', a singular noun ('mistake') is required.",
        explanationHu: "A 'mistaken' egy melléknév (pl. 'tévedésben van'). Az 'a small...' után főnév ('mistake') szükséges."
      },
      {
        id: "8-discount",
        value: "discount",
        labelEn: "discount",
        labelHu: "discount (árkedvezmény)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "A discount reduces the price, whereas being charged for an extra dessert is an accidental billing error.",
        explanationHu: "A 'discount' kedvezmény, míg egy pluszban felszámolt desszert téves számlázási hiba."
      },
      {
        id: "8-tax",
        value: "tax",
        labelEn: "tax",
        labelHu: "tax (adó / ÁFA)",
        isCorrect: false,
        type: "acceptable_unmatching",
        explanationEn: "Tax is a standard legal government charge, not an accidental duplicate food item.",
        explanationHu: "Az adó ('tax') törvényes kötelező tétel, nem pedig egy véletlenül kétszer kiszámlázott tétel."
      },
      {
        id: "8-knife",
        value: "knife",
        labelEn: "knife",
        labelHu: "knife (kés)",
        isCorrect: false,
        type: "incorrect",
        explanationEn: "A knife is cutlery; saying there is a 'small knife on our bill' is nonsensical.",
        explanationHu: "A 'knife' (kés) evőeszköz; számlázási hibára vonatkoztatva teljesen értelmetlen."
      }
    ]
  }
];
