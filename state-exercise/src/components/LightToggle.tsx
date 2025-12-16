//import { useState } from "react";
import { useEffect } from "react";

type Props = {
  isLightsOn: boolean;
  setIsLightsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

function LightToggle({ isLightsOn, setIsLightsOn }: Props) {
  //const [isLightsOn] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.backgroundColor = isLightsOn ? "white" : "black";
    document.body.style.color = isLightsOn ? "black" : "white";
  }, [isLightsOn]);

  return (
    <button onClick={() => setIsLightsOn((prev) => !prev)}>
      {isLightsOn ? "Turn Off" : "Turn On"}
    </button>
  );
}

export default LightToggle;
