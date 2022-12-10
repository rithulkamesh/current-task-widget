import { css } from "uebersicht";
const task = require("./data.json").task;
export const refreshFrequency = 5000;

const containerClassName = css({
  color: "rgba(255, 255, 255)",
  fontFamily: "Hack Nerd Font Mono",
  fontSize: "25px",
  textAlign: "center",
  width: "100vw",
  height: "100vh",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
});

const taskClassName = css({
  color: "rgba(255, 255, 255)",
});

export const render = () => {
  return (
    <div className={containerClassName}>
      <div className={taskClassName}>
        <b>Current Task:&nbsp;</b> {task}
      </div>
    </div>
  );
};
