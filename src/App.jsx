import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusGeometry } from "three";

const Cube = ({ position, size, color }) => {
  const ref = useRef()
  useFrame((state, delta) => {
// delta = the difference in time of the current frame and the last frame
ref.current.rotation.x += delta
ref.current.rotation.y += delta *2
ref.current.position.z = Math.sin(state.clock.elapsedTime) *2
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
  const ref = useRef()
  useFrame((state, delta) => {
// delta = the difference in time of the current frame and the last frame
ref.current.rotation.x += delta
ref.current.rotation.y += delta *2
ref.current.position.z = Math.sin(state.clock.elapsedTime) *2
   });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry
       args={size}
      />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};
const Torus = ({ position, size, color }) => {
  const ref = useRef()
  useFrame((state, delta) => {
// delta = the difference in time of the current frame and the last frame
ref.current.rotation.x += delta
ref.current.rotation.y += delta *2
ref.current.position.z = Math.sin(state.clock.elapsedTime) *2
   });
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry
       args={size}
      />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const TorusKnot = ({ position, size, color }) => {
  const ref = useRef()
  useFrame((state, delta) => {
// delta = the difference in time of the current frame and the last frame
// ref.current.rotation.x += delta
// ref.current.rotation.y += delta *2
// ref.current.position.z = Math.sin(state.clock.elapsedTime) *2
   });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry
       args={size}
      />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};


function App() {
  return (
    <Canvas >
      <directionalLight position={[0, 0, 2]} />
      <ambientLight intensity={0.5} />
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"blue"} size={[2, 2, 4]} />
        <Cube position={[-1, 0, 0]} color={"green"} size={[2, 2, 4]} />
        <Cube position={[-1, 2, 0]} color={"purple"} size={[2, 2, 4]} />
        <Cube position={[1, 2, 0]} color={"gray"} size={[2, 2, 4]} />
      </group> */}
        <Sphare position={[2, 0, 0]} color={"orange"} size={[1, 1, 1]} />
        <TorusKnot position={[-2, 0, 0]} color={"orange"} size={[0.8, .2, 700,50]} />
    </Canvas>
  );
}

export default App;
