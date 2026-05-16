import * as THREE from "three";

export const sphericalPosition = (yaw: number, pitch: number, radius = 5) => {
  const yawRad = THREE.MathUtils.degToRad(yaw);
  const pitchRad = THREE.MathUtils.degToRad(pitch);

  const x = radius * Math.sin(yawRad) * Math.cos(pitchRad);
  const y = radius * Math.sin(pitchRad);
  const z = -radius * Math.cos(yawRad) * Math.cos(pitchRad);

  return new THREE.Vector3(x, y, z);
};
