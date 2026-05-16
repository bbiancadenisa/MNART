const artwork3_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847249/r7artwork3.1_letuvu.jpg";
const artwork3_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847249/r7artwork3.2_otsg1p.jpg";
const artwork3_3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847251/r7artwork3.3_llzicu.jpg";
const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847248/r7artwork1_uf5kbc.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847248/r7artwork2_iwzx34.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847251/r7artwork4_zntufk.jpg";
const artwork5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847251/r7artwork5_j57xkh.jpg";
const artwork6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847252/r7artwork6_esfc7a.jpg";
const artwork7Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847253/r7artwork7_ijbisw.jpg";
const artwork8Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847253/r7artwork8_v4t49u.jpg";
const artwork9Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847246/r7artwork9_ogfzij.jpg";
const artwork10_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847247/r7artwok10.1_ymr0ec.jpg";
const artwork11Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847247/r7artwork11_igh4om.jpg";
const artwork12Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847247/r7artwork12_pb5xwe.jpg";
const artwork13Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847247/r7artwork13_qa1ksq.jpg";
const artwork10_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847250/r7artwork10.2_hkzqbn.jpg";
const artwork10_3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847252/r7artwork10.3_afderb.jpg";
const artwork10_4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847254/r7artwork10.4_ww3ym0.jpg";
const artwork10_5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847246/r7artwork10.5_wusbss.jpg";
const artwork10_6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778847247/WhatsApp_Image_2026-05-15_at_15.04.17_6_hantbx.jpg";
const artwork7_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778848728/r714.7_hnojkj.jpg";
const artwork7_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778848712/r714.5_tfdiyc.jpg";
const artwork7_3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778848712/r714.3_igea46.jpg";
const artwork7_4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778848712/r714.4_hxcorc.jpg";
const artwork7_5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778848712/r714.1_b66u9y.jpg";
const artwork7_6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778848711/r714.2_xyjpwn.jpg";
const artwork7_7Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778848711/r714.6_lzi3nn.jpg";

