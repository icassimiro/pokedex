import React, { useState } from "react";
import { Button } from "reactstrap";

const Searchbar = (props) => {
  const [search, setSearch] = useState("dito");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokémon" onChange={onChangeHandler} />
      </div>

      <div className="searchbar-btn">
        <Button className="all-btn" onClick={onButtonClickHandler} outline>
          Buscar
        </Button>
      </div>
    </div>
  );
};
export default Searchbar;
