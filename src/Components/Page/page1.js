import React from "react";
import { Link, Route, Switch } from "react-router-dom";
export default props => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Page1/">Page1-1</Link>
        </li>
        <li>
          <Link to="/Page1/2">Page1-2</Link>
        </li>
        <li>
          <Link to="/Page1/3">Page1-3</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/Page1/2" render={() => <div>Page1-2</div>} />
        <Route path="/Page1/3" render={() => <div>Page1-3</div>} />
        <Route exac path="/Page1/" render={() => <div>Page1-1</div>} />
      </Switch>
    </div>
  );
};
