import React, { memo, useRef, useState } from "react";
import {
  deleteFavorite,
  getFavoritesFromLocalStorage,
  isExistInFavorites,
} from "../../heplers/heplers";
import { useData } from "../../services/Contexts/DataContext";

import {
  BntGroupe,
  ButtonShrink,
} from "../../structure/stylredComponents/Button.styled";

const FavoritesBtns = (props) => {
  const storageValue = useRef(getFavoritesFromLocalStorage()),
    [isExist, setisExist] = useState(isExistInFavorites(props.item.id));

  const [, setState] = useData();
  const editLS = () => {
    if (isExist === false) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...storageValue.current, props.item])
      );

      setState((prev) => {
        return {
          ...prev,
          favorites: [...storageValue.current, props.item],
        };
      });
      setisExist(true);
    }
    if (isExist === true) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(deleteFavorite(props.item.id))
      );
      setState((prev) => {
        return {
          ...prev,
          favorites: deleteFavorite(props.item.id),
        };
      });

      setisExist(false);
    }
  };
  return (
    <>
      <BntGroupe className="favoritesButtons" {...props}>
        <ButtonShrink onClick={editLS}>{isExist ? "-" : "+"}</ButtonShrink>
      </BntGroupe>
    </>
  );
};

export default memo(FavoritesBtns);
