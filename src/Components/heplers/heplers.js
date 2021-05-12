export const defaultFunc = () => {};

export const randomInRange = (min = 0, max) =>
  Math.round(Math.random() * (max - min) + min);

export const getDate = (date) => {
  if (date) return date.split("-").reverse().join("/");
};

export const arrayShuffle = (array) => {
  let j, temp;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

export const getAvatar = (avatar_path) => {
  const pathToAvatar = "/https://secure.gravatar.com/avatar",
    defaultAvatar = null;
  let avatarPathTrimmed = `https://image.tmdb.org/t/p/w154${avatar_path}`;
  if (avatar_path === null) avatarPathTrimmed = defaultAvatar;
  if (avatar_path && avatar_path.indexOf(pathToAvatar) !== -1)
    avatarPathTrimmed = avatar_path.slice(1);
  return avatarPathTrimmed;
};

export const trimmedString = (string) => {
  if (string.length > 165) return string.substring(0, 150) + `...Read more`;
  return string;
};

export const getFavoritesFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("favorites")) || [];

export const isExistInFavorites = (array, id) => {
  if (!array.length) return false;
  return array.some((storageItem) => storageItem.id === id);
};

export const deleteFavorite = (array, id) => {
  return array.filter((storageItem) => storageItem.id !== id);
};
export const isExistItemInArray = (array, item) => {
  if (!array.length) return false;
  return array.some((arrItem) => arrItem.id === item.id);
};
export const deleteItem = (array, item) =>
  array.filter((arrItem) => arrItem.id !== item.id);
