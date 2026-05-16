const museumMap =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837348/map_pxq3pr.png";
import { rooms } from "../../utils/constants/rooms";
import type { RoomId } from "../../utils/types/tourTypes";
import "./MiniMap.css";

type MiniMapProps = {
  currentRoom: RoomId;
  viewerAngle: number;
  onRoomClick: (roomId: RoomId) => void;
};

const MiniMap = ({ currentRoom, viewerAngle, onRoomClick }: MiniMapProps) => {
  const currentMap = rooms[currentRoom].map;

  return (
    <div className="mini-map">
      <div className="mini-map-content">
        <img className="mini-map-image" src={museumMap} alt="Museum map" />

        {Object.entries(rooms).map(([roomId, room]) => {
          const isActive = roomId === currentRoom;

          return (
            <button
              key={roomId}
              onClick={() => onRoomClick(roomId as RoomId)}
              title={roomId}
              className={`mini-map-room-button ${
                isActive ? "mini-map-room-button-active" : ""
              }`}
              style={{
                left: room.map.x,
                top: room.map.y
              }}
            />
          );
        })}

        <div
          className="mini-map-viewer"
          style={{
            left: currentMap.x,
            top: currentMap.y,
            transform: `translate(-50%, -50%) rotate(${
              viewerAngle + currentMap.northOffset
            }deg)`
          }}
        >
          <div className="mini-map-view-cone" />
          <div className="mini-map-viewer-dot" />
        </div>
      </div>
    </div>
  );
};

export default MiniMap;
