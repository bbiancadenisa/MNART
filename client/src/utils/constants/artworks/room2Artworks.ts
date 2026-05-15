const artwork3_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837384/r2artwork3.1_jnmuu9.jpg";
const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837387/r2artwork1_f6aykv.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837394/r2artwork4_wimo6l.jpg";
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
    title: "Cleopatra and the Serpent",
    subtitle:
      "Alessandro Varotari | 17th centuri, Inv. 1619, oil on canvas, MNArT",
    description:
      "Just as the Romans were attracted to an exotic and spiritual Egypt (as seen in the cult of (sis), this Baroque masterpiece acts as a dramatic turning point. Varotari captures the violent and sensual moment that connects these two worlds, the Roman and the Egyptian. We witness the final act that sealed the transformation of Ptolemaic Egypt into a Roman province, an event that haunts the consciousness of the imperial city. Varotari paints a tragedy full of pathos. transforming the queen's death into a spectacle that made possible the rise to power represented by Tiberius. This work reveals how each era projects its own nostalgia onto Antiquity. Although Cleopatra's political power was fragile and crumbled before Rome, her tragic legend, through countless interpretations, has acquired its own eternity, becoming a symbol of passions beyond time. Cleopatra sought eternal power; Faced with defeat (fragility), she chose a death that ensured her eternal legend. Varotari, painting her 1,700 years later, reinforces the idea that although her kingdom was fragile, her story became eternal. The ongoing restoration process of the artwork on display reinforces this rituality of myth ",
    image: artwork1Img,
    position: sphericalPosition(215, 20)
  },
  {
    id: "room2-artwork-2",
    title: "Io at Canopus",
    subtitle: "Inventory 1618 | 1st c AD, Fresco, MANN, Naples",
    description:
      "This fresco illustrates the climax of a complex myth that connects Greek and Egyptian mythology: the arrival of lo in Egypt. Tormented by Hera, lo wanders the world until she reaches the banks of the Nile, where she is welcomed by the goddess Isis, who restores her human form. The painting is a magnificent example of a Nilotic landscape, a sub-genre that evoked the exotic landscapes of Egypt. The composition is filled with specific elements: architecture with Egyptian motifs and lush vegetation. These scenes reflected the Romans deep fascination with the ancient and mysterious culture of Egypt. This work is a testament to religious syncretism. In the Roman world, lo was often identified with Isis, both being divine figures associated with suffering and salvation. For a follower of the Isiac cult, this fresco represented an allegory of their own spiritual journey.",
    image: artwork2Img,
    position: sphericalPosition(270, -9)
  },
  {
    id: "room2-artwork-3_1",
    title: "Bust of Tiberius",
    subtitle: "Inventory 5617 | 1st c AD, Bronze, MANN, Naples",
    description:
      "This bronze bust portrays Tiberius, the second Roman emperor. In the Roman Empire, portraits of rulers were powerful instruments of political propaganda. Distributed throughout the empire, these images consolidated the emperor's presence and authority. Crafted in bronze, a precious material, this portrait signifies its importance. The iconography is official: Tiberius is presented in maturity, with a sober expression that conveys gravitas (dignity) and auctoritas (authority). The classicizing style, inherited from Augustus, links his image to a Golden Age. The discovery of such a portrait in Pompeii is significant. It demonstrates the close ties between this provincial city and the center of power in Rome. The bust's presence was a declaration of loyalty. Looking at this bronze face, we see the expressive embodiment of power and the Roman state.",
    images: [artwork3_1Img, artwork3_2Img],
    position: sphericalPosition(310, 2)
  },
  {
    id: "room2-artwork-4",
    title: "Isiac Ceremony",
    subtitle: "Inventory 8924 | 1st c AD, Fresco, MANN, Naples",
    description:
      "This exceptional fresco transports us into the heart of one of Herculaneum's most interesting religious communities: the followers of the Egyptian goddess Isis. Most likely originating from the Temple of Isis, the work is a visual document of rare historical importance. It depicts a public ceremony, a ritual officiated by priests with shaven heads, according to Egyptian tradition. The scene is full of life and specific cultic details. We observe priests carrying ritual objects, such as the sistrum and the situla, while the faithful attend. The pictorial style, narrative and colorful, aims to convey the solemnity and exoticism of the ritual. The presence of Egyptianizing elements underscores the cult's Eastern origins. The extraordinary popularity of the cult of Isis in Pompeii demonstrates the religious syncretism and cultural openness of Roman society. This fresco is a direct testimony to the spiritual diversity of the Empire, allowing us to visualize the practices of a mystery cult celebrated in the templul din Pompei.",
    image: artwork4Img,
    position: sphericalPosition(370, -10)
  },
  {
    id: "room2-artwork-5_1",
    title: "Roman Architectural Fresco from Pompeii",
    subtitle: "Inventory 8904 | 1st c AD, Fresco, MANN, Naples",
    description:
      "The fresco exemplifies Roman illusionistic wall painting, using architectural perspective and figural decoration to transform interior domestic space into an imagined theatrical environment. Roman artists often used frescoes to make walls appear deeper, richer, and more open than they really were.",
    image: artwork5Img,
    position: sphericalPosition(473, -8)
  }
];
