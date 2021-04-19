import useFavoritesLocalStorage from "../../../Hooks/useFavorites";
import { ButtonShrink, BntGroupe } from "../stylredComponents/Button.styled";

const FavoritesBtns = (props) => {
  const [
    ,
    setLocalStorageValue,
    setRemoveLocalStorage,
  ] = useFavoritesLocalStorage();
  const addFavorite = () => setLocalStorageValue(props.movieDetails);
  const removeLocalStorage = () => setRemoveLocalStorage(props.movieDetails);
  return (
    <>
      {props.movieDetails && (
        <BntGroupe className='favoritesButtons' {...props}>
          <ButtonShrink onClick={addFavorite}>Add to favorites</ButtonShrink>
          <ButtonShrink onClick={removeLocalStorage}>Remove</ButtonShrink>
        </BntGroupe>
      )}
    </>
  );
};
export default FavoritesBtns;
