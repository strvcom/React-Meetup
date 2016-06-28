//something

import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import config from './config'
import { Nav } from 'components'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="page__wrapper">
        <Helmet {...config.app.head} />
        <Nav />
        <hr />
        {this.props.children}
      </div>
    )
  }
}
