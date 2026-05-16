const artwork5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840778/r5artwork5_jbp5et.jpg";
const artwork1_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840791/r5artwork1.1_qcpfj5.jpg";
const artwork1_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840795/r5artwork1.2_oexpw3.jpg";
const artwork1_3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840735/r5artwork1.3_ff4xmz.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840749/r5artwork2_bonrtj.jpg";
const artwork3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840743/r5artwork3_hjgubk.jpg";
const artwork6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840782/r5artwork6_vcn3hz.jpg";
const artwork7Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840770/r5arwork7_whndr0.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840739/r5artwork4_umedg4.jpg";
const artwork8Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840774/r5artwork8_hkblfz.jpg";
const artwork9Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840786/r5artwork9_vjtwws.jpg";
const artwork10_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840766/r5artwork10.1_rbleju.jpg";
const artwork10_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840762/r5artwork10.2_qdutpg.jpg";
const artwork10_3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840757/r5artwork10.3_yxlzve.jpg";
const artwork10_4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778840753/r5artwork10.4_ou485w.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room5Artworks: InfoHotspot[] = [
  {
    id: "room5-artwork-1",
    title: "Draped female statue",
    subtitle: "Inventory 6259 | 1st c. AD, Marble, MANN, Naples",
    description:
      "This marble statue represents a female figure enveloped in rich drapery. Although her identity is uncertain, the work is an example of official Roman sculpture. The attention to the folds of the garment emphasized the character's social status and dignity. Its fragmentary state radically transforms perception. From a specific portrait, it becomes an anonymous and universal presence, an archetype. The massive weight of the marble contrasts with its fragility in the face of nature and the fury of the vulcano. Brought back to light, it becomes a meditation on impermanence, a monument to survival.",
    images: [artwork1_1Img, artwork1_2Img, artwork1_3Img],
    position: sphericalPosition(96, 4),
    quizQuestions: [
      {
        id: "room5-artwork-1-q1",
        question: "What material was used to create this statue?",
        options: ["Bronze", "Marble", "Terracotta", "Wood"],
        correctAnswerIndex: 1
      },
      {
        id: "room5-artwork-1-q2",
        question:
          "What aspect of the sculpture emphasized the figure's dignity and status?",
        options: [
          "The folds of the garment",
          "The jewelry",
          "The hairstyle",
          "The pedestal"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room5-artwork-1-q3",
        question:
          "What does the fragmentary state of the statue transform it into?",
        options: [
          "A military symbol",
          "A decorative object",
          "An anonymous universal archetype",
          "A religious relic"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room5-artwork-2",
    title: "Architectural View",
    subtitle: "Inventory 8583&8572 | 1st c AD, Fresco, MANN, Naples",
    description:
      "These two monumental fragments immerse us in the theatrical world of the Fourth Pompeian Style. They depict illusionistic architectural perspectives that aimed not to represent real buildings but to create fantastical scenographies in an illusionary space. This art reflects an opulent society in love with luxury and scenography. The survival of these fragments is, in itself, an echo of impermanence. They are the ruins of a painted world, the remnants of an imaginary architecture destrayed along with the real one. The cracks on the surface become part of the work's aesthetic, testimonies to the catactysm. Contemplating at these scenes, we witness a double collapse; that of Pompeil and that of the illusory world painted on its walls. What remains is this fragmentary echo of a bygone grandeur, a spectral beauty that carries the scar of its own demise.",
    image: artwork2Img,
    position: sphericalPosition(52, 13),
    quizQuestions: [
      {
        id: "room5-artwork-2-q1",
        question: "Which Pompeian style inspired these illusionistic scenes?",
        options: [
          "Fourth Pompeian Style",
          "Second Pompeian Style",
          "Third Pompeian Style",
          "First Pompeian Style"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room5-artwork-2-q2",
        question:
          "What was the purpose of these painted architectural perspectives?",
        options: [
          "To document real Roman buildings",
          "To create fantastical scenographies",
          "To depict military victories",
          "To teach mythology"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room5-artwork-2-q3",
        question: "What do the cracks and damage on the fresco symbolize?",
        options: [
          "The artist's mistakes",
          "Political instability",
          "The catastrophe of Pompeii",
          "Religious transformation"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room5-artwork-3",
    title: "Architectural View",
    subtitle: "Inventory 8583&8572 | 1st c AD, Fresco, MANN, Naples",
    description:
      "These two monumental fragments immerse us in the theatrical world of the Fourth Pompeian Style. They depict illusionistic architectural perspectives that aimed not to represent real buildings but to create fantastical scenographies in an illusionary space. This art reflects an opulent society in love with luxury and scenography. The survival of these fragments is, in itself, an echo of impermanence. They are the ruins of a painted world, the remnants of an imaginary architecture destrayed along with the real one. The cracks on the surface become part of the work's aesthetic, testimonies to the catactysm. Contemplating at these scenes, we witness a double collapse; that of Pompeil and that of the illusory world painted on its walls. What remains is this fragmentary echo of a bygone grandeur, a spectral beauty that carries the scar of its own demise.",
    image: artwork3Img,
    position: sphericalPosition(74, 20),
    quizQuestions: [
      {
        id: "room5-artwork-3-q1",
        question: "What type of illusion did these frescoes create?",
        options: [
          "Illusionistic architecture",
          "Religious visions",
          "Battle scenes",
          "Natural landscapes"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room5-artwork-3-q2",
        question:
          "What aspect of Roman society is reflected in these theatrical scenes?",
        options: [
          "Love for luxury and scenography",
          "Agricultural traditions",
          "Military discipline",
          "Religious austerity"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room5-artwork-3-q3",
        question:
          "What survives after the collapse of both Pompeii and the painted illusion?",
        options: [
          "Political records",
          "A fragmentary spectral beauty",
          "Complete architectural plans",
          "Religious ceremonies"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room5-artwork-4",
    title: "House of the Colored Capitals & House VIII 4, 34 by ALA",
    subtitle:
      "Inventory ADS 600& ADS 870 | 1856 & 1862, Tempera on cardboard, MANN, Naples",
    description: `These two works, signed Antonio "ALA," mark a new stage in the site's documentation. The two drawings were made a few years apart, at the turn of the Bourbon Kingdom and the unified state. In both cases, the spirit of the drawings is in line with the work of Francesco Morelli: as in Morelli's drawings, here too, not only is the figurative portion of the Pompeian wall reproduced, but the entire decorative scheme is rendered, documenting at the same time the state of preservation of the painted plasterwork.
    The tempera on cardboard
    technique allows for a precise, very accurate rendering of architectural surfaces.
    One work revisits the House of the Colored Capitals, the other documents a residence identified by precise archeological coordinates. The identification method reflects the shift to a systematic and scientific approach to excavations.
    The artist no longer seeks the picturesque but rather contributes to an inventory project. Through their precision, these temperas constitute echoes of a specific archaeological reality. They speak of the transformation of the archeological discipline. The impermanence of the ruins is countered here by the documentary rigor.`,
    image: artwork4Img,
    position: sphericalPosition(100, 22),
    quizQuestions: [
      {
        id: "room5-artwork-4-q1",
        question: "What technique was used for these documentary works?",
        options: [
          "Oil on canvas",
          "Tempera on cardboard",
          "Watercolor on silk",
          "Marble engraving"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room5-artwork-4-q2",
        question: "What major shift in archaeology do these works reflect?",
        options: [
          "A move toward scientific documentation",
          "A focus on mythology",
          "The abandonment of excavation",
          "A preference for fantasy scenes"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room5-artwork-4-q3",
        question: "What was the main purpose of these precise drawings?",
        options: [
          "Entertainment",
          "Religious worship",
          "Inventory and documentation",
          "Military propaganda"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room5-artwork-5",
    title: "House of Sallust by Francesco Morelli",
    subtitle: "Inventory ADS 128, 1809 | Gouache, MANN, Naples",
    description:
      "This work transports us to the era of the Grand Tour. Francesco Morelli accurately documents the recently excavated ruins of the House of Sallust. Morelli documents the precise archeological rendering of the site in its splendour. The tempera painting depicts the pictorial decoration of a wall (the eastern wall of the viridarium) of the house. The garden populated by animals is actually the subject of the ancient wall painting. This image is an echo in itself. It shows us Pompeii as it was perceived by the 19th century: a place of nostalgia, of meditation on faded glory and the fragility of civilization. Morelli's work is a document of how Pompeii became a fundamental cultural symbol for the modernity.",
    image: artwork5Img,
    position: sphericalPosition(207, 20),
    quizQuestions: [
      {
        id: "room5-artwork-5-q1",
        question:
          "Which historical cultural movement is connected to this artwork?",
        options: [
          "The Grand Tour",
          "The Renaissance",
          "Romanticism",
          "Impressionism"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room5-artwork-5-q2",
        question:
          "What part of the House of Sallust is represented in the painting?",
        options: [
          "A gladiator arena",
          "The viridarium wall",
          "A Roman bath",
          "The atrium ceiling"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room5-artwork-5-q3",
        question:
          "How was Pompeii perceived in the 19th century according to this work?",
        options: [
          "As a symbol of military strength",
          "As a place of nostalgia and fragile glory",
          "As a scientific laboratory",
          "As an industrial center"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room5-artwork-6",
    title: "Ariadne Abandoned",
    subtitle: "Inventory 9047 | 1st c. AD, Fresco, MANN, Naples",
    description:
      "This moving fresco depicts the abandonment of Ariadne by Theseus on the island of Naxos. The painting captures the moment after she awakens: the despair, loneliness, and grief of the princess as she gazes out to sea at the departing ship. The scene was a popular subject, offering an opportunity for the artist to explore a wide range of human emotions (pathos). Ariadne's languid posture and her despairing expression are intended to evoke the viewer's empathy. The theme of abandonment resonates deeply with the concept of impermanence. Ariadne's mythical sorrow merges with the historical trauma of Pompeii, a city in turn, apparently abandoned by fate. Her image becomes a metaphor for the human condition in the face of overwhelming forces of the destiny.t",
    image: artwork6Img,
    position: sphericalPosition(244, 20),
    quizQuestions: [
      {
        id: "room5-artwork-6-q1",
        question: "Who abandoned Ariadne in the fresco?",
        options: ["Odysseus", "Perseus", "Theseus", "Apollo"],
        correctAnswerIndex: 2
      },
      {
        id: "room5-artwork-6-q2",
        question: "On which island does the scene take place?",
        options: ["Crete", "Naxos", "Delos", "Rhodes"],
        correctAnswerIndex: 1
      },
      {
        id: "room5-artwork-6-q3",
        question: "What emotion is central to this fresco?",
        options: ["Triumph", "Joy", "Abandonment and grief", "Pride"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room5-artwork-7",
    title: "House of the Colored Capitals by Giuseppe Marsigli",
    subtitle: "Inventory ADS 661 & ADS 660| 1834, Watercolor, MANN, Naples",
    description:
      "Giuseppe Marsigli offers us a precious vision of the House of the Colored Capitals. The house's name derives from its Corinthian capitals painted in vivid colors. Marsiglr's watercolors capture this detail with chromatic accuracy and virtue. Marsigli's works are distinguished by an almost scientific rigor, focusing on the faithful rendering of details. The watercolor technique was perfect for capturing the vivid colors of the freshly excavated ruins before they faded. These images are an echo of lost color. They remind us that our perception of antiquity, often dominated by the white of marble, is incomplete and fragmentary. Art here becomes an essential tool in the fight against oblivion.",
    image: artwork7Img,
    position: sphericalPosition(302, 32),
    quizQuestions: [
      {
        id: "room5-artwork-7-q1",
        question: "What distinguished Marsigli's watercolors?",
        options: [
          "Scientific precision and chromatic accuracy",
          "Abstract symbolism",
          "Religious themes",
          "Dark monochrome palettes"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room5-artwork-7-q2",
        question: "What architectural detail gave the house its name?",
        options: [
          "Golden statues",
          "Colored Corinthian capitals",
          "Painted ceilings",
          "Marble columns"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room5-artwork-7-q3",
        question:
          "What misconception about antiquity do these artworks challenge?",
        options: [
          "That Romans used only bronze",
          "That antiquity was colorless white marble",
          "That Pompeii lacked gardens",
          "That frescoes were uncommon"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room5-artwork-8",
    title: "House of the Sailor",
    subtitle: "Anonymous & Francesco Morelli | 19th c, MANN, Naples",
    description: `The House of the Sailor, by an anonymous artist, is notable for its panoramic format, suggesting an attempt to capture a comprehensive view.
      It is a summary table created from a significant number of 1.1 scale drawings of the same paintings, testimony to the meticulous work of the draftsmen.`,
    image: artwork8Img,
    position: sphericalPosition(302, 20),
    quizQuestions: [
      {
        id: "room5-artwork-8-q1",
        question: "What is notable about the format of this drawing?",
        options: [
          "Its panoramic composition",
          "Its circular frame",
          "Its miniature scale",
          "Its vertical perspective"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room5-artwork-8-q2",
        question: "What does the unfinished state of the work reveal?",
        options: [
          "A lack of artistic skill",
          "The meticulous process of documentation",
          "An intentional abstraction",
          "A damaged restoration"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room5-artwork-8-q3",
        question: "What was the drawing intended to reproduce?",
        options: [
          "A military battle",
          "A temple ceiling",
          "A complex architectural landscape",
          "A Roman portrait"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room5-artwork-9",
    title: "Frieze of the Amphitheater",
    subtitle: "Francesco Morelli | 19th c, MANN, Naples",
    description: `Francesco Morelli's Frieze of the Amphitheater represents a focused approach.
      Being portions of the decorations of the Amphitheater of Pompei, ADS 87 and ADS 89, show drawings which are part of a large series documenting individual portions of the decoration of the wall that surrounded the arena of the Amphitheater.
      Both approaches, panoramic and detailed, are responses to the site's impermanence. One tries to save the context, the other the detail. Together, they demonstrate the comprehensive effort of the 19th century to recover and understand a lost world.`,
    image: artwork9Img,
    position: sphericalPosition(325, 20),
    quizQuestions: [
      {
        id: "room5-artwork-9-q1",
        question: "Which artist created the Frieze of the Amphitheater?",
        options: [
          "Giuseppe Marsigli",
          "Francesco Morelli",
          "Antonio ALA",
          "Luigi Spina"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room5-artwork-9-q2",
        question: "What do these drawings document?",
        options: [
          "Temple ceremonies",
          "Decorations from the Amphitheater walls",
          "Roman military uniforms",
          "Domestic kitchens"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room5-artwork-9-q3",
        question:
          "What do panoramic and detailed approaches together demonstrate?",
        options: [
          "Roman engineering methods",
          "A comprehensive effort to recover a lost world",
          "The decline of archaeology",
          "The destruction of fresco painting"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room5-artwork-10",
    title: "Decor",
    subtitle: "",
    description: `Royal Porcelain Factory of Naples (1772 - 1806)
      Coffee Pot by Giuoco Souvenir from the Kingdom of the Two Sicilies
      Caffettiera del Giuoco Souvenir del Regno delle Due Sicilie)
      28t - 19th centun
      Painted and gilded porcelain

      Royal Porcelain Factory of Naples (1772 - 1806)
      Porcelain service with Pompeian scenes

      Raffael GIOVINE
      Apollo and Daphne
      Provenance: National Museums of Vomero - Duca di Martina National Museum of Ceramics, Naples.

      Raffael GIOVINE
      Narcissus
      19th century
      Painted and gilded porcelain, National Museums of Vomero - Duca di Martina National Museum of Ceramics, Naples

      Koyal Porcelain Factory of Naples (1772 - 1806)
      Cup and saucer with archaeological views of the Kingdom of Naples, Temple of Jupiter Serapis in Pozzuoli, by Giuoco Souvenir of the Kingdom of the Two Si-cilies

      Royal Porcelain Factory of Naples (1772 - 1806)
      Oil lamp

      Raffael GIOVINE
      Leda and the swan

      Raffael GIOVINE
      The cases of Phaedra and Hippolytus

      Raffael GIOVINE
      Perseus freeing Andromeda

      Royal Porcelain Factory of Naples (1772 - 1806)
      Hercules and the Hydra and Hercules and the Lion`,
    images: [artwork10_1Img, artwork10_2Img, artwork10_3Img, artwork10_4Img],
    position: sphericalPosition(312, 10),
    quizQuestions: [
      {
        id: "room5-artwork-10-q1",
        question:
          "What type of objects are presented in this decorative gallery?",
        options: [
          "Painted and gilded porcelain decorative pieces",
          "Roman military weapons",
          "Ancient manuscripts",
          "Bronze gladiator equipment"
        ],
        correctAnswerIndex: 0
      }
    ]
  }
];
