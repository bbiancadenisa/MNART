const artwork5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837500/r4artwork6_f6orfj.jpg";
const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837503/r4artwork1_hgoeqn.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837506/r4artwork2_w1dvpb.jpg";
const artwork3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837508/r4artwork3_mzongt.jpg";
const artwork6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837511/r4artwork7_qeqm2c.jpg";
const artwork7Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837514/r4artwork8_f6oug6.jpg";
const artwork4_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837516/r4artwork4.1_hkxe77.jpg";
const artwork4_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837519/r4artwork4.2_xlymbv.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room4Artworks: InfoHotspot[] = [
  {
    id: "room4-artwork-1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork1Img,
    position: sphericalPosition(201, -1)
  },
  {
    id: "room4-artwork-2",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork2Img,
    position: sphericalPosition(268, -1)
  },
  {
    id: "room4-artwork-3",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork3Img,
    position: sphericalPosition(299, 6)
  },
  {
    id: "room4-artwork-4",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    images: [artwork4_1Img, artwork4_2Img],
    position: sphericalPosition(323, 1)
  },
  {
    id: "room4-artwork-5",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork5Img,
    position: sphericalPosition(355, 2)
  },
  {
    id: "room4-artwork-6",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork6Img,
    position: sphericalPosition(384, 6)
  },
  {
    id: "room4-artwork-7",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork7Img,
    position: sphericalPosition(397, 4.5)
  }
];
