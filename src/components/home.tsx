import { useState, useEffect } from "react";
import { Mywork, ListProjects, Skills } from "./functions";

export function Homepage(): any {
  const [fontSize, setFontSize] = useState({});
  const [windowSize, setWindowSize] = useState({});
  var style = {
    marginTop: window.innerHeight / 2 - 50,
    marginBottom: window.innerHeight / 2,
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerHeight < 820 && window.innerWidth < 420) {
        setWindowSize({ width: 320 });
        setFontSize({ fontSize: 30 });
      } else {
        setWindowSize({ width: 700 });
        setFontSize({ fontSize: 50 });
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    // return () => window.removeEventListener("resize", handleResize);
  }, [window.innerHeight, window.innerWidth]);

  return (
    <div>
      <div
        style={style}
        className="d-flex flex-column align-items-center intro"
      >
        {/* style={adjustName} */}
        <h1 className="name" style={fontSize}>
          Hi, I'm Kashif Tauseef.
        </h1>
        <p>Full Stack Software Engineer </p>
        <p>who can build beautiful Node & React apps and much more!</p>
        <p>Scroll down to check out my work</p>
        <svg
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
      <div className="d-flex flex-row justify-content-around">
        <section id="sectionL" style={windowSize}>
          <h1 className="">My work</h1>
          <p id="work">
            A lot of my project involve work done with React and React Native
            built with Node JS.
            <br />
            Here I have linked my most successful projects from GitHub.
          </p>
          <ListProjects></ListProjects>
          <div className="d-flex justify-content-center">
            <Mywork></Mywork>
          </div>
          <h1>My skills</h1>
          <Skills />
          <h1>Contact</h1>
          <p className="mb-5">You can contact me at: </p>
          <div className="d-flex flex-row my-4">
            <p className="mx-4">
              <a href="mailto:kashiftauseef@gmail.com">Mail</a>
            </p>
            <p className="mx-4">
              <a href="https://www.linkedin.com/in/kashif-tauseef-42268a1a0/">
                LinkedIn
              </a>
            </p>
          </div>
        </section>
        {/* <section id="sectionR" className="">
          <p>section right</p>
        </section> */}
      </div>
    </div>
  );
}
