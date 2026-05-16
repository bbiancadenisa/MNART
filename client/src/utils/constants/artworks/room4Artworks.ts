const artwork5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837500/r4artwork6_f6orfj.jpg";
const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837503/r4artwork1_hgoeqn.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837506/r4artwork2_w1dvpb.jpg";
const artwork3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837508/r4artwork3_mzongt.jpg";
const artwork6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837511/r4artwork7_qeqm2c.jpg";
const artwork7Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837514/r4artwork8_f6oug6.jpg";
const artwork4_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837516/r4artwork4.1_hkxe77.jpg";
const artwork4_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837519/r4artwork4.2_xlymbv.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room4Artworks: InfoHotspot[] = [
  {
    id: "room4-artwork-1",
    title: "House of Iulius Polybius",
    subtitle: "Luigi Spina| 2021, Oil on canvas, private collection",
    description: `The artwork inspired by the House of Julius Polybius connects contemporary photography with the archaeological memory of Pompeii.
      Luigi Spina is a contemporary Italian photographer known for documenting Pompeii through highly atmospheric large-format photographs. During the COVID lockdown, he was granted rare access to the archaeological site while it was completely empty, allowing him to photograph the domus without tourists or artificial staging.
      The House of Julius Polybius itself was one of Pompeii’s wealthy residences. It belonged to a prominent Roman family and is especially important because many of its rooms, frescoes, and domestic spaces survived the eruption of Vesuvius.`,
    image: artwork1Img,
    position: sphericalPosition(201, -1),
    quizQuestions: [
      {
        id: "room4-artwork-1-q1",
        question: "Who created this contemporary interpretation of Pompeii?",
        options: [
          "Luigi Spina",
          "Horia Bernea",
          "Alessandro Varotari",
          "Luigi Bazzani"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room4-artwork-1-q2",
        question: "What ancient Roman house inspired this artwork?",
        options: [
          "House of the Faun",
          "House of Iulius Polybius",
          "House of the Vettii",
          "House of Menander"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room4-artwork-1-q3",
        question: "What medium was used for this artwork?",
        options: ["Fresco", "Watercolor", "Oil on canvas", "Bronze sculpture"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room4-artwork-2",
    title: "Flying Maenad",
    subtitle: "Inventory 9298 | 1st c. AD, Fresco, MANN, Naples",
    description:
      "This floating female figure is a Maenad, one of the mythical companions of Dionysus. This image perfectly captures the character's essence, but also the delicate fragility: a figure full of grace and energy, her garments fluttering in motion, seeming to defy gravity. The motif of the floating female figure was extremely popular in Roman decoration. These characters were inserted onto monochrome backgrounds, creating an effect of lightness and elegance, meant to bring a note of dynamism and mythological grace. Rescued as a fragment, this flying Maenad becomes a metaphor for art itself: a moment of beauty frozen in time. She is the poetry of the fragment-an image of freedom and ecstasy that survived the catastrophe. Her resurrection allows us to contemplate a fragment of celestial energy.",
    image: artwork2Img,
    position: sphericalPosition(268, -1),
    quizQuestions: [
      {
        id: "room4-artwork-2-q1",
        question: "Who were the Maenads associated with?",
        options: ["Apollo", "Dionysus", "Jupiter", "Mercury"],
        correctAnswerIndex: 1
      },
      {
        id: "room4-artwork-2-q2",
        question:
          "What effect did floating figures create in Roman decoration?",
        options: [
          "Lightness and elegance",
          "Military authority",
          "Political propaganda",
          "Architectural realism"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room4-artwork-2-q3",
        question: "What does the surviving fragment symbolize?",
        options: [
          "The collapse of Roman religion",
          "A political revolution",
          "Beauty frozen in time",
          "Scientific progress"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room4-artwork-3",
    title: "The Great Column",
    subtitle: "Horia Bernea | 1998, Oil on canvas, private collection",
    description:
      "Horia Bernea presents us here with a Great Column that resonates with echoes of impermanence, but from a more analytical, structural, textural, and abstract perspective. This work explores the archetypal concept of the column as an essential, archetypal, almost archaeological structure. Bernea deconstructs the form, emphasizing lines, volumes, and textures, transforming it into a symbol of incandescent resilience and structural stability beyond time. The stratifications of color, both solid and translucent, suggest the successive layers of memory and history alluvial over primordial forms. The work indirectly addresses the architectural structures of Pompeii, not in their initial splendor, but rather in their state of ruin, where fragments become carriers of meaning and contain the potentiality of the whole. Bernea's Great Column can function as a meditation on the essence of things that remain after the nefarious wave of cataclysm, an expression of how art can distill from ruin a new understanding of permanence and the ephemeral. It is a silent dialogue with Roman architecture, a visual echo of lost grandeur and the persistent, robust structures, of the axis of the world.",
    image: artwork3Img,
    position: sphericalPosition(299, 6),
    quizQuestions: [
      {
        id: "room4-artwork-3-q1",
        question: "Which artist created The Great Column?",
        options: [
          "Luigi Spina",
          "Bogdan Vlăduță",
          "Horia Bernea",
          "Luigi Bazzani"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room4-artwork-3-q2",
        question: "What archetypal structure is explored in this painting?",
        options: ["The column", "The amphitheater", "The arch", "The temple"],
        correctAnswerIndex: 0
      },
      {
        id: "room4-artwork-3-q3",
        question: "What theme does the artwork mainly reflect?",
        options: [
          "Luxury and entertainment",
          "Military conquest",
          "Resilience and permanence",
          "Religious ritual"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room4-artwork-4",
    title: "Clocked Hercules",
    subtitle: "Inventory 109677 | 1st c. AD, Marble, MANN, Naples",
    description:
      "This sculpture represents the mythological hero Hercules. We see him in a mature guise, partially covered by a lion skin. Such statues were often placed in domestic spaces, in gardens, where Hercules was worshipped as a protector god. The torso becomes a symbol of endurance, focusing attention on the hero's anatomical force. The artefact evokes the Renaissance fascination with ancient ruins. Through its resurrection by archeologists, this Hercules embodies a metaphor for survival. He is the heroic body that has endured a liminal trial, not a mythological one, but the very fury of Mount Vesuvius. The poetry of the fragment lies in the ability and force of a part of the context to evoke the whole.",
    images: [artwork4_1Img, artwork4_2Img],
    position: sphericalPosition(323, 1),
    quizQuestions: [
      {
        id: "room4-artwork-4-q1",
        question: "Which mythological hero is represented in this sculpture?",
        options: ["Achilles", "Perseus", "Hercules", "Odysseus"],
        correctAnswerIndex: 2
      },
      {
        id: "room4-artwork-4-q2",
        question: "What covers part of Hercules' body in the sculpture?",
        options: [
          "A lion skin",
          "A royal cloak",
          "Bronze armor",
          "A ceremonial robe"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room4-artwork-4-q3",
        question:
          "Where were statues of Hercules commonly placed in Roman homes?",
        options: ["Libraries", "Bedrooms", "Gardens", "Kitchens"],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room4-artwork-5",
    title: "Candelabrum",
    subtitle: "Inventory 9765 | 1st c AD, Fresco, MANN, Naples",
    description:
      "This decorative panel is an emblematic example of the Third Pompeian Style. The candelabrum painted here, illustrates a a decorative fantasy, as it is not the representational image of an object; it describes a filigree and impossibly thin structure that serves as a vertical axis for a delicate composition. These airy structures created rhythm and order on the wall surface, producing an effect of precious refinement. The artist no longer tries to create depth but affirms the wall as a solid surface, upon which elegant, jewel-like decorations are applied. The survival of this panel, a fragment, corresponds to this room's theme. Archaeology resurrects contextually also these delicate elements. The fragment becomes pure poetry: an elegant line saved from destruction, a testament to the search for beauty in its most fragile ephemere forms.",
    image: artwork5Img,
    position: sphericalPosition(355, 2),
    quizQuestions: [
      {
        id: "room4-artwork-5-q1",
        question: "Which Pompeian style does this decorative panel represent?",
        options: [
          "Second Pompeian Style",
          "Fourth Pompeian Style",
          "Third Pompeian Style",
          "First Pompeian Style"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room4-artwork-5-q2",
        question: "What visual effect did these delicate structures create?",
        options: [
          "Rhythm and refinement",
          "Architectural depth",
          "Military symbolism",
          "Religious solemnity"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room4-artwork-5-q3",
        question:
          "What does this fragment symbolize after surviving destruction?",
        options: [
          "Political authority",
          "The fragility of beauty",
          "Economic prosperity",
          "Imperial expansion"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room4-artwork-6",
    title: "Bird with fruit",
    subtitle: "Inventory 8734 | 1st c AD, Fresco, MANN, Naples",
    description:
      "This small, delicate panel belongs to the genre of still life, or xenia. The term referred to gifts of hospitality offered to guests. Paintings depicting such gifts were a sign of the host's generosity and wealth. In this composition, the artist demonstrates great skill in rendering textures and volumes. Light is masterfully used to model the roundness of the fruit. Although it is a humble subject, the painterly treatment is of exceptional quality. The survival of this small fragment is, in itself, a poetic act. Amidst epic destruction, this image of quiet, everyday beauty was preserved. The fragment becomes a symbol of the fragility of life, one of the resilience of simple beauty.",
    image: artwork6Img,
    position: sphericalPosition(384, 6),
    quizQuestions: [
      {
        id: "room4-artwork-6-q1",
        question: "What genre does this fresco belong to?",
        options: [
          "Still life (xenia)",
          "Portraiture",
          "Battle painting",
          "Religious iconography"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room4-artwork-6-q2",
        question: "What did xenia paintings symbolize in Roman culture?",
        options: [
          "Military victory",
          "Hospitality and generosity",
          "Political loyalty",
          "Religious sacrifice"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room4-artwork-6-q3",
        question: "What artistic quality is especially praised in this work?",
        options: [
          "Its geometric abstraction",
          "Its monumental scale",
          "Its use of light and texture",
          "Its dramatic perspective"
        ],
        correctAnswerIndex: 2
      }
    ]
  },
  {
    id: "room4-artwork-7",
    title: "Fragment of a garden painting",
    subtitle: "Inventory 8674 | 1st c AD, Fresco, MANN, Naples",
    description:
      "Like the other garden fragment in this room, this piece offers a glimpse into a painted paradise. Here, we can admire the delicacy with which the details of the vegetation are rendered, likely an oleander bush enlivened by the presence of a bird. What makes these fragments so poetic is their incompleteness. Our gaze is invited to mentally reconstruct the entire scene. The fragment acts as a catalyst for the imagination, offering a cultural clue to a lost world. The archeological act of unearthing such a fragment is an act of resurrection. A piece of painted plaster is brought back to light and recognized as a work of art. It becomes a precious relic, a testament to art's ability to transcend time and cataclysm.",
    image: artwork7Img,
    position: sphericalPosition(397, 4.5),
    quizQuestions: [
      {
        id: "room4-artwork-7-q1",
        question: "What type of environment does this fragment depict?",
        options: [
          "A painted garden paradise",
          "A Roman battlefield",
          "A ceremonial temple",
          "A public forum"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room4-artwork-7-q2",
        question: "What plant is likely represented in the fresco?",
        options: [
          "Olive tree",
          "Oleander bush",
          "Laurel crown",
          "Cypress tree"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room4-artwork-7-q3",
        question: "What makes archaeological fragments especially poetic?",
        options: [
          "Their political symbolism",
          "Their military function",
          "Their incompleteness that stimulates imagination",
          "Their scientific precision"
        ],
        correctAnswerIndex: 2
      }
    ]
  }
];
