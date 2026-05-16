const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850043/r10.4_t8ugws.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850042/r10.2_ohxm7j.jpg";
const artwork3_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850041/r10.3.1_lfa3fv.jpg";
const artwork3_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850042/r10.3.2_fzr0hz.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850042/r10.1_vezypx.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room10Artworks: InfoHotspot[] = [
  {
    id: "room10-artwork-1",
    title: "Photography",
    subtitle: "Luigi Spina | 2020-2021, Photography, Caste Sant'Angelo, Rome",
    description: `Pompeii as captured by the photographer Luigi Spina during the biological pandemic of the SARS-COV2 virus (Covid-19). It takes on an unexpected contemporary resonance, correlating with the exhibition's central narrative. His images are a historical testimony in themselves, documenting both the ancient ruin 'as an apparition' and a unique moment in modern history-the absolute silence of Pompeii, forbidden to visitors during the global quarantine of the worldwide pandemic. Traditionally, Pompeii has been a destination of noise: from the billions of travelers' footsteps, from the Grand Tour onwards, who sought the romantic sublime, to the lenses of 19th-century documentary photographers, and finally, to the uninterrupted flow of 21st-century mass tourism. The site's documentation has evolved with technology. From Fumagalli's interpretive engravings to subsequent reproductions via phototype, and so forth, we witness an evolutionary mechanical process of disseminating an image. Luigi Spina inverts this process. He becomes a solitary witness, confronted with a ruin returned to its fundamental state: a space of absence, decoupled, after hundreds of years, for one suspended moment from the wave of tourists. His photographs, of exceptional technical clarity, become a testimony to time on two levels: they simultaneously capture the suspended time of the catastrophe of 79 AD and the frozen time of the 2020 health crisis. These images are the antithesis of the tourist souvenir. They are the meditations of a contemporary on the fragility of the eternal, showing us that, once emptied of human presence, Pompeii ceases to be a mere archaeological site and reverts, for a moment, to a place of pure memory, as it perhaps was only upon its rediscovery.`,
    image: artwork1Img,
    position: sphericalPosition(249, 17),
    quizQuestions: [
      {
        id: "room10-artwork-1-q1",
        question:
          "During which global event did Luigi Spina photograph Pompeii?",
        options: [
          "World War II",
          "The COVID-19 pandemic",
          "The 2008 economic crisis",
          "The eruption of Mount Etna"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room10-artwork-1-q2",
        question: "How does Luigi Spina portray Pompeii in his photographs?",
        options: [
          "As a crowded tourist attraction",
          "As a noisy industrial city",
          "As a silent space of memory and absence",
          "As a futuristic metropolis"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room10-artwork-1-q3",
        question:
          "What makes these photographs different from tourist souvenirs?",
        options: [
          "They were painted by hand",
          "They focus on meditation and fragility rather than tourism",
          "They were created in ancient Rome",
          "They only depict volcanic eruptions"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room10-artwork-2",
    title: "The Column",
    subtitle: "Horia Berner | 1996 Oil on canvas, private collection",
    description: `Horia Bernea, an analytical and contemplative spirit of recent Romanian art, brings in this epilogue a "Column" charged with surprising intimacy. Far from the monumentality of Roman ruins, this work reflects on verticality and human presence in an almost sensory way, through carnal pictorialism. The female nude, integrated with Bonnardian grace, becomes an expression of the fragility and warmth of life, in a lyricism of color, pulsating brushstrokes, and liminally revealed shapes, between two neighbouring spaces-interior and exterior.
    Bernea seems to suggest on canvas a delicate tension between the solidity of the vertical lithic volume of the column -axis - a cultural symbol of support and, implicitly, of collapse - and the ephemeral fluidity of the human body in motion.
    This work can be translated as an epilogue, a comment on the reference of Pompeii, but indeed for the human condition itself. Here, the eternal is no longer the immovable mineral landmark, but the sensitive, fragile, and continuous one of life, intimacy, and creation, which resides even in the face of the inevitable end. Bernea's painting is an invitation to contemplate the simple, beauty of creation, of cultural sur-vival as "the program".`,
    image: artwork2Img,
    position: sphericalPosition(339, 10),
    quizQuestions: [
      {
        id: "room10-artwork-2-q1",
        question: "Which Romanian artist created The Column?",
        options: [
          "Lucio Fontana",
          "Horia Bernea",
          "Alberto Burri",
          "Anselm Kiefer"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room10-artwork-2-q2",
        question: "What tension does Bernea explore in this painting?",
        options: [
          "War and peace",
          "Technology and nature",
          "The solidity of the column and the fragility of the human body",
          "Religion and politics"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room10-artwork-2-q3",
        question: "What does the artwork suggest about eternity?",
        options: [
          "That eternity belongs only to monuments",
          "That fragile human life can also embody continuity and survival",
          "That history always repeats itself",
          "That ruins are stronger than people"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room10-artwork-3",
    title: "Anti-Sculpture: Fiorelli Plaster-Cast (Gypsum)",
    subtitle: "Fiorelli | 20th c., MANN, Naples",
    description: `This plaster cast is the most disturbing testimony to the human tragedy. It is the result of the technique developed in the 19th century by the archeologist Giuseppe Fiorelli. By injecting plaster into the voids left by decomposed bodies in the hardened ash, archeologists recovered the exact form of the body at the moment of death. This cast is an anti-sculpture-the negative imprint of a vanished life. It confronts us with the physical reality of death, with the final gesture. Here, the "epilogue" moves from the symbolic to the carnal. Through this technique, the catastrophe acquires a face, a body, a human story frozen in time and ash. This cast is the climax of the exhibition, the point where archeology becomes art, with an anticipated reference to the silhouettes of Alberto Giacometti. It is the ultimate symbol of eternal fragility and of our ability to make even the void in the solidified ash speak.`,
    images: [artwork3_1Img, artwork3_2Img],
    position: sphericalPosition(437, 10),
    quizQuestions: [
      {
        id: "room10-artwork-3-q1",
        question:
          "Which archaeologist developed the plaster-cast technique used in Pompeii?",
        options: [
          "Giuseppe Fiorelli",
          "Anselm Kiefer",
          "Alberto Burri",
          "Lucio Fontana"
        ],
        correctAnswerIndex: 0
      },
      {
        id: "room10-artwork-3-q2",
        question:
          "What did archaeologists inject into the voids left in the ash?",
        options: ["Bronze", "Marble dust", "Plaster", "Wax"],
        correctAnswerIndex: 2
      },
      {
        id: "room10-artwork-3-q3",
        question: "Why is this cast described as an 'anti-sculpture'?",
        options: [
          "Because it destroys classical forms",
          "Because it is the negative imprint of a vanished life",
          "Because it was created without tools",
          "Because it represents abstract geometry"
        ],
        correctAnswerIndex: 1
      }
    ]
  },
  {
    id: "room10-artwork-4",
    title: "Photography",
    subtitle: "Luigi Spina | 2020-2021, Photography, Caste Sant'Angelo, Rome",
    description: `Pompeii as captured by the photographer Luigi Spina during the biological pandemic of the SARS-COV2 virus (Covid-19). It takes on an unexpected contemporary resonance, correlating with the exhibition's central narrative. His images are a historical testimony in themselves, documenting both the ancient ruin 'as an apparition' and a unique moment in modern history-the absolute silence of Pompeii, forbidden to visitors during the global quarantine of the worldwide pandemic. Traditionally, Pompeii has been a destination of noise: from the billions of travelers' footsteps, from the Grand Tour onwards, who sought the romantic sublime, to the lenses of 19th-century documentary photographers, and finally, to the uninterrupted flow of 21st-century mass tourism. The site's documentation has evolved with technology. From Fumagalli's interpretive engravings to subsequent reproductions via phototype, and so forth, we witness an evolutionary mechanical process of disseminating an image. Luigi Spina inverts this process. He becomes a solitary witness, confronted with a ruin returned to its fundamental state: a space of absence, decoupled, after hundreds of years, for one suspended moment from the wave of tourists. His photographs, of exceptional technical clarity, become a testimony to time on two levels: they simultaneously capture the suspended time of the catastrophe of 79 AD and the frozen time of the 2020 health crisis. These images are the antithesis of the tourist souvenir. They are the meditations of a contemporary on the fragility of the eternal, showing us that, once emptied of human presence, Pompeii ceases to be a mere archaeological site and reverts, for a moment, to a place of pure memory, as it perhaps was only upon its rediscovery.`,
    image: artwork4Img,
    position: sphericalPosition(264, 18),
    quizQuestions: [
      {
        id: "room10-artwork-4-q1",
        question: "What unique condition did Luigi Spina document in Pompeii?",
        options: [
          "A volcanic eruption",
          "The city completely empty during quarantine",
          "Ancient Roman festivals",
          "Military excavations"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room10-artwork-4-q2",
        question:
          "What do Spina’s photographs become according to the description?",
        options: [
          "Tourist advertisements",
          "Scientific diagrams",
          "Meditations on the fragility of the eternal",
          "Political manifestos"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room10-artwork-4-q3",
        question: "What happens to Pompeii once emptied of visitors?",
        options: [
          "It becomes a modern city",
          "It returns to a place of pure memory",
          "It disappears completely",
          "It becomes a religious sanctuary"
        ],
        correctAnswerIndex: 1
      }
    ]
  }
];
