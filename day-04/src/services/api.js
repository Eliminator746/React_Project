const API_KEY = "2b29d4af2e60f37969e9ef1ea29da7e3";
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovie() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}
export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
}
