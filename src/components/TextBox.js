import TypeWriterEffect from "react-typewriter-effect";
import { fontStyle } from "./styles";

export const TextBox = (props) => {

  if (!props.animationDidRun) {
    return (
      <div
        style={{
          margin: "10px 10px 0px 10px",
          textAlign: "left",
        }}
      >
        <TypeWriterEffect
          textStyle={{
            ...fontStyle,
          }}
          startDelay={500}
          cursorColor="#1e1e1e"
          text="Hi, this is Finn! "
          typeSpeed={30}
          hideCursorAfterText={true}
        />
        <p />
        <TypeWriterEffect
          textStyle={{
            ...fontStyle,
          }}
          startDelay={1500}
          cursorColor="#1e1e1e"
          text="I study Software Development in Copenhagen, Denmark &#127465;&#127472;, to become a Software Engineer 👨‍💻. "
          typeSpeed={30}
          hideCursorAfterText={true}
        />
        <p />
        <TypeWriterEffect
          textStyle={{
            ...fontStyle,
          }}
          startDelay={5500}
          cursorColor="#1e1e1e"
          text="You can reach out to me via LinkedIn or send me an email: "
          typeSpeed={30}
          hideCursorAfterText={true}
        />
        <p />
        <br />
        <a
          href="https://www.linkedin.com/in/finnbaumann/"
          target="_blank"
          style={{ ...fontStyle, textDecoration: "none" }}
        >
          <TypeWriterEffect
            textStyle={{
              ...fontStyle,
              color: "blue",

              backgroundColor: "white",
              display: "table-cell",
              textDecoration: "none",
            }}
            startDelay={7500}
            cursorColor="#1e1e1e"
            text=" LinkedIn "
            typeSpeed={30}
            hideCursorAfterText={true}
          />
        </a>
        <p />
        <a
          href="mailto:hello@finnbaumann.com"
          style={{ textDecoration: "none", color: "white" }}
        >
          <TypeWriterEffect
            textStyle={{
              ...fontStyle,
            }}
            startDelay={8100}
            cursorColor="#1e1e1e"
            text="&#128236; hello@finnbaumann.com "
            typeSpeed={30}
            hideCursorAfterText={true}
          />
        </a>
        <p />
        <br />
        <TypeWriterEffect
          textStyle={{
            ...fontStyle,
          }}
          startDelay={9500}
          cursorColor="#1e1e1e"
          text="Have a great day! &#9728;&#65039;"
          typeSpeed={30}
          hideCursorAfterText={true}
        />
      </div>
    );
  } else {
    return (
      <div
        style={{
          margin: "10px 10px 0px 10px",
          textAlign: "left",
          ...fontStyle,
        }}
      >
        Hi, this is Finn!
        <p />I study Software Development in Copenhagen, Denmark
        &#127465;&#127472;, to become a Software Engineer 👨‍💻.
        <p />
        You can reach out to me via LinkedIn or send me an email:
        <p />
        <br />
        <a
          href="https://www.linkedin.com/in/finnbaumann/"
          target="_blank"
          style={{
            ...fontStyle,
            textDecoration: "none",
            backgroundColor: "white",
            display: "table-cell",
            textDecoration: "none",
            color: "blue",
          }}
        >
          LinkedIn
        </a>
        <p />
        <a
          href="mailto:hello@finnbaumann.com"
          style={{ textDecoration: "none", color: "white" }}
        >
          &#128236; hello@finnbaumann.com
        </a>
        <p />
        <br />
        Have a great day! &#9728;&#65039;
      </div>
    );
  }
};
