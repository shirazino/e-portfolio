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
      return <Container content={HTMLApp()} text={HTMLApp(true)} />;
    case "Notion API":
      return <Container content={NotionAPI()} />;
    case "Coffi-da reviews app":
      return <Container content={CoffeeApp()} text={CoffeeApp(true)} />;
    case "HTML Tutor backend":
      return <Container content={HTMLBackend()} />;
    case "Local Mosque IOT":
      return <Container content={LocalMosque()} />;
    case "Out Of The Loop game":
      return <Container content={OddOneOutGame()} text={OddOneOutGame(true)} />;
    case "e-Portfolio":
      return <Container content={EPortfolio()} />;
    case "PHP Survey":
      return (
        <Container
          content={PHPFocusedAssessment()}
          text={PHPFocusedAssessment(true)}
        />
      );
    case "Games reviews PHP":
      return <Container content={PHPFrameworks()} text={PHPFrameworks(true)} />;
    default:
      return <Redirect to="/notfound" />;
  }
}

function Container(props: any) {
  // console.log(props);

  return (
    <div>
      <div id="carousel" className="">
        {props.content}
      </div>
      <div id="about">{props.text}</div>
    </div>
  );
}

function HTMLApp(bool?: boolean) {
  function MoreText() {
    return (
      <div className="d-flex flex-column my-4">
        <p>Stack Used:</p>
        <ul>React </ul>
        <ul>Node JS</ul>
        <ul>moment</ul>
        <ul>Bootsrap</ul>
        <ul>Code mirror</ul>
        <ul>jQuery</ul>
        <ul>React pagination</ul>
        <ul>esLint</ul>
        <ul>Jest</ul>

        <a
          href="https://github.com/kashif-js/reactjs-project"
          className="justLinks"
        >
          browse code
        </a>
      </div>
    );
  }
  var HTML = [
    "https://i.imgur.com/ik9pKJz.png",
    "https://i.imgur.com/ImnERLp.png",
    "https://i.imgur.com/oAYWUHq.png",
    "https://i.imgur.com/zbewrQ0.png",
    "https://i.imgur.com/2VaOAWV.png",
  ];
  if (bool == true) {
    return <MoreText />;
  }

  var width = 365.4;
  var height = 791.25;

  return (
    <div>
      <div className="d-flex flex-nowrap flex-row">
        {/* {container()} */}
        <img
          id="immagine"
          className="me-4"
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
        browse code
      </a>
    </div>
  );
}

