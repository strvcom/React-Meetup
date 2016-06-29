import React, { Component } from 'react'
import { PlanetsDetail as PlanetsDetailContainer } from 'containers'
import { asyncConnect } from 'redux-connect'
import { loadDetail, isLoadedDetail } from 'redux/modules/planets'


@asyncConnect([{
  promise: ({ store: { dispatch, getState }, params }) => {
    if (!isLoadedDetail(params.planetId, getState())) {
      return dispatch(loadDetail(params.planetId))
    }
  }
}])
export default class PlanetsDetail extends Component {
  render() {
    const { planetId } = this.props.params

    return <PlanetsDetailContainer planetId={planetId} />
  }
}
