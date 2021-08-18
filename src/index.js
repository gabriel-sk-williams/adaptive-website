import React from 'react';
import ReactDOM from 'react-dom';
import NavTop from './NavTop';
import Adaptive from './Adaptive';
import Tech from './Tech';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

  function AppRouter() {
    return (
      <Router>
        <div className="main-rails">
          <NavTop activePage="home"/>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Adaptive} />
                  <Route path="/tech/" component={Tech} />
                  <Route path="/contact/" component={Contact} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
      </Router>
    );
  }
  
  serviceWorker.unregister();
  ReactDOM.render(<AppRouter />, document.getElementById('root'));

  export default AppRouter;





