export const Circle = (props) => {
  const size = 12;

  return (
    <div
      onClick={() =>
        props.handleMinimize
          ? props.handleMinimize()
          : props.setWindowState
          ? props.setWindowState()
          : props.resizeWindow
          ? props.resizeWindow()
          : null
      }
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: props.color,
      }}
    ></div>
  );
};
