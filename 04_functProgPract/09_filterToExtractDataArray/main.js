console.clear()

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
]

const userUnder30 = users.filter((user) => user.age < 30)
console.log(`Users under 30`, userUnder30)

// The global variable
const watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
    Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer:
      'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer:
      'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True'
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True'
  }
]

// // map first to reduce data and then filter()
const filteredList = watchList
  .map((movie) => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    }
  })
  .filter((movie) => {
    return parseFloat(movie.rating) >= 8.0
  })

// // Same as above but with block
// const filteredList = watchList
//   .map(function (e) {
//     return { title: e['Title'], rating: e['imdbRating'] }
//   })
//   .filter((e) => e.rating >= 8)

////ShortHand
// const filteredList = watchList
//   .map(({ Title: title, imdbRating: rating }) => ({ title, rating }))
//   .filter(({ rating }) => rating > 8)

// var filteredList = watchList
//   .map(({ Title: title, imdbRating: rating }) => ({ title, rating }))
//   .filter(({ rating }) => rating > 8)

// console.log(filteredList)

const pgList = watchList
  .map((movie) => {
    return {
      title: movie.Title,
      rated: movie.Rated
    }
  })
  .filter((movie) => {
    return movie.rated === 'PG-13'
  })

// console.log(pgList)

const release09 = watchList
  .map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      language: movie.Language,
      awards: movie.Awards
    }
  })
  .filter((movie) => {
    return movie.year == 2009
  })

console.log(release09)