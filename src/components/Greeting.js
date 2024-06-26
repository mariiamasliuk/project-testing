import { useState } from "react";
import Output from "./Output";
import React from "react";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(!changeText);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changeText && <Output>It's good</Output>}
      {changeText && <Output>It's a good day</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
