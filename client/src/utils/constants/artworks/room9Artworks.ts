const artwork3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849241/r93_bbo4pe.jpg";
const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849242/r91_o5th4w.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849241/r92_lumno6.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849242/r94_pkkly3.jpg";
const artwork5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849769/r98_yvnpym.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room9Artworks: InfoHotspot[] = [
  {
    id: "room9-artwork-1",
    title: "Iron",
    subtitle: "Alberto Burni | c. 1960, Iron, GNMAC, Rome",
    description: `Alberto Burri revolutionized painting by using unconventional, "wounded" materials. In his work Ferro (Iron), he does not choose to paint the iron but he cuts, welds, and burns it. The surface of the work rejects the idea of being an illusion but becomes instead a battlefield, a testimony to destruction and reconstruction. In dialogue with the artifacts from Pompeii and Kiefer's works, Ferro becomes a harrowing metaphor. It is the image of matter that has survived a cataclysm, the echo of bronzes deformed by heat. Burri creates an archaeology of matter, forcing us to become "conscious" of the drama inscribed in its substance. "Survival," in Burri's vision, is never intact; it is a multiple-scarred survival. His work teaches us to look at the ruins of Pompeii as romantic vestiges, as well as bodies that have suffered, whose matter carries the physical memory of the tragic event.`,
    image: artwork1Img,
    position: sphericalPosition(253, 4),
    quizQuestions: [
      {
        id: "room9-artwork-1-q1",
        question: "How did Alberto Burri transform iron into art?",
        options: [
          "By carving marble around it",
          "By painting realistic scenes on it",
          "By cutting, welding, and burning it",
          "By covering it with gold"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room9-artwork-1-q2",
        question: "What does Burri's work mainly symbolize?",
        options: [
          "Political propaganda",
          "Destruction and survival",
          "Religious devotion",
          "Scientific innovation"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room9-artwork-1-q3",
        question: "What does Burri compare the material surface to?",
        options: [
          "A battlefield",
          "A theatrical stage",
          "A peaceful landscape",
          "A Roman temple"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room9-artwork-2",
    title: "Fresco: Appolo Citharoedus",
    subtitle: "Inventory 9542 | 1st c AD, Fresco, MANN, Naples",
    description: `This fresco depicts Apollo in his guise as Citharoedus- the one who plays the cithara". This is one of the god's most important aspects, capturing his essence as the deity of music, poetry, harmony, and rational order (logos). The survival of this Apollo is the survival of a civilizational ideal. In a context of chaotic destruction, the image of the god of order remains as a testament to the values he embodied in Civita. The fresco expresses a fragment of the artistic consciousness of a world that placed art at the center of existence. In this room, Apollo enters into a dialogue with modern artists. His classical image becomes a reference point. He is the survivor who forces us to ask: what of the classical canon of beauty and order can still survive in our modern consciousness?`,
    image: artwork2Img,
    position: sphericalPosition(303.5, 10),
    quizQuestions: [
      {
        id: "room9-artwork-2-q1",
        question: "What instrument is Apollo associated with in this fresco?",
        options: ["Trumpet", "Cithara", "Flute", "Drum"],
        correctAnswerIndex: 1
      },
      {
        id: "room9-artwork-2-q2",
        question: "What values does Apollo symbolize?",
        options: [
          "War and conquest",
          "Mystery and chaos",
          "Music, harmony, and rational order",
          "Trade and prosperity"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room9-artwork-2-q3",
        question:
          "What does Apollo's survival represent after Pompeii's destruction?",
        options: [
          "The survival of a civilizational ideal",
          "The fall of Roman religion",
          "The beginning of Christianity",
          "The triumph of military power"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room9-artwork-3",
    title: "Fresco: Winged Victory",
    subtitle: "Inventory 8959 | 1st c AD, Fresco, MANN, Naples",
    description: `This fresco depicts a Vitoria Alata-a Winged Victory, the Roman equivalent of the goddess Nike. In the Roman world, Victory was a divine personification of major importance, symbolizing military success and triumph in civic life. The dynamic representation fo the figure was a popular subject, intended to bring good fortune. The survival of this image is laden with tragic irony. In a city that suffered the ultimate defeat, being covered in ash and petrified, a goddess of victory is saved. She is a paradoxical symbol: a testament to the triumph of art over destruction. Looking at her today, we become "conscious" of this paradox.
    The Winged Victory no longer celebrates a Roman military triumph, but the triumph of memory over oblivion. Her "survival" is a victory for archaeology and for our desire to engage our symbolic re(creation) in a dialogue with our memory and the historical past.`,
    image: artwork3Img,
    position: sphericalPosition(380, 15),
    quizQuestions: [
      {
        id: "room9-artwork-3-q1",
        question: "Which Roman deity is represented in this fresco?",
        options: ["Venus", "Minerva", "Winged Victory", "Diana"],
        correctAnswerIndex: 2
      },
      {
        id: "room9-artwork-3-q2",
        question: "What did Victory symbolize in Roman culture?",
        options: [
          "Agriculture",
          "Military triumph and civic success",
          "Religious purification",
          "Philosophical wisdom"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room9-artwork-3-q3",
        question: "What paradox gives this fresco its deeper meaning?",
        options: [
          "A goddess of victory surviving a destroyed city",
          "A peaceful landscape inside a battle scene",
          "A Roman artwork painted in modern times",
          "A mythological figure shown without wings"
        ],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room9-artwork-4",
    title: "Elizabeth of Austria",
    subtitle:
      "Anselm Kiefer | 1991 & 20th-21st century, Painting, Galleria Lia Rumma, Naples",
    description: `Anselm Kiefer uses history and myth to explore the traumas of European consciousness. Elizabeth of Austria is a meditation on a tragic historical figure whose "survival" in cultural memory is similar to that of an artifact. The preludes to the great dramas of the wars of the 20th century are iconically embedded in the portrait of Empress Sissi, rendered sober on the very material of war ammunition-lead, alchemically linked with Saturn.`,
    image: artwork4Img,
    position: sphericalPosition(418, 10),
    quizQuestions: [
      {
        id: "room9-artwork-4-q1",
        question: "Which artist created Elizabeth of Austria?",
        options: [
          "Lucio Fontana",
          "Alberto Burri",
          "Anselm Kiefer",
          "Eduard Dalbono"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room9-artwork-4-q2",
        question: "What historical figure inspired the artwork?",
        options: [
          "Cleopatra",
          "Empress Sissi",
          "Queen Victoria",
          "Marie Antoinette"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room9-artwork-4-q3",
        question: "Which material associated with war appears in the artwork?",
        options: ["Lead", "Bronze", "Steel", "Silver"],
        correctAnswerIndex: 0
      }
    ]
  },
  {
    id: "room9-artwork-5",
    title: "Spacial Concept",
    subtitle:
      "Lucio Fontana | 1953, acrylic and glass fragments on canvas with holes, GNMAC, Rome",
    description: `intervenes decisively in our dialogue about consciousness and survival, introducing a radicalism that redefines the very essence of the image. Through his iconic gesture of cutting the canvas, Fontana does not destroy, but opens.
    The creation invites us to perceive the space beyond the surface and creates a breach in the pictorial illusion. This work, in the context of the discourse on anthropogenic cataclysm, becomes a powerful metaphor for reflection on the wars of the 20th century and beyond. Great catastrophes have created "cuts" and gaps in the landscape of history, revealing another dimension of reality beneath layers of matter. Fontana's cut seems at first glance to be an act of aggression, but it is not; rather, it is an act of revelation, a moment of lucidity, of acute awareness of what lies beyond appearances. It speaks of material vulnerability, but also of art's ability to transcend this vulnerability, to survive through conceptual transformation. "Survival" here does not mean intact, but reevaluated, redefined through the very act of creative destruction. This epilogue of modernity meets in dialogue with antiquity, through a gesture that forces us to rethink what it means to be "aware" of the depths and voids of history and existence.`,
    image: artwork5Img,
    position: sphericalPosition(109, 11),
    quizQuestions: [
      {
        id: "room9-artwork-5-q1",
        question: "What radical gesture defines Lucio Fontana's artwork?",
        options: [
          "Cutting the canvas",
          "Melting bronze",
          "Burning wood",
          "Fragmenting marble"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room9-artwork-5-q2",
        question: "What does Fontana's cut symbolically create?",
        options: [
          "A political statement",
          "A decorative ornament",
          "An opening beyond the surface",
          "A classical illusion"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room9-artwork-5-q3",
        question:
          "In the artwork's interpretation, catastrophes create what in history?",
        options: [
          "Golden ages",
          "Cuts and gaps",
          "Perfect harmony",
          "Religious unity"
        ],
        correctAnswerIndex: 1
      }
    ]
  }
];
