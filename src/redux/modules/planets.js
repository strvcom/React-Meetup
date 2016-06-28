const LOAD = 'planets/LOAD'
const LOAD_SUCCESS = 'planets/LOAD_SUCCESS'
const LOAD_DETAIL_SUCCESS = 'planets/LOAD_DETAIL_SUCCESS'
const LOAD_FAIL = 'planets/LOAD_FAIL'

const initialState = {
  loaded: false,
  data: null,
  detail: [],
  error: null
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      }
    case LOAD_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        error: null,
        data: action.result
      })
    case LOAD_DETAIL_SUCCESS: {
      const newState = { ...state }

      newState.detail[action.id] = action.result
      return Object.assign({}, newState, {
        loading: false,
        error: null
      })
    }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      }
    default:
      return state
  }
}

export function isLoaded(globalState) {
  return globalState.planets && globalState.planets.loaded
}

export function isLoadedDetail(detailId, globalState) {
  return globalState.planets && globalState.planets.detail && globalState.planets.detail[detailId] && globalState.planets.detail[detailId].name
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('api/planets')
  }
}

export function loadDetail(id) {
  return {
    types: [LOAD, LOAD_DETAIL_SUCCESS, LOAD_FAIL],
    promise: client => client.get('api/planets/' + id),
    id
  }
}
