const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('users').del()
    .then(() => Promise.all([
       generateHash('sarah'),
       generateHash('peach')
    ]))
    .then(([sarahHash, peachHash]) =>
      knex('users').insert([
        { id: 1, username: 'sarah', hash: sarahHash },
        { id: 2, username: 'peach', hash: peachHash }
      ])
    )
}
