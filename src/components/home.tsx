import { useState, useEffect } from "react";
import { Mywork, ListProjects, Skills } from "./functions";

var axios = require("axios");

function notionData(): any {
  var data = JSON.stringify({
    children: [
      {
        object: "block",
        type: "heading_2",
        heading_2: {
          text: [
            {
              type: "text",
              text: {
                content: "Lacinato kale",
              },
            },
          ],
        },
      },
      {
        object: "block",
        type: "paragraph",
        paragraph: {
          text: [
            {
              type: "text",
              text: {
                content:
                  "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                link: {
                  url: "https://en.wikipedia.org/wiki/Lacinato_kale",
                },
              },
            },
          ],
        },
      },
    ],
  });

  var config = {
    method: "patch",
    url: "https://api.notion.com/v1/blocks/78419d9556b84efeb9948f90d9f1e5b8/children",
    headers: {
      Authorization: process.env.Token,
      "Content-Type": "application/json",
      "Notion-Version": "2021-05-13",
    },
    data: data,
  };

  axios(config)
    .then(function (response: any) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error: string) {
      console.log(error);
    });
}

export function Homepage(): any {
  const [fontSize, setFontSize] = useState({});
  const [windowSize, setWindowSize] = useState({});
  const [justify, setJustify] = useState("");
  var style = {
    marginTop: window.innerHeight / 2 - 50,
    marginBottom: window.innerHeight / 2,
  };

  notionData();

  useEffect(() => {
    function handleResize() {
      if (window.innerHeight < 820 && window.innerWidth < 420) {
        setWindowSize({ width: 320 });
        setFontSize({ fontSize: 30 });
        setJustify("justify-content-evenly");
      } else {
        setWindowSize({ width: 700 });
        setFontSize({ fontSize: 50 });
        setJustify("justify-content-start");
      }
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

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
          <div className={`d-flex flex-row ${justify} my-4`}>
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
        </section>
        {/* <section id="sectionR" className="">
          <p>section right</p>
        </section> */}
      </div>
    </div>
  );
}
