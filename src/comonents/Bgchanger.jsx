// import { useState } from "react";
import "./Bgchanger.css";
const Bgchanger = () => {
  // const [color, setColor] = useState("white");

  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="container">
      <div
        onClick={() => changeBackgroundColor("white")}
        className="white"
      ></div>
      <div onClick={() => changeBackgroundColor("blue")} className="blue"></div>
      <div
        onClick={() => changeBackgroundColor("black")}
        className="black"
      ></div>
      <div
        onClick={() => changeBackgroundColor("green")}
        className="green"
      ></div>
      <div onClick={() => changeBackgroundColor("red")} className="red"></div>
      <div
        onClick={() => changeBackgroundColor("yellow")}
        className="yellow"
      ></div>
      <div onClick={() => changeBackgroundColor("pink")} className="pink"></div>
      <div
        onClick={() => changeBackgroundColor("brown")}
        className="brown"
      ></div>
    </div>
  );
};

export default Bgchanger;
