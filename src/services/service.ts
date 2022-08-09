export default class OMDBService {
  async getMovies(): Promise<any> {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=ee348134"
    );
    const data = await response.json();
    return data;
  }
}
