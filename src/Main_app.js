import { InfoMain } from "./router/InfoMain";
import { DashMain } from "./router/DashMain";
import { SIIMain } from "./router/SIIMain";
import { SIIView } from "./router/SIIView";
import { Admin } from "./router/Admin";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Main_app() {
  return (
    <div className="Main_app">
      <Router>
        <Route path="/" exact component={InfoMain} />
        <Route path="/dashboard" component={DashMain} />
        <Route path="/sii" component={SIIMain} />
        <Route path="/alum" component={SIIView} />
        <Route path="/admin" component={Admin} />
      </Router>
    </div>
  );
}

export default Main_app;
