import { useState, useEffect } from "react";
import {
  Mywork,
  ListProjects,
  Skills,
  Education,
  CV,
  Contact,
} from "./functions";
import { ToNotion } from "./notion";
import $ from "jquery";

export function Homepage(): any {
  const [fontSize, setFontSize] = useState({});
  const [windowSize, setWindowSize] = useState({});
  const [justify, setJustify] = useState("");
  var style = {
    marginTop: window.innerHeight / 2 - 100,
    marginBottom: window.innerHeight / 2,
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 420) {
        setWindowSize({ width: 320 });
        setFontSize({ fontSize: 30 });
        setJustify("justify-content-evenly");
        $("#svg").hide();
        $(".arrowD").show();
      } else {
        setWindowSize({ width: 700 });
        setFontSize({ fontSize: 50 });
        setJustify("justify-content-start");
        $(".arrowD").hide();
        $("#svg").show();
      }
    }
    // ToNotion(process.env.BLOCK);

    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  $("#svg").click(function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#sectionL").offset().top,
      },
      500
    );
  });

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
          <img
            className="arrowD"
            src="https://am3pap005files.storage.live.com/y4mgGxeLL4bmrztT9IxBuQuqJfNFPJYSaeCzPno6YZ4ous987GPWy4ATwzQR3l21pd9SnbUuGXjeKtx2LoQh5gVfccLM7OHbqN89iZYGqUiKiraMa93uq6FgiVnNkclE6c12e9r4A8IyJ43tcn3rMLcF6lcjjOtK4YtWyyUAAIYQ9dQ8llGGqmTk3ky_N-ntvxW4VJNDmRA1fpBR5Jr9O8UAw/up-arrow.png?psid=1&width=512&height=512&cropMode=center"
            alt="arrowDown"
            width="100"
            // height="100"
          />
          <svg
            id="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-arrow-down-circle arrow"
            viewBox="0 0 16 16"
            // onClick={() => {
            //   boom();
            // }}
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
