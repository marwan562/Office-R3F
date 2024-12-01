import { ScrollControls } from "@react-three/drei";
import Office from "./Office";
import Scene from "./Scene";
import { Overlay } from "./Overlay";

function App() {
  return (
    <>
      <Scene>
        <ScrollControls pages={3} damping={0.5}>
        <Overlay/>
          <Office />
        </ScrollControls>
      </Scene>
    </>
  );
}

export default App;
