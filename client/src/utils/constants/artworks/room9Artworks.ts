const artwork3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849241/r93_bbo4pe.jpg";
const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849242/r91_o5th4w.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849241/r92_lumno6.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849242/r94_pkkly3.jpg";
const artwork5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778849769/r98_yvnpym.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room9Artworks: InfoHotspot[] = [
  {
    id: "room9-artwork-1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork1Img,
    position: sphericalPosition(253, 4)
  },
  {
    id: "room9-artwork-2",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork2Img,
    position: sphericalPosition(303.5, 10)
  },
  {
    id: "room9-artwork-3",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork3Img,
    position: sphericalPosition(380, 15)
  },
  {
    id: "room9-artwork-4",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork4Img,
    position: sphericalPosition(418, 10)
  },
  {
    id: "room9-artwork-5",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork5Img,
    position: sphericalPosition(109, 11)
  }
];
