import { css } from "uebersicht";
const task = require("./data.json").task;
export const refreshFrequency = 5000;

const containerClassName = css({
    color: "rgba(255, 255, 255)",
    fontFamily: "JetBrains Mono",
    fontSize: "30px",
    textAlign: "center",
    top: "1637px",
    left: "420px",
    width: "2160px",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  });

  export const render = () => {
  
    return (
      <div className={containerClassName}>
          <b>Current Task:&nbsp;</b> {task}
      </div>
    );
  };