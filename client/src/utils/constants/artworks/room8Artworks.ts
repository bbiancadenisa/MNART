const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778846724/r8artwork1_ohat8j.jpg";

import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room8Artworks: InfoHotspot[] = [
  {
    id: "room8-artwork-1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork1Img,
    position: sphericalPosition(53, 15)
  }
];
