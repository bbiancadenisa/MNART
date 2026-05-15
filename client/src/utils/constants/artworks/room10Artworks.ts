const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850043/r10.4_t8ugws.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850042/r10.1_vezypx.jpg";
const artwork3_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850041/r10.3.1_lfa3fv.jpg";
const artwork3_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850042/r10.3.2_fzr0hz.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778850042/r10.2_ohxm7j.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room10Artworks: InfoHotspot[] = [
  {
    id: "room10-artwork-1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork1Img,
    position: sphericalPosition(249, 17)
  },
  {
    id: "room10-artwork-2",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork2Img,
    position: sphericalPosition(264, 18)
  },
  {
    id: "room10-artwork-3",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    images: [artwork3_1Img, artwork3_2Img],
    position: sphericalPosition(437, 10)
  },
  {
    id: "room10-artwork-4",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork4Img,
    position: sphericalPosition(339, 10)
  }
];
