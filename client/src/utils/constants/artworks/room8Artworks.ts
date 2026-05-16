const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778846724/r8artwork1_ohat8j.jpg";

import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room8Artworks: InfoHotspot[] = [
  {
    id: "room8-artwork-1",
    title: "Sacro-idyllic landscape",
    subtitle: "Inventory 9512 | 1st c. AD, Fresco, MANN, Naples",
    description: `This small fresco fragment reintroduces us to the sacro-idyllic landscape genre, but here we see it as a "quote." The first-century Roman artist was "quoting" a style and a theme from Hellenistic art, evoking a pastoral and nostalgic Golden Age. The fragment itself is a meditation on fragility. It is all that remains of a larger ensemble, a shard of a dream of peace shattered by the eruption. The serene world it depicts stands in tragic contrast to its violent fate. In this room, the fresco acquires a new "afterlife." It becomes part of an artistic dialogue about memory and quotation. It is a testament to how art survives through reinterpretation, with each era adding its own awareness. Anselm Kiefer recently said that every landscape contains within itself the potential of a catastrophe.`,
    image: artwork1Img,
    position: sphericalPosition(53, 15),
    quizQuestions: [
      {
        id: "room8-artwork-1-q1",
        question: "What artistic genre does this fresco fragment belong to?",
        options: [
          "Military painting",
          "Sacro-idyllic landscape",
          "Imperial portraiture",
          "Architectural illusionism"
        ],
        correctAnswerIndex: 1
      },
      {
        id: "room8-artwork-1-q2",
        question:
          "What earlier artistic tradition was the Roman artist referencing?",
        options: [
          "Egyptian art",
          "Medieval iconography",
          "Hellenistic art",
          "Byzantine mosaics"
        ],
        correctAnswerIndex: 2
      },
      {
        id: "room8-artwork-1-q3",
        question: "What contrast gives the fresco its tragic meaning?",
        options: [
          "The peaceful landscape versus its violent destruction",
          "The use of bright and dark colors",
          "The opposition between mythology and reality",
          "The difference between Roman and Greek culture"
        ],
        correctAnswerIndex: 0
      }
    ]
  }
];
