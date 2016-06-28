import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadDetail } from 'redux/modules/planets'
import { PlanetsDetail as PlanetsDetailComponent } from 'components'

@connect(
  state => ({
    planets: state.planets
  }),
  { loadDetail }
)
export default class PlanetsDetail extends Component {
  static propTypes = {
    loadDetail: PropTypes.func.isRequired,
    planetId: PropTypes.string.isRequired,
    planets: PropTypes.object.isRequired
  }

  componentDidMount() {
    if (!this.props.planets.detail[this.props.planetId]) {
      this.props.loadDetail(this.props.planetId)
    }
  }

  render() {
    const {
      loading,
      detail
    } = this.props.planets

    return (
      <div>
        {loading && <div>Loading ...</div>}
        {!this.props.planets.error && !loading && detail && <PlanetsDetailComponent {...detail[this.props.planetId]} />}
        {!loading && this.props.planets.error && this.props.planets.error.detail}
      </div>
    )
  }
}
