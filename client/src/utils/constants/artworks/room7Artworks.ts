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
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork1Img,
    position: sphericalPosition(241, 4)
  },
  {
    id: "room7-artwork-2",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork2Img,
    position: sphericalPosition(277.5, 27)
  },
  {
    id: "room7-artwork-3",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    images: [artwork3_1Img, artwork3_2Img, artwork3_3Img],
    position: sphericalPosition(281, 14)
  },
  {
    id: "room7-artwork-4",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork4Img,
    position: sphericalPosition(299.5, 30)
  },
  {
    id: "room7-artwork-5",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork5Img,
    position: sphericalPosition(306, 10)
  },
  {
    id: "room7-artwork-6",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork6Img,
    position: sphericalPosition(320, 30)
  },
  {
    id: "room7-artwork-7",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork7Img,
    position: sphericalPosition(319.5, 10)
  },
  {
    id: "room7-artwork-8",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork8Img,
    position: sphericalPosition(333, 27)
  },
  {
    id: "room7-artwork-9",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork9Img,
    position: sphericalPosition(333, 14)
  },
  {
    id: "room7-artwork-10",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
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
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork11Img,
    position: sphericalPosition(377, 27)
  },
  {
    id: "room7-artwork-12",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork12Img,
    position: sphericalPosition(377, 8)
  },
  {
    id: "room7-artwork-13",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork13Img,
    position: sphericalPosition(423, 8)
  },
  {
    id: "room7-artwork-14",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
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
