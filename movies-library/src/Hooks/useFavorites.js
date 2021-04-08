import { useEffect, useState } from "react";

const useFavoritesLocalStorage = (key = "favorites", initialValue = []) => {
  const [localStorageValue, setParsedValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialValue
  );
  const [inputValue, setLocalStorageValue] = useState(null);
  const [removeLocalStorage, setRemoveLocalStorage] = useState(null);
  function checkIdentity(ceckItem) {
    return localStorageValue.some((item) => item.id === ceckItem.id);
  }
  useEffect(() => {
    if (inputValue) {
      const isExistInArray = checkIdentity(inputValue);
      setParsedValue((prev) => {
        if (isExistInArray === false) return [...prev, inputValue];
        return prev;
      });
      setRemoveLocalStorage(null);
    }
  }, [inputValue]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localStorageValue));
  }, [localStorageValue]);

  useEffect(() => {
    if (removeLocalStorage) {
      const isExistInArray = checkIdentity(removeLocalStorage);
      if (isExistInArray === true) {
        const ret = localStorageValue.filter(
          (item) => item.id !== removeLocalStorage.id
        );
        setParsedValue(ret);
        setLocalStorageValue(null);
      }
    }
  }, [removeLocalStorage]);
  // console.log("54545454 :>> ", 54545454);
  return [localStorageValue, setLocalStorageValue, setRemoveLocalStorage];
};

export default useFavoritesLocalStorage;

// import { useEffect, useState } from "react";

// const useFavoritesLocalStorage = (key, initialValue = []) => {
//   const [inputValue, setLocalStorageValue] = useState();
//   const [checked, setChecked] = useState(null);
//   const [localStorageValue, setParsedValue] = useState(
//     () => JSON.parse(localStorage.getItem(key)) || initialValue
//   );
//   useEffect(() => {
//     if (!inputValue) return;
//     console.log('88 :>> ', 88);
//     // const data = localStorageValue.find((item) => item.id === inputValue.id);
//     const data = localStorageValue.some((item) => item.id === inputValue.id);
//     console.log('data :>> ', data);
//     setChecked(data);
//   }, );

//   useEffect(() => {
//     if (inputValue) {
//       setParsedValue((prev) => {
//         if (checked === false) return [...prev, inputValue];
//         return prev;
//       });
//     }
//   }, [inputValue, checked]);

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(localStorageValue));
//   }, [localStorageValue]);

//   useEffect(() => {
//     if (checked === true) {
//       const ret = localStorageValue.filter((item) => item.id !== inputValue.id);
//       setParsedValue(ret);
//     }
//     // }
//   }, [inputValue, checked]);

//   return [localStorageValue, setLocalStorageValue];
//   // return [localStorageValue, setLocalStorageValue, setRemoveLocalStorage];
// };

// export default useFavoritesLocalStorage;
