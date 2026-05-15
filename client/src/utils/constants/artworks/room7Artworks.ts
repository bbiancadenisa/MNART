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
    title: "Portrait of a Magistrate",
    subtitle: "Oil on canvas",
    description: `This formal portrait depicts a distinguished official dressed in ceremonial robes, symbolizing authority, prestige, and intellectual status. Painted in an academic realist style, the artwork emphasizes dignity, elegance, and social power through rich colors, refined details, and a composed posture.`,
    image: artwork1Img,
    position: sphericalPosition(241, 4)
  },
  {
    id: "room7-artwork-2",
    title: "View a room for bathing",
    subtitle: "Paolo Fumagalli | Engraved in copper",
    description: "",
    image: artwork2Img,
    position: sphericalPosition(277.5, 27)
  },
  {
    id: "room7-artwork-3",
    title: "Collection",
    subtitle: "Paolo Fumagalli",
    description: `Vue du Nouveau Temple, prise du cote occidental Forum | Engraved in copper
    Sections, Ornaments | Engraved in copper
    Vue du Temple de Jupiter a Pompei | Copper engraving, using the aquatintand aquaforte`,
    images: [artwork3_1Img, artwork3_2Img, artwork3_3Img],
    position: sphericalPosition(281, 14)
  },
  {
    id: "room7-artwork-4",
    title: "",
    subtitle: "",
    description: `Casa della piccola fontana nella strada di Mercurio presso porto di Stabia | Carlo Oraty| Lithography
    Pompei- Adone e Venere sua Casa - Strada Mercurio | Unknown, Engraved in copper`,
    image: artwork4Img,
    position: sphericalPosition(299.5, 30)
  },
  {
    id: "room7-artwork-5",
    title: "",
    subtitle: "",
    description: `Pompeii House
    Pictures brought back to Pompeii | Paolo Fumagalli`,
    image: artwork5Img,
    position: sphericalPosition(306, 10)
  },
  {
    id: "room7-artwork-6",
    title: "",
    subtitle: "",
    description: `View of theater | Paolo Fumaggali
    Paintings found in Pompeii | Paolo Fumagalli`,
    image: artwork6Img,
    position: sphericalPosition(320, 30)
  },
  {
    id: "room7-artwork-7",
    title: "",
    subtitle: "",
    description: `
    Paintings and tools found at Pompeii | Paolo Fumagalli
    View of Salustio's house | Paolo Fumagalli`,
    image: artwork7Img,
    position: sphericalPosition(319.5, 10)
  },
  {
    id: "room7-artwork-8",
    title: "",
    subtitle: "",
    description: `Paintings and tools found at Pompeii | Paolo Fumagalli`,
    image: artwork8Img,
    position: sphericalPosition(333, 27)
  },
  {
    id: "room7-artwork-9",
    title: "",
    subtitle: "",
    description: `Paintings and tools found at Pompeii | Paolo Fumagalli`,
    image: artwork9Img,
    position: sphericalPosition(333, 14)
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
    position: sphericalPosition(297, 5)
  },
  {
    id: "room7-artwork-11",
    title: "Pompeii, 27th September 1864",
    subtitle: "Giacinto Gigante | cca 1864 | Pencil, Watercolour",
    description: "",
    image: artwork11Img,
    position: sphericalPosition(377, 27)
  },
  {
    id: "room7-artwork-12",
    title: "Street of the Tombs in Pompeii",
    subtitle: "Giacinto Gigante | cca 1850 | Pencil, Watercolour",
    description: "",
    image: artwork12Img,
    position: sphericalPosition(377, 8)
  },
  {
    id: "room7-artwork-13",
    title: "Narcissus at the Spring",
    subtitle: "Inventory 9385 | 1st c. AD, Fresco, MANN, Naples",
    description: `This fresco depicts one of the most famous myths the Romans adopted from Greek culture: the story of Narcissus. As narrated by Ovid, Narcissus was a youth of overwhelming beauty, cursed to fall in love with his own reflection in water. The scene captures this fatal moment: Narcissus, leaning over the water, is completely captivated by an impossible passion. The subject was extremely popular, often placed in gardens or near water features, creating a link between the myth and the real environment. The composition is elegant, focusing attention on the isolated figure of Narcissus, turning him into a universal symbol of self-contemplation. The presence of such a sophisticated myth is a testament to the cultural "Grand Tour" the Roman elite undertook towards the Hellenistic world. The fresco of Narcissus represents a cultural statement and an invitation to philosophical meditation on themes such as vanity and illusion.`,
    image: artwork13Img,
    position: sphericalPosition(423, 8)
  },
  {
    id: "room7-artwork-14",
    title: "Replicas of descoveries from Pompeii",
    subtitle: "",
    description: "",
    images: [
      artwork7_1Img,
      artwork7_2Img,
      artwork7_3Img,
      artwork7_4Img,
      artwork7_5Img,
      artwork7_6Img,
      artwork7_7Img
    ],
    position: sphericalPosition(479, 10)
  }
];
