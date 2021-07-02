import { Mywork, ListProjects, Skills } from "./functions";

export function Homepage() {
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h1 className="intro">- Kashif Tauseef - </h1>
        <p className="intro">
          Full stack software engineer who can build beautiful React & React
          Native apps
        </p>
        {/* <GlitchEffect text="Kashif Tauseef" /> */}
      </div>
      <div className="d-flex flex-row justify-content-around">
        <section id="sectionL" className="">
          <h1 className="">- My work -</h1>
          <p id="work">
            A lot of my project involve work done with React and React Native
            built with Node JS.
            <br />
            Here I have linked my most successful projects from GitHub.
          </p>
          <ListProjects></ListProjects>
          <div className="d-flex flex-row justify-content-center mb-4">
            <Mywork></Mywork>
          </div>
          <h1>- skills -</h1>
          <Skills />
          <h1>- contact -</h1>
          <p>Contact me at</p>
          <div className="d-flex flex-row mt-4">
            <ul className="mx-4">
              <a href="">Mail</a>{" "}
            </ul>
            <ul className="mx-4">
              <a href="">LinkedIn</a>{" "}
            </ul>
          </div>
        </section>
        <section id="sectionR" className="">
          <p>section right</p>
        </section>
      </div>
    </div>
  );
}
