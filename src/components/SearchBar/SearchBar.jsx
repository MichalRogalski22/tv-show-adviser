import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { TVShowAPI } from "../../api/tv-show";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tvShowList, setTVShowList] = useState([]);
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setSearchTerm("");
    }
    else if ((e.key === "Backspace" || e.key === "Delete") && e.target.value.trim() === "") {
      setTVShowList([]);
    }
  };

  const onSearch = async (e) => {
    if (e.target.value.trim() !== "") {
      const showSuggestions = await TVShowAPI.fetchByTitle(e.target.value);
      if (showSuggestions.length > 0) {
        console.log(showSuggestions)
        setTVShowList(showSuggestions.slice(0, 10));
      }
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e)
  };

  return (
    <div className={s.input_container}>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={s.input}
        type="text"
        value={searchTerm}
        placeholder="Search a tv show you may like"
      />
      { tvShowList.length > 0 &&
      <div className={s.dropdown}>
        {tvShowList.map((show) => (
          <div
            className={s.dropdownItem}
            key={show.id}
            onClick={() => {
              onSubmit(show.name);
              setTVShowList([]);
              setSearchTerm("");
            }}
          >
            {show.name}
          </div>
        ))}
      </div>
      }
    </div>
  );
};

export default SearchBar;
