import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <div>
      <div className="navbar-img">
        <img alt="pokeapi-logo" src={logoImg} />
      </div>
      <div className="favorite-pokemons">
        {" "}
        FAVORITOS ! ❤️ {favoritePokemons.length}{" "}
      </div>
    </div>
  );
};

export default Navbar;
