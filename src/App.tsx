import "./App.css";
// import { Navbar } from "./components/functions";

import { Homepage } from "./components/home";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Work } from "./components/work";

function App() {
  // console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path={"/work/:name"} component={Work}></Route>
        <Route
          path="/"
          render={() => (
            <h1 className="d-flex justify-content-center err404">
              404 Not Found ⛔
            </h1>
          )}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
