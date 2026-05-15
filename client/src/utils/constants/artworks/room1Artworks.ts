const artwork1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836734/WhatsApp_Image_2026-05-12_at_16.01.06_6_ai9nji.jpg";
const artwork2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836778/WhatsApp_Image_2026-05-12_at_16.01.06_5_mcnnad.jpg";
const artwork4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836790/WhatsApp_Image_2026-05-12_at_16.01.06_2_nw5mzl.jpg";
const artwork5_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836798/WhatsApp_Image_2026-05-12_at_16.01.06_1_zunbtg.jpg";
const artwork5_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836806/WhatsApp_Image_2026-05-12_at_16.01.06_cpdnc1.jpg";
const artwork3_2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836811/WhatsApp_Image_2026-05-12_at_16.01.06_4_gouxxv.jpg";
const artwork6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836815/WhatsApp_Image_2026-05-12_at_16.01.05_5_w1slhc.jpg";
const artwork7Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836819/WhatsApp_Image_2026-05-12_at_16.01.05_4_mw2bgk.jpg";
const artwork8Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836823/WhatsApp_Image_2026-05-12_at_16.01.05_3_vsp8jz.jpg";
const artwork9Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836826/WhatsApp_Image_2026-05-12_at_16.01.05_2_yw0i6l.jpg";
const artwork10Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836829/WhatsApp_Image_2026-05-12_at_16.01.05_1_vpmi9g.jpg";
const artwork11Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836832/WhatsApp_Image_2026-05-12_at_16.01.05_fzaonx.jpg";
const artwork3_1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778836886/WhatsApp_Image_2026-05-12_at_16.01.06_3_ruxve2.jpg";
import { sphericalPosition } from "../../sphericalPosition";
import type { InfoHotspot } from "../../types/tourTypes";

export const room1Artworks: InfoHotspot[] = [
  {
    id: "room1-artwork-1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork1Img,
    position: sphericalPosition(234, 18)
  },
  {
    id: "room1-artwork-2",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork2Img,
    position: sphericalPosition(266, 12)
  },
  {
    id: "room1-artwork-3_1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    images: [artwork3_1Img, artwork3_2Img],
    position: sphericalPosition(277, 11.5)
  },
  {
    id: "room1-artwork-4",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork4Img,
    position: sphericalPosition(286, 11.5)
  },
  {
    id: "room1-artwork-5_1",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    images: [artwork5_1Img, artwork5_2Img],
    position: sphericalPosition(304, 11.5)
  },
  {
    id: "room1-artwork-6",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork6Img,
    position: sphericalPosition(331.5, 12.5)
  },
  {
    id: "room1-artwork-7",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork7Img,
    position: sphericalPosition(359.5, 18)
  },
  {
    id: "room1-artwork-8",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork8Img,
    position: sphericalPosition(368.5, 18)
  },
  {
    id: "room1-artwork-9",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork9Img,
    position: sphericalPosition(398.5, 9)
  },
  {
    id: "room1-artwork-10",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork10Img,
    position: sphericalPosition(79, 16.5)
  },
  {
    id: "room1-artwork-11",
    title: "Artwork title",
    subtitle: "Artist / Date / Technique",
    description: "Example text",
    image: artwork11Img,
    position: sphericalPosition(109.5, 7)
  }
];
