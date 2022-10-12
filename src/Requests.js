const apikey = "4f93b8d768fc6dba6a07eeda440a97c1";
const request = {
    fetchTrending: `trending/movie/week?api_key=${apikey}&lenguage=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${apikey}&with_networks=213`,
    fetchTopRated:`movie/top_rated?api_key=${apikey}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${apikey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${apikey}&with_genres=35`,
    fetchHorrormovies:`/discover/movie?api_key=${apikey}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${apikey}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${apikey}&with_genres=99`,

}
export default request