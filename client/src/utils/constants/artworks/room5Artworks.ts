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
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    images: [artwork1_1Img, artwork1_2Img, artwork1_3Img],
    position: sphericalPosition(96, 4)
  },
  {
    id: "room5-artwork-2",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork2Img,
    position: sphericalPosition(52, 13)
  },
  {
    id: "room5-artwork-3",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork3Img,
    position: sphericalPosition(74, 20)
  },
  {
    id: "room5-artwork-4",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork4Img,
    position: sphericalPosition(100, 22)
  },
  {
    id: "room5-artwork-5",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork5Img,
    position: sphericalPosition(207, 20)
  },
  {
    id: "room5-artwork-6",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork6Img,
    position: sphericalPosition(244, 20)
  },
  {
    id: "room5-artwork-7",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork7Img,
    position: sphericalPosition(302, 32)
  },
  {
    id: "room5-artwork-8",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork8Img,
    position: sphericalPosition(302, 20)
  },
  {
    id: "room5-artwork-9",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork9Img,
    position: sphericalPosition(325, 20)
  },
  {
    id: "room5-artwork-10",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    images: [artwork10_1Img, artwork10_2Img, artwork10_3Img, artwork10_4Img],
    position: sphericalPosition(312, 10)
  }
];
