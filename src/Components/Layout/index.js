import React, { Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Index from "../Page";
import Page1 from "../Page/page1";
import Page2 from "../Page/page2";
import Page3 from "../Page/page3";
const layout = props => {
  return (
    <Fragment>
      <header> My Header </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Page1">Page1</Link>
          </li>
          <li>
            <Link to="/Page2">Page2</Link>
          </li>
          <li>
            <Link to="/Page3">Page3</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/Page1" component={Page1} />
        <Route path="/Page2" component={Page2} />
        <Route path="/Page3" component={Page3} />
      </Switch>
      <footer> My Footer </footer>
    </Fragment>
  );
};

export default layout;
