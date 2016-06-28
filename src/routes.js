import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './App'
import * as Page from 'pages'

export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Page.Home} />

      <Route path="about" component={Page.About} />
      <Route path="planets" component={Page.PlanetsList} />
      <Route path="planets/:planetId" component={Page.PlanetsDetail} />
      <Route path="contact" component={Page.Contact} />

      <Route path="*" component={Page.NotFound} status={404} />
    </Route>
  )
}
