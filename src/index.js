import React from 'react';
import ReactDOM from 'react-dom';
import Adaptive from './Adaptive';
import Tech from './Tech';
import About from './About';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

  function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Adaptive} />
          <Route path="/tech/" component={Tech} />
          <Route path="/about/" component={About} />
        </Switch>
      </Router>
    );
  }
  
  serviceWorker.unregister();
  ReactDOM.render(<AppRouter />, document.getElementById('root'));

  export default AppRouter;





