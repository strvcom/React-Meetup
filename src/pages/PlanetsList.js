import React, { Component } from 'react'
import { PlanetsList as PlanetsListContainer } from 'containers'
import { asyncConnect } from 'redux-connect'
import { load, isLoaded } from 'redux/modules/planets'

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
