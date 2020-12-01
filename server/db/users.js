const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const { generateHash } = require('authenticare/server')

module.exports = {
    createUser,
    userExists,
    getUserByName
}

function createUser (user, db = connection) {
    return userExists(user.username, db)
        .then(exists => {
            if (exists) {
                throw new Error('This username already exists, bitch. Try being original...')
            }
            return null
        })
        .then(() => generateHash(user.password))
        .then(passwordHash => {
            return db('users').insert({ username: user.username, hash:passwordHash})
        })
}

function userExists (username, db = connection) {
    return db('users')
        .count('id as n')
        .where('username', username)
        .then(count => {
            return count[0].n > 0
        })
}

function getUserByName (username, db = connection) {
    return db('users')
    .select()
    .where('username', username)
    .first()
}