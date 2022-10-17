export const DockIcon = (props) => (
  <div
    style={{
      alignSelf: "center",
      justifySelf: "flex-end",
      marginTop: "auto",
      marginBottom: 10,
    }}
  >
    <div
      style={{
        backgroundColor: "#1e1e1e",
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 2,
        width: 30,
        height: 30,
        borderRadius: 3,
        color: "white",
        textAlign: "start",
        padding: "2px 0px 0px 5px",
        boxShadow: "0px 0px 30px 1px grey",
        marginBottom: 5,
        fontSize: "7pt",
      }}
      onClick = {props.handleMinimize}
    >
      {">_"}
    </div>
    <div
      style={{
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: "black",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></div>
  </div>
);
