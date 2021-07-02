import "./App.css";
import { Navbar } from "./components/functions";

import { Homepage } from "./components/home";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Work } from "./components/work";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/work/:name" exact component={Work}></Route>
        <Route path="/" render={() => <h1>404</h1>}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
