
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('data').del()
    .then( () => {
      // Inserts seed entries
      return knex('data').insert([
        {
          title: 'Pinocchio',
          director: 'Ben Sharpsteen',
          year: 1940,
          rating: 4,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Pinocchio-1940-poster.jpg'
      },
      {
          title: 'Fantasia',
          director: 'Samuel Armstrong',
          year: 1940,
          rating: 4,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/1/12/Fantasia-poster-1940.jpg'
      },
      {
          title: 'The Reluctant Dragon',
          director: 'Alfred Werker',
          year: 1941,
          rating: 3,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/f/fe/Reluctant_Dragon.jpg'
      },
      {
          title: 'Dumbo',
          director: 'Ben Sharpsteen',
          year: 1941,
          rating: 2,
          poster_url: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Dumbo-1941-poster.jpg'
      }
 
      ])
    })
}
