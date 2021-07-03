import React from "react";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps<{ name: string }> {}

export const Work: React.FC<Props> = ({ match }) => {
  console.log(match.params.name);

  return (
    <div id="main">
      <h1 id="workTitle">{match.params.name}</h1>
      {CheckParams(match.params.name)}
    </div>
  );
};

function CheckParams(props: any) {
  switch (props) {
    case "HTML teaching platform":
      return <HTMLApp />;
      break;
    case "Notion API":
      return <h1>add notion stuff</h1>;
      break;
    case "Coffee rating App":
      return <CoffeeApp />;
      break;
    case "Node js backend (HTML teaching website)":
      return <HTMLApp />;
      break;
    case "Local Mosque Alexa (automation IoT)":
      return <h1>add more screens!</h1>;
      break;
    case "Odd One Out game":
      return <OddOneOutGame />;
      break;
    case "e-Portfolio":
      return <h1>under construction</h1>;
      break;
    default:
      return window.open("/notfound", "_self");
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
