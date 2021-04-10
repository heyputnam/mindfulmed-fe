export function getMovies(){
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6a07351d09239daee14663f1c0bfd33d')
    .then( res => res.json() )
}

export default getMovies;