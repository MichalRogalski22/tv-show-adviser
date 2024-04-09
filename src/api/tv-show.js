import axios from "axios";
import { FAKE_POPULAR_TV_SHOWS, FAKE_RECOMMENDATIONS } from "./fakeData";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
  static async fetchPopular() {
    // perform request
    // return response
    const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY_PARAM}`);
    return response.data.results;
    // return FAKE_POPULAR_TV_SHOWS;
  }

  static async fetchRecommendations(tvShowId) {
    // perform request
    // return response
    const response = await axios.get(
      `${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    );
    return response.data.results;
    // return FAKE_RECOMMENDATIONS
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}/search/tv${API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}
