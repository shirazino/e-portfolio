import "./style/App.css";
import "./style/skeletonLoading.css";
import "./style/borders.css";

import { Homepage } from "./components/home";
import { Work } from "./components/work";
import { Route, Switch, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={"/"} component={Homepage}></Route>
        <Route exact path={"/work/:name"} component={Work}></Route>
        <Route
          path="/"
          render={() => (
            <h1 className="d-flex justify-content-center err404">
              404 Not Found ⛔
            </h1>
          )}
        ></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
