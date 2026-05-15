const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778846724/r8artwork1_ohat8j.jpg";

import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room8Artworks: InfoHotspot[] = [
  {
    id: "room8-artwork-1",
    title: "Sacro-idyllic landscape",
    subtitle: "Inventory 9512 | 1st c. AD, Fresco, MANN, Naples",
    description: `This small fresco fragment reintroduces us to the sacro-idyllic landscape genre, but here we see it as a "quote." The first-century Roman artist was "quoting" a style and a theme from Hellenistic art, evoking a pastoral and nostalgic Golden Age. The fragment itself is a meditation on fragility. It is all that remains of a larger ensemble, a shard of a dream of peace shattered by the eruption. The serene world it depicts stands in tragic contrast to its violent fate. In this room, the fresco acquires a new "afterlife." It becomes part of an artistic dialogue about memory and quotation. It is a testament to how art survives through reinterpretation, with each era adding its own awareness. Anselm Kiefer recently said that every landscape contains within itself the potential of a catastrophe.`,
    image: artwork1Img,
    position: sphericalPosition(53, 15)
  }
];
