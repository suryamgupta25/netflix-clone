// Env variables in React
// Must start with REACT_APP_, else create-react-app won't be able to read or retrieve it

// Also, can't use require('dotenv') to retrieve env variables from a file outside project directory
// This works for server side, but in front end, the bundler will
// try to pull in Node.js core modules, like crypto, that don't exist in the browser
// Can be resolved manually, but easier fix is to put .env in project directory

const requests = {
    fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`
}

export default requests;