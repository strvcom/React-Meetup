// hello

import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const PlanetsDetail = ({ name, population, terrain }) => (
  <div>
    <h2>{name}</h2>
    <p><strong>Terrain</strong>: {terrain}</p>
    <p><strong>Population</strong>: {population}</p>
    <Link to={{ pathname: '/planets' }}>Back to list</Link>
  </div>
)

PlanetsDetail.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired
}

export default PlanetsDetail
