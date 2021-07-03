export function Mywork() {
  return (
    <div className="d-flex flex-nowrap mb-3">
      <a href="https://github.com/kashif-js">
        See more on GitHub
        <img
          className="ms-2"
          src="http://pngimg.com/uploads/github/github_PNG40.png"
          height="30px"
          width="30px"
          alt="git logo"
        />
      </a>
    </div>
  );
}

export function ListProjects(): any {
  var first: string[] = [
    "Notion API",
    "HTML teaching platform",
    "Coffee rating App",
    "Node js backend (HTML teaching website)",
    "Local Mosque Alexa (automation IoT)",
    "Odd One Out game",
    "e-Portfolio",
  ];

  var arr = first.map((x, index) => {
    return (
      <button key={index} className="btns" onClick={() => btnClick(x)}>
        {x}
      </button>
    );
  });
  return <p className="d-flex flex-wrap flex-row">{arr}</p>;
}

function btnClick(x: string) {
  window.open(`${process.env.PUBLIC_URL}/work/${x}`, "_self");
}

export function Skills(): any {
  var skills: string[] = [
    "JavaScript",
    "React",
    "React Native",
    "Node js",
    "Java",
    "PHP",
    "TypeScript",
    "MySQL",
    "Mongo DB",
    "front-end dev",
    "back-end dev",
    "jQuery",
    "AWS",
    "Google Cloud platform",
    "Heroku",
    "Iot",
    "CLI",
    "Serverless computing",
  ];

  var map = skills.map((y, index) => {
    return (
      <p className="mx-4" key={index}>
        {y}
      </p>
    );
  });

  return <p className="d-flex flex-wrap flex-row">{map}</p>;
}

export function GlitchEffect(props: any) {
  return (
    <div className="containar">
      <h1 className="main-text">
        <em id="intro">{props.text}</em>
      </h1>
      <div className="color-div1"></div>
      <div className="color-div2"></div>
      <div className="color-div3"></div>
      <div className="color-div4"></div>
      <div className="color-div5"></div>
      <div className="color-div6"></div>
      <div className="color-div7"></div>
      <div className="color-div8"></div>
    </div>
  );
}

export function Navbar(): any {
  return (
    <nav className="navbar nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>
      </div>
    </nav>
  );
}
