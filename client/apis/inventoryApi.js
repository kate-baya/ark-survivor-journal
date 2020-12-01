import request from 'superagent'
import {getAuthorizationHeader } from 'authenticare/client'
import {addInventory} from '../actions/index'

const apiUrl = 'http://localhost:3000/api/v1'

export function getInventory() {
  return request
  .get(`${apiUrl}/inventory`)
  .set(getAuthorizationHeader())
  .then(res => res.body)
}

export function saveInventory(inv, dispatch) {
  return request
    .post(`${apiUrl}/inventory`)
    .set(getAuthorizationHeader())
    .send(inv)
    .then(res => {
      return dispatch(addInventory(res.body))
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