import ClickCounter from "./components/ClickCounter";
import LightToggle from "./components/LightToggle";
import LottoNumbers from "./components/LottoNumbers";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isLightsOn, setIsLightsOn] = useState(false);

  return (
    <>
      <LightToggle isLightsOn={isLightsOn} setIsLightsOn={setIsLightsOn} />
      <LottoNumbers />
      <ClickCounter count={count} setCount={setCount} />
      <div>Count : {count}</div>
    </>
  );
}

export default App;
