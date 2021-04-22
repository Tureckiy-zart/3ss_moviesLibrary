import useFavoritesLocalStorage from "../../../Hooks/useFavorites";
import { ButtonShrink, BntGroupe } from "../stylredComponents/Button.styled";
import { isExistItemInArray } from "../../heplers/heplers";
const FavoritesBtns = (props) => {
  const [
    storageValue,
    setLocalStorageValue,
    isExist,
  ] = useFavoritesLocalStorage();
  const addFavorite = () => setLocalStorageValue(props.movieDetails);
  console.log("isExist :>> ", isExist);
  const existInFavorites = isExistItemInArray(storageValue, props.movieDetails);

  // let a = "+";
  // function name(isExist) {
  //   if (existInFavorites) {
  //     a = "-";
  //   } else if (existInFavorites === false) {
  //     a = "-";
  //   } else if (isExist === true) {
  //     a = "+";
  //   } else if (isExist === false) {
  //     a = "-";
  //   }

  //   // if (isExist === true) return "+";
  //   // if (isExist === false || isExist === null) return "-";
  //   // return a;
  // }
  // name(isExist);
  return (
    <>
      {props.movieDetails && (
        <BntGroupe className="favoritesButtons" {...props}>
          <ButtonShrink onClick={addFavorite}>
            {/* {a} */}
            {/* {isExist === false || existInFavorites ? "-" : "+"} */}
            {existInFavorites ? "-" : "+"}
          </ButtonShrink>
          {/* <ButtonShrink onClick={removeLocalStorage}>Remove</ButtonShrink> */}
        </BntGroupe>
      )}
    </>
  );
};
export default FavoritesBtns;





// import { useEffect, useRef, useState } from "react";
// import { deleteItem, isExistItemInArray } from "../Components/heplers/heplers";

// const useFavoritesLocalStorage = (key = "favorites", initialValue = []) => {
//   const parsedLocalStorage = () =>
//     JSON.parse(localStorage.getItem("favorites")) || initialValue;

//   // const isExist = useRef(null);
//   const storageValue = useRef(parsedLocalStorage());
//   const [isExist, setIsExist] = useState(null);
//   const [favorite, setFavorite] = useState(null);

//   useEffect(() => {
//     if (!favorite) return;
//     const isExistInArray = isExistItemInArray(storageValue.current, favorite);
//     setIsExist(isExistInArray);
//   }, [favorite, storageValue]);

//   useEffect(() => {
//     if (isExist === null) return;
//     if (isExist === false) {
//       const newLS = [...storageValue.current, favorite];
//       localStorage.setItem(key, JSON.stringify(newLS));
//     }
//     if (isExist === true) {
//       const clearArray = deleteItem(storageValue.current, favorite);
//       localStorage.setItem(key, JSON.stringify(clearArray));
//     }
//   }, [favorite, isExist, key]);
//   // useEffect(() => {
//   //   if (!favorite) return;
//   //   const isExistInArray = isExistItemInArray(storageValue.current, favorite);
//   //   isExist.current = isExistInArray;
//   // }, [favorite, storageValue]);

//   // useEffect(() => {
//   //   if (isExist.current === null) return;
//   //   if (isExist.current === false) {
//   //     const newLS = [...storageValue.current, favorite];
//   //     localStorage.setItem(key, JSON.stringify(newLS));
//   //   }
//   //   if (isExist.current === true) {
//   //     const clearArray = deleteItem(storageValue.current, favorite);
//   //     localStorage.setItem(key, JSON.stringify(clearArray));
//   //   }
//   // }, [favorite, key]);

//   // useEffect(
//   //   () => {
//   //     console.log("storageValue.current :>> ", storageValue.current);
//   //     localStorage.setItem(key, JSON.stringify(storageValue.current));
//   //   }, //set item to LS
//   //   [storageValue.current, key]
//   // );

//   // console.log("state :>> ", state);
//   // console.log("storageValue :>> ", storageValue);
//   // useREF storageValue
//   // let storageValue = useRef(parsedLocalStorage());
//   // let { current: storageValue } = useRef(
//   //   JSON.parse(localStorage.getItem(key)) || initialValue
//   // );
//   // console.log("storageValue :>> ", storageValue);
//   // console.log("favorite :>> ", favorite);
//   // useEffect(() => {
//   //   if (!favorite) return;
//   //   try {
//   //     const isExistInArray = isExistItemInArray(storageValue, favorite);
//   //     if (!isExistInArray) {
//   //       storageValue = [...storageValue, favorite];
//   //     }
//   //     if (isExistInArray) {
//   //       const clearArray = deleteItem(storageValue, favorite);
//   //       storageValue = clearArray;
//   //     }
//   //   } catch (error) {
//   //     console.log("error :>> ", error);
//   //   }
//   // }, [favorite]);
//   // useEffect(() => {
//   //   if (!favorite) return;
//   //   const isExistInArray = isExistItemInArray(storageValue, favorite);

//   //   if (!isExistInArray) setStorageValue((prev) => [...prev, favorite]);
//   //   if (isExistInArray) {
//   //     const clearArray = deleteItem(storageValue, favorite);
//   //     setStorageValue(clearArray);
//   //   }
//   // }, [favorite]);

//   // useEffect(
//   //   () => localStorage.setItem(key, JSON.stringify(storageValue)), //set item to LS
//   //   [storageValue, key]
//   // );
//   return [storageValue.current, setFavorite, isExist];
// };

// export default useFavoritesLocalStorage;