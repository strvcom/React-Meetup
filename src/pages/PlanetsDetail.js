import React, { Component } from 'react'
import { PlanetsDetail as PlanetsDetailContainer } from 'containers'

export default class PlanetsDetail extends Component {
  render() {
    const { planetId } = this.props.params

    return <PlanetsDetailContainer planetId={planetId} />
  }
}
