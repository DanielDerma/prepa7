import { InfoMain } from "./components/InfoMain";
import { DashMain } from "./components/DashMain";
import { SIIMain } from "./components/SIIMain";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main_app() {
  return (
    <div className="Main_app">
      <Router>
        <Route path="/" exact component={InfoMain} />
        <Route path="/dashboard" component={DashMain} />
        <Route path="/sii" component={SIIMain} />
      </Router>
    </div>
  );
}

export default Main_app;
