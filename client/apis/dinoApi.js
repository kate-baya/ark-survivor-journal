import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const apiUrl = 'http://localhost:3000/api/v1'

export function getDinos() {
    return request
        .get(`${apiUrl}/dinos`)
        .set(getAuthorizationHeader())
        .then(res => {
            return res.body})
}
