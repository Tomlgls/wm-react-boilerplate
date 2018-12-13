import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  Link,
  Switch
} from 'react-router-dom';

import Home from './views/Home';

import config from './config';

import'./app.css';

const renderExView = () => {
  return (
      <div className="Ex-view">
        <h2>Hello World!</h2>
        <p>I am a view.</p>
      </div>
  )
}

const render404 = () => {
  return <h1 style={{textAlign: "center"}}>404 Page.</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="react-root-class">
            <header className="Header">
              <h1>WM React boilerplate</h1>
              <nav role="navigation" className="Nav">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><NavLink to="/ex-view">Example of view</NavLink></li>
                  <li><NavLink to="/azdazdazdazddaz">404</NavLink></li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/ex-view" component={renderExView} />
              {
                /**
                * How pass props to a route
                *
                  <Route
                    path="/shop"
                    render={(props) => ( <Shop {...props} aProps={propsExemple} /> )}
                  />

                */
              }
              <Route path="*" component={render404} />
              <Redirect from="*" to="/notFound" />
            </Switch>
            <footer className="Footer">
              <p>Currently {config.site_version}. Released under the MIT License.</p>
              <p>&copy; {new Date().getFullYear()} Wall-Market.</p>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
