import "./App.css";
import Window from "./components/Window.js";
import { DockIcon } from "./components/DockIcon";
import { useState } from "react";

const colors = [
  "#f4fcc9",
  "#fcf4c9",
  "#fcdec9",
  "#d1fcc9",
  "#c9fcdb",
  "#c9f5fc",
  "#c9d4fc",
  "#fcc9ca",
];

const thiscolor = colors[Math.floor(Math.random() * colors.length)];

function App() {
  var oldHeight = 370;
  var oldWidth = 635;

  const [animationDidRun, setAnimationDidRun] = useState(false);
  const [height, setHeight] = useState(oldHeight);
  const [width, setWidth] = useState(oldWidth);

  const [windowState, setWindowState] = useState(true);
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);

  const resizeWindow = () => {
    if (maximized) {
      setHeight(oldHeight);
      setWidth(oldWidth);
      setMaximized(false);
    } else {
      oldHeight = height;
      oldWidth = width;
      setMaximized(true);
      setHeight("100%");
      setWidth("100%");
    }
  };

  const handleMinimize = () => {
    if (minimized) {
      setMinimized(false);
      setWindowState(true);
      setAnimationDidRun(true)
    } else {
      setWindowState(false);
      setMinimized(true);
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: thiscolor,
      }}
    >
      {windowState && (
        <Window
          setWindowState={setWindowState}
          handleMinimize={handleMinimize}
          minimized={minimized}
          setHeight={setHeight}
          setWidth={setWidth}
          height={height}
          width={width}
          resizeWindow={resizeWindow}
          animationDidRun={animationDidRun}
          setAnimationDidRun={setAnimationDidRun}
        />
      )}
      {minimized && <DockIcon handleMinimize={handleMinimize} />}
    </div>
  );
}

export default App;
