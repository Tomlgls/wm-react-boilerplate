import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './views/Home';

const renderExView = () => {
  return <div>I am a view.</div>
}

const render404 = () => {
  return <div>404 Page.</div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="react-root-class">

            <header>
              <h1>React redux WM boilerplate</h1>
            </header>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/ex-view" component={renderExView} />

              {
                /**
                * Pass props to a route
                *
                  <Route
                    path="/shop"
                    render={(props) => ( <Shop {...props} userStatus={isUserLoggedIn} cartStatus={isCartProducts} shopReady={shopReady} /> )}
                  />

                */
              }


              <Route path="*" component={render404} />
              <Redirect from="*" to="/notFound" />
            </Switch>

            <footer>
              Wall-Market
            </footer>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
