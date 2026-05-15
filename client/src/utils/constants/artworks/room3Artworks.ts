const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837412/r3artwork1_qb6opd.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room3Artworks: InfoHotspot[] = [
  {
    id: "room3-artwork-1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork1Img,
    position: sphericalPosition(-18, 7)
  }
];
