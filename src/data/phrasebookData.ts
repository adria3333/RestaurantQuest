export interface PhraseCategory {
  category: string;
  categoryHu: string;
  iconName: string;
  phrases: {
    en: string;
    hu: string;
    level: string;
    context: string;
  }[];
}

export const PHRASEBOOK_DATA: PhraseCategory[] = [
  {
    category: "Arrival & Reservations",
    categoryHu: "Érkezés és asztalfoglalás",
    iconName: "CalendarCheck",
    phrases: [
      {
        en: "We have a reservation under the name of Smith for four people at 7:30 PM.",
        hu: "Smith névre van foglalásunk 4 főre 19:30-ra.",
        level: "B1",
        context: "Confirming a booking at the reception / entrance."
      },
      {
        en: "Do you have a table available for two by the window?",
        hu: "Van szabad asztaluk két személyre az ablak mellett?",
        level: "B1",
        context: "Arriving without a booking or asking for a specific location."
      },
      {
        en: "Would it be possible to sit outside on the patio?",
        hu: "Lehetséges lenne kint ülni a belső udvaron/teraszon?",
        level: "B2",
        context: "Polite conditional request for outdoor seating."
      }
    ]
  },
  {
    category: "Ordering Drinks & Food",
    categoryHu: "Ital- és ételrendelés",
    iconName: "Utensils",
    phrases: [
      {
        en: "Could you give us a couple more minutes to look over the menu?",
        hu: "Kérhetnénk még pár percet, hogy átnézzük az étlapot?",
        level: "B1",
        context: "When the waiter arrives but you are not yet ready."
      },
      {
        en: "What would you recommend for the main course?",
        hu: "Mit ajánlana főételnek?",
        level: "B1",
        context: "Asking the waiter for house specialties or recommendations."
      },
      {
        en: "I'd like the ribeye steak, cooked medium-rare, with sauce on the side.",
        hu: "A ribeye steaket kérném közepesen átsütve, a mártást külön tálkában.",
        level: "B2",
        context: "Specifying meat cooking temperature and condiments."
      },
      {
        en: "Does this pasta dish contain any dairy or gluten?",
        hu: "Tartalmaz ez a tésztaétel tejterméket vagy glutént?",
        level: "B1",
        context: "Checking for allergens or dietary restrictions."
      }
    ]
  },
  {
    category: "Handling Issues & Requests",
    categoryHu: "Kérések és udvarias panaszkezelés",
    iconName: "HelpCircle",
    phrases: [
      {
        en: "Excuse me, could we get some extra napkins and a jug of tap water, please?",
        hu: "Elnézést, kérhetnénk még szalvétát és egy kancsó csapvizet?",
        level: "B1",
        context: "Polite request during the meal."
      },
      {
        en: "I think there's been a slight mix-up; I ordered the roasted vegetables rather than chips.",
        hu: "Azt hiszem, egy kis keveredés történt; sült zöldséget kértem hasábburgonya helyett.",
        level: "B2",
        context: "Polite, diplomatic phrasing when an incorrect item is delivered."
      },
      {
        en: "The soup is a bit lukewarm. Would you mind heating it up for me?",
        hu: "A leves kissé langyos. Megtenné, hogy felmelegíti?",
        level: "B2",
        context: "Diplomatically asking for cold food to be rewarmed."
      },
      {
        en: "Could we have a doggy bag / box to take the leftovers with us?",
        hu: "Kérhetnénk egy elviteles dobozt a maradék elviteléhez?",
        level: "B1",
        context: "Taking home unfinished food."
      }
    ]
  },
  {
    category: "The Bill & Tipping",
    categoryHu: "Számla és fizetés",
    iconName: "CreditCard",
    phrases: [
      {
        en: "Could we have the bill / check, please, whenever you're ready?",
        hu: "Kérhetnénk a számlát, amikor alkalmas?",
        level: "B1",
        context: "Requesting the bill politely at the conclusion of dining."
      },
      {
        en: "Is service included in the total, or is it separate?",
        hu: "A szervizdíj benne van a végösszegben, vagy külön értendő?",
        level: "B2",
        context: "Checking if gratuity / service charge is already on the receipt."
      },
      {
        en: "Could we split the bill evenly among the three of us?",
        hu: "El tudnánk osztani a számlát egyenlően hármunk között?",
        level: "B2",
        context: "Splitting payments equally on card or cash."
      },
      {
        en: "Keep the change! The food and hospitality were exceptional.",
        hu: "Tartsa meg a visszajárót! Az étel és a vendéglátás kiváló volt.",
        level: "B1",
        context: "Leaving a generous tip in cash."
      }
    ]
  }
];
