import { Header } from "./Header";
import { useRef, useState, useEffect } from "react";
import { fontStyle } from "./styles";
import { TextBox } from "./TextBox";

export default Window = (props) => {
  const ref = useRef();
  const [displayHeight, setDisplayHeight] = useState(0);
  const [displayWidth, setDisplayWidth] = useState(0);

  const updateHeader = () => {
    setDisplayHeight(ref.current.clientHeight);
    setDisplayWidth(ref.current.clientWidth);
  };

  useEffect(() => {
    updateHeader();
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("resize", updateHeader);
    };
  });

  const resizeWindow = () => {
    props.resizeWindow();
    updateHeader();
  };

  return (
    <div
      style={{
        flexShrink: 1,
        width: props.width,
        height: props.height,
        backgroundColor: "#1e1e1e",
        color: "white",
        margin: "10px",
        borderRadius: 7,
        boxShadow: "10px 10px 50px grey",
        ...fontStyle,
      }}
      ref={ref}
    >
      <Header
        windowWidth={displayWidth}
        windowHeight={displayHeight}
        setWindowState={props.setWindowState}
        handleMinimize={props.handleMinimize}
        resizeWindow={resizeWindow}
      />
      <TextBox
        animationDidRun={props.animationDidRun}
        setAnimationDidRun={props.setAnimationDidRun}
      />
    </div>
  );
};
