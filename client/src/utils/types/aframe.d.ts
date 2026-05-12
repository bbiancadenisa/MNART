import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "aframe" {
  const AFRAME: unknown;
  export default AFRAME;
}

type AFrameElementProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  [key: string]: unknown;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "a-scene": AFrameElementProps;
      "a-assets": AFrameElementProps;
      "a-sky": AFrameElementProps;
      "a-text": AFrameElementProps;
      "a-camera": AFrameElementProps;
      "a-cursor": AFrameElementProps;
      "a-entity": AFrameElementProps;
      "a-plane": AFrameElementProps;
      "a-image": AFrameElementProps;
    }
  }
}
