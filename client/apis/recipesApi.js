import request from 'superagent'
import {getAuthorizationHeader} from 'authenticare/client'

const apiUrl = 'http://localhost:3000/api/v1'

export function getRecipes() {
  return request
  .get(`${apiUrl}/recipes`)
  .set(getAuthorizationHeader())
  .then(res => res.body)
}