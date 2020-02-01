import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header'

import Home from './views/home'
import Gallery from './views/gallery'
import About from './views/about'
import Book from './views/book'
import Contact from './views/contact'
import Page404 from './views/page404'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/gallery">
            <Gallery/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/book">
            <Book/>
          </Route>
          <Route path="/404">
            <Page404/>
          </Route>
          <Redirect to="/404" />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
