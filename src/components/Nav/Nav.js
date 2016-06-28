import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
  render() {
    return (
      <ul>
        <li><Link to={{ pathname: '/' }}>Home</Link></li>
        <li><Link to={{ pathname: '/about' }}>About</Link></li>
        <li><Link to={{ pathname: '/planets' }}>Planets</Link></li>
        <li><Link to={{ pathname: '/contact' }}>Contact</Link></li>
      </ul>
    )
  }
}
