import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusGeometry } from "three";
import {
  MeshWobbleMaterial,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { useControls } from "leva";

const Cube = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    // delta = the difference in time of the current frame and the last frame
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry
      //  args={size}
      />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
const Sphare = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    // delta = the difference in time of the current frame and the last frame
    const speed = isHovered ? 2 : 0.2;
    ref.current.rotation.y += delta * speed;
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) *2
  });
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial
        color={isHovered ? "orange" : "lightblue"}
        wireframe
      />
    </mesh>
  );
};
const Torus = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    // delta = the difference in time of the current frame and the last frame
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const TorusKnot = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    // delta = the difference in time of the current frame and the last frame
    // ref.current.rotation.x += delta
    // ref.current.rotation.y += delta *2
    // ref.current.position.z = Math.sin(state.clock.elapsedTime) *2
  });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      {/* <meshStandardMaterial  /> */}

      <MeshWobbleMaterial color={color} factor={1} speed={2} />
    </mesh>
  );
};
const Scene = () => {
  const directionalLightRef = useRef();
  // const { lightColor, lightIntensity } = useControls({
  //   lightColor: "white",
  // });
  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");
  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        ref={directionalLightRef}
        // color={lightColor}
      />
      <ambientLight intensity={0.5} />
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"blue"} size={[2, 2, 4]} />
        <Cube position={[-1, 0, 0]} color={"green"} size={[2, 2, 4]} />
        <Cube position={[-1, 2, 0]} color={"purple"} size={[2, 2, 4]} />
        <Cube position={[1, 2, 0]} color={"gray"} size={[2, 2, 4]} />
      </group> */}
      {/* <Sphare position={[0, 0, 0]} color={"orange"} size={[1, 30, 30]} /> */}
      <TorusKnot
        position={[0, 0, 0]}
        color={"orange"}
        size={[1, 0.2, 700, 50]}
      />

      <OrbitControls enableZoom={false} />
    </>
  );
};

function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}
export default App;
