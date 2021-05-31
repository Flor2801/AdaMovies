

const URL_BASE = "https://api.themoviedb.org/3/movie/"
const API_KEY = '8cd74c1ce651a04254aaab08ea9e958'
const QUERY_PARAMS = '&language=en-US&page=1'


// export const TRENDING_MOVIES = URL_BASE + "trending/movie" + API_KEY + QUERY_PARAMS


export const TRENDING_MOVIES = 'https://api.themoviedb.org/3/trending/movie/week?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=1'
export const TRENDING_SERIES = 'https://api.themoviedb.org/3/trending/tv/week?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=1'

export const POPULAR_MOVIES ='https://api.themoviedb.org/3/movie/popular?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=1'
export const POPULAR_SERIES = 'https://api.themoviedb.org/3/tv/popular?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=1'
export const UP_COMING_MOVIES ='https://api.themoviedb.org/3/movie/upcoming?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=1'

export const TOP_RATED_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=1'
export const TOP_RATED_SERIES = 'https://api.themoviedb.org/3/tv/top_rated?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=1'
export const NOW_PLAYING_MOVIES ='https://api.themoviedb.org/3/movie/now_playing?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=1'
export const ON_THE_AIR_SERIES = 'https://api.themoviedb.org/3/tv/on_the_air?api_key=8cd74c1ce651a04254aaab08ea9e9585&language=en-US&page=1'


// export const TRENDING_MOVIES = https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US