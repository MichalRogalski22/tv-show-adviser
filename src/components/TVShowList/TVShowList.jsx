import TVShowListItem from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

const TVShowList = ({ tvShowList, onClickItem }) => {
  return (
    <div>
      <div>You'll probably like:</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tvShowItem} key={tvShow.id}>
              <TVShowListItem
                key={tvShow.id}
                tvShow={tvShow}
                onClick={onClickItem}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TVShowList;
