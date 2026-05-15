const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837412/r3artwork1_qb6opd.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room3Artworks: InfoHotspot[] = [
  {
    id: "room3-artwork-1",
    title: "Banquet Scene",
    subtitle: "Inventory 9015 | 1st c AD, Fresco, MANN, Naples",
    description:
      "This fresco brings us into the heart of one of the most important social rituals of the Roman world: the banquet, or convivium. Far from being a simple meal, it was a complex event, a stage upon which the host displayed his wealth, status, and cultural refinement. The scene takes place in a triclinium, the Roman dining room. The painting captures the lively atmosphere of the feast. We see relaxed guests, crowned with garlands, being served by slaves. Such images were served to enhance the sensory experience of the actual banquet, celebrating abundance, friendship, and the pleasures of life (voluptas). Looking at this fresco, we are participating in the banquet of a past memory. Preserved under the ash of Vesuvius, the painting becomes a time capsule, a direct testimony to the customs, social hierarchies and games, to the values of a vanished civilization. It reminds us that art was deeply integrated thread into the social fabric of the city.",
    image: artwork1Img,
    position: sphericalPosition(-18, 7)
  }
];
