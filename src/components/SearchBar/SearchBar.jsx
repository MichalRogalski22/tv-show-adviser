import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setSearchTerm("");
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={s.input}
        type="text"
        value={searchTerm}
        placeholder="Search a tv show you may like"
      />
    </>
  );
};

export default SearchBar;
