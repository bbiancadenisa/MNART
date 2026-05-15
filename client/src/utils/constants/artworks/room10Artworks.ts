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
    position: sphericalPosition(249, 17)
  },
  {
    id: "room10-artwork-2",
    title: "The Column",
    subtitle: "Horia Berner | 1996 Oil on canvas, private collection",
    description: `Horia Bernea, an analytical and contemplative spirit of recent Romanian art, brings in this epilogue a "Column" charged with surprising intimacy. Far from the monumentality of Roman ruins, this work reflects on verticality and human presence in an almost sensory way, through carnal pictorialism. The female nude, integrated with Bonnardian grace, becomes an expression of the fragility and warmth of life, in a lyricism of color, pulsating brushstrokes, and liminally revealed shapes, between two neighbouring spaces-interior and exterior.
Bernea seems to suggest on canvas a delicate tension between the solidity of the vertical lithic volume of the column -axis - a cultural symbol of support and, implicitly, of collapse - and the ephemeral fluidity of the human body in motion.
This work can be translated as an epilogue, a comment on the reference of Pompeii, but indeed for the human condition itself. Here, the eternal is no longer the immovable mineral landmark, but the sensitive, fragile, and continuous one of life, intimacy, and creation, which resides even in the face of the inevitable end. Bernea's painting is an invitation to contemplate the simple, beauty of creation, of cultural sur-vival as "the program".`,
    image: artwork2Img,
    position: sphericalPosition(339, 10)
  },
  {
    id: "room10-artwork-3",
    title: "Anti-Sculpture: Fiorelli Plaster-Cast (Gypsum)",
    subtitle: "Fiorelli | 20th c., MANN, Naples",
    description: `This plaster cast is the most disturbing testimony to the human tragedy. It is the result of the technique developed in the 19th century by the archeologist Giuseppe Fiorelli. By injecting plaster into the voids left by decomposed bodies in the hardened ash, archeologists recovered the exact form of the body at the moment of death. This cast is an anti-sculpture-the negative imprint of a vanished life. It confronts us with the physical reality of death, with the final gesture. Here, the "epilogue" moves from the symbolic to the carnal. Through this technique, the catastrophe acquires a face, a body, a human story frozen in time and ash. This cast is the climax of the exhibition, the point where archeology becomes art, with an anticipated reference to the silhouettes of Alberto Giacometti. It is the ultimate symbol of eternal fragility and of our ability to make even the void in the solidified ash speak.`,
    images: [artwork3_1Img, artwork3_2Img],
    position: sphericalPosition(437, 10)
  },
  {
    id: "room10-artwork-4",
    title: "Photography",
    subtitle: "Luigi Spina | 2020-2021, Photography, Caste Sant'Angelo, Rome",
    description: `Pompeii as captured by the photographer Luigi Spina during the biological pandemic of the SARS-COV2 virus (Covid-19). It takes on an unexpected contemporary resonance, correlating with the exhibition's central narrative. His images are a historical testimony in themselves, documenting both the ancient ruin 'as an apparition' and a unique moment in modern history-the absolute silence of Pompeii, forbidden to visitors during the global quarantine of the worldwide pandemic. Traditionally, Pompeii has been a destination of noise: from the billions of travelers' footsteps, from the Grand Tour onwards, who sought the romantic sublime, to the lenses of 19th-century documentary photographers, and finally, to the uninterrupted flow of 21st-century mass tourism. The site's documentation has evolved with technology. From Fumagalli's interpretive engravings to subsequent reproductions via phototype, and so forth, we witness an evolutionary mechanical process of disseminating an image. Luigi Spina inverts this process. He becomes a solitary witness, confronted with a ruin returned to its fundamental state: a space of absence, decoupled, after hundreds of years, for one suspended moment from the wave of tourists. His photographs, of exceptional technical clarity, become a testimony to time on two levels: they simultaneously capture the suspended time of the catastrophe of 79 AD and the frozen time of the 2020 health crisis. These images are the antithesis of the tourist souvenir. They are the meditations of a contemporary on the fragility of the eternal, showing us that, once emptied of human presence, Pompeii ceases to be a mere archaeological site and reverts, for a moment, to a place of pure memory, as it perhaps was only upon its rediscovery.`,
    image: artwork4Img,
    position: sphericalPosition(264, 18)
  }
];
