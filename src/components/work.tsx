import React from "react";
import { RouteComponentProps } from "react-router";
import { Redirect } from "react-router-dom";

interface Props extends RouteComponentProps<{ name: string }> {}

export const Work: React.FC<Props> = ({ match }) => {
  return (
    <div id="main">
      <h1 className="workTitle">{match.params.name}</h1>
      {CheckParams(match.params.name)}
    </div>
  );
};

function CheckParams(props: any) {
  switch (props) {
    case "HTML Tutor":
      return <HTMLApp />;
    case "Notion API":
      return <NotionAPI />;
    case "Coffi-da reviews app":
      return <CoffeeApp />;
    case "HTML Tutor backend":
      return <HTMLBackend />;
    case "Local Mosque IOT":
      return <LocalMosque />;
    case "Out Of The Loop game":
      return <OddOneOutGame />;
    case "e-Portfolio":
      return <EPortfolio />;
    default:
      return <Redirect to="/notfound" />;
  }
}

function HTMLApp(): any {
  var HTML = [
    "https://i.imgur.com/ik9pKJz.png",
    "https://i.imgur.com/ImnERLp.png",
    "https://i.imgur.com/oAYWUHq.png",
    "https://i.imgur.com/zbewrQ0.png",
    "https://i.imgur.com/2VaOAWV.png",
  ];

  var width = 780;
  var height = 844;

  return (
    <div className="d-flex flex-nowrap flex-row mx-1">
      <img
        id="immagine"
        className="mx-4"
        src={HTML[0]}
        alt="work images"
        width={width}
        height={height}
      />
      <img
        className="mx-4"
        src={HTML[1]}
        alt="work images"
        width={width}
        height={height}
      />
      <img
        className="mx-4"
        src={HTML[2]}
        alt="work images"
        width={width}
        height={height}
      />
      <img
        className="mx-4"
        src={HTML[3]}
        alt="work images"
        width={width}
        height={height}
      />
      <img
        className="mx-4"
        src={HTML[4]}
        alt="work images"
        width={width}
        height={height}
      />
    </div>
  );
}

function HTMLBackend() {
  return (
    <div className="mx-4">
      <p>
        This is the back-end for the HTML teaching and learning platform. <br />{" "}
        Built with Node JS{" "}
      </p>
      <ul>
        <li>Node JS</li>
        <li>Express JS</li>
        <li>MongoDB</li>
        <li>Mongoose Object Modeling</li>
        <li>CORS</li>
        <li>Body Parser</li>
        <li>Crypto hashing</li>
        <li>Nodemon</li>
        <li>Heroku</li>
      </ul>
      <a
        href="https://github.com/kashif-js/nodejs-server"
        className="justLinks"
      >
        Browse code
      </a>
    </div>
  );
}

function CoffeeApp() {
  var Coffee = [
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/home.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/profile.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/reviews.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/location.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/login.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/settings.png",
  ];

  var width = 780;
  var height = 844;

  return (
    <div className="d-flex flex-nowrap flex-row">
      <img
        className="mx-4"
        src={Coffee[0]}
        alt="coffee app screenshot"
        width={width}
        height={height}
      />
      <img
        className="mx-4"
        src={Coffee[1]}
        alt="coffee app screenshot"
        width={width}
        height={height}
      />
      <img
        className="mx-4"
        src={Coffee[2]}
        alt="coffee app screenshot"
        width={width}
        height={height}
      />
      <img
        className="mx-4"
        src={Coffee[3]}
        alt="coffee app screenshot"
        width={width}
        height={height}
      />
      <img
        className="mx-4"
        src={Coffee[4]}
        alt="coffee app screenshot"
        width={width}
        height={height}
      />
      <img
        className="mx-4"
        src={Coffee[5]}
        alt="coffee app screenshot"
        width={width}
        height={height}
      />
    </div>
  );
}

function OddOneOutGame() {
  var ODD = [
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/1.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/2.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/3.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/4.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/5.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/vote.png",
  ];

  var width = 780;
  var height = 844;

  return (
    <div className="d-flex flex-nowrap flex-row">
      <img
        className="mx-2"
        src={ODD[0]}
        alt="Odd Game screenshots"
        //height={height}
        //width={width}
      />
      <img
        className="mx-2"
        src={ODD[1]}
        alt="Odd Game screenshots"
        //height={height}
        //width={width}
      />
      <img
        className="mx-2"
        src={ODD[2]}
        alt="Odd Game screenshots"
        //height={height}
        //width={width}
      />
      <img
        className="mx-2"
        src={ODD[3]}
        alt="Odd Game screenshots"
        //height={height}
        //width={width}
      />
      <img
        className="mx-2"
        src={ODD[4]}
        alt="Odd Game screenshots"
        //height={height}
        //width={width}
      />
      <img
        className="mx-2"
        src={ODD[5]}
        alt="Odd Game screenshots"
        //height={height}
        //width={width}
      />
    </div>
  );
}

function EPortfolio() {
  return (
    <div className="mx-4">
      <p>This actual website was developed to showcase my work.</p>
      <p>Stack used:</p>
      <ul>
        <li>React</li>
        <li>Node JS</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Notion API</li>
        <li>Bootstrap5</li>
        <li>Git</li>
      </ul>
      <a className="justLinks" href="https://github.com/kashif-js/e-portfolio">
        Browse Code
      </a>
    </div>
  );
}

function NotionAPI() {
  return (
    <div className="mx-4">
      <p>
        Notion Api is often used in my projects to save data to my blocks that
        is coming from some websites. <br /> Databases can do this job too,
        however Notion has more accessibility features, such as mobile app where
        changes can easily impact web data.
      </p>
    </div>
  );
}

function LocalMosque() {
  return (
    <div className="mx-4">
      <img src="src\media\alexa1.png" alt="Alexa dev console" />
    </div>
  );
}
