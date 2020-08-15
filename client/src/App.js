import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home.js'
import Browse from './pages/Browse.js'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="pageWrapper">
          <header>
            <nav className="navbar">
              <span>
                <Link to="/"><p>Hackatouille</p></Link>
              </span>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/browse">
              <Browse />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
