import useFavoritesLocalStorage from "../../../Hooks/useFavorites";
import { ButtonShrink, BntGroupe } from "../stylredComponents/Button.styled";
import { isExistItemInArray } from "../../heplers/heplers";
const FavoritesBtns = (props) => {
  const [
    storageValue,
    setLocalStorageValue,
    // setRemoveLocalStorage,
  ] = useFavoritesLocalStorage();
  // const removeLocalStorage = () => setRemoveLocalStorage(props.movieDetails);
  const addFavorite = () => setLocalStorageValue(props.movieDetails);

  const existInFavorites = isExistItemInArray(storageValue, props.movieDetails);
  return (
    <>
      {props.movieDetails && (
        <BntGroupe className="favoritesButtons" {...props}>
          <ButtonShrink onClick={addFavorite}>
            {existInFavorites ? "-" : "+"}
          </ButtonShrink>
          {/* <ButtonShrink onClick={removeLocalStorage}>Remove</ButtonShrink> */}
        </BntGroupe>
      )}
    </>
  );
};
export default FavoritesBtns;
