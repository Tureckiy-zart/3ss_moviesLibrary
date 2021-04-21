import { useEffect, useState } from "react";
import { deleteItem, isExistItemInArray } from "../Components/heplers/heplers";

const useFavoritesLocalStorage = (key = "favorites", initialValue = []) => {
  const parsedLocalStorage = () =>
    JSON.parse(localStorage.getItem(key)) || initialValue;

  const [storageValue, setStorageValue] = useState(parsedLocalStorage);
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    if (!favorite) return;
    const isExistInArray = isExistItemInArray(storageValue, favorite);

    if (!isExistInArray) setStorageValue((prev) => [...prev, favorite]);
    if (isExistInArray) {
      const clearArray = deleteItem(storageValue, favorite);
      setStorageValue(clearArray);
    }
  }, [favorite]);
  useEffect(
    () => localStorage.setItem(key, JSON.stringify(storageValue)), //set item to LS
    [storageValue]
  );
  return [storageValue, setFavorite];
};

export default useFavoritesLocalStorage;

// import { useEffect, useState } from "react";

// const useFavoritesLocalStorage = (key = "favorites", initialValue = []) => {
//   const [localStorageValue, setParsedValue] = useState(
//     () => JSON.parse(localStorage.getItem(key)) || initialValue
//   );
//   const [inputValue, setLocalStorageValue] = useState(null);
//   const [removeLocalStorage, setRemoveLocalStorage] = useState(null);
//   function checkIdentity(ceckItem) {
//     return localStorageValue.some((item) => item.id === ceckItem.id);
//   }
//   useEffect(() => {
//     if (inputValue) {
//       const isExistInArray = checkIdentity(inputValue);
//       setParsedValue((prev) => {
//         if (isExistInArray === false) return [...prev, inputValue];
//         return prev;
//       });
//       setRemoveLocalStorage(null);
//     }
//   }, [inputValue]);

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(localStorageValue));
//   }, [localStorageValue]);

//   useEffect(() => {
//     if (removeLocalStorage) {
//       const isExistInArray = checkIdentity(removeLocalStorage);
//       if (isExistInArray === true) {
//         const ret = localStorageValue.filter(
//           (item) => item.id !== removeLocalStorage.id
//         );
//         setParsedValue(ret);
//         setLocalStorageValue(null);
//       }
//     }
//   }, [removeLocalStorage]);
//   return [localStorageValue, setLocalStorageValue, setRemoveLocalStorage];
// };

// export default useFavoritesLocalStorage;
