const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836734/WhatsApp_Image_2026-05-12_at_16.01.06_6_ai9nji.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836778/WhatsApp_Image_2026-05-12_at_16.01.06_5_mcnnad.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836790/WhatsApp_Image_2026-05-12_at_16.01.06_2_nw5mzl.jpg";
const artwork5_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836798/WhatsApp_Image_2026-05-12_at_16.01.06_1_zunbtg.jpg";
const artwork5_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836806/WhatsApp_Image_2026-05-12_at_16.01.06_cpdnc1.jpg";
const artwork3_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836811/WhatsApp_Image_2026-05-12_at_16.01.06_4_gouxxv.jpg";
const artwork6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836815/WhatsApp_Image_2026-05-12_at_16.01.05_5_w1slhc.jpg";
const artwork7Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836819/WhatsApp_Image_2026-05-12_at_16.01.05_4_mw2bgk.jpg";
const artwork8Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836823/WhatsApp_Image_2026-05-12_at_16.01.05_3_vsp8jz.jpg";
const artwork9Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836826/WhatsApp_Image_2026-05-12_at_16.01.05_2_yw0i6l.jpg";
const artwork10Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836829/WhatsApp_Image_2026-05-12_at_16.01.05_1_vpmi9g.jpg";
const artwork11Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836832/WhatsApp_Image_2026-05-12_at_16.01.05_fzaonx.jpg";
const artwork3_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836886/WhatsApp_Image_2026-05-12_at_16.01.06_3_ruxve2.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room1Artworks: InfoHotspot[] = [
  {
    id: "room1-artwork-1",
    title: "The Relative of the Lord",
    subtitle: "Bogdan Văduță | 2016, Oil on canvas, Private collection",
    description:
      "Bogdan Viaduta's painting draws its inspiration from the great moments in art history, filtering the essence of qualitative accumulations through the value sieve of the experience of a lucid and conscious artist, equally aware of his own present and of the positive ballast that plays a structural, constitutive role in the great fresco of European memory. A notable beneficiary of the Romanian state's Vasile Parvan scholarship in Rome, Bogdan Vlăduță now operates surgically with the instruments of Italian and European painting and cinema, without restraint, on the open heart of contemporary history, in an attempt to ritually heal, through painting, the wounds of an incandescent present, from which he sublimates the tragic and visible cultural memory of Europe. This work is a reference to Pier Paolo Pasolini's iconic film The Gospel According to Matthew(1964).",
    image: artwork1Img,
    position: sphericalPosition(234, 18),
    quizQuestions: [
      {
        id: "room1-artwork-1-q1",
        question: "Which famous film inspired this painting?",
        options: [
          "La Dolce Vita",
          "8½",
          "The Gospel According to Matthew",
          "Roma"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room1-artwork-1-q2",
        question:
          "What artistic tradition strongly influences Bogdan Vlăduță's work?",
        options: [
          "Japanese ukiyo-e prints",
          "Dutch marine painting",
          "Italian and European painting and cinema",
          "Medieval manuscript art"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room1-artwork-1-q3",
        question: "What does the artwork attempt to heal through painting?",
        options: [
          "The wounds of the contemporary world",
          "Ancient architecture",
          "Religious institutions",
          "Political systems"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room1-artwork-2",
    title: "Mask",
    subtitle: "Inventory 6613 & 6608 | 1st c. AD, Marble, MANN, Naples",
    description:
      "These marble masks are decorative elements known as oscilla, often suspended between the columns of a peristyle. Moved by the wind, they would rotate, serving both a decorative and an apotropaic purpose-warding off evil spirits. The inspiration comes from the world of theatre, representing typical characters from comedy or tragedy. The exaggerated features were meant to be visible from a distance. In a garden context, the mask becomes a symbol of Dionysus (Bacchus), the god of wine, vegetation, and theatre, transforming the space into a place dedicated to pleasure. Crafted from marble, these masks underscore the owner's opulence and refined taste. They were part of a larger decorative program that included statues and fountains, all contributing to the creation of a cultivated, Hellenistic-inspired atmosphere.",
    image: artwork2Img,
    position: sphericalPosition(266, 12),
    quizQuestions: [
      {
        id: "room1-artwork-2-q1",
        question: "What were these marble masks called in Roman gardens?",
        options: ["Herms", "Lararia", "Mosaica", "Oscilla"],
        correctAnswerIndex: 3
      },
      {
        id: "room1-artwork-2-q2",
        question: "What was one purpose of these rotating masks?",
        options: [
          "To hold oil lamps",
          "To ward off evil spirits",
          "To support fountains",
          "To display family names"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room1-artwork-2-q3",
        question: "Which god is associated with these theatrical garden masks?",
        options: ["Apollo", "Mars", "Dionysus", "Neptune"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room1-artwork-3_1",
    title: "Dionysian double herm",
    subtitle: "Inventory 6478 | 1st c. AD, Marble, MANN, Naples",
    description:
      "This piece is a double herm, a decorative sculptural form for gardens, denived from the Greek herm. The double version, with two heads back-to-back, was particularly esteemed, allowing the work to be viewed from multiple angles. The subject is Dionysian, likely representing Dionysus, the god of wine and ecstasy, alongside Ariadne, or perhaps two aspects of the same god. This duality is specific to the nature of Dionysus, a deity of contrasts. Placed in a garden, the herm sanctified the space, transforming it into the god's territory. The presence of such a sculpture reflects the owner's familiarity with Greek culture and art. The Roman garden was a leisure space and also an open-alr art gallery, a venue for philosophical conversations and the display of an elevated artistic taste.",
    images: [artwork3_1Img, artwork3_2Img],
    position: sphericalPosition(277, 11.5),
    quizQuestions: [
      {
        id: "room1-artwork-3-q1",
        question: "What type of sculpture is this artwork?",
        options: [
          "A triumphal bust",
          "A sarcophagus",
          "A relief panel",
          "A double herm"
        ],
        correctAnswerIndex: 3
      },
      {
        id: "room1-artwork-3-q2",
        question: "Which deity is most likely represented in this sculpture?",
        options: ["Jupiter", "Dionysus", "Mercury", "Saturn"],
        correctAnswerIndex: 1
      },
      {
        id: "room1-artwork-3-q3",
        question: "Why were double herms appreciated in Roman gardens?",
        options: [
          "They could be viewed from multiple angles",
          "They produced sound in the wind",
          "They functioned as fountains",
          "They stored sacred objects"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room1-artwork-4",
    title: "Mask",
    subtitle: "Inventory 6613 & 6608 | 1st c. AD, Marble, MANN, Naples",
    description:
      "These marble masks are decorative elements known as oscilla, often suspended between the columns of a peristyle. Moved by the wind, they would rotate, serving both a decorative and an apotropaic purpose-warding off evil spirits. The inspiration comes from the world of theatre, representing typical characters from comedy or tragedy. The exaggerated features were meant to be visible from a distance. In a garden context, the mask becomes a symbol of Dionysus (Bacchus), the god of wine, vegetation, and theatre, transforming the space into a place dedicated to pleasure. Crafted from marble, these masks underscore the owner's opulence and refined taste. They were part of a larger decorative program that included statues and fountains, all contributing to the creation of a cultivated, Hellenistic-inspired atmosphere",
    image: artwork4Img,
    position: sphericalPosition(286, 11.5),
    quizQuestions: [
      {
        id: "room1-artwork-4-q1",
        question: "What artistic world inspired these decorative masks?",
        options: [
          "Military ceremonies",
          "Theatre",
          "Naval battles",
          "Agriculture"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room1-artwork-4-q2",
        question: "What material were these masks made from?",
        options: ["Bronze", "Terracotta", "Marble", "Wood"],
        correctAnswerIndex: 2
      },
      {
        id: "room1-artwork-4-q3",
        question: "What did these masks symbolize in Roman gardens?",
        options: [
          "Military victory",
          "Imperial taxation",
          "Political authority",
          "Luxury and refined taste"
        ],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    id: "room1-artwork-5_1",
    title: "Dionysian double herm",
    subtitle: "Inventory 6478 | 1st c. AD, Marble, MANN, Naples",
    description:
      "This piece is a double herm, a decorative sculptural form for gardens, denived from the Greek herm. The double version, with two heads back-to-back, was particularly esteemed, allowing the work to be viewed from multiple angles. The subject is Dionysian, likely representing Dionysus, the god of wine and ecstasy, alongside Ariadne, or perhaps two aspects of the same god. This duality is specific to the nature of Dionysus, a deity of contrasts. Placed in a garden, the herm sanctified the space, transforming it into the god's territory. The presence of such a sculpture reflects the owner's familiarity with Greek culture and art. The Roman garden was a leisure space and also an open-alr art gallery, a venue for philosophical conversations and the display of an elevated artistic taste.",
    images: [artwork5_1Img, artwork5_2Img],
    position: sphericalPosition(304, 11.5),
    quizQuestions: [
      {
        id: "room1-artwork-5-q1",
        question: "What cultural influence is reflected by this sculpture?",
        options: [
          "Greek culture and art",
          "Egyptian funerary traditions",
          "Persian military culture",
          "Medieval iconography"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room1-artwork-5-q2",
        question: "What type of Roman space commonly displayed herms?",
        options: ["Gardens", "Bathhouses", "Temples only", "Marketplaces"],
        correctAnswerIndex: 0
      },
      {
        id: "room1-artwork-5-q3",
        question: "What concept is associated with Dionysus in this artwork?",
        options: [
          "War and conquest",
          "Trade and commerce",
          "Wine and ecstasy",
          "Law and justice"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room1-artwork-6",
    title: "Leda",
    subtitle: "Inventory 9549 | 1st c. AD, Fresco, MANN, Naples",
    description:
      "This fresco depicts one of the most sensual Greek myths: the union of Leda, Queen of Sparta, and Zeus, metamorphosed into a swan. The story, popularized by Ovid, was a popular subject in Roman domestic art, especially for decorating bedrooms (cubicula), due to its erotic connotations. The scene captures Leda in a graceful pose. The Pompeian artist focuses this time not on the implicit violence of the myth, but on the beauty and sensuality of the moment. From this mythical union, Helen of Troy and the Dioscuri would be born, underscoring the event's importance: The presence of such mythological scenes served a dual function. It was a demonstration of culture and famillarity with classical literature, as well as a way to infuse the private space with a divine and legendary dimension. The fresco is a perfect example of how Roman art combined the decorative, the erotic, and high culture.",
    image: artwork6Img,
    position: sphericalPosition(331.5, 12.5),
    quizQuestions: [
      {
        id: "room1-artwork-6-q1",
        question: "Into what animal did Zeus transform himself in this myth?",
        options: ["An eagle", "A swan", "A bull", "A lion"],
        correctAnswerIndex: 1
      },
      {
        id: "room1-artwork-6-q2",
        question: "Who is Leda in Greek mythology?",
        options: [
          "A Roman empress",
          "A priestess of Apollo",
          "The Queen of Sparta",
          "A goddess of the sea"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room1-artwork-6-q3",
        question:
          "Where were erotic mythological frescoes often displayed in Roman houses?",
        options: ["Kitchens", "Public baths", "Libraries", "Bedrooms"],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    id: "room1-artwork-7",
    title: "Pompeii, House of the Grand Fountain",
    subtitle: "Luigi Bazzani | Early 20th c., Watercolor, MANN, Naples",
    description:
      "Bazzani here immortalizes one of the most spectacular decorative creations in Pompeii: the monumental fountain of the Casa della Fontana Grande This house is renowned for its nymphaeum-an elaborate fountain integrated into a wall, designed to imitate a natural grotto and covered with mosaics and shells. Bazzani's watercolor focuses on the fountain's refined details. The artist renders with meticulous attention the decorative motifs, the tragic bronze masks, and the complexity of the ensemble. Bazzani manages to suggest the play of light on the wet mosaic surface. Like his other works, the watercolor has a dual value. It is an autonomous work of art and, at the same time, a priceless archaeological document, recording the fountain's condition in the early 20th century. Through Bazzani's eyes, we see how the Romans integrated art, architecture, and water to create spaces of distinguished beauty.",
    image: artwork7Img,
    position: sphericalPosition(359.5, 18),
    quizQuestions: [
      {
        id: "room1-artwork-7-q1",
        question:
          "What type of structure is the monumental fountain in this artwork?",
        options: [
          "A nymphaeum",
          "A basilica",
          "An amphitheater",
          "A mausoleum"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room1-artwork-7-q2",
        question: "What technique did Luigi Bazzani use in this artwork?",
        options: ["Watercolor", "Oil painting", "Mosaic", "Fresco"],
        correctAnswerIndex: 0
      },
      {
        id: "room1-artwork-7-q3",
        question:
          "What combination did Roman decorative spaces often integrate?",
        options: [
          "Military and religious symbols",
          "Industrial machinery and sculpture",
          "Political propaganda and trade",
          "Art, architecture, and water"
        ],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    id: "room1-artwork-8",
    title: "Pompeii, Lararium, House of Dioscuri",
    subtitle: "Luigi Bazzani | Early 20th c., Watercolor, MANN, Naples",
    description:
      "Luigi Bazzani was a painter-archaeologist whose work is invaluable for documenting Pompeii. This work depicts the lararium-the domestic shrine-from the famous House of the Dioscuri. The lararium was the spiritual heart of the home, a sacred space where the family made offerings to the protective spirits, the Lares. Bazzani masterfully captures the shrine's architecture as well as its state of preservation at the time of discovery. Through the subtle use of light. and muted colors, the artist evokes an atmosphere of melancholy and mystery: His work becomes a precious document, preserving details that might have otherwise deteriorated. This watercolor illustrates the modern era's fascination with Pompeii. For artists like Bazzani, the site was a source of romantic inspiration. His work stands at the intersection of science and art, offering a vision that is both a faithful record and a poetic meditation on the fragility of civilization.",
    image: artwork8Img,
    position: sphericalPosition(368.5, 18),
    quizQuestions: [
      {
        id: "room1-artwork-8-q1",
        question: "What was a lararium in a Roman house?",
        options: [
          "A dining room",
          "A domestic shrine",
          "A sleeping chamber",
          "A bath complex"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room1-artwork-8-q2",
        question: "Which spirits were honored in the lararium?",
        options: ["The Titans", "The Furies", "The Lares", "The Sibyls"],
        correctAnswerIndex: 2
      },
      {
        id: "room1-artwork-8-q3",
        question: "How is Luigi Bazzani often described?",
        options: [
          "A military illustrator",
          "A sculptor-engineer",
          "A Renaissance architect",
          "A painter-archaeologist"
        ],
        correctAnswerIndex: 3
      }
    ]
  },
  {
    id: "room1-artwork-9",
    title: "Architectural view with mask and poet",
    subtitle: "Inventory 9033 | 1st c. AD, Fresco, MANN, Naples",
    description:
      "This fresco is a special example of the Fourth Pompeian Style, a complex and eclectic artistic language that dominated interior decoration in the years leading up to the catastrophe of 79 AD. The work employs the trompe-l'œil technique to create an illusionistic opening in the wall, revealing a fantastical and airy architecture. This style reflects the tastes of a sophisticated society that delighted in visual games and complex cultural references. At the heart of this imaginary architecture, the presence of a theatrical mask and the figure of a poet are key elements. The tragic mask directly evokes the world of theatre, an essential component of civic life, while the meditative figure of the poet symbolizes the importance of otium - leisure time dedicated to contemplation. For the villa's owner, such a scene was a statement of his social status and erudition. This fragment is a window into the mental universe of a wealthy Roman. The Fourth Style, with its mix of illusionistic perspectives and mythological scenes, perfectly captures the spirit of a civilization at the peak of Its confidence and artistic expression.",
    image: artwork9Img,
    position: sphericalPosition(398.5, 9),
    quizQuestions: [
      {
        id: "room1-artwork-9-q1",
        question: "Which Pompeian artistic style does this fresco represent?",
        options: [
          "Fourth Pompeian Style",
          "First Pompeian Style",
          "Classical Greek Style",
          "Byzantine Style"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room1-artwork-9-q2",
        question: "What illusionistic technique is used in this fresco?",
        options: ["Chiaroscuro", "Impasto", "Trompe-l'œil", "Pointillism"],
        correctAnswerIndex: 2
      },
      {
        id: "room1-artwork-9-q3",
        question: "What Roman concept is symbolized by the poet figure?",
        options: ["Otium", "Imperium", "Virtus", "Negotium"],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room1-artwork-10",
    title: "Seascape",
    subtitle: "Inventory 9480 | 1st c. AD, Fresco, MANN, Naples",
    description:
      "Seascapes were a popular genre in Roman painting, serving to bring nature indoors. This fresco is not at all a topographical representation but an idealizer composition intended to evoke an atmosphere of tranquility and prosperity. W see a picturesque coast dotted with luxurious villas (villae maritimae), a vision o a harmonious life between man and nature. These landscapes were the visual expression of the concept of otium, the time dedicated to relaxation, in contraș to the bustle of public life (negotium). Painting such scenes on the walls of urbar homes served as a permanent source of visual delight and imaginary escape. Technically, the work is rendered in quick, energetic brushstrokes, where the focus is on creating an overall atmosphere. The use of aerial perspective gives the composition a sense of depth and spatiality. The fresco speaks of a culture that deeply valued the beauty of the landscape and the sea.",
    image: artwork10Img,
    position: sphericalPosition(79, 16.5),
    quizQuestions: [
      {
        id: "room1-artwork-10-q1",
        question: "What atmosphere was this seascape intended to evoke?",
        options: [
          "Fear and destruction",
          "Political conflict",
          "Military discipline",
          "Tranquility and prosperity"
        ],
        correctAnswerIndex: 3
      },
      {
        id: "room1-artwork-10-q2",
        question:
          "What Roman ideal is associated with these peaceful landscapes?",
        options: ["Bellum", "Otium", "Imperium", "Forum"],
        correctAnswerIndex: 1
      },
      {
        id: "room1-artwork-10-q3",
        question: "What artistic technique creates depth in this fresco?",
        options: [
          "Cubism",
          "Linear engraving",
          "Aerial perspective",
          "Relief carving"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room1-artwork-11",
    title: "Sacro-idyllic landscape",
    subtitle: "Inventory 9486 | 1st c. AD, Fresco, MANN, Naples",
    description:
      "The sacro-idyllic landscape is a distinctive genre of Roman painting. These scenes construct an idealized vision of nature, a pastoral world imbued with peace and piety. The composition is populated with recurring elements: small rustic shrines, statues of deities, solitary columns, and tiny figures. Originating in Hellenistic art, this genre was used to decorate areas intended for relaxation. The aim was to induce a state of contemplation and to evoke a mythical Golden Age, a time of perfect harmony among gods, humans, and nature. This fresco is a perfect example of how religion and landscape intertwined in the Roman imaginary. Nature was seen as a space inhabited by the divine (locus sacer). By integrating these sacred landscapes into the domestic space, the Romans built an aesthetic and spiritual refuge",
    image: artwork11Img,
    position: sphericalPosition(109.5, 7),
    quizQuestions: [
      {
        id: "room1-artwork-11-q1",
        question: "What type of landscape does this fresco depict?",
        options: [
          "A sacro-idyllic landscape",
          "A military landscape",
          "An urban marketplace",
          "A royal procession"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room1-artwork-11-q2",
        question: "What atmosphere were these scenes intended to create?",
        options: [
          "Fear and suspense",
          "Peace and contemplation",
          "Political authority",
          "Commercial success"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room1-artwork-11-q3",
        question: "How was nature often perceived in the Roman imagination?",
        options: [
          "As a dangerous wilderness",
          "As a sacred space inhabited by the divine",
          "As a military frontier",
          "As a purely economic resource"
        ],
        correctAnswerIndex: 1
      }
    ]
  }
];
