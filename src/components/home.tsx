import { useState, useEffect } from "react";
import {
  Mywork,
  ListProjects,
  Skills,
  Education,
  CV,
  Contact,
  Fetch,
} from "./functions";
import { saveData } from "./notion";
import $ from "jquery";
import ThemeSelector, { DynamicImg } from "./theme";
import arrowW from "../media/arrowW.png";
import arrowB from "../media/arrowB.png";

export function Homepage(): any {
  const [fontSize, setFontSize] = useState({});
  const [windowSize, setWindowSize] = useState({});
  const [justify, setJustify] = useState("");
  var style = {
    marginTop: window.innerHeight / 2 - 100,
    marginBottom: window.innerHeight / 2 - 100,
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 420) {
        // setWindowSize({ width: 320 });
        setFontSize({ fontSize: 30 });
        setJustify("justify-content-evenly");
        $("#svg").hide();
        $("#arrowD").show();
      } else {
        // setWindowSize({ width: 700 });
        setFontSize({ fontSize: 40 });
        setJustify("justify-content-start");
        $("#arrowD").hide();
        $("#svg").show();
      }
    }

    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  useEffect(function persistForm() {
    if (sessionStorage.getItem("accessed") == undefined) {
      sessionStorage.setItem("accessed", `day - ${new Date().getDate()}`);
      saveData();
    }
  });

  $("#svg").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#sectionL").offset().top,
      },
      500
    );
  });

  return (
    <div>
      <ThemeSelector visibility={true} />
      <div
        style={style}
        className="d-flex flex-column align-items-center intro"
      >
        <h1 className="name mb-4" style={fontSize}>
          Hi, I'm Kashif Tauseef.
        </h1>
        <div className="mx-4">
          <Fetch notionBlock="914037e1fa8d497c8b153c972eed593e" />
          {/* <img id="arrowD" src={arrowB} alt="arrowDown" /> */}
          <div id="arrowD">
            <DynamicImg />
          </div>

          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-arrow-down-circle arrow"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <section id="sectionL" style={windowSize}>
          <ListProjects />

          <Skills />

          <Education />

          <CV />

          <Contact auto={justify} />
        </section>
      </div>
    </div>
  );
}