function CoffeeApp(bool?: boolean) {
  function MoreText() {
    return (
      <div className="d-flex flex-column my-4">
        <p>Stack Used:</p>
        <ul>React Native</ul>
        <ul>Node JS</ul>
        <ul>Android</ul>
        <ul>esLint</ul>
        <ul>Jest</ul>
        <ul>Google maps api</ul>
        <ul>Rest API</ul>
        <ul>MySQL</ul>
        <a
          href="https://github.com/kashif-js/ReactNativeApp-CoffiDa"
          className="justLinks"
        >
          browse code
        </a>
      </div>
    );
  }

  var Coffee = [
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/home.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/profile.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/reviews.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/location.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/login.png",
    "https://raw.githubusercontent.com/kashif-js/ReactNativeApp-CoffiDa/master/media/settings.png",
  ];

  if (bool == true) {
    return <MoreText />;
  }

  var width = 365.4;
  var height = 791.25;

  return (
    <div className="d-flex flex-nowrap flex-row">
      <img
        className="me-4"
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

function OddOneOutGame(bool?: boolean) {
  function MoreText() {
    return (
      <div className="d-flex flex-column my-4">
        <p>
          One of my earliest work I did using JavaScript, which was a team
          building game where you get to know names and more about your team.{" "}
          <br />
          This game is inspired by Odd One Out, however more British! 🇬🇧{" "}
        </p>
        <p>Stack used:</p>
        <ul>HTML</ul>
        <ul>CSS</ul>
        <ul>JavaScript and jQuery</ul>
        <a
          className="justLinks"
          href="https://github.com/kashif-js/OddOneOut-Repo"
        >
          Browse code
        </a>
        <a
          className="justLinks"
          href="https://kashif-js.github.io/OddOneOut-Repo/Index.html#"
        >
          run
        </a>
      </div>
    );
  }

  var ODD = [
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/1.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/2.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/3.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/4.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/5.png",
    "https://raw.githubusercontent.com/kashif-js/OddOneOut-Repo/master/media/vote.png",
  ];

  // var width = 780;
  // var height = 844;

  if (bool == true) {
    return <MoreText />;
  }

  return (
    <div>
      <div className="d-flex flex-row">
        <img
          className="me-2"
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
    </div>
  );
}

function EPortfolio() {
  return (
    <div>
      <p>This actual website was developed to showcase my work.</p>
      <p>Stack used:</p>
      <ul>
        <li>React</li>
        <li>Node JS</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Notion API</li>
        <li>Bootstrap 5</li>
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
    <p>
      Notion Api is often used in my projects to save data to my blocks that is
      coming from some websites. <br /> Databases can do this job too, however
      Notion has more accessibility features, such as mobile app where changes
      can easily impact web data.
    </p>
  );
}

function LocalMosque() {
  return (
    <div className="d-flex flex-row ">
      <img
        className="mx-auto"
        src="https://i.imgur.com/1dv9UbE.png"
        alt="Alexa dev console"
      />
      <br />
      <div className="d-flex flex-column m-4">
        <p>
          This skill is part of my home automation set that allows my alexa
          device to scrap data from my local Mosque which obviusly checks
          current time algorithm and provide real time data for next available
          prayer time.
          <br />
          This was a fun little project that is very usuful for me!
          <br />
          Stack used:
        </p>

        <ul>Node JS</ul>
        <ul>Alexa Skill Kit SDK</ul>
        <ul>AWS console</ul>
        <a
          className="justLinks"
          href="https://github.com/kashif-js/local-mosque-alexa"
        >
          Browse the code here
        </a>
      </div>
    </div>
  );
}

function PHPFocusedAssessment(bool?: boolean) {
  function MoreText() {
    return (
      <div className="d-flex flex-column my-4">
        <p>
          Outcomes :
          <ul className="mt-2">
            Deploy client-side JavaScript libraries to add dynamic functionality
            within a web page
          </ul>
          <ul>
            Use open-source tools and technologies to develop object-oriented
            and reusable server-side scripts that obtain, validate, process and
            store user input from web pages
          </ul>
          <ul>
            Integrate client-side and server-side coding into coherent web
            applications
          </ul>
          <ul>
            Manage communication sessions to authorise users and perpetuate
            their data across multiple pages.
          </ul>
          stack used:
          <ul className="mt-2">PHP 7</ul>
          <ul>HTML</ul>
          <ul>CSS</ul>
          <ul>MySQL</ul>
          <a
            className="justLinks"
            href="https://github.com/kashif-js/SurveyPHP"
          >
            browse code
          </a>
        </p>
      </div>
    );
  }
  if (bool == true) {
    return <MoreText />;
  }
  var PHPwork = [
    "https://jwbu9a.am.files.1drv.com/y4mmN3nVDoQn-H_0y0qkV5NXm262ZU1pFfSxI1xiZu_K_6-HHTGGfNcMZ7kORfhtKXoR5RXvW23oO9qdYBijTx9lJp514aOjrFIDlOh1gMl5gT91Rqut6r7HlfNbtZiwfmJl2VLtUk_LS-xv_2kw-tpGQg6-n8pDgmcJQ-OBSHRfVhx5n6pVNA5ma_6mlR8NXH-ywg1-NLucAuoA1TUxzSwOQ/Screenshot%202021-07-18%20025648.png?psid=1",
    "https://xxtbxa.am.files.1drv.com/y4m3xTF95lNOCxLBqZHWwYEHvfTuKlJ1n7S5X0a1D8CSPkdDBbpncd9gil2PXFrJqESrLmvyKA20Tu_qRdNWBkND9-QEV6MAKvMkbUq_1ilgMlgFmM-wluKDPRIZXlo_eme_5CHMN6VP77wRGPCNsFCojqEMBVot9f58k6RLe9jvSPVmfCiGhCymihY4jRvAc7KfI1X1OaSp-HMw9Z9sk0R3g/simple%20survey.png?psid=1",
    "https://zmkg8q.am.files.1drv.com/y4my0rIGFQlZCjHlgYtvWIYnk8LtunDOf4PY23wHtWtNulx2ZlmGVC7tJgtc9NbZIu75mxMVt-3_BuwYzxDVhB8imsxdvuLJrjzi4Y_ZtrSkTCIq_Eu4gl72GR_bLpGuPm9wQtM3i_EuY3zmed8ncp6DA6WivYOFABaJWEhfg_ZAMA6SKTA4ijybdyPwXufWyyK9SvnegdMizRWYV0AG47O_w/customSurvey.png?psid=1",
    "https://9r1k3a.am.files.1drv.com/y4mV5y3DQSlTOk8Rr-bSBcdDQNZSPCV-CG2RP5bWcXX5u4F2o95E-QrUYi8U_3F6BCrcZAj5bDkHTyLJMFi30miED1r774G7Fn3GRpSk35Bhq0A5_EadwXZOWOKVSk4-Po63kuEVLwZ3kYx37wyc1pJ4cvAleMDLs2b3O9UAtQ1HmpDrR8VzKwT7JkCh5h7ZszsPyzNuE03CsmKqh4xz8kFoA/update.png?psid=1",
    "https://ancpla.am.files.1drv.com/y4mCV98Sa770roIKMvWeO7f1WwwR2tmk5bdWv5AcEdnyLRcWIo4Vwqu3yXv1SJwEB_hwqcD4MmhbQBYGPEpEGln6iurXcXt4NrR2-lw4BD86DiFXcDVQPSEcfIMys9YQLHm-2ZYqpZ8QPrCy3UBG2vRTrQZ-J0TCnW8NZnpoRYooGjd_cUrx3WB6qsrSTOvAMrP_wVmNZkfc8eOKmwyh8lGXQ/userSurveys.png?psid=1",
    "https://addhla.am.files.1drv.com/y4mD5XECLZPe7xcvqjRjbyZiEcY6nQ6kip7We1cbYp1vJ4VCrkgSQ4aBzDQNcmmNQ211rfTjQ9s792M-wVrZ6OEfuGAudF4u-UP6vl7pBrH9cSY0lxOovCpEpyow5akihGUYWY3DqtYXhv8F0LQ0MJYgoLuQ-vs0EV3AjyUNTC1vWANrsTEJZQ263_tEdG0E1xTv9eQMPex37XAJI3SgC16ow/AdminUserView.png?psid=1",
    "https://9r1j3a.am.files.1drv.com/y4mj1YkDJcjOUC44U2jo7M9__6k6u4S2zFXflGz01nhDN7wGrv5nvk6gei91w9VgaL4Ow1M41hcfRYHN8hWkidiz8mqQoLCTimW_BvQhSgA-pdxUhmdoB2yKVt7-XmPALhimeqmkHhmwr8dVOzuX2o1lwAqg1UHraDxkjyow1bsJ7tZDJ5FnXOik3m-XDmvksER7xXLONNHOsrsr8cGIIsW2w/adminView.png?psid=1",
    "https://lkeziq.am.files.1drv.com/y4mO62VBLyRWx15KJRKaUf3kUounQSndBT50LHMOs6Iqd6JhkivsDe839LEDPONmRRKKpq6NlhjOFbyB2rbTbHCZDBGMVDhXaDCTUEHSmqELb53XcHKJbK-1PbgYJE_OdVKzCcZM2dGtW9sBrs7u0KS6LXQ5YIvB2RECAwfG9U7YDeAoQjZmztVbQb4qk1XEIlkMTybEahcfRxfsTjqtCvpOA/surveyAnswer1.png?psid=1",
    "https://ktimfw.am.files.1drv.com/y4m0eMGf5OV6OYLZZgI3ED3naVswTuXF4fXeLIWr00sWPf0OPHvx51KULwmGFS5wwkm89xohNcfhjxcIUEaz8VP1pUwL978l6_E6H-WeJ3XF0jD3GfwPbrgazF6IlXJbVkPRfjGKAVsavqwZFv5Dl5mWkB9WZOc-703ACqdcrLT9kAcygqcpl08jCyM1U-A7o-5tTfILrkMo205c2Z5L4NEZg/surveyAnswer2.png?psid=1",
    "https://w0m9oq.am.files.1drv.com/y4m5yNTPy2RUx2LHHRYNUyFYOA0H3KljJvtq1WsYOKh7x2b_LRJk9q8Df4OZVGSTeXSdqDSEP2U9rPbK6ToqZgSkAMGjUaBKkCTNlq5Po3KJRh6EYXHKEEiozYuhMxWCnAGNN48Q04gs5V9GIhElWsozM1R8sSCllgX0yO0ljqGIcIz-bKoCKunsY0q86VI51_aw0tgrFDbRc_2zijeAMuWgg/logIN.png?psid=1",
  ];

  return (
    <div className="d-flex flex-nowrap flex-row">
      <img className="me-4" src={PHPwork[0]} alt="PHP Survey work" />
      <img className="mx-4" src={PHPwork[1]} alt="PHP Survey work" />
      <img className="mx-4" src={PHPwork[2]} alt="PHP Survey work" />
      <img className="mx-4" src={PHPwork[3]} alt="PHP Survey work" />
      <img className="mx-4" src={PHPwork[4]} alt="PHP Survey work" />
      <img className="mx-4" src={PHPwork[5]} alt="PHP Survey work" />
      <img className="mx-4" src={PHPwork[6]} alt="PHP Survey work" />
      <img className="mx-4" src={PHPwork[7]} alt="PHP Survey work" />
      <img className="mx-4" src={PHPwork[8]} alt="PHP Survey work" />
      <img className="mx-4" src={PHPwork[9]} alt="PHP Survey work" />
    </div>
  );
}

function PHPFrameworks(bool?: boolean) {
  function MoreText() {
    return (
      <div>
        <p>Outcomes:</p>
        <ul>Front–end Design</ul>
        <ul>Structure and Scalability</ul>
        <ul>Interactivity</ul>
        <ul>Client-server Networking</ul>
        <ul>Code Structure and Quality</ul>
        <p>stack used:</p>
        <ul>MVC framework</ul>
        <ul>CodeIgniter</ul>
        <ul>PHP</ul>
        <ul>JavaScript</ul>
      </div>
    );
  }
  if (bool == true) {
    return <MoreText />;
  }
  return (
    <div>
      {" "}
      <p>hi</p>{" "}
    </div>
  );
}
