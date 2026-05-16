const artwork3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778845060/r6artwork3_isuqyp.jpg";
const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778845050/r6rtwork1_n5m8fi.jpg";
const artwork2_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778845047/r6artwork2.1_ezxhed.jpg";
const artwork2_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778845053/r6artwork2.2_rkbjvj.jpg";
const artwork2_3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778845057/r6artwork2.3_swwlte.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778845044/r6artwork4_fcc42v.jpg";
const artwork5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778845576/r6artwork6_dfylfa.jpg";
const artwork6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778845576/r6artwork5_jzntwy.jpg";
const artwork7Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778943769/WhatsApp_Image_2026-05-16_at_18.02.21_lfgbs3.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room6Artworks: InfoHotspot[] = [
  {
    id: "room6-artwork-1",
    title: "Views of Vesuvius erupting",
    subtitle: "4 pieces | Oval views",
    description: `Eduardo Dalbono explores in this series of ten oval canvases (located in rooms 6 and 10) the quintessential theme of local landscape painting: Vesuvius in eruption. The oval format is used in an unexpected way, turning each eruption into a kind of "cameo" of the sublime, a medallion of catastrophe in the making.
    This series is an artistic meditation on the relationship between man, nature, and time. Each "veduta" captures a different moment of the eruption, demonstrating the artist's Romantic interest in the changing effects of light and atmosphere.
    The ten pieces function as a narrative sequence, anticipating photographic frames, a visual poem about the volcano's power. They embody the section's titular duality: the "catastrophe" is the subject, while the "romance" lies in the artistic approach, which finds a terrible beauty in destruction. In the "epilogue" section, the volcano has the "last word" and serves as a perpetual reminder of the condition of man as a witness of the history.,`,
    image: artwork1Img,
    position: sphericalPosition(145, -1),
    quizQuestions: [
      {
        id: "room6-artwork-1-q1",
        question: "What natural phenomenon is central to this series?",
        options: [
          "The flooding of Pompeii",
          "The eruption of Vesuvius",
          "A Roman naval battle",
          "The construction of Naples"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room6-artwork-1-q2",
        question: "What does the oval format transform each eruption into?",
        options: [
          "A medallion of catastrophe",
          "A scientific diagram",
          "A religious icon",
          "A theatrical mask"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room6-artwork-1-q3",
        question: "What duality does this series express?",
        options: [
          "War and peace",
          "Catastrophe and romance",
          "Science and religion",
          "Myth and politics"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room6-artwork-2",
    title: "View of the Solfatara",
    subtitle:
      "Pierre Jacques-Voltaire | 1774, Oil on Canvas, Capodimonte MRBC, Naples",
    description: `Pierre-Jacques Volaire, the master of the volcanic landscape, offers a vision of the Solfatara crater. Unlike the violent spectacle of an eruption, the Solfatara presents an image of latent catastrophe, of subterranean forces perpetually smoldering, threatening. The work is an example of the aesthetics of the sublime. Volaire captures the strange and unsettling atmosphere of the place. He populates the scene with tiny figures of travelers, who explore this hostile landscape with a mixture of curiosity and fear. This painting is a reflection on catastrophe as a permanent condition of the Neapolitan region. It reminds us that the destruction of Pompeii was not an isolated event. Volaire transforms a real landscape into a romantic vision of the primordial link between creation and destruction.`,
    images: [artwork2_1Img, artwork2_2Img, artwork2_3Img],
    position: sphericalPosition(314, 4),
    quizQuestions: [
      {
        id: "room6-artwork-2-q1",
        question: "Which artist created View of the Solfatara?",
        options: [
          "Eduard Dalbono",
          "Pierre-Jacques Volaire",
          "Consalvo Carelli",
          "Carlo Duclere"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room6-artwork-2-q2",
        question: "What aesthetic concept does the painting exemplify?",
        options: ["Minimalism", "Classicism", "The sublime", "Cubism"],
        correctAnswerIndex: 2
      },
      {
        id: "room6-artwork-2-q3",
        question: "How are the travelers represented in the painting?",
        options: [
          "As heroic warriors",
          "As tiny figures exploring with fear and curiosity",
          "As political leaders",
          "As religious pilgrims"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room6-artwork-6",
    title: "Eruption of Vesuvius from the Maddalena Bridge, copy after Volaire",
    subtitle:
      " Starita, after Pierre-Jacques Volaire | 18th/19th c., Oil on canvas, Museo di San Martino, Naples",
    description: `In the 18th century, Vesuvius became a subject of great fascination. The painter Pierre-Jacques Volaire specialized in depicting its eruptions, turning them into spectacular images. This work, a copy after Volaire, demonstrates the popularity of these scenes. The scene is an example of the aesthetics of the sublime, which found beauty in overwhelming spectacles of nature. The artist uses a dramatic contrast between the darkness of the night and the incandescent light of the lava. In the foreground, the life of Naples seems to carry on under a constant threat in the presence of the Vesuvius. This painting is a "reflection of the cataclysm." The subject of this painting is not the eruption of the year 79 AD, but a contemporary eruption (1771), yet it inevitably bridges symbollicaly to the ancient event. Through such works, Vesuvius was transformed into a mythical character, a symbol of nature's destructive power, a real presence a presence that cannot be ignored. Volaire's reference painting is iconic for the coexistence of the two styles, Romanticism and Neoclassicism, and marks the definitive divorce to the Rococo style. The dominant force of nature prevails over anachronistic themes related to intrigue, social games, and love intrigues.`,
    image: artwork6Img,
    position: sphericalPosition(356.5, 10),
    quizQuestions: [
      {
        id: "room6-artwork-6-q1",
        question:
          "Which painter inspired this copy of the eruption of Vesuvius?",
        options: [
          "Giacinto Gigante",
          "Pierre-Jacques Volaire",
          "Carlo Duclere",
          "Francesco Morelli"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room6-artwork-6-q2",
        question:
          "What visual contrast gives the painting its dramatic effect?",
        options: [
          "Snow and sunlight",
          "Night darkness and lava light",
          "Blue sea and green gardens",
          "Marble and bronze"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room6-artwork-6-q3",
        question: "What does Vesuvius become in this painting?",
        options: [
          "A decorative background",
          "A mythical symbol of destructive nature",
          "A peaceful pastoral element",
          "A political monument"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room6-artwork-5",
    title: "Section of the forum of Pompeii",
    subtitle: "Veneri | 19th c., Graphic, MANN, Naples",
    description: `In contrast to dramatic interpretations, this work represents a scientific and analytical approach of the site. It is a "section of the forum of Pompeii, a technical representation intended to reveal the internal structure of the architectural complex. This type of drawing was essential to the development of archaeology as a science. The typology reflects a positivist spirit, a desire to know the past through precise measurements and topographic mapping, rather than through romantic intuition. The artist becomes a close collaborator of the archeologist. Yet, even in this rigor, a form of "romance" is hidden: the romance of knowledge. The act of drawing the forum's cross-section is an act of intellectual resurrection, an attempt to bring back to life, on paper, the logic of a vanished civilization.`,
    image: artwork5Img,
    position: sphericalPosition(277, 11),
    quizQuestions: [
      {
        id: "room6-artwork-5-q1",
        question: "What type of representation is this artwork?",
        options: [
          "A mythological fresco",
          "A technical section drawing",
          "A theatrical scene",
          "A portrait"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room6-artwork-5-q2",
        question: "What did this type of drawing contribute to?",
        options: [
          "The development of archaeology as a science",
          "The decoration of Roman gardens",
          "The history of theater",
          "The spread of imperial portraits"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room6-artwork-5-q3",
        question: "What hidden form of romance does the description identify?",
        options: [
          "The romance of war",
          "The romance of knowledge",
          "The romance of mythology",
          "The romance of luxury"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room6-artwork-7",
    title: "Views of the Gulf of Naples and Pompeii ",
    subtitle:
      "Giacinto Gigante | 19th c., Mixed media, Capodimonte MRBC, Naples",
    description: `This series of works by Giacinto Gigante demonstrates his mastery in capturing the essence of the Neapolitan landscape. Whether painting panoramas of the bay or details of the ruins, Gigante transforms the landscape into a sensitive stage where light is the main character, performing well. Returning to Pompeii with a view of the Casa dei Capitelli Colorati, Gigante is less interested in archaeological precision and more in how the sun penetrates the abandoned peristyle, creating strong contrasts and evoking the ghosts of the past who once lived there. This ensemble highlights the site's duality. On one hand, the "romance" of an idyllic landscape. On the other, the "catastrophe" is ever-present, in the ruins or the volcano's silhouette. Gigante's art lies in his ability to hold these two forces in perfect balance.`,
    image: artwork7Img,
    position: sphericalPosition(261, 12),
    quizQuestions: [
      {
        id: "room6-artwork-7-q1",
        question:
          "Which artist created Views of the Gulf of Naples and Pompeii?",
        options: [
          "Giacinto Gigante",
          "Carlo Duclere",
          "Eduardo Dalbono",
          "Giuseppe Fiorelli"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room6-artwork-7-q2",
        question:
          "What element is described as the main character in Gigante's landscapes?",
        options: ["Architecture", "Light", "Military power", "Portraiture"],
        correctAnswerIndex: 1
      },
      {
        id: "room6-artwork-7-q3",
        question: "What duality does this ensemble highlight?",
        options: [
          "Myth and theater",
          "Romance of landscape and catastrophe of ruins",
          "Religion and politics",
          "Trade and conquest"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room6-artwork-3",
    title:
      "View of the excavations with the characters in the center and on the right",
    subtitle: "Carlo Teodoreo Duclere | 19th c., Watercolour",
    description: "",
    image: artwork3Img,
    position: sphericalPosition(375, 25),
    quizQuestions: [
      {
        id: "room6-artwork-3-q1",
        question: "What subject is represented in this watercolor?",
        options: [
          "A Roman banquet",
          "Pompeian excavations with human figures",
          "A volcanic eruption",
          "A mythological scene"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room6-artwork-4",
    title: "Excavation of a house in Pompeii",
    subtitle: "Cozzi/Capaldo | 19th c., Watercolour",
    description: "",
    image: artwork4Img,
    position: sphericalPosition(375, 12),
    quizQuestions: [
      {
        id: "room6-artwork-4-q1",
        question: "What activity is depicted in this artwork?",
        options: [
          "The excavation of a Pompeian house",
          "A Roman theatrical performance",
          "A religious procession",
          "A military ceremony"
        ],
        correctAnswerIndex: 0
      }
    ]
  }
];
