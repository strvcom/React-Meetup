import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function PlanetsListItem({ name, url }) {
  return (
    <li>
      <Link to={{ pathname: `/planets/${url.slice(28)}` }}>{name}</Link>
    </li>
  )
}

PlanetsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
