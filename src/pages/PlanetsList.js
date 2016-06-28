import React, { Component } from 'react'
import { PlanetsList as PlanetsListContainer } from 'containers'
import { load, isLoaded } from 'redux/modules/planets'
import { asyncConnect } from 'redux-connect'

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    if (!isLoaded(getState())) {
      return dispatch(load())
    }
  }
}])
export default class PlanetsList extends Component {
  render() {
    return (
      <PlanetsListContainer />
    )
  }
}
