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
  return [localStorageValue, setLocalStorageValue, setRemoveLocalStorage];
};

export default useFavoritesLocalStorage;