import React, { useState, useEffect } from 'react'
import Welcome from './components/pages/Welcome'
import PerceptionTaskTemplate from './components/pages/PerceptionTask'
import ProductionMatchingTaskTemplate from './components/pages/ProductionMatchingTask'
import ProductionReadingTaskTemplate from './components/pages/ProductionReadingTask'
import End from './components/pages/End'
import { MemoryRouter } from "react-router-dom"
import { Route, Switch } from 'react-router-dom'

export default function App() {

    return (
      <div className="App">
        <MemoryRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/production-matching" component={ProductionMatchingTaskTemplate} />
            <Route path="/production-reading" component={ProductionReadingTaskTemplate} />
            <Route path="/perception-task" component={PerceptionTaskTemplate} />
            <Route exact path="/done" component={End} />
          </Switch>
        </MemoryRouter>
      </div>
    );
  }
  