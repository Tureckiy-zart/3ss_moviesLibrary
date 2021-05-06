import React, { useEffect, useState } from "react";
import { deleteFavorite, isExistInFavorites } from "../../heplers/heplers";
import { useData } from "../../services/Contexts/DataContext";
import {
  BntGroupe,
  ButtonShrink,
} from "../../structure/stylredComponents/Button.styled";

const FavoritesBtns = ({ styles, item }) => {
  const { id } = item;
  const [{ favorites }, setState] = useData();
  const [isExist, setisExist] = useState(isExistInFavorites(favorites, id));

  const editLS = () => {
    if (isExist !== null && isExist === false) {
      setState((prev) => {
        return {
          ...prev,
          favorites: [...favorites, item],
        };
      });
      setisExist(true);
    }
    if (isExist === true) {
      setState((prev) => {
        return {
          ...prev,
          favorites: deleteFavorite(favorites, id),
        };
      });
      setisExist(false);
    }
  };
  useEffect(
    () => localStorage.setItem("favorites", JSON.stringify(favorites)),
    [favorites]
  );

  return (
    <>
      <BntGroupe className="favoritesButtons" {...styles}>
        <ButtonShrink onClick={editLS}>{isExist ? " - " : " + "}</ButtonShrink>
      </BntGroupe>
    </>
  );
};

export default FavoritesBtns;
