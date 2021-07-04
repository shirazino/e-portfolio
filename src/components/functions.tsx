import { Link } from "react-router-dom";

export function Mywork() {
  return (
    <div className="d-flex flex-nowrap mb-3">
      <a href="https://github.com/kashif-js">
        See more on GitHub
        <img
          className="ms-2"
          src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-1.png&r=255&g=255&b=255"
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
    "HTML Tutor",
    "HTML Tutor backend",
    "Coffi-da reviews app",
    "e-Portfolio",
    "MVC Survey PHP",
    "The PHP-focused Assessment",
    "Java Server Pages",
    "Java Aircraft Passenger",
    "Android Programming",
    "Notion API",
    "Local Mosque IOT",

    "Out Of The Loop game",
  ];

  var arr = first.map((x, index) => {
    return (
      <Link key={index} className="btns" to={"/work/" + x}>
        {x}
      </Link>
    );
  });
  return <p className="d-flex flex-wrap flex-row">{arr}</p>;
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
    "IOT",
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

  return <div className="d-flex flex-wrap flex-row">{map}</div>;
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
