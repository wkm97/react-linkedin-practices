import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavigationBar } from '../common';
import AssessmentList from "../AssessmentList/AssessmentList";
import Practice from "../Practice/Practice";
import { PracticeProvider } from '../../contexts/practice-context';
import About from '../About/About';
import * as path from "../../constants/path";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path={path.HOMEPAGE} render={
            () => <Redirect to={path.ASSESSMENT_LIST} />
          } />
          <Route exact path={path.ASSESSMENT_LIST}>
            <AssessmentList />
          </Route>
          <Route path={`${path.PRACTICE}/:title`}>
            <PracticeProvider>
              <Practice />
            </PracticeProvider>
          </Route>
          <Route exact path={path.ABOUT}>
            <About/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
