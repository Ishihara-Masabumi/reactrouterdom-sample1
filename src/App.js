import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Page1">
            <Page1 />
          </Route>
          <Route exact path="/Page2">
            <Page2 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
