class API {
  async getCharacter(id) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    return data;
  }
}
const api = new API();
export default api;
