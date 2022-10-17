import { Circle } from "./Circle";
import { fontStyle } from "./styles";

export const Header = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: 25,
        backgroundColor: "#373737",
        borderRadius: "7px 7px 0px 0px",
        display: "flex",
        justifyContent: "space-between",
        // alignItems: "center",
        // justifyItems: "center",
      }}
    >
      <div
        style={{
          padding: 7,
          display: "flex",
          gap: 5,
          alignSelf: "center",
          justifySelf: "flex-start",
          width: "20%",
        }}
      >
        <Circle color="#ed6a5e" setWindowState={props.setWindowState} />
        <Circle color="#f5bf4f" setWindowState={props.setWindowState} handleMinimize={props.handleMinimize} />
        <Circle color="#61c554" resizeWindow={props.resizeWindow} />
      </div>
      <div
        style={{
          width: "60%",
          alignSelf: "center",
          justifySelf: "center",
          ...fontStyle,
          overflowX: "visible",
        }}
      >
        bash -- {props.windowWidth} x {props.windowHeight}
      </div>
      <div style={{ width: "20%" }}></div>
    </div>
  );
};
