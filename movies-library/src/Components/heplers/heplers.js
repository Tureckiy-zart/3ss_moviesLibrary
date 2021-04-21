export const defaultFunc = () => {};

export const getDate = (date) => {
  if (date) return date.split("-").reverse().join("/");
};
export const randomInRange = (min = 0, max) =>
  Math.round(Math.random() * (max - min) + min);

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
export const isExistItemInArray = (array, item) => {
  if (!array) return false;
  return array.some((arrItem) => arrItem.id === item.id);
};
export const deleteItem = (array, item) =>
  array.filter((arrItem) => arrItem.id !== item.id);

export const errorPageRedirect = (props) => {
  // console.log("window.history :>> ", window.history);
  // console.log("props :>> ", props);
  window.location = "/errorPage";
  // if (!history) window.location = "/errorPage";
  // window.history.pushState(null, null, "/errorPage");
};

export const scrollFunction = () => {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }
  return [disableScroll, enableScroll];
};
