import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { NavigationBar } from '../common';

const TmpDiv = (props: { content: string }) => {
  const { content } = props;
  console.log(content)
  return (<header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>{content}</code> and save to reload.
        </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      learn react
        </a>
  </header>
  )
}


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" render={
            () => <Redirect to="/assessment-list" />
          } />
          <Route exact path="/assessment-list">
            <TmpDiv content={"Assessment List"} />
          </Route>
          <Route exact path="/sessions">
            <TmpDiv content={"Sessions"} />
          </Route>
          <Route exact path="/about-me">
            <TmpDiv content={"About me"} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
