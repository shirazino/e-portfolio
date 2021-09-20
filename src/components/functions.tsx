import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Fetch({ notionBlock }: any) {
  const [notion, setNotion] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `https://notion-api-teal.vercel.app/getblock/${notionBlock}`,
      headers: {},
    };

    axios(config)
      .then(function (response: any) {
        // console.log(response.data);
        setNotion(response.data);
        setLoading(false);
      })
      .catch(function (error: string) {
        // console.log(error);
        setNotion(error);
      });
  }, []);

  const notionValidation = () => {
    if (notion.status <= 400) {
      return <p>server error</p>;
    } else {
      var results = notion.results.map((res: any, index: number) => {
        return (
          <p key={index}>
            {res.paragraph.text[0].plain_text}
            <br />
          </p>
        );
      });
      return <div>{results}</div>;
    }
  };

  const fancySkeletonLoad = () => {
    return (
      <div>
        <div className="skeleton appearance"></div>
        <div className="skeleton appearance">
          <p className="skeletonTxt">fetching from Notion..</p>
        </div>
        <div className="skeleton appearance"></div>
      </div>
    );
  };

  return <div>{loading ? fancySkeletonLoad() : notionValidation()}</div>;
}

export function Mywork() {
  return (
    <div className="d-flex flex-nowrap mb-3">
      <a href="https://github.com/kashif-js" className="justLinks mx-auto">
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

export function ListProjects() {
  var works = {
    React: ["HTML Tutor", , "e-Portfolio", "Frontend SPA"],
    React_Native: ["Coffi-da reviews app"],

    Back_end: ["HTML Tutor backend", "Notion API", "Java Movies DB"],
    PHP: ["Games reviews PHP", "PHP Survey"],
    JavaScript: ["Local Mosque IOT", "Out Of The Loop game"],
  };

  var folder = [
    works.React,
    works.React_Native,
    works.Back_end,
    works.PHP,
    works.JavaScript,
  ];

  var arr1 = folder[0].map((x, index) => {
    return (
      <Link key={index} className="btns" to={"/work/" + x}>
        {x}
      </Link>
    );
  });
  var arr2 = folder[1].map((x, index) => {
    return (
      <Link key={index} className="btns" to={"/work/" + x}>
        {x}
      </Link>
    );
  });
  var arr3 = folder[2].map((x, index) => {
    return (
      <Link key={index} className="btns" to={"/work/" + x}>
        {x}
      </Link>
    );
  });
  var arr4 = folder[3].map((x, index) => {
    return (
      <Link key={index} className="btns" to={"/work/" + x}>
        {x}
      </Link>
    );
  });
  var arr5 = folder[4].map((x, index) => {
    return (
      <Link key={index} className="btns" to={"/work/" + x}>
        {x}
      </Link>
    );
  });

  return (
    <div className="coolBorders">
      <h1 className="h1Title">Work</h1>
      <p>
        Many of my projects are web development websites mostly done with React
        & Node JS, which involve appropriate industry standard techniques.
        <br />
        Here I have added my most successful projects from GitHub!
      </p>
      <h5>{Object.keys(works)[0]}</h5>
      <p className="d-flex flex-wrap flex-row">{arr1}</p>
      <h5>{Object.keys(works)[1]}</h5>
      <p className="d-flex flex-wrap flex-row">{arr2}</p>
      <h5>{Object.keys(works)[2]}</h5>
      <p className="d-flex flex-wrap flex-row">{arr3}</p>
      <h5>{Object.keys(works)[3]}</h5>
      <p className="d-flex flex-wrap flex-row">{arr4}</p>
      <h5>{Object.keys(works)[4]}</h5>
      <p className="d-flex flex-wrap flex-row">{arr5}</p>
      {/*


       */}
      <Mywork />
    </div>
  );
}

export function Skills(): any {
  var skillSet = {
    Web_development: [
      "JavaScript",
      "React JS",
      "TypeScript",
      "CSS & Animations",
    ],
    Languages: ["Java", "Python"],
    Back_end: [
      "Node JS",
      "Express JS",
      "PHP",
      "Java Jersey",
      "MySQL",
      "Mongo DB",
    ],
    Mobile: ["React Native", "Android (Java)"],
    Platforms: ["AWS", "Heroku", "GCP", "Vercel", "GitHub"],
  };
  var folder = [
    skillSet.Web_development,
    skillSet.Languages,
    skillSet.Back_end,
    skillSet.Mobile,
    skillSet.Platforms,
  ];

  var category = [];
  for (var x in skillSet) {
    category.push(x);
  }

  var arr1 = folder[0].map((x, index) => {
    return (
      <p className="skills" key={index}>
        {x}
      </p>
    );
  });

  var arr2 = folder[1].map((x, index) => {
    return (
      <p className="skills" key={index}>
        {x}
      </p>
    );
  });

  var arr3 = folder[2].map((x, index) => {
    return (
      <p className="skills" key={index}>
        {x}
      </p>
    );
  });

  var arr4 = folder[3].map((x, index) => {
    return (
      <p className="skills" key={index}>
        {x}
      </p>
    );
  });

  var arr5 = folder[4].map((x, index) => {
    return (
      <p className="skills" key={index}>
        {x}
      </p>
    );
  });

  return (
    <div className="coolBorders">
      <h1 className="mb-3 h1Title">Technical Skills</h1>
      <h5>{category[0]}</h5>
      <span className="d-flex flex-wrap flex-row">{arr1}</span>
      <h5>{category[1]}</h5>
      <span className="d-flex flex-wrap flex-row">{arr2}</span>
      <h5>{category[2]}</h5>
      <span className="d-flex flex-wrap flex-row">{arr3}</span>
      <h5>{category[3]}</h5>
      <span className="d-flex flex-wrap flex-row">{arr4}</span>
      <h5>{category[4]}</h5>
      <span className="d-flex flex-wrap flex-row">{arr5}</span>
    </div>
  );
}

export function Education() {
  var qualifications = [
    {
      title: "BSC Software Engineering",
      grade: "First Class Honours 🎓",
      uni: "Manchester Metropolitan University",
    },
    {
      title: "HNC Computing",
      grade: "Distinction",
      uni: "Salford City College",
    },
    {
      title: "L3 Computing & ICT",
      grade: "Pass",
      uni: "Salford City College",
    },
  ];

  var development = [
    "React with TypeScript",
    "CSS Animations",
    "Django x Python",
  ];
  var arr = qualifications.map((x, index) => {
    return (
      <p className="mx-4" key={index}>
        {x.title} - {x.grade} <br />{" "}
        <span className="uniFontcolor">{x.uni}</span>
      </p>
    );
  });
  var arr2 = development.map((y, index) => {
    return (
      <p className="mx-4" key={index}>
        {y}
      </p>
    );
  });
  return (
    <div className="coolBorders">
      <h1 className="mb-3 h1Title">Achievements</h1>
      {arr}
      <h3 className="h1Title">Personal learning</h3>
      {arr2}
    </div>
  );
}

export function CV() {
  return (
    <div className="coolBorders">
      <h1 className="h1Title">CV</h1>
      <p className="mx-4">
        CV can be downloaded at:
        <a
          href="https://drive.google.com/file/d/1GID2TcZFgdbpG5fvW7DThoaeaz0bR33r/view?usp=sharing"
          target="_blank"
          className="justLinks"
        >
          cv.pdf
        </a>
      </p>
    </div>
  );
}

export function Contact({ auto }: any) {
  return (
    <div className="mb-3 coolBorders">
      <h1 className="mb-3 h1Title">Contact</h1>
      <p className="mx-4 ">You can contact me at: </p>
      <div className={`d-flex flex-row ${auto} my-4 mx-3`}>
        <p>
          <a href="mailto:kashiftauseef@gmail.com" className="contactLinks">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
            </svg>
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/kashif-tauseef-42268a1a0/"
            className="contactLinks"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </p>
      </div>
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