import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room7Artworks: InfoHotspot[] = [
  {
    id: "room7-artwork-1",
    title: "Portrait of Zsigmond Ormós",
    subtitle:
      "Portrait of Zsigmond Ormós | 19th c., Oil on canvas | Collector, traveler, and founder of the cultural collections that became the Art Museum of Timișoara",
    description: `This portrait represents Zsigmond Ormós, one of the most important cultural figures connected to the origins of the Art Museum of Timișoara. Born in 1813 in Pecica, then part of the Kingdom of Hungary, Ormós was not only a politician and intellectual, but also a passionate traveler and collector deeply influenced by the ideals of the Grand Tour.
    After the political turmoil of the 1848 Revolution, in which he actively participated, Ormós entered a period of voluntary exile. During these years, he traveled extensively through Austria, Germany, France, and especially Italy. His journeys to Naples and Pompeii in 1865 and 1872 profoundly shaped his artistic and cultural vision. Fascinated by archaeology, classical antiquity, and the rediscovery of Pompeii, he assembled an impressive collection of artworks and historical objects that later became the foundation of the museum institution in Timișoara.
    The portrait reflects the intellectual identity of a 19th-century Grand Tour traveler. Surrounded by symbols of culture, scholarship, and refinement, Ormós embodies the European fascination with antiquity and the belief that travel was an essential form of education. Through figures like him, Pompeii became more than an archaeological site — it became a place of memory, inspiration, and cultural transformation.
    In the context of this exhibition, the portrait of Zsigmond Ormós becomes more than a historical representation. It is a tribute to the mediator between past and present, between the rediscovered ruins of Pompeii and the modern museum consciousness that preserves and reinterprets them today.`,
    image: artwork1Img,
    position: sphericalPosition(241, 4),
    quizQuestions: [
      {
        id: "room7-artwork-1-q1",
        question: "Why did Zsigmond Ormós begin traveling across Europe?",
        options: [
          "To study medicine",
          "Because of voluntary exile after the 1848 Revolution",
          "To join the Roman army",
          "To become a merchant"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room7-artwork-1-q2",
        question: "Which archaeological site deeply influenced Ormós?",
        options: ["Athens", "Pompeii", "Alexandria", "Carthage"],
        correctAnswerIndex: 1
      },
      {
        id: "room7-artwork-1-q3",
        question: "What institution was later founded from Ormós’s collection?",
        options: [
          "The Louvre Museum",
          "The British Museum",
          "The Art Museum of Timișoara",
          "The Vatican Museums"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room7-artwork-2",
    title: "View a room for bathing",
    subtitle: "Paolo Fumagalli | Engraved in copper",
    description: `This engraved view by Paolo Fumagalli depicts a Roman bathing room discovered in Pompeii, reflecting the fascination that archaeological interiors inspired during the 19th century. Through precise copper engraving techniques, the artist documents architectural details while also conveying the atmosphere of a rediscovered ancient world. The work illustrates how spaces of daily Roman life became objects of artistic admiration and cultural memory during the Grand Tour era.`,
    image: artwork2Img,
    position: sphericalPosition(277.5, 27),
    quizQuestions: [
      {
        id: "room7-artwork-2-q1",
        question: "What type of Roman space is represented in this engraving?",
        options: [
          "A military camp",
          "A bathing room",
          "A theater",
          "A marketplace"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room7-artwork-2-q2",
        question: "Which artistic technique did Paolo Fumagalli use?",
        options: [
          "Oil painting",
          "Fresco",
          "Copper engraving",
          "Marble carving"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room7-artwork-2-q3",
        question: "What fascinated 19th-century artists about Pompeii?",
        options: [
          "Modern architecture",
          "Industrial development",
          "Rediscovered ancient interiors",
          "Naval battles"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room7-artwork-3",
    title: "Collection",
    subtitle: "Paolo Fumagalli",
    description: `Vue du Nouveau Temple, prise du cote occidental Forum | Engraved in copper

    Sections, Ornaments | Engraved in copper

    Vue du Temple de Jupiter a Pompei | Copper engraving, using the aquatintand aquaforte`,
    images: [artwork3_1Img, artwork3_2Img, artwork3_3Img],
    position: sphericalPosition(281, 14),
    quizQuestions: [
      {
        id: "room7-artwork-3-q1",
        question:
          "What artistic technique is primarily represented in this collection?",
        options: [
          "Copper engraving",
          "Oil painting",
          "Marble sculpture",
          "Mosaic"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room7-artwork-4",
    title: "Collection",
    subtitle: "",
    description: `Casa della piccola fontana nella strada di Mercurio presso porto di Stabia

    Carlo Oraty | Lithography

    Pompei- Adone e Venere sua Casa - Strada Mercurio | Unknown, Engraved in copper`,
    image: artwork4Img,
    position: sphericalPosition(299.5, 30),
    quizQuestions: [
      {
        id: "room7-artwork-4-q1",
        question: "Which archaeological city inspired these engravings?",
        options: ["Athens", "Pompeii", "Alexandria", "Rome"],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room7-artwork-5",
    title: "Pompeii",
    subtitle: "",
    description: `Pompeii House

    Pictures brought back to Pompeii | Paolo Fumagalli`,
    image: artwork5Img,
    position: sphericalPosition(306, 10),
    quizQuestions: [
      {
        id: "room7-artwork-5-q1",
        question: "What theme connects the works presented in this artwork?",
        options: [
          "Scenes from Pompeii",
          "Medieval warfare",
          "Renaissance portraits",
          "Modern architecture"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room7-artwork-6",
    title: "Pompeii",
    subtitle: "",
    description: `View of theater | Paolo Fumaggali

    Paintings found in Pompeii | Paolo Fumagalli`,
    image: artwork6Img,
    position: sphericalPosition(320, 30),
    quizQuestions: [
      {
        id: "room7-artwork-6-q1",
        question:
          "What aspect of Pompeii is represented in these illustrations?",
        options: [
          "Roman theater and paintings",
          "Naval battles",
          "Agricultural rituals",
          "Imperial ceremonies"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room7-artwork-7",
    title: "Findings by Paolo Fumagalli",
    subtitle: "",
    description: `
    Paintings and tools found at Pompeii | Paolo Fumagalli

    View of Salustio's house | Paolo Fumagalli`,
    image: artwork7Img,
    position: sphericalPosition(319.5, 10),
    quizQuestions: [
      {
        id: "room7-artwork-7-q1",
        question: "What kinds of discoveries are represented in this artwork?",
        options: [
          "Weapons and armor",
          "Paintings and tools from Pompeii",
          "Ancient maps",
          "Religious manuscripts"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room7-artwork-8",
    title: "Findings by Paolo Fumagalli",
    subtitle: "",
    description: `Paintings and tools found at Pompeii | Paolo Fumagalli`,
    image: artwork8Img,
    position: sphericalPosition(333, 27),
    quizQuestions: [
      {
        id: "room7-artwork-8-q1",
        question: "What archaeological elements are shown in this work?",
        options: [
          "Roman military camps",
          "Paintings and tools discovered in Pompeii",
          "Greek temples",
          "Egyptian artifacts"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room7-artwork-9",
    title: "Findings by Paolo Fumagalli",
    subtitle: "",
    description: `Paintings and tools found at Pompeii | Paolo Fumagalli`,
    image: artwork9Img,
    position: sphericalPosition(333, 14),
    quizQuestions: [
      {
        id: "room7-artwork-9-q1",
        question: "What do the objects in this artwork help us understand?",
        options: [
          "Daily life in Pompeii",
          "Modern technology",
          "Roman military strategy",
          "Medieval trade routes"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room7-artwork-10",
    title: "Theatrical Masks and Pictures",
    subtitle: "Inventory  19057",
    description:
      "These early 20th century photographs are a witness-object, pieces that speak of Pompeian antiquity as well as of the history of its redescovery. It documents ancient theatrical masks, likely shortyl after their excavation or in the context of early museum display.",
    images: [
      artwork10_1Img,
      artwork10_2Img,
      artwork10_3Img,
      artwork10_4Img,
      artwork10_5Img,
      artwork10_6Img
    ],
    position: sphericalPosition(297, 5),
    quizQuestions: [
      {
        id: "room7-artwork-10-q1",
        question: "What do these photographs primarily document?",
        options: [
          "Roman military battles",
          "Ancient theatrical masks from Pompeii",
          "Greek temples",
          "Modern archaeological excavations"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room7-artwork-10-q2",
        question: "Why are these photographs considered witness-objects?",
        options: [
          "Because they recreate fictional scenes",
          "Because they document Pompeian discoveries and museum history",
          "Because they were painted from memory",
          "Because they were used in Roman rituals"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room7-artwork-10-q3",
        question: "What do the theatrical masks symbolize in Roman culture?",
        options: [
          "Entertainment and performance",
          "Military authority",
          "Religious punishment",
          "Agricultural prosperity"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room7-artwork-11",
    title: "Pompeii, 27th September 1864",
    subtitle: "Giacinto Gigante | cca 1864 | Pencil, Watercolour",
    description: `In this delicate watercolor, Giacinto Gigante captures Pompeii not as a distant archaeological ruin, but as a living landscape suspended between memory and disappearance. Executed around 1864, the work belongs to the visual culture of the Grand Tour, when artists and travelers from across Europe were fascinated by the rediscovery of the buried Roman city.
    Gigante, one of the most important representatives of the Neapolitan landscape school, approaches Pompeii with a poetic sensitivity. Rather than emphasizing dramatic catastrophe, he focuses on atmosphere, light, and silence. The ruins emerge gently within the landscape, almost dissolving into the surrounding environment. Through pencil and watercolor, the artist creates an image that feels both documentary and dreamlike.
    The exact date in the title — 27th September 1864 — transforms the work into a personal visual diary, a testimony of presence. It reflects the 19th-century desire to preserve fleeting impressions through travel and artistic observation. Pompeii becomes more than a historical site; it becomes an emotional experience, a place where past and present coexist.
    Within the context of the exhibition, this work represents the romantic gaze directed toward antiquity during the Grand Tour era. It reminds us that the rediscovery of Pompeii was not only an archaeological event, but also a cultural and emotional phenomenon that deeply influenced European artistic imagination.`,
    image: artwork11Img,
    position: sphericalPosition(377, 27),
    quizQuestions: [
      {
        id: "room7-artwork-11-q1",
        question: "Which artist created Pompeii, 27th September 1864?",
        options: [
          "Lucio Fontana",
          "Giacinto Gigante",
          "Alberto Burri",
          "Anselm Kiefer"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room7-artwork-11-q2",
        question: "What atmosphere dominates the watercolor?",
        options: [
          "Violence and destruction",
          "Romantic contemplation and silence",
          "Political conflict",
          "Military celebration"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room7-artwork-11-q3",
        question: "Which cultural phenomenon influenced works like this?",
        options: [
          "Industrialization",
          "The Crusades",
          "The Grand Tour",
          "Modernism"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room7-artwork-12",
    title: "Street of the Tombs in Pompeii",
    subtitle: "Giacinto Gigante | cca 1850 | Pencil, Watercolour",
    description: `In this watercolor, Giacinto Gigante depicts the famous Street of the Tombs in Pompeii, one of the city's most evocative archaeological spaces. Located outside the ancient city walls, this funerary road was lined with monumental tombs belonging to wealthy Roman families, transforming memory itself into architecture.
    Gigante approaches the scene with the refined sensitivity characteristic of the Neapolitan landscape school. Rather than presenting the site as a cold archaeological document, he captures its poetic atmosphere through delicate pencil lines and luminous watercolor tones. The ruins appear immersed in silence and light, suspended between historical reality and romantic contemplation.
    During the 19th century, the Street of the Tombs became one of the most admired destinations for Grand Tour travelers visiting Pompeii. For many European artists and intellectuals, the site embodied both the grandeur of antiquity and the fragility of human existence. Gigante translates this emotional experience into an intimate visual meditation on time, memory, and disappearance.
    Within the context of the exhibition, the work reflects how Pompeii was rediscovered not only through archaeology, but also through artistic imagination. The Street of the Tombs becomes a symbolic threshold between life and death, presence and absence, reminding us that the ruins of Pompeii continue to preserve the memory of those who once inhabited the city.`,
    image: artwork12Img,
    position: sphericalPosition(377, 8),
    quizQuestions: [
      {
        id: "room7-artwork-12-q1",
        question: "What lined the Street of the Tombs in Pompeii?",
        options: ["Shops", "Military camps", "Monumental tombs", "Markets"],
        correctAnswerIndex: 2
      },
      {
        id: "room7-artwork-12-q2",
        question:
          "What artistic quality characterizes Giacinto Gigante’s work?",
        options: [
          "Abstract geometry",
          "Poetic atmosphere and luminous watercolor",
          "Industrial realism",
          "Religious symbolism"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room7-artwork-12-q3",
        question: "What does the Street of the Tombs symbolically represent?",
        options: [
          "Victory and conquest",
          "The threshold between life and death",
          "Political authority",
          "Religious ritual"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room7-artwork-13",
    title: "Narcissus at the Spring",
    subtitle: "Inventory 9385 | 1st c. AD, Fresco, MANN, Naples",
    description: `This fresco depicts one of the most famous myths the Romans adopted from Greek culture: the story of Narcissus. As narrated by Ovid, Narcissus was a youth of overwhelming beauty, cursed to fall in love with his own reflection in water. The scene captures this fatal moment: Narcissus, leaning over the water, is completely captivated by an impossible passion. The subject was extremely popular, often placed in gardens or near water features, creating a link between the myth and the real environment. The composition is elegant, focusing attention on the isolated figure of Narcissus, turning him into a universal symbol of self-contemplation. The presence of such a sophisticated myth is a testament to the cultural "Grand Tour" the Roman elite undertook towards the Hellenistic world. The fresco of Narcissus represents a cultural statement and an invitation to philosophical meditation on themes such as vanity and illusion.`,
    image: artwork13Img,
    position: sphericalPosition(423, 8),
    quizQuestions: [
      {
        id: "room7-artwork-13-q1",
        question: "Which mythological figure is represented in this fresco?",
        options: ["Apollo", "Achilles", "Narcissus", "Perseus"],
        correctAnswerIndex: 2
      },
      {
        id: "room7-artwork-13-q2",
        question: "What caused Narcissus’s downfall in the myth?",
        options: [
          "His ambition",
          "His love for his own reflection",
          "A divine punishment during battle",
          "His jealousy of Apollo"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room7-artwork-13-q3",
        question: "What themes does the fresco invite viewers to reflect on?",
        options: [
          "War and conquest",
          "Trade and economy",
          "Vanity and illusion",
          "Politics and power"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room7-artwork-14",
    title: "Statue replicas",
    subtitle: "",
    description: "Replicas of discoveries from Pompeii",
    images: [
      artwork7_6Img,
      artwork7_7Img,
      artwork7_1Img,
      artwork7_2Img,
      artwork7_3Img,
      artwork7_4Img,
      artwork7_5Img
    ],
    position: sphericalPosition(479, 10),
    quizQuestions: [
      {
        id: "room7-artwork-14-q1",
        question: "What do these objects represent?",
        options: [
          "Modern inventions",
          "Religious relics",
          "Replicas of discoveries from Pompeii",
          "Medieval decorations"
        ],
        correctAnswerIndex: 2
      }
    ]
  }
];
