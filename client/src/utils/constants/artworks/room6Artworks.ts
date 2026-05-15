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
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room6Artworks: InfoHotspot[] = [
  {
    id: "room6-artwork-1",
    title: "4 pieces, oval views, views of Vesuvius erupting",
    subtitle: "",
    description: "",
    image: artwork1Img,
    position: sphericalPosition(145, -1)
  },
  {
    id: "room6-artwork-2",
    title: "View of the Solfatara",
    subtitle:
      "Pierre Jacques-Voltaire | 1774, Oil on Canvas, Capodimonte MRBC, Naples",
    description: `Pierre-Jacques Volaire, the master of the volcanic landscape, offers a vision of the Solfatara crater. Unlike the violent spectacle of an eruption, the Solfatara presents an image of latent catastrophe, of subterranean forces perpetually smoldering, threatening. The work is an example of the aesthetics of the sublime. Volaire captures the strange and unsettling atmosphere of the place. He populates the scene with tiny figures of travelers, who explore this hostile landscape with a mixture of curiosity and fear. This painting is a reflection on catastrophe as a permanent condition of the Neapolitan region. It reminds us that the destruction of Pompeii was not an isolated event. Volaire transforms a real landscape into a romantic vision of the primordial link between creation and destruction.`,
    images: [artwork2_1Img, artwork2_2Img, artwork2_3Img],
    position: sphericalPosition(314, 4)
  },
  {
    id: "room6-artwork-6",
    title: "Views of Vesuvius in eruption",
    subtitle:
      "Eduard Dalbono | 19th c., Oil on canvas, Museo di San Martina, Naples",
    description: `Eduardo Dalbono explores in this series of ten oval canvases (located in rooms 6 and 11) the quintessential theme of local landscape painting: Vesuvius in eruption. The oval format is used in an unexpected way, turning each eruption into a kind of "cameo" of the sublime, a medallion of catastrophe in the making.
This series is an artistic meditation on the relationship between man, nature, and time. Each "veduta" captures a different moment of the eruption, demonstrating the artist's Romantic interest in the changing effects of light and atmosphere.
The ten pieces function as a narrative sequence, anticipating photographic frames, a visual poem about the volcano's power. They embody the section's titular duality: the "catastrophe" is the subject, while the "romance" lies in the artistic approach, which finds a terrible beauty in destruction. In the "epilogue" section, the volcano has the "last word" and serves as a perpetual reminder of the condition of man as a witness of the history.`,
    image: artwork6Img,
    position: sphericalPosition(356.5, 10)
  },
  {
    id: "room6-artwork-4",
    title:
      "View of the excavations with the characters in the center and on the right",
    subtitle: "Carlo Teodoreo Duclere | 19th c., Watercolour",
    description: "",
    image: artwork4Img,
    position: sphericalPosition(375, 12)
  },
  {
    id: "room6-artwork-5",
    title: "Views of the ruins and the gulf",
    subtitle:
      "Duclere, Consalvo Careli | 19th c., Various media, Museo din San Martino & Copodimonte, Naples",
    description: `These two works offer complementary perspectives. Duclere's Veduta degli Scavi di Pompei is a panoramic view of the archaeological site, emphasizing the scale of the excavation effort and the desolate, yet however fascinating landscape. On the other hand, Terrace on the Gulf of Castellammare by Consalvo Careli moves us away from the ruins to show the continuity of life. The scene is one of idyllic leisure. Thus, the awareness of history and catastrophe is implicit. These two views conclude the section by juxtaposing two realities: that of the unearthed past and that of the lived present. "Catastrophe" remains the invisible foundation that gives this landscape its tragic depth.`,
    image: artwork5Img,
    position: sphericalPosition(277, 11)
  },
  {
    id: "room6-artwork-3",
    title: "Excavation of a house in Pompeii",
    subtitle: "Cozzi/Capaldo | 19th c., Watercolour",
    description: "",
    image: artwork3Img,
    position: sphericalPosition(375, 25)
  }
];
