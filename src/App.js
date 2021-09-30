import React from 'react'
import Welcome from './components/pages/Welcome'
import ProductionControlledTemplate from './components/pages/ProductionControlledTemplate'
import PerceptionDiscriminationTemplate from './components/pages/PerceptionDiscriminationTemplate'
import PerceptionIdentificationTonesTemplate from './components/pages/PerceptionIdentificationTonesTemplate'
import PerceptionIdentificationProminenceTemplate from './components/pages/PerceptionIdentificationProminenceTemplate'
import End from './components/pages/End'
import { MemoryRouter } from "react-router-dom"
import { Route, Switch } from 'react-router-dom'
import ProductionGuidedTemplate from './components/pages/ProductionGuidedTemplate'

export default function App() {

    return (
      <div className="App">
        <MemoryRouter>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/perception-identification-tones" component={PerceptionIdentificationTonesTemplate} />
            <Route exact path="/perception-discrimination" component={PerceptionDiscriminationTemplate} />
            <Route exact path="/perception-identification-prominence" component={PerceptionIdentificationProminenceTemplate} />
            <Route path="/production-controlled" component={ProductionControlledTemplate} />
            <Route path="/production-guided" component={ProductionGuidedTemplate} />
            <Route path="/done" component={End} />
          </Switch>
        </MemoryRouter>
      </div>
    );
  }
  