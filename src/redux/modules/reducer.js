import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxAsyncConnect } from 'redux-connect'

import planets from './planets'

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  planets
})
