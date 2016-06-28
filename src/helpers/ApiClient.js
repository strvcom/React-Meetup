import superagent from 'superagent'
import config from '../config'

const methods = ['get', 'post', 'put', 'patch', 'del']

function formatUrl(path) {
  if (path.indexOf('api/') === 0) {
    return config.apiURL + '/api/' + path.slice(4)
  }
}

export default class ApiClient {
  constructor(req) {
    methods.forEach(method =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path))

        if (params) {
          request.query(params)
        }

        if (__SERVER__ && req.get('cookie')) {
          request.set('cookie', req.get('cookie'))
        }

        if (data) {
          request.send(data)
        }

        request.end((err, { body, statusCode } = {}) => {
          if (body) {
            body.statusCode = statusCode
          }

          return err ? reject(body || err) : resolve(body)
        })
      }))
  }
  empty() {}
}
