import type { RoomId } from "../../utils/types/tourTypes";

type MapRoom = {
  id: RoomId;
  label: string;
  x: number;
  y: number;
};

type MiniMapProps = {
  currentRoom: RoomId;
  viewerAngle: number;
  onRoomClick: (roomId: RoomId) => void;
};

const mapRooms: MapRoom[] = [
  { id: "room1", label: "1", x: 40, y: 160 },
  { id: "room2", label: "2", x: 90, y: 160 },
  { id: "room3", label: "3", x: 140, y: 150 },
  { id: "room4", label: "4", x: 190, y: 135 },
  { id: "room5", label: "5", x: 240, y: 135 },
  { id: "room6", label: "6", x: 290, y: 120 },
  { id: "room7", label: "7", x: 340, y: 120 },
  { id: "room8", label: "8", x: 390, y: 140 },
  { id: "room9", label: "9", x: 440, y: 155 },
  { id: "room10", label: "10", x: 490, y: 155 }
];

export default function MiniMap({
  currentRoom,
  viewerAngle,
  onRoomClick
}: MiniMapProps) {
  const currentMapRoom = mapRooms.find((room) => room.id === currentRoom);

  return (
    <div
      style={{
        position: "fixed",
        top: 16,
        left: 16,
        zIndex: 1000,
        width: 540,
        height: 220,
        background: "rgba(0, 0, 0, 0.55)",
        border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: 16,
        backdropFilter: "blur(10px)",
        padding: 12
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 540 220">
        <polyline
          points={mapRooms.map((room) => `${room.x},${room.y}`).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {mapRooms.map((room) => {
          const isActive = room.id === currentRoom;

          return (
            <g
              key={room.id}
              onClick={() => onRoomClick(room.id)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={room.x}
                cy={room.y}
                r={isActive ? 13 : 10}
                fill={isActive ? "#00ff88" : "#ffffff"}
                stroke={isActive ? "#ffffff" : "rgba(255,255,255,0.7)"}
                strokeWidth="2"
              />
              <text
                x={room.x}
                y={room.y + 4}
                textAnchor="middle"
                fontSize="11"
                fontWeight="bold"
                fill={isActive ? "#000000" : "#111111"}
              >
                {room.label}
              </text>
            </g>
          );
        })}

        {currentMapRoom && (
          <g
            transform={`translate(${currentMapRoom.x}, ${currentMapRoom.y}) rotate(${viewerAngle})`}
          >
            <path
              d="M 0 0 L -22 -42 Q 0 -55 22 -42 Z"
              fill="rgba(0,255,136,0.25)"
              stroke="rgba(0,255,136,0.8)"
              strokeWidth="2"
            />
            <circle cx="0" cy="0" r="6" fill="#00ff88" />
          </g>
        )}
      </svg>
    </div>
  );
}
