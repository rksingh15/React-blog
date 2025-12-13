import { useState } from "react";

function Toggle1() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn); // toggle logic
  };

  return (
    <div>
      {isOn ? <h1>ON</h1> : <h1>OFF</h1>}

      <button onClick={handleClick}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default Toggle1;
