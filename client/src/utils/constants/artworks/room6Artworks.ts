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
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork1Img,
    position: sphericalPosition(145, -1)
  },
  {
    id: "room6-artwork-2",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    images: [artwork2_1Img, artwork2_2Img, artwork2_3Img],
    position: sphericalPosition(314, 4)
  },
  {
    id: "room6-artwork-3",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork3Img,
    position: sphericalPosition(375, 25)
  },
  {
    id: "room6-artwork-4",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork4Img,
    position: sphericalPosition(375, 12)
  },
  {
    id: "room6-artwork-5",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork5Img,
    position: sphericalPosition(277, 11)
  },
  {
    id: "room6-artwork-6",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork6Img,
    position: sphericalPosition(356.5, 10)
  }
];
