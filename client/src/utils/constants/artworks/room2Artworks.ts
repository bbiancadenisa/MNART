const artwork3_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837384/r2artwork3.1_jnmuu9.jpg";
const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837387/r2artwork1_f6aykv.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836790/WhatsApp_Image_2026-05-12_at_16.01.06_2_nw5mzl.jpg";
const artwork3_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837389/r2artwork3.2_x85dsq.jpg";
const artwork5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837392/r2artwork5_lmfhh1.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837397/r2artwork2_ppzwly.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room2Artworks: InfoHotspot[] = [
  {
    id: "room2-artwork-1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork1Img,
    position: sphericalPosition(215, 20)
  },
  {
    id: "room2-artwork-2",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork2Img,
    position: sphericalPosition(270, -9)
  },
  {
    id: "room2-artwork-3_1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    images: [artwork3_1Img, artwork3_2Img],
    position: sphericalPosition(310, 2)
  },
  {
    id: "room2-artwork-4",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork4Img,
    position: sphericalPosition(370, -10)
  },
  {
    id: "room2-artwork-5_1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork5Img,
    position: sphericalPosition(473, -8)
  }
];
