import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavigationBar } from '../common';
import AssessmentList from "../AssessmentList/AssessmentList";
import Practice from "../Practice/Practice";
import { PracticeProvider } from '../../contexts/practice-context';
import About from '../About/About';


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
            <AssessmentList />
          </Route>
          <Route path="/practice/:title">
            <PracticeProvider>
              <Practice />
            </PracticeProvider>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
