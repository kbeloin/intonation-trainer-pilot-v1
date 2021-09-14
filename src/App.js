import React, { useState, useEffect } from 'react'
import Welcome from './components/pages/Welcome'
import Unit from './components/pages/ProductionTask'
import { MemoryRouter } from "react-router-dom"
import { Route, Switch } from 'react-router-dom'

export default function App() {

    return (
      <div className="App">
        <MemoryRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/2" component={Unit} />
          </Switch>
        </MemoryRouter>
        
      </div>
    );
  }
  