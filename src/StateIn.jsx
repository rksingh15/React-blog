import { useState } from "react";

 
function ChangeText() {
  const [text, setText] = useState("This is the original text.");

  function handleClick() {
    setText("Text has been changed!");
  }

  return (
    <div>
        <h1>Change Text Example</h1>
      <p id="text">{text}</p>
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}

export default ChangeText;