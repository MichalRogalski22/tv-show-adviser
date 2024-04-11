import axios from "axios";
import { FAKE_POPULAR_TV_SHOWS, FAKE_RECOMMENDATIONS } from "./fakeData";
import { BASE_URL } from "../config";

export class TVShowAPI {
  userLang = navigator.language || navigator.userLanguage;

  static async fetchPopular() {
    // perform request
    // return response
    const response = await axios.get(
      `${BASE_URL}/tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}&language=${
        navigator.language || navigator.userLanguage
      }`
    );
    console.log(response.data.results);
    if(response.data.results[0].overview !== "") {
      return response.data.results;
    }
    return this.fetchByTitle(response.data.results[0].name);
    // return FAKE_POPULAR_TV_SHOWS;
  }

  static async fetchRecommendations(tvShowId) {
    // perform request
    // return response
    const response = await axios.get(
      `${BASE_URL}/tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}&language=${
        navigator.language || navigator.userLanguage
      }`
    );
    return response.data.results;
    // return FAKE_RECOMMENDATIONS
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}/search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&language=${
        navigator.language || navigator.userLanguage
      }&query=${title}`
    );
    return response.data.results;
  }
}
