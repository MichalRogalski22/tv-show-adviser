import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import TVShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  const fetchPopular = async () => {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopular();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      
    }
  };

  const fetchRecommendations = async (tvShowId) => {
    try {
      const recommendationListResp = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendationListResp.length > 0) {
        setRecommendationList(recommendationListResp.slice(0, 10));
      }
    } catch (error) {
       
    }
  };

  const fetchByTitle = async (title) => {
    try {
      const searchResp = await TVShowAPI.fetchByTitle(title);
      if (searchResp.length > 0) {
        setCurrentTVShow(searchResp[0]);
      }
    } catch (error) {
      
    }
  };

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const updateCurrentTVShow = (tvShow) => {
    setCurrentTVShow(tvShow);
  };

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
         url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo />
          </div>
          <div className="col-sml-12 col-md-6 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;
