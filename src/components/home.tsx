import { useState, useEffect } from "react";
import {
  Mywork,
  ListProjects,
  Skills,
  Education,
  CV,
  Contact,
} from "./functions";

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
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error: string) {
      // console.log(error);
    });
}

export function Homepage(): any {
  const [fontSize, setFontSize] = useState({});
  const [windowSize, setWindowSize] = useState({});
  const [justify, setJustify] = useState("");
  var style = {
    marginTop: window.innerHeight / 2 - 100,
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
        <h1 className="name mb-4" style={fontSize}>
          Hi, I'm Kashif Tauseef.
        </h1>
        <div className="mx-4">
          <p>
            Full Stack Software Engineer <br />
            who can build beautiful Node & React apps and much more! <br />
            Scroll down to check out my work
          </p>
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
      </div>
      <div className="d-flex flex-row justify-content-around">
        <section id="sectionL" style={windowSize}>
          <ListProjects />

          <Mywork />

          <Skills />

          <Education />

          <CV />

          <Contact auto={justify} />
        </section>
        {/* <section id="sectionR" className="">
          <p>section right</p>
        </section> */}
      </div>
    </div>
  );
}
