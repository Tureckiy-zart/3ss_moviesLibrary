import { Route, Redirect, Switch } from "react-router";
import ErrorPage from "../pages/ErrorPage";

export const defaultFunc = () => {};

export const getDate = (date) => {
  if (date) return date.split("-").reverse().join("/");
};
export const randomInRange = (min = 0, max) =>
  Math.round(Math.random() * (max - min) + min);

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

export const errorPageRedirect = (props) => {
  // console.log("window.history :>> ", window.history);
  // console.log("props :>> ", props);
  window.location = "/errorPage";
  // if (!history) window.location = "/errorPage";
  // window.history.pushState(null, null, "/errorPage");
};
