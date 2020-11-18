import request from 'superagent'

const apiUrl = 'http://localhost:3000/api/v1'

export function getInventory() {
    return request
        .get(`${apiUrl}/inventory`)
        .then(response => response.body)
}

export function getDinos() {
    return request
        .get(`${apiUrl}/dinos`)
        .then(response => response.body)
}