const museumMap =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837348/map_pxq3pr.png";
import { rooms } from "../../utils/constants/rooms";
import type { RoomId } from "../../utils/types/tourTypes";

type MiniMapProps = {
  currentRoom: RoomId;
  viewerAngle: number;
  onRoomClick: (roomId: RoomId) => void;
};

export default function MiniMap({
  currentRoom,
  viewerAngle,
  onRoomClick
}: MiniMapProps) {
  const currentMap = rooms[currentRoom].map;

  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        left: 16,
        zIndex: 1000,
        width: 500,
        height: 360,
        background: "rgba(0, 0, 0, 0.55)",
        border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: 16,
        backdropFilter: "blur(10px)",
        padding: 12
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        <img
          src={museumMap}
          alt="Museum map"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            opacity: 0.95
          }}
        />

        {Object.entries(rooms).map(([roomId, room]) => {
          const isActive = roomId === currentRoom;

          return (
            <button
              key={roomId}
              onClick={() => onRoomClick(roomId as RoomId)}
              title={roomId}
              style={{
                position: "absolute",
                left: room.map.x,
                top: room.map.y,
                transform: "translate(-50%, -50%)",
                width: isActive ? 18 : 14,
                height: isActive ? 18 : 14,
                borderRadius: "50%",
                border: "2px solid white",
                background: isActive ? "#00ff88" : "rgba(255,255,255,0.85)",
                boxShadow: isActive
                  ? "0 0 14px rgba(0,255,136,0.9)"
                  : "0 0 6px rgba(0,0,0,0.45)",
                cursor: "pointer",
                zIndex: 3
              }}
            />
          );
        })}

        <div
          style={{
            position: "absolute",
            left: currentMap.x,
            top: currentMap.y,
            width: 90,
            height: 90,
            transform: `translate(-50%, -50%) rotate(${
              viewerAngle + currentMap.northOffset
            }deg)`,
            transformOrigin: "center center",
            pointerEvents: "none",
            zIndex: 4
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 0,
              height: 0,
              borderLeft: "32px solid transparent",
              borderRight: "32px solid transparent",
              borderBottom: "90px solid rgba(0,255,136,0.22)",
              transform: "translate(-50%, 0)",
              filter: "drop-shadow(0 0 10px rgba(0,255,136,0.7))"
            }}
          />

          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#00ff88",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 16px rgba(0,255,136,1)"
            }}
          />
        </div>
      </div>
    </div>
  );
}
