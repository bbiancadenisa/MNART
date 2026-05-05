import "aframe";

export default function TourPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <a-scene embedded vr-mode-ui="enabled: true">
        <a-assets>
          <img id="room1" src="/panoramas/1.jpg" />
        </a-assets>

        <a-sky src="#room1" rotation="0 -90 0"></a-sky>

        <a-text
          value="ArtView MNART Room 1"
          position="-1.5 2 -3"
          color="white"
          scale="1.5 1.5 1.5"
        ></a-text>

        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-scene>
    </div>
  );
}
