import React, { useState, useEffect } from 'react'
import Welcome from './components/pages/Welcome'
import ProductionTaskTemplate from './components/pages/PerceptiontionTask'
import { MemoryRouter } from "react-router-dom"
import { Route, Switch } from 'react-router-dom'

export default function App() {

    return (
      <div className="App">
        <MemoryRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/production-task" component={ProductionTaskTemplate} />
            <Route path="/perception-task" component={PerceptionTaskTemplate} />
            <Route exact path="/done" component={End} />
          </Switch>
        </MemoryRouter>
      </div>
    );
  }
  