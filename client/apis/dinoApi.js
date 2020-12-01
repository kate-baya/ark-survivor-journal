import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'
import {addTame} from '../actions/index'

const apiUrl = 'http://localhost:3000/api/v1'

export function getDinos() {
    return request
        .get(`${apiUrl}/dinos`)
        .set(getAuthorizationHeader())
        .then(res => {
            return res.body})
}

export function saveTame(tame, dispatch) {
    console.log(tame)
    return request
        .post(`${apiUrl}/dinos`)
        .set(getAuthorizationHeader())
        .send(tame)
        .then((res) => {
            console.log(res.body)
            return dispatch(addTame(res.body))
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