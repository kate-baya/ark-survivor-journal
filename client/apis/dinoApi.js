import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'
import {addTame, tameDelete} from '../actions/index'

const apiUrl = 'http://localhost:3000/api/v1'

export function getDinos() {
    return request
        .get(`${apiUrl}/dinos`)
        .set(getAuthorizationHeader())
        .then(res => {
            return res.body})
}

export function saveTame(tame, dispatch) {
    return request
        .post(`${apiUrl}/dinos`)
        .set(getAuthorizationHeader())
        .send(tame)
        .then((res) => {
            return dispatch(addTame(res.body))
        })
        .catch(logError)
}

export function deleteTame(id, dispatch) {
  return request
    .delete(`${apiUrl}/dinos/${id}`)
    .set(getAuthorizationHeader())
    .then(res => {
      return dispatch(tameDelete(res.body))
    })
    .catch(logError)
}

function logError (err) {
    if (err.message === 'Forbidden') {
      throw new Error('Only a tribe member can add tames')
    } else {
      // eslint-disable-next-line no-console
      console.error(
        'Error consuming the API (in client/api.js):',
        err.message
      )
      throw err
    }
  }