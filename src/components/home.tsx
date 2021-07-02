import { Mywork, ListProjects, Skills } from "./functions";

export function Homepage(): any {
  var w = window.innerWidth;
  var h = window.innerHeight;
  if (h < 820 && w < 420) {
    var width = { width: 320 };
    var style = {
      marginTop: h / 2 - 50,
      marginBottom: h / 2,
      // width: width.width,
    };
    // var btnSize = {
    //   padding: "10px",
    //   margin: "10px",
    // };
  }
  return (
    <div>
      <div
        id="main"
        style={style}
        className="d-flex flex-column align-items-center intro"
      >
        <h1 className="">Hi, I'm Kashif</h1>
        <p className="">
          Full stack software engineer who can build beautiful Node and React
          apps and much more! <p>Scroll down to check out my work</p>
        </p>
        {/* <GlitchEffect text="Kashif Tauseef" /> */}
      </div>
      <div className="d-flex flex-row justify-content-around">
        <section id="sectionL" style={width}>
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
          <p>You can contact me at: </p>
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
