import request from 'superagent'
import {getAuthorizationHeader } from 'authenticare/client'

const apiUrl = 'http://localhost:3000/api/v1'

export function getInventory() {
  return request
  .get(`${apiUrl}/inventory`)
  .set(getAuthorizationHeader())
  .then(res => res.body)
}